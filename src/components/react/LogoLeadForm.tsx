import React, { useState, useRef } from 'react';
import { Upload, ArrowRight, CheckCircle, Loader2, Sparkles, Image as ImageIcon, Link as LinkIcon, FileText, Target } from 'lucide-react';

export default function LogoLeadForm() {
    const [designGoal, setDesignGoal] = useState<'new' | 'upgrade'>('new');
    const [companyName, setCompanyName] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [businessDescription, setBusinessDescription] = useState('');
    const [logoStyle, setLogoStyle] = useState(''); // New field
    const [email, setEmail] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !companyName) return;

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

            // Insert data into Supabase database
            if (supabaseUrl && supabaseAnonKey) {
                const insertRes = await fetch(`${supabaseUrl}/rest/v1/logo_leads`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${supabaseAnonKey}`,
                        'apikey': supabaseAnonKey,
                        'Prefer': 'return=minimal'
                    },
                    body: JSON.stringify({
                        company_name: companyName,
                        email,
                        design_goal: designGoal,
                        logo_style: logoStyle,
                        website_url: websiteUrl,
                        business_description: businessDescription,
                        file_url: fileUrl
                    }),
                });

                if (!insertRes.ok) {
                    throw new Error('Database insert failed');
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
            <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 text-center relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#A3E635]/20 blur-[100px] rounded-full pointer-events-none"></div>

                <CheckCircle className="w-16 h-16 text-[#A3E635] mx-auto mb-6 relative z-10" />
                <h3 className="text-3xl font-bold tracking-tight text-white mb-4 relative z-10">Generierung gestartet.</h3>
                <p className="text-gray-400 text-lg mb-8 relative z-10">
                    Unser System synthetisiert jetzt Ihre Daten. Sie erhalten den Link zum neuen Logo-Design in Kürze.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[#A3E635] bg-[#A3E635]/10 px-4 py-2 rounded-full border border-[#A3E635]/20 relative z-10">
                    <CheckCircle className="w-4 h-4" />
                    Ihre Daten wurden sicher verschlüsselt in unserer Datenbank gespeichert.
                </div>
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
                                placeholder="CEO@ihre-firma.de"
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
                                type="url"
                                value={websiteUrl}
                                onChange={e => setWebsiteUrl(e.target.value)}
                                placeholder="https://ihre-website.de"
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-gray-500" />
                            Was soll das Logo ausstrahlen? (Werte & Kernkompetenz)
                        </label>
                        <textarea
                            value={businessDescription}
                            onChange={e => setBusinessDescription(e.target.value)}
                            placeholder="Z.B.: Wir sind ein etablierter Handwerksbetrieb. Das Logo soll extrem zuverlässig, massiv und modern wirken. Unsere Zielgruppe sind B2B Entscheider..."
                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#A3E635] focus:ring-1 focus:ring-[#A3E635] transition-all min-h-[100px] resize-none"
                        ></textarea>
                    </div>

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
                                    <span className="text-gray-300 font-medium block">Aktuelles Logo hochladen (Nur bei Upgrade)</span>
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
                </div>

                {status === 'error' && (
                    <div className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        Es gab ein Problem bei der Übermittlung. Bitte überprüfen Sie Ihre Eingaben oder versuchen Sie es später erneut.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="mt-8 w-full group/btn relative overflow-hidden bg-white text-black font-bold text-lg rounded-xl py-4 px-6 flex items-center justify-center gap-2 transition-all hover:bg-[#A3E635] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sende an System...
                        </>
                    ) : (
                        <>
                            Kostenloses Logo generieren
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
