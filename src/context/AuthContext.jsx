import { createContext, useCallback, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import { authenticate } from '../services/auth.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('m2g:user', null)

  const login = useCallback((email, password) => {
    const found = authenticate(email, password)
    if (found) setUser(found)
    return Boolean(found)
  }, [setUser])

  const logout = useCallback(() => setUser(null), [setUser])
  const value = useMemo(() => ({ user, login, logout }), [user, login, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// hook customizado de acesso à autenticação
export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth deve ser usado dentro de AuthProvider')
  return ctx
}
