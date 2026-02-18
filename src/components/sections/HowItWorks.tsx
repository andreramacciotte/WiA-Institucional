"use client";

import AnimateIn from "@/components/AnimateIn";

const steps = [
    {
        phase: "Fase 01",
        title: "Mapeamento",
        description:
            "Diagnóstico completo da arquitetura operacional atual. Cada processo, cada fluxo, cada ponto de decisão é documentado e mapeado. Identificamos os pontos cegos.",
        duration: "2–3 semanas",
    },
    {
        phase: "Fase 02",
        title: "Instrumentação",
        description:
            "Implementação dos sensores de controle em cada camada da operação. Dados passam a fluir em tempo real. A operação ganha visibilidade estrutural.",
        duration: "3–4 semanas",
    },
    {
        phase: "Fase 03",
        title: "Controle contínuo",
        description:
            "O sistema opera em ciclo permanente. Cada decisão alimenta a memória institucional. O controle se refina continuamente com base em dados reais.",
        duration: "Contínuo",
    },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            Como funciona
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-concrete-50 max-w-2xl leading-tight mb-6">
                        Três fases estruturais.
                    </h2>
                </AnimateIn>

                <AnimateIn delay={0.15}>
                    <p className="text-lg text-graphite-300 font-light max-w-xl mb-20">
                        Cada fase é projetada para consolidar a anterior. Não existe atalho. Existe método.
                    </p>
                </AnimateIn>

                <div className="space-y-0">
                    {steps.map((step, i) => (
                        <AnimateIn key={step.phase} delay={0.1 + i * 0.1}>
                            <div className="group grid md:grid-cols-[120px_1fr_120px] gap-6 md:gap-12 py-10 border-t border-graphite-800 transition-all duration-300 hover:border-graphite-600 items-start">
                                <p className="text-xs font-mono text-blue-tech-accent tracking-widest uppercase">
                                    {step.phase}
                                </p>
                                <div>
                                    <h3 className="text-xl font-light text-concrete-50 mb-3 transition-colors duration-300 group-hover:text-concrete-50">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-graphite-400 leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                                <p className="text-xs font-mono text-graphite-500 md:text-right">
                                    {step.duration}
                                </p>
                            </div>
                        </AnimateIn>
                    ))}
                    <div className="border-t border-graphite-800" />
                </div>
            </div>
        </section>
    );
}
