export default function Presentation() {
  return (
    <section
      className="min-h-[600px] relative overflow-hidden bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: "url(/public/mvv.jpg)" }}>
      <div className=" mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
        <div className="flex-1 w-full max-w-xl space-y-6 text-center lg:text-left">
            <h1 className="text-4xl from-neutral-100 leading-tight md:text-4.5xl">
                Somos un equipo de desarrolladores apasionados por la innovación y 
                la creación de sitios web modernos,funcionales y centrados en la experiencia del usuario.
            </h1>
        </div>
      </div>
    </section>
  );
}
