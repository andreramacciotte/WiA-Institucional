"use client";

import AnimateIn from "@/components/AnimateIn";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center texture-concrete"
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-graphite-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-graphite-500) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-32 md:py-40">
                <AnimateIn delay={0.1} blur>
                    <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-400 mb-8">
                        WiA Omni-Control™
                    </p>
                </AnimateIn>

                <AnimateIn delay={0.25} blur>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-concrete-50 max-w-3xl text-balance">
                        Controle operacional em tempo real.
                    </h1>
                </AnimateIn>

                <AnimateIn delay={0.4} blur>
                    <p className="mt-6 text-lg md:text-xl text-graphite-300 font-light max-w-xl leading-relaxed">
                        Rastreabilidade, previsibilidade e memória decisória.
                        <br />
                        Sem versão editada.
                    </p>
                </AnimateIn>

                <AnimateIn delay={0.55} blur>
                    <div className="mt-8 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-tech-accent rounded-full" />
                        <p className="text-sm font-mono text-graphite-400 tracking-wide">
                            Para empresários acima de R$400k/mês
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.7} blur>
                    <div className="mt-12">
                        <WhatsAppButton />
                    </div>
                </AnimateIn>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-graphite-950 to-transparent" />
        </section>
    );
}
