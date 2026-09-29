import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Rola até a âncora (#id) ao navegar; volta ao topo nas demais rotas.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}
