import { Link } from 'react-router-dom'

const tags = ['RETRATO', 'HDR', 'NOTURNO']
const ticker = [
  ['RETRATO', 'desfoque ativado'],
  ['GRUPO', 'lente ultrawide ativada'],
  ['PAISAGEM', 'HDR + ultrawide'],
  ['SHOW', 'modo noturno + estabilização'],
  ['DOCUMENTO', 'modo scanner ativado'],
]

export default function Hero() {
  const items = [...ticker, ...ticker] // duplicado para o loop contínuo
  return (
    <section className="bg-gradient-to-b from-dark to-dark-2 pt-16" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 md:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-signal">Inteligência contextual para câmeras · Projeto M2G</p>
          <h1 id="hero-title" className="text-4xl font-bold leading-tight md:text-5xl">
            Sua câmera deveria saber <span className="lg:block">o que você está fotografando.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Hoje o usuário precisa escolher manualmente o modo certo da câmera — e na maioria das vezes nem sabe que ele existe. O M2G propõe uma câmera que reconhece a cena e ajusta tudo sozinha, antes mesmo do clique.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
            <a href="#solucao" className="rounded-full bg-accent px-6 py-3 text-dark">Ver a solução</a>
            <a href="#como-funciona" className="rounded-full border border-white/20 px-6 py-3">Ver a tabela de cenas</a>
            <Link to="/simulador" className="rounded-full border border-signal px-6 py-3 text-signal">Testar o simulador</Link>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-sm">
          <svg viewBox="0 0 320 320" className="h-full w-full fill-none stroke-signal" strokeWidth="3">
            <path d="M20 70 V20 H70" /><path d="M250 20 H300 V70" />
            <path d="M300 250 V300 H250" /><path d="M70 300 H20 V250" />
            <circle cx="160" cy="160" r="34" className="stroke-accent" />
            <path d="M160 132v14M160 174v14M132 160h14M174 160h14" />
          </svg>
          {tags.map((t, i) => (
            <span key={t} style={{ animationDelay: `${i}s` }}
              className={`absolute animate-pulseTag rounded border border-signal/40 bg-dark/80 px-2 py-1 font-mono text-xs text-signal ${['left-2 top-10', 'right-2 top-1/2', 'bottom-10 left-8'][i]}`}>
              {t}
            </span>
          ))}
          <p className="mt-2 text-center font-mono text-xs text-muted">a câmera identifica a cena → e ajusta o modo automaticamente</p>
        </div>
      </div>

      <div className="overflow-hidden border-y border-white/10 bg-dark-3 py-3" role="note" aria-label="Leituras simuladas de detecção de cena">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-xs text-muted">
          {items.map(([scene, action], i) => (
            <span key={i}>CENA DETECTADA <strong className="text-signal">{scene}</strong> — {action}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
