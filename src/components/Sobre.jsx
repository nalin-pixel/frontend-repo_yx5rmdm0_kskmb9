import { motion } from 'framer-motion'

export default function Sobre() {
  const items = [
    { title: 'Desempenho', desc: 'Sites e apps extremamente rápidos, focados em Lighthouse 95+' },
    { title: 'Interatividade', desc: 'Microinterações e animações ricas que encantam' },
    { title: 'Acessibilidade', desc: 'Boas práticas e semântica em primeiro lugar' },
  ]

  return (
    <section id="sobre" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Sobre mim
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-slate-300">
            Desenvolvedor front-end apaixonado por criar experiências modernas e animadas. Trabalho com React, animações e design systems.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div key={i.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{i.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
