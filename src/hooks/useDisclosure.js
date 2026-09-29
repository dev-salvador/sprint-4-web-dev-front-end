import { useCallback, useState } from 'react'

// Controla abrir/fechar (ex.: menu mobile).
export default function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  return { isOpen, close, toggle }
}
