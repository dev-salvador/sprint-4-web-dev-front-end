import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-muted">Página não encontrada.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-mono text-sm text-dark">Voltar ao início</Link>
    </section>
  )
}
