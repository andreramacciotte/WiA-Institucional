"use client";

import AnimateIn from "@/components/AnimateIn";

const pillars = [
    {
        id: "01",
        title: "Rastreabilidade",
        description:
            "Cada decisão, cada movimento, cada dado operacional ganha endereço. Nada se perde entre setores, planilhas ou versões. A operação inteira se torna auditável em tempo real.",
        detail: "Origem → processo → resultado. Sem pontos cegos.",
    },
    {
        id: "02",
        title: "Previsibilidade",
        description:
            "Padrões operacionais são identificados antes de virarem problema. O sistema aprende com o comportamento real da operação e antecipa janelas de risco.",
        detail: "Previsão baseada em dados reais, não em projeções otimistas.",
    },
    {
        id: "03",
        title: "Memória decisória",
        description:
            "Toda decisão é registrada com contexto, justificativa e resultado. A gestão acumula inteligência institucional. A empresa não depende da memória de ninguém.",
        detail: "Decisão → contexto → consequência. Recuperável a qualquer tempo.",
    },
];

export default function System() {
    return (
        <section id="sistema" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            O sistema
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-concrete-50 max-w-2xl leading-tight mb-6">
                        Omni-Control™ não é uma ferramenta.
                        <br />
                        É um sistema de controle.
                    </h2>
                </AnimateIn>

                <AnimateIn delay={0.15}>
                    <p className="text-lg text-graphite-300 font-light max-w-xl mb-20">
                        Três pilares estruturais que transformam dados dispersos em controle operacional contínuo.
                    </p>
                </AnimateIn>

                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    {pillars.map((pillar, i) => (
                        <AnimateIn key={pillar.id} delay={0.1 + i * 0.1}>
                            <div className="group relative">
                                <div className="border-t border-graphite-700 pt-8 transition-all duration-300 group-hover:border-graphite-500">
                                    <p className="text-xs font-mono text-blue-tech-accent tracking-widest mb-4">
                                        {pillar.id}
                                    </p>
                                    <h3 className="text-xl font-light text-concrete-50 mb-4">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-graphite-300 leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                    <p className="text-xs font-mono text-graphite-500 leading-relaxed">
                                        {pillar.detail}
                                    </p>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
