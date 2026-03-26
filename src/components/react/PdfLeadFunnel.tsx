import React, { useState } from 'react';
import { Download, Mail, UserCircle, Briefcase, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

type WizardState = 'initial' | 'downloading_optin' | 'segmentation' | 'email' | 'success_optin' | 'success_declined';
type Role = 'Unternehmer' | 'Angestellter' | 'Hobby' | '';

export default function PdfLeadFunnel() {
    const [step, setStep] = useState<WizardState>('initial');
    const [role, setRole] = useState<Role>('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const pdfUrl = `${import.meta.env.PUBLIC_SUPABASE_URL}/storage/v1/object/public/lead_magnets/ki-video-guide.pdf`;

    const handleInitialDownloadClick = async () => {
        // Zero Friction: Try to open the real PDF, fallback to mockup image if not yet uploaded
        try {
            const res = await fetch(pdfUrl, { method: 'HEAD' });
            if (res.ok) {
                window.open(pdfUrl, '_blank');
            } else {
                window.open('/assets/pdf_mockup.png', '_blank');
            }
        } catch (e) {
            window.open('/assets/pdf_mockup.png', '_blank');
        }
        
        // Move to the reciprocity opt-in step
        setStep('downloading_optin');
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
            const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

            const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${supabaseKey}`,
                    'apikey': supabaseKey,
                },
                body: JSON.stringify({
                    email: email,
                    role: role,
                    campaign: 'ki_video_ads_pdf'
                })
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(errText);
            }

            setStep('success_optin');

        } catch (err: any) {
            console.error(err);
            setErrorMsg('Fehler beim Speichern. Bitte versuche es später noch einmal.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-lime-500/10 blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 min-h-[250px] flex flex-col justify-center">
                
                {/* STEP 1: INITIAL - ZERO FRICTION */}
                {step === 'initial' && (
                    <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-500/10 border border-lime-500/20 mb-2">
                            <Download className="w-10 h-10 text-lime-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Bereit für dein Dokument?</h3>
                            <p className="text-gray-400">Hol dir die Anleitung als PDF. 100% kostenlos und ohne Haken.</p>
                        </div>
                        <button 
                            onClick={handleInitialDownloadClick}
                            className="w-full sm:w-auto px-8 py-4 bg-lime-500 hover:bg-lime-400 text-black font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mx-auto"
                        >
                            <Download className="w-5 h-5" />
                            PDF jetzt herunterladen
                        </button>
                    </div>
                )}

                {/* STEP 2: RECIPROCITY OPT-IN (After Download Started) */}
                {step === 'downloading_optin' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center mb-6">
                            <div className="w-12 h-12 mx-auto rounded-full bg-lime-500/10 flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-6 h-6 text-lime-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Dein PDF öffnet sich jetzt!</h3>
                            <p className="text-gray-400 mb-6">Während du wartest, noch eine kurze Frage: Möchtest du unseren kostenlosen Newsletter für Selbstständige und Arbeitnehmer erhalten?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button 
                                onClick={() => setStep('segmentation')}
                                className="group p-4 bg-white/5 border border-lime-500/30 hover:bg-lime-500/10 hover:border-lime-500/60 rounded-xl text-left transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Mail className="w-5 h-5 text-lime-400" />
                                    <span className="font-bold text-white">Ja, gerne!</span>
                                </div>
                                <p className="text-sm text-gray-400">Schick mir echte Praxis-Tipps zu KI.</p>
                            </button>

                            <button 
                                onClick={() => setStep('success_declined')}
                                className="group p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-left transition-all"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-white">Nein, danke.</span>
                                </div>
                                <p className="text-sm text-gray-400">Ich brauche im Moment keine weiteren Infos.</p>
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3: SEGMENTATION */}
                {step === 'segmentation' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Klasse! Zu welcher Gruppe gehörst du?</h3>
                            <p className="text-gray-400">Damit wir dir nur irrelevante Dinge ersparen und genau das schicken, was dir hilft.</p>
                        </div>

                        <div className="space-y-3">
                            {[
                                { id: 'Unternehmer', icon: Briefcase, text: 'Selbstständig / Eigenes Unternehmen' },
                                { id: 'Angestellter', icon: UserCircle, text: 'Angestellter im Unternehmen' },
                                { id: 'Hobby', icon: Sparkles, text: 'Ich nutze KI nur privat' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setRole(item.id as Role);
                                        setStep('email');
                                    }}
                                    className="w-full p-4 flex items-center gap-4 bg-white/5 border border-white/10 hover:border-lime-500/50 hover:bg-white/10 rounded-xl transition-all"
                                >
                                    <item.icon className="w-6 h-6 text-lime-400" />
                                    <span className="font-medium text-white text-left">{item.text}</span>
                                    <ArrowRight className="w-4 h-4 ml-auto text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 4: EMAIL */}
                {step === 'email' && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Letzter Schritt</h3>
                            <p className="text-gray-400">Wohin dürfen wir dir die Infos schicken?</p>
                        </div>

                        <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                            <div>
                                <input 
                                    type="email" 
                                    required
                                    placeholder="deine.email@anbieter.de"
                                    className="w-full bg-black/50 border border-white/10 focus:border-lime-500/50 outline-none p-4 rounded-xl text-white placeholder-gray-500 text-lg transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {errorMsg && (
                                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm text-center">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button 
                                    type="button"
                                    onClick={() => setStep('segmentation')}
                                    className="px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-colors"
                                >
                                    Zurück
                                </button>
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 px-6 py-4 bg-lime-500 hover:bg-lime-400 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Wird gespeichert...' : 'Anmelden'}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                Kein Spam. Abmeldung jederzeit mit einem Klick möglich.
                            </p>
                        </form>
                    </div>
                )}

                {/* STEP 5A: SUCCESS (Subscribed) */}
                {step === 'success_optin' && (
                    <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-500/10 border border-lime-500/20 mb-2">
                            <CheckCircle2 className="w-10 h-10 text-lime-400" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Willkommen an Bord.</h3>
                            <p className="text-gray-400 mb-6">Deine Anmeldung ist bestätigt! Checke ab und zu dein Postfach.</p>
                        </div>
                    </div>
                )}

                {/* STEP 5B: SUCCESS (Declined) */}
                {step === 'success_declined' && (
                    <div className="text-center space-y-6 animate-in zoom-in-95 duration-500">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2">Alles klar, kein Problem.</h3>
                            <p className="text-gray-400 mb-6">Wir wünschen dir viel Erfolg mit der Anleitung!</p>
                            
                            <p className="text-sm text-gray-600">
                                Falls der Download blockiert wurde, klicke <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">hier</a>, um die Datei manuell zu öffnen.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
