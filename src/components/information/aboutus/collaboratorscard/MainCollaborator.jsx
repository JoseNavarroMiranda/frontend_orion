import { useCollaborator } from "../../../../hooks/UseCollaborator";

export default function MainCollaborator() {
  const { data: collaborators, loading, error } = useCollaborator();

  if (loading) return <p className="text-white/80">Cargando colaboradores…</p>;
  if (error) return <p className="text-red-200">{error}</p>;

  return (
    <section className="bg-linear-to-br from-slate-950 via-slate-900/90 to-slate-900 text-white px-6 py-12">
      <div className="mx-auto mb-10 max-w-4xl text-center space-y-2">
        <p className="text-xl uppercase tracking-[0.3em] text-white/60">
          Team Orion Technology
        </p>
        <h2 className="text-xl font-semibold text-white">
          Porque el talento no se desperdicia
        </h2>
        <p className="text-sm text-slate-300">
          Nuestro equipo activo listo para crear, innovar y acompañar cada proyecto.
        </p>
      </div>

      <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {collaborators.map((c) => (
          <article
            key={c.id}
            className="flex flex-col items-center gap-4 rounded-3xl border border-white/5 bg-slate-900/90 p-6 text-center shadow-xl shadow-black/30 backdrop-blur"
          >
            <img
              src={c.image_field}
              alt={`${c.name} ${c.last_name}`}
              className="h-100 w-200 rounded-full object-cover ring-4 ring-white/10"
            />
            <div className="space-y-1">
              <p className="text-xlg font-semibold text-white">
                {c.name} {c.last_name}
              </p>
              <p className="text-lg text-slate-400">{c.role}</p>
              <p className="text-lg text-slate-400">{c.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
