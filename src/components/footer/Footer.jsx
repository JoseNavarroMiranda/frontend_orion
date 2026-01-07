export default function Footer() {
    return (
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-white font-semibold text-lg">Orion Technologies</h4>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                Desarrollo de software a medida, interfaces modernas y despliegues listos para producción.
              </p>
            </div>
          </div>
  
          <hr className="my-8 border-white/10" />
  
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-white/60">
              © 2026 Orion Technologies. All Rights Reserved.
            </span>
  
            <div className="flex gap-4 text-xs text-white/60">
              <a className="hover:text-white transition" >Privacidad</a>
              <a className="hover:text-white transition" >Términos</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  