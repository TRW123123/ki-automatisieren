import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuickAnalysisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuickAnalysisModal = ({ open, onOpenChange }: QuickAnalysisModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Save to Supabase as backup
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message || null,
          source: 'quick_analysis_modal'
        });

      if (supabaseError) {
        console.error('❌ Supabase insert error:', supabaseError.message);
      } else {
        console.log('✅ Lead saved to Supabase');
      }

      // 2. Send to N8N webhook
      const params = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        message: formData.message || '',
        timestamp: new Date().toISOString(),
        source: 'quick_analysis_modal'
      });

      const webhookUrl = 'https://safakt.app.n8n.cloud/webhook/041dae70-b4dc-4fbb-89e5-3b78274c5ff5';

      await fetch(`${webhookUrl}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-cache'
      });

      console.log('✅ N8N webhook request sent');
      
      setIsSubmitted(true);

      toast({
        title: "Anfrage erhalten!",
        description: "Wir senden Ihnen innerhalb von 48 Stunden Ihren persönlichen Analysebericht per E-Mail."
      });

    } catch (error) {
      console.error('❌ Form submission error:', error instanceof Error ? error.message : 'Unknown error');

      toast({
        title: "Ein Fehler ist aufgetreten",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetAndClose = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitted(false);
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Anfrage erhalten!</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Wir senden Ihnen innerhalb von 48 Stunden Ihren persönlichen Analysebericht per E-Mail.
              </p>
            </div>
            <Button onClick={resetAndClose} className="w-full">
              OK
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">
            30 Minuten Schnellanalyse
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Lassen Sie uns Ihre Geschäftsprozesse analysieren und individuelle Automatisierungsvorschläge teilen.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ihr Name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="beispiel@firma.de"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Unternehmen *</Label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Ihr Unternehmensname"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">In welchem Bereich wünschen Sie Automatisierung?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Vertrieb, Marketing, Kundenservice, Datenanalyse etc."
              rows={3}
            />
          </div>
          
          <div className="pt-4 space-y-3">
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                "Wird gesendet..."
              ) : (
                <>
                  Kostenlose Analyse anfordern
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Ihre Daten werden sicher gespeichert. Wir versenden keinen Spam.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};