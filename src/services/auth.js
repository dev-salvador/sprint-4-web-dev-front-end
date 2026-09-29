// Autenticação simulada (projeto acadêmico, sem back-end).
const USERS = [{ email: 'demo@m2g.com', password: 'm2g123', name: 'Usuário Demo' }]

export function authenticate(email, password) {
  const user = USERS.find((u) => u.email === email.trim().toLowerCase() && u.password === password)
  return user ? { email: user.email, name: user.name } : null
}
