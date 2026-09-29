import { useEffect, useMemo, useState } from 'react'

const STEPS = ['Capturando quadro', 'Reconhecendo a cena', 'Escolhendo o ajuste', 'Aplicando na câmera']

// Simula o pipeline da Câmera Contextual para a cena escolhida.
export default function useSceneSimulator(scenes) {
  const [selectedId, setSelectedId] = useState(null)
  const [step, setStep] = useState(-1)

  const selected = useMemo(() => scenes.find((s) => s.id === selectedId) ?? null, [scenes, selectedId])

  useEffect(() => {
    if (!selected) return undefined
    setStep(0)
    const timer = setInterval(() => {
      setStep((s) => {
        if (s >= STEPS.length - 1) { clearInterval(timer); return s }
        return s + 1
      })
    }, 600)
    return () => clearInterval(timer)
  }, [selected])

  return { selected, select: setSelectedId, step, steps: STEPS, done: step === STEPS.length - 1 }
}
