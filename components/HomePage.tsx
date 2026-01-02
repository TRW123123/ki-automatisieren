'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  Bot, 
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'
import { QuickAnalysisModal } from '@/components/QuickAnalysisModal'
import { analytics } from '@/utils/analytics'

export function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const t = useI18n()

  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Outbound Satış Otomasyonu",
      description: "Kişiselleştirilmiş e-postalar ve akıllı takip.",
      proof: "Günde 500+ kişiselleştirilmiş mesaj gönderimi"
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Pazarlama Otomasyonu", 
      description: "İçerik, SEO ve reklam optimizasyonu otomatik.",
      proof: "SEO skorunda %85+ artış garantisi"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Müşteri İletişimi (Chatbot)",
      description: "7/24 kişiselleştirilmiş yanıt.",
      proof: "Müşteri memnuniyetinde %40 artış"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Veri Analizi ve Raporlama",
      description: "Gerçek zamanlı dashboard ve tahminleme.",
      proof: "Karar alma süresinde %60 hızlanma"
    }
  ]

  const cases = [
    {
      company: "Car Studio AI",
      result: "3000+ kişiselleştirilmiş e-posta otomatik gönderim",
      metric: "20 saat/ay zaman tasarrufu"
    },
    {
      company: "Acilsatis",
      result: "Yüzlerce emlakçı ve oto satıcısıyla otomatik iletişim",
      metric: "Web trafiğinde belirgin artış"
    },
    {
      company: "Salevium",
      result: "LinkedIn pazarlama tamamen otomatikleştirildi",
      metric: "Görünürlükte %45 artış, 22.000+ takipçi"
    }
  ]

  const testimonials = [
    {
      text: "Otomasyon sayesinde artık sadece gerçekten ilgilenen müşterilerle görüşüyoruz. Bu da satış başarımızı önemli ölçüde artırdı.",
      name: "Car Studio AI",
      company: "Uluslararası Pazar",
      metric: "3000+ otomatik e-posta"
    },
    {
      text: "Artık sektör profesyonelleri bizi tanıyor ve bize güveniyor. Trafik artışı sayesinde kullanıcı sayımız hızla artıyor.",
      name: "Acilsatis",
      company: "Emlak Platformu",
      metric: "Yüzlerce yeni bağlantı"
    },
    {
      text: "LinkedIn stratejimiz tamamen otomatik çalışıyor. Manuel içerik üretimi sıfıra indi, görünürlüğümüz katlandı.",
      name: "Salevium",
      company: "Eğitim Şirketi",
      metric: "%45 görünürlük artışı"
    }
  ]

  const faqs = [
    {
      question: "Kurulum süreci ne kadar sürer?",
      answer: "Çoğu otomasyon sistemi 1-2 hafta içinde kurulur ve aktif hale gelir. Karmaşık projelerde bu süre 1 aya kadar uzayabilir."
    },
    {
      question: "Mevcut sistemlerimle entegre olur mu?",
      answer: "Evet, API'ler ve webhook'lar kullanarak mevcut CRM, e-posta pazarlama araçları ve diğer sistemlerinizle sorunsuz entegrasyon sağlarız."
    },
    {
      question: "ROI'yi ne kadar sürede görürüm?",
      answer: "Çoğu müşterimiz ilk 30-60 gün içinde zaman tasarrufu ve verimlilik artışı görür. Tam ROI genellikle 3-6 ay içinde gerçekleşir."
    },
    {
      question: "Sistem güvenli mi?",
      answer: "Tüm verileriniz şifrelenir ve güvenli sunucularda saklanır. GDPR uyumlu çalışır, verileriniz üçüncü taraflarla paylaşılmaz."
    },
    {
      question: "Teknik bilgim yoksa kullanabilir miyim?",
      answer: "Elbette! Sistemler kullanıcı dostu arayüzlerle tasarlanır. Eğitim ve sürekli destek sağlarız."
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>


      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('features.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('features.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass hover-glow transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                  <div className="text-xs text-primary font-medium">
                    ✓ {feature.proof}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="destructive" className="bg-red-500/20 text-red-400 border-red-500/30">
                  Öncesi (Manuel Süreçler)
                </Badge>
                <ul className="space-y-3">
                  {[
                    "Günlük 4-6 saat manuel e-posta yazımı",
                    "Düzensiz takip mesajları", 
                    "Kişiselleştirme eksikliği",
                    "Zaman kaybı ve düşük verimlilik"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3 text-muted-foreground">
                      <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Sonrası (AI Otomasyon)
                </Badge>
                <ul className="space-y-3">
                  {[
                    "Günde 500+ otomatik kişiselleştirilmiş mesaj",
                    "Akıllı takip sistemi ve hatırlatmalar",
                    "Her alıcıya özel içerik üretimi",
                    "20+ saat haftalık zaman tasarrufu"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Cases */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('cases.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('cases.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="glass hover-glow-purple transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg gradient-text">{case_.company}</h3>
                  <p className="text-muted-foreground">{case_.result}</p>
                  <div className="text-sm text-primary font-medium">
                    📈 {case_.metric}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Call Out */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Hazır mısınız? <span className="gradient-text">Başlayalım.</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              15 dakikalık ücretsiz analiz ile hangi süreçlerinizin 
              otomatikleştirilebileceğini keşfedin.
            </p>
            <MotionButton 
              size="lg"
              className="hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
              onClick={() => {
                analytics.trackButtonClick('demo_cta_button', 'demo_section');
                setModalOpen(true);
              }}
            >
              Ücretsiz Analiz Al
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionButton>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('pricing.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('pricing.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Küçük işletmeler için</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">€497<span className="text-base font-normal text-muted-foreground">/ay</span></div>
                  <ul className="space-y-3">
                    {[
                      "50 potansiyel müşteri/hafta",
                      "E-posta otomasyonu",
                      "Temel raporlama",
                      "Email desteği"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton 
                  className="w-full hover-glow" 
                  variant="outline"
                  onClick={() => {
                    analytics.trackButtonClick('pricing_starter_cta', 'pricing_section');
                    setModalOpen(true);
                  }}
                >
                  Başla
                </MotionButton>
              </CardContent>
            </Card>

            {/* Growth (Popular) */}
            <Card className="glass hover-glow-purple transition-all duration-300 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  En Popüler
                </Badge>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Growth</h3>
                  <p className="text-muted-foreground">Büyüyen şirketler için</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">€997<span className="text-base font-normal text-muted-foreground">/ay</span></div>
                  <ul className="space-y-3">
                    {[
                      "200 potansiyel müşteri/hafta",
                      "Full otomasyon paketi",
                      "Gelişmiş raporlama",
                      "Öncelikli destek",
                      "Chatbot entegrasyonu"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton 
                  className="w-full hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
                  onClick={() => {
                    analytics.trackButtonClick('pricing_growth_cta', 'pricing_section');
                    setModalOpen(true);
                  }}
                >
                  Başla
                </MotionButton>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="glass hover-glow transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">Kurumsal çözümler</p>
                </div>
                <div className="space-y-4">
                  <div className="text-3xl font-bold">Özel<span className="text-base font-normal text-muted-foreground"> Fiyat</span></div>
                  <ul className="space-y-3">
                    {[
                      "Sınırsız potansiyel müşteri",
                      "Özel entegrasyonlar",
                      "Dedicated hesap yöneticisi",
                      "24/7 destek",
                      "Custom AI modeller"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MotionButton 
                  className="w-full hover-glow" 
                  variant="outline"
                  onClick={() => {
                    analytics.trackButtonClick('pricing_enterprise_cta', 'pricing_section');
                    setModalOpen(true);
                  }}
                >
                  İletişime Geç
                </MotionButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('testimonials.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('testimonials.subtitle')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass hover-glow-purple transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTestimonial}
                    className="hover-glow"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTestimonial}
                    className="hover-glow"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="text-center space-y-6">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="space-y-2">
                    <div className="font-semibold text-lg gradient-text">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].company}
                    </div>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {testimonials[currentTestimonial].metric}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="glass">
              {t('faq.title')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('faq.subtitle')}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 rounded-lg px-6 glass">
                  <AccordionTrigger className="hover:text-primary focus-visible text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t('footer.cta')}
            </h2>
            <p className="text-xl text-muted-foreground">
              15 dakikalık ücretsiz analiz ile başlayın. 
              Hangi süreçlerinizin otomatikleştirilebileceğini keşfedin.
            </p>
            <MotionButton 
              size="lg"
              className="hover-glow-purple bg-gradient-to-r from-secondary to-accent text-secondary-foreground border-0"
              onClick={() => setModalOpen(true)}
            >
              {t('footer.cta.button')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionButton>
          </div>
        </div>
      </section>

      <QuickAnalysisModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}