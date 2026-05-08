# Portfólio Pessoal — Isaque Johnson

Documentação completa do projeto de portfólio pessoal.

---

## Visão geral

Portfólio 100% frontend, sem backend próprio, sem banco de dados. Todo o conteúdo é estático ou carregado de arquivos de dados locais (JavaScript). A única integração externa é o serviço de envio de formulário **Formspree**.

---

## Stack tecnológica

| Camada | Tecnologia | Versão |
|---|---|---|
| Interface | React | 19 |
| Bundler | Vite | 8 |
| Linguagem | JavaScript (ES Modules) | — |
| Estilização | Tailwind CSS | 3.4 |
| Ícones | lucide-react | 1.14 |
| Classes condicionais | clsx + tailwind-merge | 2.x / 3.x |
| Animações CSS | tailwindcss-animate | 1.0 |
| Envio de formulário | Formspree | — |
| Fonte | Inter (Google Fonts) | — |

---

## Estrutura de pastas

```
portfolio/
├── public/
│   ├── avatar.jpg                  # Foto de perfil
│   ├── cv.pdf                      # Currículo para download
│   ├── favicon.png                 # Ícone da aba do navegador
│   ├── project-task-manager.png    # Screenshot do Gerenciador de Tarefas
│   └── project-estoque-switches.png# Screenshot do Sistema de Estoque
│
├── src/
│   ├── App.jsx                     # Raiz da aplicação — compõe todas as seções
│   ├── index.css                   # Variáveis CSS globais + diretivas Tailwind
│   ├── main.jsx                    # Entry point React
│   │
│   ├── lib/
│   │   └── utils.js                # Utilitário cn() — combina clsx + tailwind-merge
│   │
│   ├── hooks/
│   │   ├── useTheme.js             # Dark/light mode com persistência em localStorage
│   │   ├── useTypewriter.js        # Efeito de digitação animada entre strings
│   │   └── useScrollSpy.js         # Detecta seção ativa durante o scroll
│   │
│   ├── data/
│   │   ├── projects.js             # Array de projetos e lista de categorias
│   │   ├── experience.js           # Array de experiências profissionais
│   │   ├── education.js            # Arrays de formação e certificações
│   │   └── skills.js               # Grupos de habilidades e cards de destaques
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Botão com variantes: primary, outline, ghost, gold
│   │   │   ├── Badge.jsx           # Chip de tecnologia (cor teal)
│   │   │   ├── Card.jsx            # Container com borda e sombra
│   │   │   ├── Modal.jsx           # Overlay com ESC + clique fora para fechar
│   │   │   └── SocialIcons.jsx     # SVGs de GitHub e LinkedIn (não disponíveis no lucide)
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navbar fixa com scroll spy, menu mobile e toggle de tema
│   │   │   └── Footer.jsx          # 3 colunas: logo/bio, navegação, redes sociais
│   │   │
│   │   └── sections/
│   │       ├── HeroSection.jsx     # Tela inicial com typewriter, CTAs e redes sociais
│   │       ├── AboutSection.jsx    # Foto, bio e cards de destaques numéricos
│   │       ├── SkillsSection.jsx   # Barras de progresso por grupo de habilidades
│   │       ├── ProjectsSection.jsx # Grid de projetos com filtro, modal e lightbox
│   │       ├── ExperienceSection.jsx # Timeline vertical de experiências
│   │       ├── EducationSection.jsx  # Cards de formação e certificações
│   │       └── ContactSection.jsx    # Formulário com validação + integração Formspree
│
├── tailwind.config.js              # Paleta customizada, fonte, keyframes
├── postcss.config.js               # PostCSS com Tailwind e Autoprefixer
├── vite.config.js                  # Configuração padrão Vite + React
└── index.html                      # Template HTML com favicon e meta tags
```

---

## Paleta de cores

Definida em `tailwind.config.js` como cores customizadas do Tailwind:

| Token | Valor hex | Uso principal |
|---|---|---|
| `navy` | `#0A1828` | Fundo do Hero, Footer, navbar dark |
| `navy-light` | `#0f2236` | Fundo de cards no dark mode |
| `navy-dark` | `#060f18` | Fundo alternativo dark |
| `teal` | `#178582` | Cor primária — botões, links, destaques |
| `teal-light` | `#1da09c` | Hover states de teal |
| `teal-dark` | `#126a67` | Active states de teal |
| `gold` | `#BFA181` | Cor secundária — acentos, subtítulos |
| `gold-light` | `#cdb89a` | Hover states de gold |
| `gold-dark` | `#a88a68` | Active states de gold |

