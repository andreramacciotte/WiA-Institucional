export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-graphite-800/50 py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-mono tracking-[0.25em] uppercase text-graphite-500 mb-2">
                            WiA Omni-Control™
                        </p>
                        <p className="text-xs text-graphite-600">
                            Controle operacional estrutural.
                        </p>
                    </div>
                    <p className="text-xs text-graphite-700 font-mono">
                        © {currentYear} WiA. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
