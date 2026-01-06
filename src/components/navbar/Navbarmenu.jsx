import { useMemo, useState } from "react";

function slugify(label) {
  return label
    .toLowerCase()
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina acentos
    .replace(/\s+/g, "-") // espacios a guiones
    .replace(/[^a-z0-9-]/g, ""); // limpia caracteres raros
}

function Navbarmenu() {
  const items = useMemo(
    () => ["Inicio", "Servicios", "Quienes somos", "Contacto"],
    []
  );

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-black text-white backdrop-blur-md  border-black shadow-lg shadow-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="flex items-center gap-2 font-semibold">
            <span className="text-lg">*imagen*</span>
          </a>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {items.map((label) => {
              const id = slugify(label);
              return (
                <a
                  key={label}
                  href={`#${id}`}
                  className="px-5 py-5 text-l font-medium rounded-md text-white/150 transition
                             hover:text-white hover:bg-white/10
                             focus:outline-none focus:ring-2 focus:ring-fuchsia-300/30">
                  {label}
                </a>
              );
            })}
          </div>
        </div>

        <div
          id="nav-menu"
          className={[
            "lg:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-80" : "max-h-0",
          ].join(" ")}
        >
          <div className="mx-auto max-w-6xl px-6 pb-4">
            <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
              {items.map((label) => {
                const id = slugify(label);
                return (
                  <a
                    key={label}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition
                               hover:bg-white/10 hover:text-white
                               focus:outline-none focus:ring-2 focus:ring-fuchsia-300/30"
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbarmenu;
