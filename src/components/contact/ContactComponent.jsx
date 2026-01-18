import {useState } from "react";
import { UseContact } from "../../hooks/UseContact"

export default function ContactComponent() {
    const { status, error , sendContact} = UseContact();
    const [form, setForm] = useState ({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        description_service: "",
    });

    const handleChange = (e) =>{
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await sendContact(form);
    };

    return (
      <section className="relative overflow-hidden bg-linear-to-br bg-black text-white px-6 py-16">
        <div className="absolute -z-10 inset-0 bg-radial-gradient(circle at 15% 20%, rgba(255,255,255,0.08), transparent 35%), bg-radial-gradient(circle at 80% 0%, rgba(129,140,248,0.12), transparent 30%)" />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl shadow-indigo-900/30 p-8 space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-200/80">Contacto</p>
            <h2 className="text-3xl font-semibold">Hablemos de tu proyecto</h2>
            <p className="text-white/80">Cuéntanos qué necesitas y te contactamos en menos de 24h.</p>
            <ul className="space-y-2 text-indigo-100/80">
              <li className="flex items-center gap-2">• Estrategia y desarrollo web</li>
              <li className="flex items-center gap-2">• Integraciones y automatización</li>
              <li className="flex items-center gap-2">• Optimización y SEO</li>
            </ul>
          </div>
  
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-xl shadow-indigo-900/30 p-8 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="grid md:grid-cols-2 gap-3">
              <label className="space-y-1">
                <span className="text-sm text-indigo-100/80">Nombre</span>
                <input name="name" value={form.name} onChange={handleChange}
                  className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-indigo-300/70 focus:border-transparent" />
              </label>
              <label className="space-y-1">
                <span className="text-sm text-indigo-100/80">Apellido</span>
                <input name="last_name" value={form.last_name} onChange={handleChange}
                  className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-indigo-300/70 focus:border-transparent" />
              </label>
            </div>
  
            <label className="space-y-1 block">
              <span className="text-sm text-indigo-100/80">Email</span>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-indigo-300/70 focus:border-transparent" />
            </label>
  
            <label className="space-y-1 block">
              <span className="text-sm text-indigo-100/80">Teléfono</span>
              <input name="phone" value={form.phone} onChange={handleChange}
                className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-indigo-300/70 focus:border-transparent" />
            </label>
  
            <label className="space-y-1 block">
              <span className="text-sm text-indigo-100/80">Descripción</span>
              <textarea name="description_service" value={form.description_service} onChange={handleChange} rows={4}
                className="w-full rounded-2xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-indigo-300/70 focus:border-transparent resize-none" />
            </label>
  
            <button type="submit" disabled={status === "enviando"}
              className="w-full inline-flex justify-center rounded-full bg-linear-to-r from-indigo-400 via-fuchsia-400 to-indigo-300 px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-indigo-900/20 hover:-translate-y-0.5 transition disabled:opacity-60 disabled:hover:translate-y-0">
              {status === "enviando" ? "Enviando..." : "Enviar información"}
            </button>
  
            {status === "ok" && <p className="text-sm text-emerald-200 bg-white/10 rounded-full px-4 py-2 inline-block">Enviado correctamente</p>}
            {status === "error" && <p className="text-sm text-rose-200 bg-white/10 rounded-full px-4 py-2 inline-block">Error: {error}</p>}
          </form>
        </div>
      </section>
    );
  }