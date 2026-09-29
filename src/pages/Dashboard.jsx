import { useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import useScenes from '../hooks/useScenes.js'
import useSceneSimulator from '../hooks/useSceneSimulator.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Dashboard() {
  const { user } = useAuth()
  const { scenes, loading, error } = useScenes()
  const { selected, select, step, steps, done } = useSceneSimulator(scenes)
  const [favorites, setFavorites] = useLocalStorage('m2g:favorites', [])
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => scenes.filter((s) => s.scene.toLowerCase().includes(query.toLowerCase())),
    [scenes, query]
  )
  const toggleFav = (id) => setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]))

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <p className="font-mono text-xs uppercase tracking-widest text-signal">Área logada</p>
      <h1 className="mt-2 text-3xl font-bold">Simulador da Câmera Contextual</h1>
      <p className="mt-2 text-muted">Olá, {user.name}. Escolha uma cena e veja o que a câmera faria sozinha.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <input
            type="search" placeholder="Buscar cena…" value={query} onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar cena"
            className="mb-4 w-full rounded-lg border border-white/20 bg-dark-3 px-4 py-3 outline-none focus:border-signal"
          />
          {loading && <p className="font-mono text-sm text-muted">Carregando cenas…</p>}
          {error && <p role="alert" className="text-accent">{error}</p>}
          <ul className="space-y-2">
            {filtered.map((s) => (
              <li key={s.id} className={`flex items-center gap-2 rounded-xl border p-3 ${selected?.id === s.id ? 'border-signal bg-dark-2' : 'border-white/10'}`}>
                <button onClick={() => select(s.id)} className="flex-1 text-left">
                  <span className="block font-medium">{s.scene}</span>
                  <span className="font-mono text-xs text-muted">{s.tag} · confiança {s.confidence}%</span>
                </button>
                <button
                  onClick={() => toggleFav(s.id)}
                  aria-pressed={favorites.includes(s.id)}
                  aria-label={`Favoritar ${s.scene}`}
                  className={`px-2 text-xl ${favorites.includes(s.id) ? 'text-accent' : 'text-muted'}`}
                >★</button>
              </li>
            ))}
            {!loading && filtered.length === 0 && <li className="text-sm text-muted">Nenhuma cena encontrada.</li>}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-dark-2 p-6">
          {!selected ? (
            <p className="text-muted">Selecione uma cena à esquerda para iniciar a simulação.</p>
          ) : (
            <>
              <h2 className="text-xl font-semibold">{selected.scene}</h2>
              <ol className="mt-4 space-y-2 font-mono text-sm">
                {steps.map((label, i) => (
                  <li key={label} className={i <= step ? 'text-signal' : 'text-muted/50'}>
                    {i < step || done ? '✔' : i === step ? '…' : '○'} {label}
                  </li>
                ))}
              </ol>
              {done && (
                <div className="mt-6 space-y-2 rounded-xl bg-dark-3 p-4">
                  <p><span className="text-muted">Ajuste: </span>{selected.adjustment}</p>
                  <p><span className="text-muted">Resultado: </span>{selected.result}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
