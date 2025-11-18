import { motion } from 'framer-motion'

const projetos = [
  {
    title: 'Portfolio Interativo',
    desc: 'Experiência 3D com Spline e animações suaves',
    tags: ['React', 'Spline', 'Tailwind'],
  },
  {
    title: 'Dashboard Animada',
    desc: 'Gráficos e transições com foco em UX',
    tags: ['Next.js', 'Framer Motion'],
  },
  {
    title: 'Landing Page Performática',
    desc: 'Pontuação alta no Lighthouse e SEO',
    tags: ['Vite', 'Tailwind'],
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Projetos em destaque
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-slate-300">
            Um mix de tecnologia, estética e velocidade.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx, duration: 0.6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 blur-2xl transition-transform group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
