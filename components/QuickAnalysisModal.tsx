'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/contexts/LanguageContext'
import { toast } from '@/hooks/use-toast'
import { z } from 'zod'
import { analytics } from '@/utils/analytics'

interface QuickAnalysisModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const formSchema = z.object({
  name: z.string().trim().min(1, 'Name ist erforderlich').max(100, 'Name zu lang'),
  email: z.string().trim().email('Ungültige E-Mail-Adresse').max(255, 'E-Mail zu lang'),
  company: z.string().trim().max(100, 'Firmenname zu lang').optional(),
  message: z.string().trim().max(1000, 'Nachricht zu lang').optional()
})

export function QuickAnalysisModal({ open, onOpenChange }: QuickAnalysisModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { t } = useLanguage()

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', message: '' })
    setErrors({})
    setIsSubmitting(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData)

      // Send to N8N webhook via GET request with query parameters
      const params = new URLSearchParams({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || '',
        message: validatedData.message || '',
        timestamp: new Date().toISOString(),
        source: 'quick_analysis_modal'
      })

      const response = await fetch(
        `https://safakt.app.n8n.cloud/webhook/041dae70-b4dc-4fbb-89e5-3b78274c5ff5?${params.toString()}`
      )

      if (!response.ok) {
        throw new Error('Network error')
      }

      // Track successful form submission
      analytics.trackFormSubmit('quick_analysis_form', true)
      analytics.trackEvent({
        action: 'form_submit',
        category: 'lead_generation',
        label: 'quick_analysis_cta',
        custom_parameters: {
          language: t('nav.home') ? 'tr' : 'de', // Infer language from context
          source: 'quick_analysis_modal'
        }
      })

      // Success
      resetForm()
      onOpenChange(false)
      toast({
        title: t('modal.success'),
        description: t('modal.description'),
      })

    } catch (error) {
      if (error instanceof z.ZodError) {
        // Validation errors
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      } else {
        // Track failed submission
        analytics.trackFormSubmit('quick_analysis_form', false)
        
        // Network or other errors
        toast({
          title: "Fehler beim Senden",
          description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.",
          variant: "destructive",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {t('modal.title')}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('modal.name')} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={t('modal.name.placeholder')}
                required
                className={`glass focus-visible ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">{t('modal.email')} *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={t('modal.email.placeholder')}
                required
                className={`glass focus-visible ${errors.email ? 'border-destructive' : ''}`}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">{t('modal.company')}</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder={t('modal.company.placeholder')}
                className="glass focus-visible"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">{t('modal.message')}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={t('modal.message.placeholder')}
                rows={4}
                className="glass focus-visible resize-none"
              />
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 glass"
              disabled={isSubmitting}
            >
              {t('modal.cancel')}
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
            >
              {isSubmitting ? t('modal.submitting') : t('modal.submit')}
            </Button>
          </div>
        </form>
        
        <p className="text-xs text-muted-foreground text-center">
          {t('modal.description')}
        </p>
      </DialogContent>
    </Dialog>
  )
}