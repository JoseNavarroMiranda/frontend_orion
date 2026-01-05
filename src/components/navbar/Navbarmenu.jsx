function Navbarmenu() {
    return (
        <div>
            <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                    <div className="text-lg font-semibold">Bienvenido a  Orion Technologies</div>
                    <button className="lg:hidden rounded-md p-2 text-slate-200 hover:bg-slate-800" aria-label="Abrir menú">
                        ☰
                    </button>
                    <div className="hidden lg:flex items-center gap-6">
                        <a className="text-sm font-medium text-slate-200 hover:text-white hover:underline underline-offset-4" href="#servicios">Inicio</a>
                        <a className="text-sm font-medium text-slate-200 hover:text-white hover:underline underline-offset-4" href="#proyectos">Servicios</a>
                        <a className="text-sm font-medium text-slate-200 hover:text-white hover:underline underline-offset-4" href="#sobre-mi">Quienes somos</a>
                        <a className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400" href="#contacto">Contacto</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbarmenu