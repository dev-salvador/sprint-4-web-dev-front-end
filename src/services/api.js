// Base da API: MockAPI (VITE_API_URL) ou mock local em /public/api.
const BASE = import.meta.env.VITE_API_URL?.replace(/\/$/, '')

export async function getScenes(signal) {
  const url = BASE ? `${BASE}/scenes` : '/api/scenes.json'
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`Erro ao consultar a API (${res.status})`)
  return res.json()
}
