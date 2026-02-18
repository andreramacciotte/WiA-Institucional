"use client";

import AnimateIn from "@/components/AnimateIn";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FinalCTA() {
    return (
        <section
            id="cta-final"
            className="relative py-32 md:py-40 texture-concrete"
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(var(--color-graphite-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-graphite-500) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
                <AnimateIn>
                    <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500 mb-8">
                        WiA Omni-Control™
                    </p>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-concrete-50 leading-tight mb-6 text-balance">
                        Timing não volta.
                    </h2>
                </AnimateIn>

                <AnimateIn delay={0.2}>
                    <p className="text-lg text-graphite-300 font-light max-w-md mx-auto mb-12 leading-relaxed">
                        Estrutura evita que ele se perca.
                        <br />
                        A avaliação operacional é o primeiro passo.
                    </p>
                </AnimateIn>

                <AnimateIn delay={0.3}>
                    <div className="flex justify-center">
                        <WhatsAppButton />
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.4}>
                    <p className="mt-8 text-xs text-graphite-600 font-mono">
                        Atendimento restrito. Vagas limitadas por trimestre.
                    </p>
                </AnimateIn>
            </div>
        </section>
    );
}
