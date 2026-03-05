import React, { useState, useRef, useEffect } from 'react';
import { Upload, ArrowRight, CheckCircle, Loader2, Sparkles, Image as ImageIcon, Link as LinkIcon, FileText, Target, PhoneCall, Download } from 'lucide-react';

export default function LogoLeadForm() {
    const [designGoal, setDesignGoal] = useState<'new' | 'upgrade'>('new');
    const [companyName, setCompanyName] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [logoStyle, setLogoStyle] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [dsgvo, setDsgvo] = useState(false);
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [progress, setProgress] = useState(0);
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !companyName || !dsgvo || !businessDescription) return;

        setStatus('submitting');
        try {
            let fileUrl = '';

            const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
            const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

            // Upload file to Supabase if it exists
            if (file) {
                const formData = new FormData();
                formData.append('file', file);

                const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;

                if (supabaseUrl && supabaseAnonKey) {
                    const uploadRes = await fetch(`${supabaseUrl}/storage/v1/object/lead_gen_logos/${fileName}`, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            Authorization: `Bearer ${supabaseAnonKey}`,
                        },
                    });

                    if (uploadRes.ok) {
                        fileUrl = `${supabaseUrl}/storage/v1/object/public/lead_gen_logos/${fileName}`;
                    } else {
                        console.error('File upload failed', await uploadRes.text());
                    }
                }
            }

            const normalizeUrl = (url: string) => {
                if (!url) return '';
                let clean = url.trim().toLowerCase();
                if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
                    clean = 'https://' + clean;
                }
                try {
                    new URL(clean);
                    return clean;
                } catch {
                    return url;
                }
            };

            const finalWebsiteUrl = normalizeUrl(websiteUrl);

            if (supabaseUrl && supabaseAnonKey) {
                const insertId = crypto.randomUUID();

                const insertRes = await fetch(`${supabaseUrl}/rest/v1/logo_leads`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`,
                        'apikey': supabaseAnonKey
                    },
                    body: JSON.stringify({
                        id: insertId,
                        company_name: companyName,
                        email,
                        design_goal: designGoal,
                        logo_style: logoStyle,
                        website_url: finalWebsiteUrl,
                        business_description: businessDescription,
                        file_url: fileUrl
                    }),
                });

                if (!insertRes.ok) {
                    throw new Error('Database insert failed');
                }

                // Sync API Call to Nano Banana 2 (Gemini Image API via Edge Function)
                const functionRes = await fetch(`${supabaseUrl}/functions/v1/generate-logo`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`,
                    },
                    body: JSON.stringify({
                        company_name: companyName,
                        business_description: businessDescription,
                        design_goal: designGoal,
                        logo_style: logoStyle,
                        insert_id: insertId
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
            <div className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-[#0A0A0A] border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-50"></div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 text-center">
                    Ihr neues Logo ist fertig.
                </h3>

                {generatedImageUrl && (
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Left: Product Result */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="relative group/image">
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#A3E635]/20 to-emerald-500/20 rounded-xl blur-lg opacity-0 group-hover/image:opacity-100 transition duration-500"></div>
                                <img src={generatedImageUrl} alt="Ihr neues 2026 Logo" className="w-full rounded-xl shadow-2xl border border-white/20 aspect-square object-cover relative z-10 bg-white" />
                            </div>
                        </div>

                        {/* Right: The Upsell / Lead Capture */}
                        <div className="w-full md:w-1/2 space-y-8">
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-4">Ein schönes Logo allein bringt Ihnen keine neuen Kunden.</h4>
                                <p className="text-gray-400 text-lg">
                                    Das Logo steht. Es sieht gut aus. <strong>Aber woher kommen jetzt die Kunden?</strong>
                                    Wir haben ein System gebaut, das automatisch neue Kunden für Sie findet. Wollen Sie sehen, wie das geht?
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a href="https://meetings.hubspot.com/s-tepecik" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-between bg-[#A3E635] text-black font-bold px-6 py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(163,230,53,0.3)]">
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
                                    Nein danke. Ich lade nur das Logo runter und suche meine Kunden lieber selbst.
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A3E635]/20 via-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

            <form onSubmit={handleSubmit} className="relative bg-[#050505] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-3">Kostenloses Logo-Design starten</h2>
                    <p className="text-gray-400">Geben Sie uns Ihre Anforderungen. Unser System generiert Ihren neuen visuellen Anker.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 p-1 bg-white/5 rounded-xl border border-white/10">
                    <button
                        type="button"
                        onClick={() => setDesignGoal('new')}
                        className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${designGoal === 'new'
                            ? 'bg-[#A3E635] text-black shadow-lg'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        Komplett neues Logo
                    </button>
                    <button
                        type="button"
                        onClick={() => setDesignGoal('upgrade')}
                        className={`py-3 px-4 rounded-lg text-sm font-semibold transition-all ${designGoal === 'upgrade'
                            ? 'bg-[#A3E635] text-black shadow-[0_0_20px_rgba(163,230,53,0.3)]'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        Bestehendes Logo upgraden
                    </button>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                Firmenname *
                            </label>
                            <input
                                type="text"
                                required
                                value={companyName}
                                onChange={e => setCompanyName(e.target.value)}
                                placeholder="z.B. Schmidt Maschinenbau"
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all font-mono text-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <FileText className="w-4 h-4 text-gray-500" />
                                E-Mail Adresse * (für das Resultat)
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="kontakt@ihr-unternehmen.de"
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all font-mono text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <Target className="w-4 h-4 text-gray-500" />
                                Gewünschter Stil
                            </label>
                            <input
                                type="text"
                                value={logoStyle}
                                onChange={e => setLogoStyle(e.target.value)}
                                placeholder="z.B. Minimalistisch, Futuristisch, Line-Art..."
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <LinkIcon className="w-4 h-4 text-gray-500" />
                                Website URL (Optional, für mehr Kontext)
                            </label>
                            <input
                                type="text"
                                value={websiteUrl}
                                onChange={e => setWebsiteUrl(e.target.value)}
                                placeholder="https://ihre-website.de"
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#A3E635]" />
                            Was macht Ihr Unternehmen? * (Wichtig für das KI-Design)
                        </label>
                        <textarea
                            required
                            value={businessDescription}
                            onChange={e => setBusinessDescription(e.target.value)}
                            placeholder="Z.B.: Wir sind ein etablierter Handwerksbetrieb / lokales Restaurant. Das Logo soll extrem zuverlässig, massiv und modern wirken. Unsere Kunden legen Wert auf Qualität..."
                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all min-h-[100px] resize-none"
                        ></textarea>
                    </div>

                    {designGoal === 'upgrade' && (
                        <div
                            className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#A3E635]/50 transition-colors cursor-pointer bg-white/5 relative overflow-hidden"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            {file ? (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-[#A3E635]/20 flex items-center justify-center border border-[#A3E635]/30">
                                        <CheckCircle className="w-6 h-6 text-[#A3E635]" />
                                    </div>
                                    <div>
                                        <span className="text-white font-medium block">{file.name}</span>
                                        <span className="text-gray-500 text-sm">Bereit zur Analyse</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <Upload className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <span className="text-gray-300 font-medium block">Aktuelles Logo hochladen</span>
                                        <span className="text-gray-500 text-sm">PNG, JPG oder SVG bis 5MB</span>
                                    </div>
                                </div>
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                    )}

                    {/* DSGVO Consent */}
                    <div className="flex items-start gap-3 mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex-shrink-0 mt-1">
                            <input
                                type="checkbox"
                                id="dsgvo"
                                required
                                checked={dsgvo}
                                onChange={e => setDsgvo(e.target.checked)}
                                className="w-5 h-5 rounded border-gray-600 bg-[#0A0A0A] text-[#A3E635] focus:ring-[#A3E635] focus:ring-offset-0 cursor-pointer"
                            />
                        </div>
                        <label htmlFor="dsgvo" className="text-sm tracking-tight text-gray-400 cursor-pointer">
                            Ich stimme zu, dass meine Daten sowie das hochgeladene Logo zur Bildgenerierung verarbeitet werden. Alle Daten werden automatisch nach 30 Tagen gemäß <strong>DSGVO</strong> ("Datenminimierung") dauerhaft aus dem System gelöscht.
                        </label>
                    </div>
                </div>

                {status === 'error' && (
                    <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        Es gab ein Problem bei der Übermittlung. Bitte überprüfen Sie Ihre Eingaben oder versuchen Sie es später erneut.
                    </div>
                )}

                {/* DYNAMIC PROGRESS BAR DURING SUBMISSION */}
                {status === 'submitting' ? (
                    <div className="mt-8 space-y-4">
                        <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-full h-4 overflow-hidden relative">
                            <div
                                className="bg-[#A3E635] h-full transition-all duration-1000 ease-out relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -skew-x-12"></div>
                            </div>
                        </div>
                        <div className="text-center flex items-center justify-center gap-3 text-[#A3E635] font-medium">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Nano Banana 2 kalkuliert Design... ({Math.round(progress)}%)</span>
                        </div>
                        <p className="text-gray-500 text-xs text-center">Dieser Prozess benötigt immense Rechenleistung und dauert ca. 45-60 Sekunden.</p>
                    </div>
                ) : (
                    <button
                        type="submit"
                        disabled={status === 'error'}
                        className="mt-8 w-full group/btn relative overflow-hidden bg-white text-black font-bold text-lg rounded-xl py-4 px-6 flex items-center justify-center gap-2 transition-all hover:bg-[#A3E635] disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
                    >
                        Kostenloses Logo generieren
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                )}
            </form>
        </div>
    );
}
