import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';


const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Ungültige E-Mail-Adresse").or(z.literal("")),
  phone: z.string().or(z.literal("")),
  company: z.string().min(3, "Bitte beschreiben Sie Ihr Unternehmen kurz")
}).refine(
  (data) => data.email || data.phone,
  {
    message: "Bitte geben Sie entweder E-Mail oder Telefonnummer an",
    path: ["email"]
  }
);

type FormData = z.infer<typeof formSchema>;

interface Website3DaysContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Website3DaysContactModal({ open, onOpenChange }: Website3DaysContactModalProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    console.log('🎯 FORM SUBMIT STARTED - Version 2.0');
    setIsSubmitting(true);
    
    const params = new URLSearchParams({
      name: data.name,
      email: data.email || '',
      phone: data.phone || '',
      company: data.company,
      timestamp: new Date().toISOString(),
      source: 'website_3days_contact',
      _v: Date.now().toString() // Cache busting
    });

    console.log('📤 Sending webhook...');
    const webhookUrl = `https://safakt.app.n8n.cloud/webhook/d913b878-990b-48be-93e5-e4ea4a974bbe?${params.toString()}`;
    const img = new Image();
    img.src = webhookUrl;

    console.log('✅ Webhook request initiated');


    console.log('🚀 Closing modal and preparing navigation...');
    
    // Close modal IMMEDIATELY
    form.reset();
    onOpenChange(false);
    setIsSubmitting(false);
    
    // Then navigate (after a tiny delay to ensure modal closes first)
    setTimeout(() => {
      console.log('📍 Navigation starting NOW');
      navigate('/website-in-3-tagen/danke');
    }, 50);
  };

  const resetAndClose = () => {
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-[hsl(220,13%,91%)]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[hsl(0,0%,4%)]">
            {t('website3days.contact.modal.title')}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {t('website3days.contact.modal.description')}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[hsl(0,0%,4%)]">{t('website3days.contact.modal.name.label')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('website3days.contact.modal.name.placeholder')}
                      className="bg-white border-[hsl(220,13%,91%)] text-[hsl(0,0%,4%)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[hsl(0,0%,4%)]">{t('website3days.contact.modal.email.label')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('website3days.contact.modal.email.placeholder')}
                      className="bg-white border-[hsl(220,13%,91%)] text-[hsl(0,0%,4%)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[hsl(0,0%,4%)]">{t('website3days.contact.modal.phone.label')}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={t('website3days.contact.modal.phone.placeholder')}
                      className="bg-white border-[hsl(220,13%,91%)] text-[hsl(0,0%,4%)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-sm text-gray-600">
                    {t('website3days.contact.modal.contact.requirement')}
                  </p>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[hsl(0,0%,4%)]">{t('website3days.contact.modal.company.label')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('website3days.contact.modal.company.placeholder')}
                      className="min-h-[100px] bg-white border-[hsl(220,13%,91%)] text-[hsl(0,0%,4%)]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                    </FormItem>
                  )}
                />

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={resetAndClose}
                className="flex-1 bg-white border-[hsl(220,13%,91%)] text-[hsl(0,0%,4%)] hover:bg-gray-50"
              >
                {t('website3days.contact.modal.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[hsl(270,91%,58%)] hover:bg-[hsl(270,91%,53%)] text-white font-bold"
              >
                {isSubmitting
                  ? t('website3days.contact.modal.submitting')
                  : t('website3days.contact.modal.submit')}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
