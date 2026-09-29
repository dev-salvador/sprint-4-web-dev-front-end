// Bloco de seção reutilizável. Props: id, eyebrow, title, intro, tone ('dark' | 'light'), children
export default function Section({ id, eyebrow, title, intro, tone = 'dark', children }) {
  const light = tone === 'light'
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`px-4 py-16 md:px-8 md:py-20 ${light ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <div className="mx-auto max-w-6xl">
        <p className={`mb-4 font-mono text-xs uppercase tracking-widest ${light ? 'text-accent' : 'text-signal'}`}>{eyebrow}</p>
        <h2 id={`${id}-title`} className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
        {intro && <p className={`mt-4 max-w-2xl ${light ? 'text-dark/70' : 'text-muted'}`}>{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
