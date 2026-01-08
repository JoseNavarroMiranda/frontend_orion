export default function Presentation() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-no-repeat bg-cover text-white"
      style={{ backgroundImage: "url(/public/mvv.jpg)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24"></div>
    </section>
  );
}