Além disso, variáveis CSS para os tokens semânticos do Tailwind (`--background`, `--foreground`, `--border`, `--muted`, `--muted-foreground`) são definidas em `src/index.css` com valores diferentes para light e dark mode.

---

## Tema dark/light

**Hook:** `src/hooks/useTheme.js`

- Lê a preferência salva em `localStorage` (`"theme": "dark" | "light"`)
- Se não houver preferência salva, detecta `prefers-color-scheme` do sistema operacional
- Aplica/remove a classe `.dark` no elemento `<html>` — Tailwind usa `darkMode: 'class'`
- Persiste a escolha do usuário no `localStorage` a cada mudança
- Exporta: `{ theme, toggleTheme, isDark }`

O toggle fica no canto direito do Header, visível em todas as seções.

---

## Seções implementadas

### 1. Hero (`#hero`)

**Arquivo:** `src/components/sections/HeroSection.jsx`

- Nome em destaque com animação `fade-in`
- Efeito typewriter alternando entre: "Desenvolvedor Front-end", "Especialista em React", "UI/UX Enthusiast"
- Bio curta estática
- Botão **Ver projetos** — ancora com scroll suave para `#projects`
- Botão **Baixar CV** — link `<a download>` apontando para `/public/cv.pdf`
- Ícones de redes sociais: GitHub, LinkedIn, Email
- Seta animada na base (bounce) para indicar scroll

**Hook usado:** `useTypewriter`

---

### 2. Sobre mim (`#about`)

**Arquivo:** `src/components/sections/AboutSection.jsx`

- Foto de perfil carregada de `/public/avatar.jpg` com `loading="lazy"`
- Decorações geométricas absolutas atrás da foto (quadrados teal e gold)
- Localização e email com ícones
- Bio em 3 parágrafos
- 3 cards de destaques numéricos (dados de `src/data/skills.js` — `highlights`)

---

### 3. Habilidades (`#skills`)

**Arquivo:** `src/components/sections/SkillsSection.jsx`
**Dados:** `src/data/skills.js`

- 3 grupos de habilidades: Frontend, Frameworks & Bibliotecas, Ferramentas
- Cada habilidade exibe nome, percentual e barra de progresso
- Barras acessíveis com `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

**Habilidades listadas:**

| Grupo | Habilidades |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Frameworks & Bibliotecas | React, Tailwind CSS, Shadcn/UI, React Router |
| Ferramentas | Git & GitHub, Vite, Supabase |

---

### 4. Projetos (`#projects`)

**Arquivo:** `src/components/sections/ProjectsSection.jsx`
**Dados:** `src/data/projects.js`

**Funcionalidades:**

- Grid responsivo: 1 coluna mobile, 2 colunas desktop
- Filtro por categoria com estado local (`useState`) — sem URL
- Categorias disponíveis: Todos, Frontend, Fullstack, DevOps

**Cada card de projeto exibe:**
- Imagem de capa com overlay de hover ("Ver imagem" + ícone de lupa)
- Nome e descrição curta (truncada em 2 linhas)
- Badges de stack
- Link para GitHub e link de demo (quando disponível)
- Botão "Ver detalhes"

**Modal de detalhe:**
- Abre ao clicar em "Ver detalhes" ou no nome do projeto
- Exibe imagem de capa clicável, descrição completa, bullets de destaques, stack e botões de ação
- Fecha com tecla `ESC` ou clique fora do modal

**Lightbox de imagem:**
- Abre ao clicar na imagem de capa (no card ou dentro do modal de detalhe)
- Exibe a imagem em tela cheia com fundo escurecido e blur
- Fecha com tecla `ESC` ou clique no overlay
- Componente: `ImageLightbox` (interno ao `ProjectsSection.jsx`)

**Projetos cadastrados:**

| Projeto | Stack | GitHub | Demo |
|---|---|---|---|
| Gerenciador de Tarefas | React, Vite, Tailwind CSS, Supabase, React Router | ✅ | ✅ Vercel |
| Sistema de Estoque de Switches | React, Vite, Python, Flask, MySQL | ✅ | — |

---

### 5. Experiência (`#experience`)

**Arquivo:** `src/components/sections/ExperienceSection.jsx`
**Dados:** `src/data/experience.js`

- Timeline vertical com ícone de maleta por entrada
- Cada entrada: cargo, empresa, período (badge teal), descrição, bullets de atividades, badges de stack
- Entrada atual marcada com período "Presente"

**Experiência cadastrada:**
- **Leste Telecom** — Auxiliar de Help-desk & Desenvolvedor Front-end (Mar 2025 – Presente)
  - Módulo de agendamento de reuniões
  - Board estilo Kanban
  - Sistema de estoque de switches de rede
  - Suporte técnico Help-desk

