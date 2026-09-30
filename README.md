# M2G — Câmera Contextual (Sprint 4 · Front-End Design + Web Development)

Evolução da landing page da Sprint 03: agora em **React**, estilizada com **Tailwind CSS**, com rotas públicas e privadas, hooks customizados e consumo de API.

## Links
- Repositório (Sprint 3): https://github.com/joao-kider-dev/M2G--for-VIVO
- Repositório (Sprint 4): https://github.com/dev-salvador/sprint-4-web-dev-front-end.git
- Deploy (Vercel): **sprint-4-web-dev-front-end.vercel.app**

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

## API (MockAPI)
O projeto consome uma **API mockada hospedada no [MockAPI](https://mockapi.io)**, com o recurso `scenes` (as cenas da Câmera Contextual).

- **Endpoint:** `https://6abc4ad3b2118ed7abb9ae45.mockapi.io/scenes` (método `GET`)
- **Campos:** `id`, `scene`, `adjustment`, `result`, `tag`, `confidence`
- **Onde é usada:** a tabela da seção "Como Funciona" na landing page e a lista de cenas do simulador (`/simulador`).
- **Como é consumida:** via `fetch` em `src/services/api.js`, chamada pelo hook customizado `useScenes` (`src/hooks/useScenes.js`), que controla os estados de carregamento e de erro.

### Configuração da URL da API
A URL base é lida da variável de ambiente `VITE_API_URL`:

1. Copie o arquivo `.env.example` para `.env` (na raiz do projeto).
2. Preencha com a URL base, **sem** `/scenes` no final:
   ```
   VITE_API_URL=https://6abc4ad3b2118ed7abb9ae45.mockapi.io
   ```
3. Reinicie o `npm run dev` (o Vite só lê o `.env` ao iniciar).

Na Vercel, a mesma variável foi cadastrada em *Settings → Environment Variables*.

> Caso `VITE_API_URL` não esteja definida, o projeto usa como alternativa o arquivo local `public/api/scenes.json` (mesmos dados), para continuar funcionando sem a API externa.

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
O projeto é publicado a partir do repositório do GitHub:

1. Importar o repositório na Vercel (preset *Vite*, build `npm run build`, saída `dist`).
2. Cadastrar a variável de ambiente `VITE_API_URL` com a URL base do MockAPI (valor acima).
3. O `vercel.json` já contém o rewrite necessário para as rotas do React Router (`/login`, `/simulador`).