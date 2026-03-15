import React, { useState, useEffect } from 'react';

export default function KiEinsparungsrechner() {
    const [employees, setEmployees] = useState(5);
    const [hourlyWage, setHourlyWage] = useState(35);
    const [manualHours, setManualHours] = useState(10);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const AUTOMATION_POTENTIAL = 0.70; // 70%
    const WEEKS_PER_MONTH = 4.33;

    const monthlyCost = Math.round(employees * manualHours * WEEKS_PER_MONTH * hourlyWage);
    const monthlySavings = Math.round(monthlyCost * AUTOMATION_POTENTIAL);
    const yearlySavings = monthlySavings * 12;

    const formatCurrency = (num: number) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);
    };

    if (!mounted) {
        return (
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl min-h-[500px] flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                {/* Sliders (Left Side) */}
                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-gray-300 font-bold block">Mitarbeiter im Büro / Verwaltung</label>
                            <span className="text-2xl font-black text-white">{employees}</span>
                        </div>
                        <input 
                            type="range" 
                            min="1" 
                            max="50" 
                            value={employees} 
                            onChange={(e) => setEmployees(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-lime-500"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-gray-300 font-bold block">Stundenlohn (Ø Arbeitgeberbrutto)</label>
                            <span className="text-2xl font-black text-white">{formatCurrency(hourlyWage)}</span>
                        </div>
                        <input 
                            type="range" 
                            min="15" 
                            max="100" 
                            step="5"
                            value={hourlyWage} 
                            onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-lime-500"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="text-gray-300 font-bold block">Routineaufgaben pro Woche <span className="block text-xs text-gray-500 font-normal">Dateneingabe, E-Mails, Recherche (pro MA)</span></label>
                            <span className="text-2xl font-black text-white">{manualHours}h</span>
                        </div>
                        <input 
                            type="range" 
                            min="2" 
                            max="30" 
                            value={manualHours} 
                            onChange={(e) => setManualHours(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-lime-500"
                        />
                    </div>
                </div>

                {/* Results (Right Side) */}
                <div className="bg-[#050505] rounded-2xl p-8 border border-white/5 flex flex-col justify-center">
                    <div className="mb-8 relative">
                        <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-2">Manuelle Kosten / Monat</div>
                        <div className="text-3xl text-red-400 font-bold opacity-80 line-through decoration-red-500/50 decoration-2">
                            {formatCurrency(monthlyCost)}
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="text-sm text-lime-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                            KI-Einsparpotenzial (70%)
                        </div>
                        <div className="text-5xl md:text-6xl text-lime-400 font-black tracking-tighter">
                            {formatCurrency(monthlySavings)}
                        </div>
                        <div className="text-gray-400 mt-2 text-sm">Pro Monat direkt aufs Konto.</div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        <div className="text-sm text-gray-400 mb-1">Gewinnsteigerung pro Jahr</div>
                        <div className="text-3xl text-white font-bold">
                            {formatCurrency(yearlySavings)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
