// Card genérico. Props: title, items (lista), text, badge, tone
export default function InfoCard({ title, items, text, badge, tone = 'dark' }) {
  const light = tone === 'light'
  return (
    <article className={`rounded-2xl border p-6 ${light ? 'border-dark/10 bg-white text-dark' : 'border-white/10 bg-dark-2 text-light'}`}>
      {badge && <span className="mb-3 block font-mono text-sm text-accent">{badge}</span>}
      <h3 className="mb-3 text-lg font-semibold">{title}</h3>
      {text && <p className={`text-sm leading-relaxed ${light ? 'text-dark/70' : 'text-muted'}`}>{text}</p>}
      {items && (
        <ul className={`list-disc space-y-1 pl-5 text-sm ${light ? 'text-dark/70' : 'text-muted'}`}>
          {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
      )}
    </article>
  )
}
