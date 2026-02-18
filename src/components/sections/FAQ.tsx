"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/AnimateIn";

const faqs = [
    {
        question: "Omni-Control é um software?",
        answer:
            "Não. Omni-Control é um sistema de controle operacional. Envolve método, instrumentação e acompanhamento contínuo. Software é uma das camadas, não o sistema inteiro.",
    },
    {
        question: "Quanto tempo leva para implementar?",
        answer:
            "O mapeamento inicial leva de 2 a 3 semanas. A instrumentação completa, de 3 a 4 semanas. O controle contínuo é permanente e se refina com o tempo.",
    },
    {
        question: "Funciona para qualquer segmento?",
        answer:
            "Funciona para operações com volume, complexidade e equipe estruturada. O segmento é menos relevante do que a maturidade operacional da empresa.",
    },
    {
        question: "Preciso trocar meus sistemas atuais?",
        answer:
            "Não necessariamente. O Omni-Control se integra à infraestrutura existente. O objetivo é instrumentar e rastrear, não substituir.",
    },
    {
        question: "Qual o investimento?",
        answer:
            "O investimento é definido após o mapeamento inicial, com base na complexidade da operação. Não trabalhamos com pacotes genéricos.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 md:py-32 texture-concrete">
            <div className="max-w-3xl mx-auto px-6 md:px-12">
                <AnimateIn>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-8 h-px bg-graphite-500" />
                        <p className="text-xs font-mono tracking-[0.3em] uppercase text-graphite-500">
                            Perguntas frequentes
                        </p>
                    </div>
                </AnimateIn>

                <AnimateIn delay={0.1}>
                    <h2 className="text-2xl md:text-3xl font-light text-concrete-50 mb-16">
                        Respostas diretas.
                    </h2>
                </AnimateIn>

                <div className="space-y-0">
                    {faqs.map((faq, i) => (
                        <AnimateIn key={faq.question} delay={0.05 + i * 0.05}>
                            <div className="border-t border-graphite-800">
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === i ? null : i)
                                    }
                                    className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                                    aria-expanded={openIndex === i}
                                >
                                    <span className="text-sm md:text-base text-graphite-200 font-light pr-8 transition-colors duration-300 group-hover:text-concrete-50">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-graphite-500 text-lg shrink-0"
                                    >
                                        +
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-sm text-graphite-400 leading-relaxed pb-6 max-w-lg">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </AnimateIn>
                    ))}
                    <div className="border-t border-graphite-800" />
                </div>
            </div>
        </section>
    );
}
