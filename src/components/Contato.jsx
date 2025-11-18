import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contato() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Enviado! Vou responder em breve.')
  }

  return (
    <section id="contato" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
              Vamos conversar
            </motion.h2>
            <p className="mt-4 text-slate-300">Tem um projeto em mente? Envie uma mensagem.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-sm text-slate-300">Nome</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none focus:border-white/20" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">E-mail</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none focus:border-white/20" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Mensagem</label>
                <textarea rows="4" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-white outline-none focus:border-white/20" />
              </div>
              <button className="rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 px-5 py-3 text-white shadow-lg shadow-blue-500/20">
                Enviar mensagem
              </button>
              {status && <p className="text-emerald-300">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur">
            <h3 className="text-white font-semibold">Informações</h3>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              <li>Local: Brasil</li>
              <li>Disponível para remoto</li>
              <li>Fuso: BRT</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