---

### 6. Formação (`#education`)

**Arquivo:** `src/components/sections/EducationSection.jsx`
**Dados:** `src/data/education.js`

- Separado em duas subseções: **Graduação** e **Certificações & Cursos**
- Cada card: ícone, nome do curso/instituição, período, badge "Em andamento" quando aplicável, descrição

**Formação cadastrada:**
- ADS — Análise e Desenvolvimento de Sistemas, UNinter (em andamento)
- Estudos independentes de Frontend com React (2024–2025)

---

### 7. Contato (`#contact`)

**Arquivo:** `src/components/sections/ContactSection.jsx`

**Formulário:**
- Campos: Nome, Email, Assunto, Mensagem
- Validação manual com `useState` — sem biblioteca externa
  - Todos os campos são obrigatórios
  - Email validado com regex
  - Mensagem com mínimo de 10 caracteres
- Erros exibidos campo a campo, limpando ao digitar

**Envio real via Formspree:**
- Endpoint: `https://formspree.io/f/mnjwbldr`
- `POST` com `Content-Type: application/json`
- Exibe tela de sucesso (✅) apenas quando `res.ok === true`
- Exibe mensagem de erro em caso de falha de rede ou resposta não-ok
- Mensagens chegam no email `johnsonisaqueramos@gmail.com`

**Links diretos:**
- GitHub, LinkedIn, Email com ícones

---

### 8. Footer

**Arquivo:** `src/components/layout/Footer.jsx`

- Fundo navy com borda teal sutil
- 3 colunas: logo + tagline, links de navegação, ícones de redes sociais
- Copyright com ano dinâmico (`new Date().getFullYear()`)

---

## Componentes UI

### `Button.jsx`

```jsx
<Button variant="primary" size="md" onClick={fn}>Texto</Button>
```

| Prop | Valores | Padrão |
|---|---|---|
| `variant` | `primary`, `outline`, `ghost`, `gold` | `primary` |
| `size` | `sm`, `md`, `lg` | `md` |
| `className` | string | `''` |

Suporta todos os atributos HTML de `<button>` via spread (`disabled`, `type`, etc.).

---

### `Badge.jsx`

```jsx
<Badge>React</Badge>
```

Chip de texto com fundo e borda teal. Aceita `className` para override.

---

### `Card.jsx`

```jsx
<Card className="p-6">conteúdo</Card>
```

Container com `bg-white dark:bg-navy-light`, borda e sombra. Aceita todos os atributos de `<div>`.

---

### `Modal.jsx`

```jsx
<Modal open={boolean} onClose={fn} title="Título">
  conteúdo
</Modal>
```

| Prop | Tipo | Descrição |
|---|---|---|
| `open` | boolean | Controla visibilidade |
| `onClose` | function | Chamada ao fechar (ESC ou clique fora) |
| `title` | string | Texto do cabeçalho |

- Bloqueia scroll do body enquanto aberto
- Remove listener e restaura scroll no cleanup do `useEffect`
- Renderiza `null` quando `open === false`

---

### `SocialIcons.jsx`

```jsx
<GithubIcon size={20} className="text-teal" />
<LinkedinIcon size={20} />
```

SVGs inline das marcas GitHub e LinkedIn. Necessário porque `lucide-react` v1.x removeu ícones de marcas. Aceitam `size` (número) e `className`.

---

## Hooks

### `useTheme()`

```js
const { theme, toggleTheme, isDark } = useTheme();
```

| Retorno | Tipo | Descrição |
|---|---|---|
| `theme` | `"dark" \| "light"` | Tema atual |
| `toggleTheme` | function | Alterna entre dark e light |
| `isDark` | boolean | Atalho para `theme === "dark"` |

---

### `useTypewriter(words, options?)`

```js
const text = useTypewriter(['Frontend Dev', 'React Specialist'], {
  typingSpeed: 100,   // ms por caractere ao digitar
  deletingSpeed: 60,  // ms por caractere ao apagar
  pauseMs: 1800,      // pausa antes de começar a apagar
});
```

Retorna a string atual sendo digitada/apagada. Cicla pelo array `words` indefinidamente.

---

### `useScrollSpy(sectionIds, offset?)`

```js
const activeId = useScrollSpy(['about', 'skills', 'projects'], 80);
```

| Parâmetro | Tipo | Padrão | Descrição |
|---|---|---|---|
| `sectionIds` | `string[]` | — | IDs das seções a observar |
| `offset` | number | `80` | Pixels do topo a descontar (altura do header) |

