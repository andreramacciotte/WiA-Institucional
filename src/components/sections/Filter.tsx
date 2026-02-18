"use client";

import AnimateIn from "@/components/AnimateIn";

const forWhom = [
    "Operações com volume real e complexidade crescente",
    "Equipes estruturadas que precisam de visibilidade operacional",
    "Decisores que querem previsibilidade, não promessas",
    "Empresas acima de R$400k/mês em faturamento",
];

const notFor = [
    "Operações em estágio inicial sem processos definidos",
    "Quem busca automação superficial ou atalhos",
    "Empresas que ainda não têm equipe estruturada",
    "Quem quer resultado sem comprometimento com método",
];

export default function Filter() {
    return (
        <section id="filtro" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            Filtro de qualificação
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-concrete-50 max-w-2xl leading-tight mb-16">
                        Clareza sobre quem se beneficia.
                    </h2>
                </AnimateIn>

                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    <AnimateIn delay={0.15}>
                        <div>
                            <p className="text-xs font-mono tracking-[0.2em] uppercase text-blue-tech-accent mb-8">
                                Para quem é
                            </p>
                            <ul className="space-y-5">
                                {forWhom.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-4 text-sm text-graphite-300 leading-relaxed"
                                    >
                                        <span className="mt-1.5 w-2 h-px bg-graphite-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateIn>

                    <AnimateIn delay={0.2}>
                        <div>
                            <p className="text-xs font-mono tracking-[0.2em] uppercase text-graphite-500 mb-8">
                                Para quem não é
                            </p>
                            <ul className="space-y-5">
                                {notFor.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-4 text-sm text-graphite-500 leading-relaxed"
                                    >
                                        <span className="mt-1.5 w-2 h-px bg-graphite-700 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateIn>
                </div>
            </div>
        </section>
    );
}
