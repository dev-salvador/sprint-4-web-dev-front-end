# M2G — Câmera Contextual (Sprint 4 · Front-End Design + Web Development)

Evolução da landing page da Sprint 03: agora em **React**, estilizada com **Tailwind CSS**, com rotas públicas e privadas, hooks customizados e consumo de API.

## Links
- Repositório: https://github.com/joao-kider-dev/M2G--for-VIVO
- Deploy (Vercel): **COLE_AQUI_O_LINK_DA_VERCEL**

## Tecnologias
React 18 · Vite 5 · React Router 6 · Tailwind CSS 3 · Git + Vercel

## Como instalar as dependências
Pré-requisito: Node.js 18+.
```bash
npm install
```

## Como executar
```bash
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # build de produção (pasta dist)
npm run preview   # serve o build localmente
```
Não há back-end próprio, portanto não é necessário subir servidores.

## API
A tabela de cenas é consumida via `fetch` (hook `useScenes` → `src/services/api.js`).
- Por padrão usa o mock local `public/api/scenes.json` (servido em `/api/scenes.json`).
- Para usar uma API do [MockAPI](https://mockapi.io): crie o recurso `scenes` com os mesmos campos do JSON, copie `.env.example` para `.env` e defina `VITE_API_URL=https://SEU_PROJETO.mockapi.io/api/v1`. Na Vercel, configure a mesma variável em *Settings → Environment Variables*.

## Rotas
| Rota | Acesso | Descrição |
|---|---|---|
| `/` | pública | Landing page (Problema, Solução, Tabela de cenas, Stakeholders, Equipe) |
| `/login` | pública | Formulário de login |
| `/simulador` | **privada** | Simulador da Câmera Contextual (busca, favoritos, pipeline animado) |

## Usuário de teste
- E-mail: `demo@m2g.com`
- Senha: `m2g123`

A autenticação é simulada no front-end (`src/services/auth.js`) e a sessão fica no `localStorage`.

## Estrutura
```
src/
  components/  Header, Hero, Section, InfoCard, ScenesTable, PrivateRoute...
  pages/       Home, Login, Dashboard, NotFound
  hooks/       useScenes, useSceneSimulator, useDisclosure, useLocalStorage
  context/     AuthContext (+ hook useAuth)
  services/    api.js, auth.js
  data/        content.js (textos da landing)
```
Hooks nativos usados: `useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`. Hooks customizados separam a lógica da parte visual.

## Responsividade
Layout mobile-first com breakpoints do Tailwind (`sm`, `md`, `lg`), validado para mobile, tablet e desktop. Menu hambúrguer abaixo de `lg`.

## Uso de IA
A IA generativa (Claude, da Anthropic) foi usada para auxiliar na migração da landing page HTML/CSS/JS da Sprint 03 para React + Tailwind: estrutura de componentes, rotas, hooks customizados, mock da API e rascunho deste README. O conteúdo do projeto (tema, textos, cores e solução da Challenge) é da equipe, e o código foi revisado e testado pelos integrantes.

## Deploy na Vercel
Importe o repositório na Vercel (preset *Vite*; build `npm run build`, saída `dist`). O `vercel.json` já contém o rewrite necessário para as rotas do React Router.
