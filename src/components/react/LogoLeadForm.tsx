import React, { useState, useRef, useEffect } from 'react';
import { Upload, ArrowRight, ArrowLeft, CheckCircle, Loader2, Sparkles, Image as ImageIcon, FileText, Target, PhoneCall, Download } from 'lucide-react';

export default function LogoLeadForm() {
    const [step, setStep] = useState(1);
    const [designGoal, setDesignGoal] = useState<'new' | 'upgrade'>('new');
    const [companyName, setCompanyName] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [dsgvo, setDsgvo] = useState(false);
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [validationError, setValidationError] = useState<string | null>(null);
    const [progress, setProgress] = useState(0);
    const [leadId, setLeadId] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Dynamic Progress Bar Logic for 60-second API call
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (status === 'submitting') {
            setProgress(0);
            interval = setInterval(() => {
                setProgress((prev) => {
                    // Slows down as it gets closer to 95% to avoid reaching 100% before API responds
                    const increment = prev < 50 ? 2 : prev < 85 ? 1 : 0.2;
                    return prev >= 95 ? 95 : prev + increment;
                });
            }, 1000);
        } else if (status === 'success') {
            setProgress(100);
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [status]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const savePartialLead = async (id: string, partialData: any, isUpdate = false) => {
        const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
        if (!supabaseUrl || !supabaseAnonKey) return;

        try {
            const method = isUpdate ? 'PATCH' : 'POST';
            const url = isUpdate 
                ? `${supabaseUrl}/rest/v1/logo_leads?id=eq.${id}`
                : `${supabaseUrl}/rest/v1/logo_leads`;

            const payload = isUpdate ? partialData : { id, ...partialData };

            await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${supabaseAnonKey}`,
                    'apikey': supabaseAnonKey,
                    ...(!isUpdate && { 'Prefer': 'resolution=merge-duplicates' })
                },
                body: JSON.stringify(payload),
            });
            // Fire and forget, no await or error blocking for UX
        } catch (e) {
            console.error("Partial save failed quietly", e);
        }
    };

    const nextStep = () => {
        setValidationError(null);
        if (step === 1) {
            if (!companyName) { setValidationError("Bitte geben Sie Ihren Firmennamen ein."); return; }
            if (designGoal === 'upgrade' && !file) { setValidationError('Bitte laden Sie Ihr aktuelles Logo hoch.'); return; }
            
            // Initiate partial save
            const currentLeadId = leadId || crypto.randomUUID();
            if (!leadId) setLeadId(currentLeadId);
            
            savePartialLead(currentLeadId, {
                company_name: companyName,
                design_goal: designGoal,
                email: "draft@aborted.com", // Placeholder until step 3
                logo_style: "Optimized 2026",
                website_url: "",
                business_description: ""
            });

            setStep(2);
        } else if (step === 2) {
            if (!businessDescription) { setValidationError("Bitte beschreiben Sie kurz Ihr Unternehmen."); return; }
            
            if (leadId) {
                savePartialLead(leadId, {
                    business_description: businessDescription
                }, true); // Update the draft entry
            }

            setStep(3);
        }
    };

    const prevStep = () => {
        setValidationError(null);
        setStep(step - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (step < 3) {
            nextStep();
            return;
        }

        setValidationError(null);
        
        // Final validations just in case
        if (!email) { setValidationError("Bitte geben Sie eine gültige E-Mail Adresse ein."); return; }
        if (!dsgvo) { setValidationError("Bitte stimmen Sie der Datenschutzerklärung zu, damit wir das Bild bearbeiten dürfen."); return; }
        
        setStatus('submitting');
        try {
            let fileUrl = '';

            const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
            const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
            
            // Fail safe if leadId somehow isn't set yet (user reloads mid-step)
            const finalInsertId = leadId || crypto.randomUUID();

            // Upload file to Supabase Storage if it exists
            if (file && supabaseUrl && supabaseAnonKey) {
                const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
                const arrayBuffer = await file.arrayBuffer();
                const uploadRes = await fetch(`${supabaseUrl}/storage/v1/object/lead_gen_logos/${fileName}`, {
                    method: 'POST',
                    body: arrayBuffer,
                    headers: {
                        Authorization: `Bearer ${supabaseAnonKey}`,
                        'Content-Type': file.type || 'image/jpeg',
                    },
                });

                if (uploadRes.ok) {
                    fileUrl = `${supabaseUrl}/storage/v1/object/public/lead_gen_logos/${fileName}`;
                } else {
                    const errText = await uploadRes.text();
                    console.error('File upload failed:', uploadRes.status, errText);
                    if (designGoal === 'upgrade') {
                        throw new Error(`Logo-Upload fehlgeschlagen (${uploadRes.status}): ${errText}`);
                    }
                }
            }

            if (supabaseUrl && supabaseAnonKey) {
                // Finalize the record with their actual email and potential file_url
                const finalizeRes = await fetch(`${supabaseUrl}/rest/v1/logo_leads?id=eq.${finalInsertId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`,
                        'apikey': supabaseAnonKey
                    },
                    body: JSON.stringify({
                        email,
                        file_url: fileUrl,
                        business_description: businessDescription
                    }),
                });
                
                // Fallback POST if they went straight from Step 3 without draft (extremely unlikely in Wizard but safe)
                if (!finalizeRes.ok || (finalizeRes.status !== 204 && finalizeRes.status !== 200)) {
                   await fetch(`${supabaseUrl}/rest/v1/logo_leads`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${supabaseAnonKey}`,
                            'apikey': supabaseAnonKey,
                            'Prefer': 'resolution=merge-duplicates'
                        },
                        body: JSON.stringify({
                            id: finalInsertId,
                            company_name: companyName,
                            email,
                            design_goal: designGoal,
                            logo_style: "Optimized 2026",
                            website_url: "",
                            business_description: businessDescription,
                            file_url: fileUrl
                        }),
                    });
                }

                // Conditionally route to the correct Edge Function based on goal
                const edgeFunctionEndpoint = designGoal === 'upgrade' ? 'upgrade-logo' : 'generate-logo';

                const functionRes = await fetch(`${supabaseUrl}/functions/v1/${edgeFunctionEndpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`,
                    },
                    body: JSON.stringify({
                        company_name: companyName,
                        business_description: businessDescription,
                        design_goal: designGoal,
                        logo_style: "Optimized 2026",
                        insert_id: finalInsertId,
                        website_url: "",
                        file_url: fileUrl // Even if missing from form, Edge function needs key payload mapping
                    })
                });

                if (functionRes.ok) {
                    const functionData = await functionRes.json();
                    if (functionData.imageUrl) {
                        setGeneratedImageUrl(functionData.imageUrl);
                    } else {
                        throw new Error(`No image URL returned: ${JSON.stringify(functionData)}`);
                    }
                } else {
                    const errorMsg = await functionRes.text();
                    console.error("Function failed", errorMsg);
                    throw new Error(`Edge Function error: ${errorMsg}`);
                }
            }

            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group shadow-2xl animate-fade-in">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-50"></div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 text-center">
                    Ihr neues Logo ist fertig.
                </h3>
                <p className="text-xl text-center text-[#A3E635] mb-8 max-w-2xl mx-auto">
                    Wir haben Ihnen das Logo zusätzlich auch an <strong>{email}</strong> gesendet.
                </p>

                {generatedImageUrl && (
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="relative group/image">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#A3E635]/20 to-emerald-500/20 rounded-xl blur-lg opacity-0 group-hover/image:opacity-100 transition duration-500"></div>
                                <img src={generatedImageUrl} alt="Ihr neues 2026 Logo" className="w-full rounded-xl shadow-2xl border border-white/20 aspect-square object-cover relative z-10 bg-white" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 space-y-8">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-4">Ein schönes Logo allein bringt Ihnen keine neuen Kunden.</h4>
                                <p className="text-gray-400 text-lg">
                                    Das Logo steht. Es sieht gut aus. <strong>Aber woher kommen jetzt die Kunden?</strong>
                                    Wir haben ein System gebaut, das automatisch neue Kunden für Sie findet. Wollen Sie sehen, wie das geht?
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a href="https://calendly.com/st-automatisierung-info/30min?hide_gdpr_banner=1&background_color=050505&text_color=ffffff&primary_color=a3e635" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-[#A3E635] text-black font-bold px-6 py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(163,230,53,0.3)] cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <PhoneCall className="w-6 h-6" />
                                        <span className="text-left">Ja, zeigt mir, wie ich automatisch Kunden gewinne.<br /><span className="text-xs font-medium text-black/70">Kostenloses Gespräch buchen</span></span>
                                    </div>
                                    <ArrowRight className="w-6 h-6" />
                                </a>

                                <div className="relative flex items-center py-4">
                                    <div className="flex-grow border-t border-white/10"></div>
                                    <span className="flex-shrink-0 mx-4 text-gray-500 text-sm">oder</span>
                                    <div className="flex-grow border-t border-white/10"></div>
                                </div>

                                <a href={generatedImageUrl} download="B2B-Logo-2026.jpg" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-white/5 border border-white/10 text-gray-300 font-medium px-6 py-4 rounded-xl hover:bg-white/10 transition-colors gap-2">
                                    <Download className="w-5 h-5" />
                                    Nein danke. Ich lade nur das Logo runter.
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="w-full mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A3E635]/20 via-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            <form onSubmit={handleSubmit} className="relative bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between min-h-[460px]">
                
                {/* Progress Indicators */}
                {status !== 'submitting' && (
                    <div className="mb-8">
                        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">
                            <span className={step >= 1 ? "text-[#A3E635]" : ""}>Start</span>
                            <span className={step >= 2 ? "text-[#A3E635]" : ""}>Details</span>
                            <span className={step >= 3 ? "text-[#A3E635]" : ""}>Ziel</span>
                        </div>
                        <div className="flex gap-2">
                            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? 'bg-[#A3E635]' : 'bg-white/10'}`}></div>
                            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? 'bg-[#A3E635]' : 'bg-white/10'}`}></div>
                            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? 'bg-[#A3E635]' : 'bg-white/10'}`}></div>
                        </div>
                    </div>
                )}

                {/* --- WIZARD CONTENT --- */}
                <div className="flex-grow space-y-6">

                    {/* STEP 1 */}
                    {step === 1 && status !== 'submitting' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h2 className="text-2xl font-bold text-white mb-2">Wie können wir helfen?</h2>
                            <p className="text-gray-400 text-sm mb-6">Wählen Sie Ihr Ziel und verraten Sie uns Ihren Firmennamen.</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-1 bg-white/5 rounded-xl border border-white/10">
                                <button
                                    type="button"
                                    onClick={() => setDesignGoal('new')}
                                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${designGoal === 'new'
                                        ? 'bg-[#A3E635] text-black shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Neues Logo
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setDesignGoal('upgrade')}
                                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-all ${designGoal === 'upgrade'
                                        ? 'bg-[#A3E635] text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Bestehendes upgraden
                                </button>
                            </div>

                            <div className=" अंतरिक्ष-y-2">
                                <label className="text-sm font-medium text-gray-300 flex items-center gap-2 mb-2">
                                    <FileText className="w-4 h-4 text-[#A3E635]" />
                                    Ihr Firmenname
                                </label>
                                <input
                                    type="text"
                                    value={companyName}
                                    onChange={e => setCompanyName(e.target.value)}
                                    placeholder="z.B. Schmidt Maschinenbau"
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all font-mono"
                                    autoFocus
                                />
                            </div>

                            {designGoal === 'upgrade' && (
                                <div
                                    className="mt-6 border-2 border-dashed border-[#A3E635]/30 rounded-xl p-6 text-center hover:border-[#A3E635] transition-colors cursor-pointer bg-white/5"
                                    onClick={() => fileInputRef.current?.click()}
                                >
                                    {file ? (
                                        <div className="flex flex-col items-center gap-2">
                                            <CheckCircle className="w-8 h-8 text-[#A3E635]" />
                                            <span className="text-white font-medium text-sm">{file.name}</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="w-6 h-6 text-white" />
                                            <span className="text-white font-medium text-sm">Aktuelles Logo hochladen</span>
                                            <span className="text-gray-500 text-xs">JPG/PNG bis 5MB</span>
                                        </div>
                                    )}
                                    <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && status !== 'submitting' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Was macht Ihr Unternehmen?</h2>
                            <p className="text-gray-400 text-sm mb-6">Damit die KI die richtige visuelle Sprache (Farbpsychologie, Autorität) wählt.</p>

                            <div className="space-y-4">
                                <textarea
                                    value={businessDescription}
                                    onChange={e => setBusinessDescription(e.target.value)}
                                    placeholder="Z.B.: Wir sind ein etablierter Handwerksbetrieb / IT-Systemhaus. Das Logo soll extrem massiv und modern wirken. Unsere Kunden legen Wert auf Qualität..."
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all min-h-[160px] resize-none leading-relaxed"
                                    autoFocus
                                ></textarea>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && status !== 'submitting' && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-white mb-2">Wohin mit dem Logo?</h2>
                            <p className="text-gray-400 text-sm mb-6">Tragen Sie Ihre E-Mail ein. Der Vorgang dauert danach ca. 60 Sekunden.</p>

                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="kontakt@unternehmen.de"
                                        className="w-full bg-[#0A0A0A] border border-[#A3E635]/40 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] shadow-[0_0_15px_rgba(163,230,53,0.1)] focus:ring-1 focus:ring-[#A3E635] transition-all font-mono text-lg"
                                        autoFocus
                                    />
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <input
                                            type="checkbox"
                                            id="dsgvo"
                                            checked={dsgvo}
                                            onChange={e => setDsgvo(e.target.checked)}
                                            className="w-5 h-5 rounded border-gray-600 bg-[#0A0A0A] text-[#A3E635] focus:ring-[#A3E635] focus:ring-offset-0 cursor-pointer"
                                        />
                                    </div>
                                    <label htmlFor="dsgvo" className="text-xs text-gray-400 cursor-pointer leading-tight">
                                        Ich stimme zu, dass meine Daten (ggf. hochgeladenes Logo) zur Generierung verarbeitet werden. Löschung erfolgt per DSGVO nach 30 Tagen.
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* VALIDATION ALERT */}
                {validationError && status !== 'submitting' && (
                    <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-center text-sm animate-bounce shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                        ⚠️ {validationError}
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-center text-sm">
                        🚨 Fehler beim Verbinden. Bitte versuchen Sie es in wenigen Minuten erneut.
                    </div>
                )}

                {/* --- WIZARD NAVIGATION BUTTONS --- */}
                {status !== 'submitting' && (
                    <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-5 py-4 rounded-xl font-bold bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Zurück
                            </button>
                        )}
                        
                        {step < 3 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex-1 group/btn relative overflow-hidden bg-white text-black font-extrabold text-base rounded-xl py-4 flex items-center justify-center gap-2 transition-all hover:bg-[#A3E635] shadow-lg"
                            >
                                Weiter
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex-1 group/btn relative overflow-hidden bg-[#A3E635] text-black font-extrabold text-base rounded-xl py-4 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(163,230,53,0.4)] disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
                            >
                                <Sparkles className="w-5 h-5 text-black" />
                                Logo generieren
                            </button>
                        )}
                    </div>
                )}

                {/* --- SUBMITTING OVERLAY --- */}
                {status === 'submitting' && (
                    <div className="flex-grow flex flex-col justify-center animate-in fade-in duration-1000">
                        <div className="space-y-6">
                            <div className="text-center flex items-center justify-center gap-3 text-[#A3E635] font-bold text-xl mb-4">
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <span>KI berechnet Vektor-Pfade... ({Math.round(progress)}%)</span>
                            </div>
                            <div className="w-full bg-[#0A0A0A] border border-white/20 rounded-full h-8 overflow-hidden relative shadow-inner">
                                <div
                                    className="bg-gradient-to-r from-green-500 to-[#A3E635] h-full transition-all duration-1000 ease-out relative"
                                    style={{ width: `${progress}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                                </div>
                            </div>
                            <p className="text-gray-400 text-center leading-relaxed max-w-sm mx-auto p-4 border border-white/5 bg-white/5 rounded-xl">
                                Dieser asynchrone Prozess dauert bis zu <strong>60 Sekunden</strong>.<br/><br/>
                                <span className="text-[#A3E635]">Keine Wartezeit gewünscht? Schließen Sie die Seite einfach. Die hochauflösende Datei wird automatisch an <strong>{email}</strong> gesendet.</span>
                            </p>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
