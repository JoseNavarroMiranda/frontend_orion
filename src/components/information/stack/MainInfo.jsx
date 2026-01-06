import Typewriter from "../../../hooks/TypeWriter";
import MainImage from "../imagescomponents/MainImage";

const PHRASES = ["atraer a más clientes", "ventas por internet", "automatizar procesos"];

function MainInfo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
        
        <div className="flex-1 w-full max-w-xl space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Creamos sitios web para:{" "}
            <span className="block">
            <span className="inline-block min-w-[20ch] whitespace-nowrap">
              <Typewriter
                phrases={PHRASES}
                className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent"
                options={{
                  typingSpeed: 55,
                  deletingSpeed: 30,
                  pauseAfterTyped: 1200,
                  pauseAfterDeleted: 250,
                }}
              />
            </span>
            </span>
            <span className="block text-white/90">Da el siguiente paso para tu negocio.</span>
          </h1>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Escríbenos...
          </a>
        </div>
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <MainImage />
        </div>
      </div>
    </section>
  );
}

export default MainInfo;