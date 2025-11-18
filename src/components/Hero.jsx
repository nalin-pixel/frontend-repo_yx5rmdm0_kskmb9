import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/40 px-3 py-1 text-xs text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponível para novos projetos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Crio experiências digitais modernas, rápidas e envolventes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 max-w-xl text-lg text-slate-300"
          >
            Foco em interfaces impecáveis, performance e interatividade. Front-end, animações e integrações com APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projetos" className="rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-blue-500/20 transition-transform hover:-translate-y-0.5">
              Ver projetos
            </a>
            <a href="#contato" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white backdrop-blur transition-colors hover:border-white/20">
              Entrar em contato
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
