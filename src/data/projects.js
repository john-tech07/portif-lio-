export const projects = [
  {
    id: 1,
    name: 'Gerenciador de Tarefas',
    description:
      'Aplicação web para organização pessoal de tarefas com autenticação, persistência em nuvem e interface responsiva. Permite criar, editar, filtrar e reordenar tarefas com drag and drop.',
    coverImage: '/project-task-manager.png',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'React Router'],
    category: ['Frontend', 'Fullstack'],
    github: 'https://github.com/John-tech07/basic-task-manager',
    demo: 'https://gerenciador-tarefas-theta-sepia.vercel.app',
    highlights: [
      'Autenticação de usuários com Supabase Auth',
      'Persistência em tempo real com PostgreSQL',
      'Drag and drop para reordenação de tarefas',
      'Filtros por status e suporte a dark mode',
    ],
  },
  {
    id: 2,
    name: 'Sistema de Estoque de Switches',
    description:
      'Sistema web fullstack para controle de estoque de switches de rede com autenticação, CRUD completo e API REST. Desenvolvido como projeto de integração DevOps na Leste Telecom.',
    coverImage: '/project-estoque-switches.png',
    stack: ['React', 'Vite', 'Python', 'Flask', 'MySQL'],
    category: ['Fullstack', 'DevOps'],
    github: 'https://github.com/John-tech07/estoque-switches',
    demo: null,
    highlights: [
      'API REST com Flask e autenticação segura',
      'CRUD completo de equipamentos de rede',
      'Controle de status: Ativo, Inativo e Em Manutenção',
      'Estrutura preparada para Docker e CI/CD',
    ],
  },
];

export const projectCategories = ['Todos', 'Frontend', 'Fullstack', 'DevOps'];
