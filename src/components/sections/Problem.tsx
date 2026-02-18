"use client";

import AnimateIn from "@/components/AnimateIn";

const problems = [
    {
        title: "Relatórios chegam depois.",
        description:
            "A informação que deveria guiar a decisão chega quando a decisão já foi tomada.",
    },
    {
        title: "Timing se perde.",
        description:
            "Janelas de correção fecham antes de serem identificadas. O problema já escalou.",
    },
    {
        title: "Ruído cresce com volume.",
        description:
            "Mais receita gera mais dados, mais exceções, mais versões da mesma história.",
    },
    {
        title: "Gestão vira narrativa.",
        description:
            "Sem rastreabilidade, cada área conta sua versão. A operação real se perde entre interpretações.",
    },
];

export default function Problem() {
    return (
        <section id="problema" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            O problema estrutural
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-concrete-50 max-w-2xl leading-tight mb-6">
                        Empresas não quebram por falta de venda.
                    </h2>
                </AnimateIn>

                <AnimateIn delay={0.15}>
                    <p className="text-lg text-graphite-300 font-light max-w-xl mb-16">
                        Quebram por falta de controle. O modelo operacional que trouxe a empresa até aqui não é o mesmo que sustenta o próximo nível.
                    </p>
                </AnimateIn>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {problems.map((item, i) => (
                        <AnimateIn key={item.title} delay={0.1 + i * 0.08}>
                            <div className="group border-l border-graphite-700 pl-6 py-2 transition-all duration-300 hover:border-graphite-500">
                                <h3 className="text-base font-medium text-concrete-100 mb-2 transition-colors duration-300 group-hover:text-concrete-50">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-graphite-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
