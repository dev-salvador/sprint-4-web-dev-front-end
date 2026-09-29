import Hero from '../components/Hero.jsx'
import Section from '../components/Section.jsx'
import InfoCard from '../components/InfoCard.jsx'
import ScenesTable from '../components/ScenesTable.jsx'
import useScenes from '../hooks/useScenes.js'
import { problemas, funcoesIgnoradas, etapas, stakeholders, equipe } from '../data/content.js'

export default function Home() {
  const { scenes, loading, error } = useScenes()

  return (
    <>
      <Hero />

      <Section id="problema" tone="light" eyebrow="O problema" title="A câmera é boa. A experiência, não."
        intro="Entre cores artificiais, pouca luz capturada à noite e lentes que não conversam entre si, boa parte do potencial da câmera do celular se perde — e o usuário nem sabe usar o que já tem disponível.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problemas.map((p) => <InfoCard key={p.titulo} tone="light" title={p.titulo} items={p.itens} />)}
        </div>
        <h3 className="mt-14 text-2xl font-semibold">Funções que ninguém usa</h3>
        <p className="mt-2 max-w-2xl text-dark/70">A maioria dos usuários não sabe ou não usa boa parte das funções da câmera — o que faz esse potencial ficar parado.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {funcoesIgnoradas.map((f) => (
            <span key={f} className="rounded-full border border-dark/20 px-4 py-2 font-mono text-sm">{f}</span>
          ))}
        </div>
      </Section>

      <Section id="solucao" eyebrow="A solução" title="Três frentes, um mesmo objetivo: acertar sem pedir ajuda."
        intro="Em vez de exigir que o usuário entenda de fotografia, o M2G propõe que a própria câmera reconheça o problema de cada cena e resolva antes do clique.">
        <div className="grid gap-6 md:grid-cols-3">
          {etapas.map((e) => <InfoCard key={e.num} badge={e.num} title={e.titulo} text={e.texto} />)}
        </div>
        <blockquote className="mt-10 rounded-2xl border-l-4 border-accent bg-dark-2 p-6 text-lg md:p-8 md:text-xl">
          “As três frentes resolvem sintomas. Mas o coração da solução é a <span className="text-accent">Câmera Contextual</span>: o sistema que decide, sozinho, qual dessas correções aplicar em cada foto.”
        </blockquote>
      </Section>

      <Section id="como-funciona" tone="light" eyebrow="Câmera contextual · AI Scene Intent"
        title="O usuário não escolhe mais o modo. A câmera entende a intenção."
        intro="A tabela abaixo (carregada da API) resume como o sistema reconhece a cena e decide, sozinho, qual ajuste aplicar.">
        <ScenesTable scenes={scenes} loading={loading} error={error} />
      </Section>

      <Section id="stakeholders" eyebrow="Stakeholders" title="Quem é afetado pela solução.">
        <div className="grid gap-6 md:grid-cols-3">
          {stakeholders.map((s) => <InfoCard key={s.titulo} title={s.titulo} items={s.itens} />)}
        </div>
      </Section>

      <Section id="equipe" tone="light" eyebrow="Nossa equipe" title="Quem constrói o M2G.">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {equipe.map((m, i) => (
            <article key={m.rm} className="rounded-2xl border border-dark/10 bg-white p-6 text-center">
              <div aria-hidden="true" className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-dark font-mono text-signal">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-semibold">{m.nome}</h3>
              <p className="font-mono text-xs text-dark/60">RM {m.rm}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
