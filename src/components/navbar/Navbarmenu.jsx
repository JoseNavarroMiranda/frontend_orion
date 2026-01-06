function Navbarmenu() {
    return (
        <div>
            <nav className="sticky top-0 z-50 bg-black/95 text-white shadow  border-slate-800 backdrop-b">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                    <div className="text-lg font-semibold">
                        <h2>*imagen de orion*</h2>
                    </div>
                    <button className="lg:hidden rounded-md p-2 hover:bg-black transition-colors" aria-label="Abrir menú">
                        ☰
                    </button>
                    <div className="hidden lg:flex items-center gap-3">
                        {["Inicio", "Servicios", "Quienes somos", "Contacto"].map((label) => (
                            <a
                                key={label}
                                href={`#${label.replace(" ", "-")}`}
                                className="px-3 py-2 text-sm font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors">
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarmenu