import { useEffect, useState } from 'react'
import { getScenes } from '../services/api.js'

// Busca a tabela de cenas na API e expõe loading/erro.
export default function useScenes() {
  const [scenes, setScenes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    getScenes(controller.signal)
      .then(setScenes)
      .catch((e) => { if (e.name !== 'AbortError') setError(e.message) })
      .finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, [])

  return { scenes, loading, error }
}
