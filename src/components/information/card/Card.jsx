export default function Card({ title, desc, badge, children }) {
    return (
<article className="w-full rounded-2xl border border-white p-8 shadow-lg bg-black transition-transform duration-200 ease-out 
                    hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">        
        {badge && (
          <span className="mb-5 inline-flex rounded-full border border-white bg-white px-4 py-1.5 text-l font-semibold text-shadow-white">
            {badge}
          </span>
        )}
  
        <h3 className="text-xl font-semibold text-white ">{title}</h3>
        <p className="mt-6 text-sm leading-relaxed text-white">{desc}</p>
  
        {children ? <div className="mt-6">{children}</div> : null}
      </article>
    );
  }