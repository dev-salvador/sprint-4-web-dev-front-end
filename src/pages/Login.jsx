import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const from = useLocation().state?.from ?? '/simulador'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (user) return <Navigate to={from} replace />

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(email, password)) navigate(from, { replace: true })
    else setError('E-mail ou senha inválidos.')
  }

  const input = 'w-full rounded-lg border border-white/20 bg-dark-3 px-4 py-3 text-light outline-none focus:border-signal'

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-dark-2 p-8">
        <h1 className="text-2xl font-bold">Entrar no simulador</h1>
        <p className="text-sm text-muted">Credenciais de teste: <span className="font-mono text-signal">demo@m2g.com</span> / <span className="font-mono text-signal">m2g123</span></p>
        <label className="block text-sm">E-mail
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={`${input} mt-1`} />
        </label>
        <label className="block text-sm">Senha
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={`${input} mt-1`} />
        </label>
        {error && <p role="alert" className="text-sm text-accent">{error}</p>}
        <button type="submit" className="w-full rounded-full bg-accent py-3 font-mono text-sm font-semibold text-dark">Entrar</button>
      </form>
    </section>
  )
}
