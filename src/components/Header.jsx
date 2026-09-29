import { Link, NavLink } from 'react-router-dom'
import useDisclosure from '../hooks/useDisclosure.js'
import { useAuth } from '../context/AuthContext.jsx'
import { navLinks } from '../data/content.js'

export default function Header() {
  const { isOpen, close, toggle } = useDisclosure()
  const { user, logout } = useAuth()
  const link = 'font-mono text-sm text-muted transition-colors hover:text-light'

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold" onClick={close}>
          <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
          M2<span className="text-signal">G</span>
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="primaryNav"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={toggle}
        >
          <span className={`h-0.5 w-6 bg-light transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-light transition ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-light transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>

        <nav
          id="primaryNav"
          aria-label="Navegação principal"
          className={`${isOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-full border-b border-white/10 bg-dark-2 p-4 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link to={`/#${l.id}`} className={link} onClick={close}>{l.label}</Link>
              </li>
            ))}
            <li>
              <NavLink to="/simulador" className={`${link} text-signal`} onClick={close}>Simulador</NavLink>
            </li>
            <li>
              {user ? (
                <button className={link} onClick={() => { logout(); close() }}>Sair</button>
              ) : (
                <Link to="/login" className="rounded-full bg-accent px-4 py-2 font-mono text-sm text-dark" onClick={close}>Entrar</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
