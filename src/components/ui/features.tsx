import * as React from 'react';
import clsx from 'clsx';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

type FeatureItem = {
  id: number | string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description?: string;    // optional kurzer Teaser
  bullets?: string[];      // 3 Zeilen Detailtext (empfohlen)
  image?: string;          // optional: Bild-URL oder /src/assets Pfad
  imageAlt?: string;
};

export function Features({
  features,
  primaryColor = 'sky-500',
  progressGradientLight = 'bg-gradient-to-r from-sky-400 to-sky-500',
  progressGradientDark = 'bg-gradient-to-r from-sky-300 to-sky-400'
}: {
  features: FeatureItem[];
  primaryColor?: string;
  progressGradientLight?: string;
  progressGradientDark?: string;
}) {
  const [activeId, setActiveId] = React.useState(features[0]?.id);
  const prefersReducedMotion = useReducedMotion();

  const active = React.useMemo(
    () => features.find(f => f.id === activeId) ?? features[0],
    [activeId, features]
  );

  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const idx = features.findIndex(f => f.id === activeId);
    if (e.key === 'ArrowDown') { setActiveId(features[(idx + 1) % features.length].id); e.preventDefault(); }
    if (e.key === 'ArrowUp')   { setActiveId(features[(idx - 1 + features.length) % features.length].id); e.preventDefault(); }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      {/* Linke Liste */}
      <div className="md:col-span-5" role="listbox" aria-label="Optionen" tabIndex={0} onKeyDown={onKey}>
        {features.map((f) => {
          const Icon = f.icon;
          const selected = f.id === activeId;
          return (
            <button
              key={f.id}
              role="option"
              aria-selected={selected}
              onClick={() => setActiveId(f.id)}
              className={clsx(
                'w-full text-left rounded-xl px-4 py-3 mb-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                selected ? 'bg-white/10 border border-white/20' : 'bg-white/5 hover:bg-white/10 border border-transparent'
              )}
            >
              <div className="flex items-center gap-3">
                <span className={clsx('inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5')}>
                  <Icon className="h-5 w-5 text-lime-400" />
                </span>
                <span className={clsx('font-medium', selected ? 'text-foreground' : 'text-foreground/90')}>
                  {f.title}
                </span>
              </div>
              {f.description ? (
                <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Rechtes Detail-Panel */}
      <div className="md:col-span-7">
        <div
          key={String(active?.id)}
className={clsx(
            'relative isolate rounded-2xl border border-border bg-card/50 p-4 md:p-6',
            !prefersReducedMotion && 'animate-fade-in'
          )}
        >
          {active?.bullets?.length ? (
            <div className="relative z-10 space-y-4 text-foreground/85">
              {active.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-3 min-h-[1.5rem] pb-0.5">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-lime-400 shrink-0" />
                  <p className="text-base leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          ) : active?.description ? (
            <p className="text-foreground/85">{active.description}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}