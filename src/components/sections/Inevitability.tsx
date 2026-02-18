"use client";

import AnimateIn from "@/components/AnimateIn";

const stats = [
    { value: "68%", label: "das decisões operacionais são tomadas sem dados em tempo real" },
    { value: "3,2x", label: "mais retrabalho em operações sem rastreabilidade estrutural" },
    { value: "41%", label: "das margens comprimidas vêm de ruído operacional invisível" },
];

export default function Inevitability() {
    return (
        <section id="inevitabilidade" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            A inevitabilidade
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-concrete-50 max-w-2xl leading-tight mb-6">
                        Crescimento revela fragilidade.
                    </h2>
                </AnimateIn>

                <AnimateIn delay={0.15}>
                    <p className="text-lg text-graphite-300 font-light max-w-xl mb-8">
                        O que funcionava com volume menor agora produz ruído. Feriado expõe desorganização. Escala amplia cada micro-falha. A operação está crescendo mais rápido que a capacidade de controlá-la.
                    </p>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                    <p className="text-base text-graphite-400 font-light max-w-lg mb-16">
                        Não é um problema de competência. É um problema de estrutura. E estrutura não se resolve com mais gente ou mais reunião.
                    </p>
                </AnimateIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {stats.map((stat, i) => (
                        <AnimateIn key={stat.value} delay={0.15 + i * 0.1}>
                            <div className="border border-graphite-700/50 bg-graphite-900/40 p-8 transition-all duration-300 hover:border-graphite-600 hover:bg-graphite-900/60">
                                <p className="text-3xl md:text-4xl font-light text-concrete-50 mb-3 font-mono">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-graphite-400 leading-relaxed">
                                    {stat.label}
                                </p>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
