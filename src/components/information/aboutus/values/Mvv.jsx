export default function MVV() {
  return ( 
    <div className="w-full max-w-xl">
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {[
        { t: "Misión", d: "Crear sitios web que impulsen ventas y confianza." },
        { t: "Visión", d: "Ser referencia en soluciones web modernas y escalables." },
        { t: "Valores", d: "Calidad, claridad, velocidad y compromiso." },
      ].map((c) => (
        <div
          key={c.t}
          className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
        >
          <p className="text-sm font-semibold text-white">{c.t}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/75">{c.d}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
