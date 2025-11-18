import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Portfólio • Feito com animações e carinho</p>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <a href="#top" className="hover:text-white">Topo</a>
            <span className="opacity-20">•</span>
            <a href="#contato" className="hover:text-white">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
