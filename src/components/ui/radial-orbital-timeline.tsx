"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
  image?: string;
  imageAlt?: string;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const isMobile = useIsMobile();

  // Track window size for responsive calculations
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    const { width, height } = windowSize;
    
    if (width < 768) {
      // Mobile - increased height for card space  
      return {
        radius: Math.min(Math.max(162, width * 0.29), 216),
        nodeSize: 32,
        iconSize: 14,
        cardWidth: width <= 480 ? Math.min(280, width - 48) : Math.min(300, width - 40),
        containerHeight: width <= 480 ? 'auto' : '65vh',
        orbitHeight: width <= 480 ? '60vh' : '60vh'
      };
    } else if (width < 1024) {
      // Tablet
      return {
        radius: Math.min(220, width * 0.28, height * 0.22),
        nodeSize: 40,
        iconSize: 18,
        cardWidth: 320,
        containerHeight: '75vh',
        orbitHeight: '70vh'
      };
    } else {
      // Desktop - adjusted to optimal size to prevent header overlap
      const vmin = Math.min(width, height) * 0.01; // 1vmin
      const baseRadius = Math.max(300, Math.min(32 * vmin, 380));
      const availableCardSpace = baseRadius - 24; // 24px margin from orbit ring
      const cardWidth = Math.min(380, availableCardSpace * 1.4); // Keep card within inner circle
      const cardScale = height < 800 ? 0.9 : 1; // Scale down on smaller heights
      
      return {
        radius: baseRadius,
        nodeSize: 48,
        iconSize: 20,
        cardWidth: cardWidth,
        cardScale: cardScale,
        containerHeight: '70vh',
        orbitHeight: '65vh',
        orbitOffsetY: 10 // Further reduced downward shift for better header spacing
      };
    }
  };

  const responsive = getResponsiveValues();

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const next = Object.fromEntries(Object.keys(prev).map(k => [Number(k), false]));
      const now = !prev[id];
      next[id] = now;

      if (now) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const rel = getRelatedItems(id);
        const pulse: Record<number, boolean> = {};
        rel.forEach(r => pulse[r] = true);
        setPulseEffect(pulse);
        centerViewOnNode(id);
        
        // Smooth scroll for mobile when card opens
        if (isMobile && windowSize.width <= 480) {
          setTimeout(() => {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            containerRef.current?.scrollIntoView({ 
              behavior: prefersReducedMotion ? 'auto' : 'smooth',
              block: 'start'
            });
          }, 300);
        }
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }
      return next;
    });
  };

  useEffect(() => {
    let t: NodeJS.Timeout | undefined;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (autoRotate && !prefersReducedMotion) {
      t = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.25) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (t) clearInterval(t); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const idx = timelineData.findIndex((i) => i.id === nodeId);
    const total = timelineData.length;
    const targetAngle = (idx / total) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = responsive.radius;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const zIndex = Math.round(100 + 50 * Math.cos(rad));
    const opacity = Math.max(0.55, Math.min(1, 0.55 + 0.45 * ((1 + Math.sin(rad)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (id: number) => timelineData.find((i) => i.id === id)?.relatedIds ?? [];
  const isRelatedToActive = (id: number) => activeNodeId ? getRelatedItems(activeNodeId).includes(id) : false;

  return (
    <div
      className="w-full overflow-visible bg-bg-1"
      style={{ 
        minHeight: responsive.containerHeight,
        paddingBottom: isMobile && windowSize.width <= 480 ? '2rem' : 0
      }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div 
        className="relative w-full max-w-6xl mx-auto flex items-center justify-center"
        style={{ height: responsive.orbitHeight }}
      >
        {/* Subtle lime glow background - hidden when any item is expanded */}
        {!Object.keys(expandedItems).some(id => expandedItems[Number(id)]) && (
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full bg-gradient-radial from-lime/10 via-transparent to-transparent" />
          </div>
        )}

        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ 
            perspective: "1000px",
            transform: !isMobile && windowSize.width >= 1024 ? `translateY(${responsive.orbitOffsetY || 0}px)` : undefined
          }}
        >
          {/* Central core */}
          <div className={`absolute ${isMobile ? 'w-16 h-16' : 'w-20 h-20 lg:w-24 lg:h-24'} rounded-full flex items-center justify-center z-10 bg-card border-2 border-primary/20`}>
            <div className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6 lg:w-8 lg:h-8'} rounded-full bg-primary`}></div>
          </div>

          {/* Orbital rings */}
          <div 
            className="absolute rounded-full border border-white/10" 
            style={{ 
              width: `${responsive.radius * 2}px`, 
              height: `${responsive.radius * 2}px` 
            }}
          ></div>
          <div 
            className="absolute rounded-full border border-white/5" 
            style={{ 
              width: `${responsive.radius * 2.4}px`, 
              height: `${responsive.radius * 2.4}px` 
            }}
          ></div>

          {timelineData.map((item, index) => {
            const pos = calculateNodePosition(index, timelineData.length);
            const expanded = !!expandedItems[item.id];
            const related = isRelatedToActive(item.id);
            const pulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${pos.x}px, ${pos.y}px) translateZ(${expanded ? '10px' : '0px'})`,
              opacity: expanded ? 1 : pos.opacity,
            } as const;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className={`absolute transition-all duration-700 cursor-pointer will-change-transform ${
                  expanded ? 'z-[200]' : ''
                }`}
                style={nodeStyle}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {pulsing && (
                  <div className="absolute rounded-full -inset-2 bg-gradient-radial from-lime/25 to-transparent animate-pulse" />
                )}
                
                <div
                  className={`rounded-full flex items-center justify-center border-2 transition-all duration-500 transform ${
                    expanded 
                      ? "bg-white text-slate-900 border-white shadow-lg shadow-lime/30 scale-[1.4]"
                      : related 
                        ? "bg-white/60 text-slate-900 border-white scale-110"
                        : "bg-card text-text-hi border-white/40 hover:bg-border/30 hover:scale-105"
                  }`}
                  style={{ 
                    width: `${responsive.nodeSize}px`, 
                    height: `${responsive.nodeSize}px` 
                  }}
                >
                  <Icon size={responsive.iconSize} />
                </div>

                <div className={`absolute whitespace-nowrap text-xs font-semibold tracking-wide transition-all duration-500 ${
                  expanded ? "text-white scale-125" : "text-white/85"
                }`}
                style={{ 
                  top: `${responsive.nodeSize + 8}px`
                }}>
                  {item.title}
                </div>

                {expanded && !isMobile && windowSize.width < 1024 && (
                  <Card 
                    className="absolute left-1/2 -translate-x-1/2 bg-bg-2/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/40 overflow-visible rounded-xl"
                    style={{
                      top: `${responsive.nodeSize + 32}px`,
                      width: `${responsive.cardWidth}px`
                    }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/15"></div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base lg:text-lg text-text-hi">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-text-hi/90">
                      {item.image && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                          <img
                            src={item.image}
                            alt={item.imageAlt ?? item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="whitespace-pre-line leading-relaxed">{item.content}</div>
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        
          {/* Desktop centered cards - only show one expanded card in orbit center */}
          {!isMobile && windowSize.width >= 1024 && Object.keys(expandedItems).some(id => expandedItems[Number(id)]) && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {timelineData
                .filter(item => expandedItems[item.id])
                .map(item => (
                  <Card 
                    key={`desktop-${item.id}`}
                    className="bg-bg-2/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/40 rounded-xl pointer-events-auto z-[300]"
                    style={{
                      width: `${responsive.cardWidth}px`,
                      maxHeight: `${Math.min((responsive.radius || 420) * 1.4, 400)}px`,
                      transform: `scale(${responsive.cardScale || 1})`,
                      overflow: 'auto'
                    }}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base lg:text-lg text-text-hi">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-text-hi/90">
                      {item.image && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                          <img
                            src={item.image}
                            alt={item.imageAlt ?? item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="whitespace-pre-line leading-relaxed">{item.content}</div>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
          )}
        </div>

        {/* Mobile card display - below orbital circle */}
        {isMobile && Object.keys(expandedItems).some(id => expandedItems[Number(id)]) && (
          <div 
            className="w-full max-w-xs mx-auto px-3 mt-6 relative z-50"
            style={{ 
              marginBottom: windowSize.width <= 480 ? '2rem' : 0 
            }}
          >
            {timelineData
              .filter(item => expandedItems[item.id])
              .map(item => (
                <Card 
                  key={item.id}
                  className="bg-bg-2/95 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/40 rounded-xl"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-text-hi">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-text-hi/90 px-3">
                    {item.image && (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="whitespace-pre-line leading-relaxed">{item.content}</div>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}