Retorna o `id` da seção atualmente visível. Usa listener de scroll passivo.

---

## Utilitário `cn()`

```js
import { cn } from '../lib/utils';

cn('base-class', condition && 'conditional-class', 'override-class');
```

Combina `clsx` (condicionalidade) com `tailwind-merge` (deduplicação de classes Tailwind conflitantes). Padrão idêntico ao `basic-task-manager`.

---

## Arquivos de dados

Todos em `src/data/`. Editar esses arquivos é suficiente para atualizar o conteúdo do portfólio sem mexer em componentes.

### `projects.js`

```js
export const projects = [
  {
    id: 1,
    name: 'Nome do projeto',
    description: 'Descrição longa',
    coverImage: '/project-cover.png',  // null para placeholder
    stack: ['React', 'Vite'],
    category: ['Frontend', 'Fullstack'],  // usado no filtro
    github: 'https://github.com/...',
    demo: 'https://...',  // null se não houver
    highlights: ['bullet 1', 'bullet 2'],
  },
];

export const projectCategories = ['Todos', 'Frontend', 'Fullstack', 'DevOps'];
```

### `experience.js`

```js
export const experiences = [
  {
    id: 1,
    company: 'Empresa',
    role: 'Cargo',
    period: 'Jan 2025 – Presente',
    current: true,
    description: 'Descrição geral',
    bullets: ['atividade 1', 'atividade 2'],
    stack: ['React', 'Python'],
  },
];
```

### `education.js`

```js
export const education = [
  {
    id: 1,
    institution: 'Instituição',
    degree: 'Nome do curso',
    period: '2025 – Em andamento',
    current: true,
    description: 'Descrição',
    type: 'graduation',
  },
];

export const certifications = [ /* mesma estrutura */ ];
```

### `skills.js`

```js
export const skillGroups = [
  {
    id: 1,
    label: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 80 },  // level: 0–100
    ],
  },
];

export const highlights = [
  { label: 'Projetos entregues', value: '3+' },
];
```

---

## Como rodar localmente

**Pré-requisito:** Node.js 18+ (via nvm ou instalação direta)

```bash
# Entrar na pasta
cd ~/Portifolio/portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:5173 (ou 5174 se a porta estiver ocupada)

# Build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## Deploy

O projeto é estático e pode ser publicado em qualquer serviço de hospedagem frontend:

| Serviço | Como publicar |
|---|---|
| **Vercel** | Conectar repositório GitHub → deploy automático |
| **Netlify** | Conectar repositório GitHub → deploy automático |
| **GitHub Pages** | Configurar `vite.config.js` com `base: '/repo-name/'` + GitHub Actions |

O comando de build é `npm run build`. A pasta gerada é `dist/`.

---

## Integração Formspree

O formulário de contato envia dados para o Formspree, que encaminha por email.

- **Endpoint:** `https://formspree.io/f/mnjwbldr`
- **Destino:** `johnsonisaqueramos@gmail.com`
- **Plano gratuito:** 50 envios/mês
- **Campos enviados:** `name`, `email`, `subject`, `message`

Para trocar o endpoint, editar a URL diretamente em `src/components/sections/ContactSection.jsx` na função `handleSubmit`.

---

## Assets públicos

| Arquivo | Descrição | Como trocar |
|---|---|---|
| `public/avatar.jpg` | Foto de perfil (seção Sobre) | Substituir o arquivo mantendo o nome |
| `public/cv.pdf` | Currículo para download | Substituir o arquivo mantendo o nome |
| `public/favicon.png` | Ícone da aba do navegador | Substituir o arquivo mantendo o nome |
| `public/project-task-manager.png` | Screenshot do projeto 1 | Substituir ou atualizar o caminho em `data/projects.js` |
| `public/project-estoque-switches.png` | Screenshot do projeto 2 | Substituir ou atualizar o caminho em `data/projects.js` |

---

## Decisões de arquitetura

| Decisão | Motivo |
|---|---|
| Modal em vez de rota para projetos | Mantém o contexto do portfólio, sem necessidade de `react-router-dom`, mais fluido |
| `lucide-react` em vez de `react-icons` | Consistência com o `basic-task-manager`; menor bundle |
| SVG inline para GitHub/LinkedIn | `lucide-react` v1.x removeu ícones de marcas; SVG inline evita dependência extra |
| Validação manual do formulário | Sem biblioteca externa; o formulário é simples o suficiente para não justificar dependência |
| Dados em arquivos `.js` separados | Todo o conteúdo do portfólio pode ser atualizado sem tocar em componentes |
| `darkMode: 'class'` | Permite toggle manual pelo usuário, independente da preferência do sistema |
