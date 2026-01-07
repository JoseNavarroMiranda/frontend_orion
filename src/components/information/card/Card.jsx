export default function Card({ title, desc, badge, children, className = "" }) {
  return (
    <article className="rounded-2xl border border-white bg-black/95 p-8 shadow-lg shadow-black/60
                    transition-all duration-200 ease-out
                    hover:-translate-y-1 hover:scale-[1.02]
                    hover:border-white/20 hover:shadow-2xl hover:shadow-violet-500/10">

      {badge && (
        <span className="mb-5 inline-flex rounded-full border border-white bg-white px-4 py-1.5 text-l font-semibold text-shadow-white">
          {badge}
        </span>
      )}

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-6 text-sm leading-relaxed text-white">{desc}</p>

      {children ? <div className="mt-6">{children}</div> : null}
    </article>
  );
}
