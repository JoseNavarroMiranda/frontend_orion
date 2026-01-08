import Mvv from "./Mvv";
export default function Presentation() {
    return (
      <section
        className="relative min-h-[600px] overflow-hidden bg-center bg-no-repeat bg-cover text-white"
        style={{ backgroundImage: "url(/mvv.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
  
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="w-full max-w-2xl space-y-6">
            <p className="text-sm font-semibold tracking-widest text-fuchsia-200/90">
              QUIÉNES SOMOS
            </p>
  
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Somos un equipo de desarrolladores apasionados por la innovación y la
              creación de sitios web modernos, funcionales y centrados en la experiencia del usuario.
            </h1>
  
            <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Creamos soluciones enfocadas en resultados: velocidad, SEO técnico y una interfaz clara
              para que tus clientes entiendan tu propuesta y te contacten más rápido.
            </p>
  
            <ul className="grid gap-2 text-sm text-white/85 sm:grid-cols-2">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                Diseño responsivo y moderno
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                SEO técnico y performance
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                UX enfocado en conversión
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-300" />
                Deploy y soporte (opcional)
              </li>
            </ul>
          </div>
          <Mvv />
        </div>
      </section>
    );
  }
  