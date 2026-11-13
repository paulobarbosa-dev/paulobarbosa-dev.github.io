export type Locale = 'pt' | 'en'

type Project = {
  num: string
  kind: string
  name: string
  description: string
  decisions: string[]
  stack: string[]
  links: { label: string; href: string }[]
  media:
    | { type: 'browser'; url: string; image: string; alt: string }
    | { type: 'phones'; images: { src: string; alt: string }[] }
}

type Job = { role: string; company: string; period: string; text: string; tags: string[] }

const projectsBase = {
  broadcast: {
    stack: ['React', 'TypeScript', 'Firebase', 'Cloud Functions', 'Firestore', 'Vitest', 'GitHub Actions'],
    demo: 'https://broadcast-paulofilho.web.app',
    code: 'https://github.com/luizalvesdev/broadcast',
  },
  financas: {
    stack: ['Expo', 'React Native', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Zod', 'Claude API'],
    code: 'https://github.com/luizalvesdev/financas',
  },
  prospect: {
    stack: ['TypeScript', 'Node.js', 'Fastify', 'React', 'SQLite', 'Amazon Bedrock', 'Cloudflare Workers'],
    code: 'https://github.com/luizalvesdev/lets-prospect',
  },
}

const marquee = [
  'C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'Node.js', 'NestJS', 'TypeScript', 'React', 'Next.js', 'Expo',
  'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'AWS', 'Firebase', 'Cloudflare',
]

const stackItems = [
  ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'Node.js', 'NestJS', 'Fastify', 'Express'],
  ['React', 'Next.js', 'Expo / React Native', 'Tailwind CSS'],
  ['PostgreSQL', 'Redis', 'RabbitMQ', 'SQLite', 'Firestore'],
  ['AWS (Lambda, EventBridge, Cognito, Bedrock)', 'Docker', 'GitHub Actions', 'Cloudflare', 'Firebase'],
  ['xUnit', 'Testcontainers', 'Vitest', 'Clean Architecture', 'DDD'],
]

const jobTags = [
  ['C#', '.NET', 'Node.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'AWS'],
  ['Node.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'React', 'Next.js'],
  ['Svelte', 'TypeScript'],
  ['Node.js', 'React', 'AWS Cognito'],
]

export const content = {
  pt: {
    lang: 'pt-BR',
    title: 'Luiz Alves · Software Engineer Full Stack',
    description:
      'Software Engineer Full Stack em Natal, RN. SaaS multi-tenant, e-commerce e sistemas financeiros com C#/.NET, Node.js e React.',
    nav: [
      ['projetos', 'Projetos'],
      ['experiencia', 'Experiência'],
      ['stack', 'Stack'],
      ['sobre', 'Sobre'],
      ['contato', 'Contato'],
    ],
    ui: {
      sections: 'Seções',
      language: 'Idioma',
      toLight: 'Alternar para tema claro',
      toDark: 'Alternar para tema escuro',
      lightLabel: 'Tema claro',
      darkLabel: 'Tema escuro',
      resume: 'Currículo',
      resumeFull: 'Baixar currículo (PDF)',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      skip: 'Pular para o conteúdo',
    },
    resumeFile: '/cv/LuizAlves-Curriculo-PT.pdf',
    hero: {
      hello: 'Olá, eu sou o Luiz.',
      title: ['Software Engineer', 'Full Stack'],
      subtitle: 'Construo sistemas que aguentam o dia a dia de um negócio: SaaS multi-tenant, e-commerce e financeiro, do banco de dados à interface, com ',
      subtitleStrong: 'C#/.NET, Node.js e React',
      cta1: 'Ver projetos',
      cta2: 'Falar comigo',
    },
    panel: {
      label: 'Ilustração decorativa: simulação de um painel de operação com contadores, gráfico e logs. Não são dados reais.',
      title: 'ops / simulação',
      live: 'demo',
      requests: 'Requisições',
      webhooks: 'Webhooks',
      jobs: 'Jobs',
      chart: 'req/s · últimos 60s',
      note: 'simulação · não são dados reais',
      decimal: ',',
      thousands: '.',
    },
    marquee,
    marqueeLabel: 'Tecnologias',
    impact: {
      title: ['Escala real, ', 'resultado medido'],
      items: ['lojas em uma plataforma multi-tenant', 'de produtos sincronizados', 'requisições HTTP por dia', 'no tempo de deploy', 'de processamento desnecessário'],
    },
    projects: {
      label: '01 / Projetos',
      title: 'Projetos',
      subtitle: 'Problema, decisões e resultado de cada um.',
      decisions: 'Decisões técnicas',
      list: [
        {
          num: '01',
          kind: 'SaaS · multi-tenant',
          name: 'Broadcast',
          description:
            'Plataforma SaaS em que cada cliente gerencia conexões, contatos e mensagens, com envio imediato ou agendado e status por destinatário em tempo real.',
          decisions: [
            'Agendamento processado por Cloud Functions, sem depender do navegador aberto.',
            'Schemas Zod compartilhados entre frontend e backend, uma única fonte de regras.',
            'Exclusão em cascata com prévia do que será apagado.',
          ],
          stack: projectsBase.broadcast.stack,
          links: [
            { label: 'Demo', href: projectsBase.broadcast.demo },
            { label: 'Código', href: projectsBase.broadcast.code },
          ],
          media: { type: 'browser', url: 'broadcast-paulofilho.web.app', image: '/projects/broadcast.webp', alt: 'Tela de envio de mensagens do Broadcast' },
        },
        {
          num: '02',
          kind: 'Mobile + Web · IA',
          name: 'Finanças',
          description:
            'App de finanças para casais e famílias no iOS, Android e web. Lançamento de gastos por linguagem natural com IA, cartões por fatura, parcelamentos e recorrentes.',
          decisions: [
            'Cada casa é um tenant isolado, com testes automatizados de isolamento entre casas.',
            'A IA só propõe o lançamento; o app valida com Zod antes de gravar.',
            'Compra no cartão cai na fatura certa pelo dia de fechamento.',
          ],
          stack: projectsBase.financas.stack,
          links: [{ label: 'Código', href: projectsBase.financas.code }],
          media: {
            type: 'phones',
            images: [
              { src: '/projects/financas-1.webp', alt: 'Lançamentos do mês no app Finanças' },
              { src: '/projects/financas-2.webp', alt: 'Painel de gastos por categoria no app Finanças' },
              { src: '/projects/financas-3.webp', alt: 'Recorrentes e lançamentos avulsos no app Finanças' },
            ],
          },
        },
        {
          num: '03',
          kind: 'B2B · IA',
          name: 'Lets Prospect',
          description:
            'Plataforma de prospecção B2B com aprovação humana em cada envio: descoberta, qualificação por IA, campanhas, envio, follow-ups e relatórios.',
          decisions: [
            'A IA cita a fonte e o código confere a citação palavra por palavra antes de usar o fato.',
            'Interface web e CLI sobre os mesmos casos de uso, com as mesmas regras.',
            'Conformidade de ponta a ponta: descadastro, supressão, robots.txt e confirmação antes do envio real.',
          ],
          stack: projectsBase.prospect.stack,
          links: [{ label: 'Código', href: projectsBase.prospect.code }],
          media: { type: 'browser', url: 'lets-prospect · empresas', image: '/projects/lets-prospect.webp', alt: 'Lista de empresas do Lets Prospect' },
        },
      ] as Project[],
    },
    experience: {
      label: '02 / Experiência',
      title: 'Experiência',
      jobs: [
        {
          role: 'Software Engineer',
          company: 'ecenture',
          period: 'nov 2025 – presente',
          text: 'Plataforma de e-commerce multi-tenant (dezenas de lojas, ~1M de produtos) e ERP com módulo financeiro em C#/.NET. Deploy de 40 para 5 minutos, −49,5% de processamento desnecessário, migração do financeiro legado sem perda de dados.',
          tags: jobTags[0],
        },
        {
          role: 'Software Engineer',
          company: 'iDw Soluções',
          period: 'ago 2025 – ago 2026',
          text: 'Software house. Backend de conciliação financeira do zero, Help Desk com chat em tempo real e SLA, módulos financeiros (QR Code, transferências, cartão virtual) e frontend React de uma plataforma SaaS.',
          tags: jobTags[1],
        },
        {
          role: 'Desenvolvedor Frontend',
          company: 'Super1',
          period: 'fev – ago 2025',
          text: 'Frontend de lojas virtuais e do site institucional. Aprendi Svelte no trabalho e entreguei em produção em poucas semanas.',
          tags: jobTags[2],
        },
        {
          role: 'Desenvolvedor Full Stack',
          company: 'Agência Gentileza',
          period: 'out 2024 – fev 2025',
          text: 'Plataforma de certificação de empresas e produtos do início à produção: autenticação com AWS Cognito, emissão de certificados em PDF e painel administrativo.',
          tags: jobTags[3],
        },
      ] as Job[],
    },
    stack: {
      label: '03 / Stack',
      title: 'Stack',
      groups: [
        ['Backend', stackItems[0]],
        ['Frontend e mobile', stackItems[1]],
        ['Dados e mensageria', stackItems[2]],
        ['Cloud e DevOps', stackItems[3]],
        ['Qualidade', stackItems[4]],
        ['IA aplicada', ['Claude API', 'Amazon Bedrock', 'Integrações com LLM com validação']],
      ] as [string, string[]][],
    },
    about: {
      label: '04 / Sobre',
      title: 'Sobre',
      photoAlt: 'Foto de Luiz Alves',
      text: 'Sou desenvolvedor em Natal, no Rio Grande do Norte. Gosto de entender o sistema de ponta a ponta, da requisição na API à fila, ao banco e à tela, e de resolver o problema certo antes de escrever código. Hoje divido meu tempo entre .NET e Node.js em produção, estudo Engenharia de Software e construo projetos próprios para testar ideias.',
      education: 'Engenharia de Software · Descomplica (em andamento) · Formação Explorer · Rocketseat',
    },
    contact: {
      label: '05 / Contato',
      title: 'Vamos conversar?',
      text: 'Estou aberto a vagas remotas de Software Engineer e Desenvolvedor Full Stack ou .NET.',
      email: 'E-mail',
      resumeValue: 'PDF · PT',
    },
    footer: { built: 'Feito com Astro' },
  },
  en: {
    lang: 'en',
    title: 'Luiz Alves · Full Stack Software Engineer',
    description:
      'Full Stack Software Engineer based in Natal, Brazil. Multi-tenant SaaS, e-commerce and financial systems with C#/.NET, Node.js and React.',
    nav: [
      ['projetos', 'Projects'],
      ['experiencia', 'Experience'],
      ['stack', 'Stack'],
      ['sobre', 'About'],
      ['contato', 'Contact'],
    ],
    ui: {
      sections: 'Sections',
      language: 'Language',
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
      lightLabel: 'Light theme',
      darkLabel: 'Dark theme',
      resume: 'Résumé',
      resumeFull: 'Download résumé (PDF)',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skip: 'Skip to content',
    },
    resumeFile: '/cv/LuizAlves-Resume-EN.pdf',
    hero: {
      hello: "Hi, I'm Luiz.",
      title: ['Full Stack', 'Software Engineer'],
      subtitle: "I build systems that hold up to a business's daily load: multi-tenant SaaS, e-commerce and finance, from the database to the interface, with ",
      subtitleStrong: 'C#/.NET, Node.js and React',
      cta1: 'See projects',
      cta2: 'Get in touch',
    },
    panel: {
      label: 'Decorative illustration: a simulated operations panel with counters, a chart and logs. Not real data.',
      title: 'ops / simulation',
      live: 'demo',
      requests: 'Requests',
      webhooks: 'Webhooks',
      jobs: 'Jobs',
      chart: 'req/s · last 60s',
      note: 'simulation · not real data',
      decimal: '.',
      thousands: ',',
    },
    marquee,
    marqueeLabel: 'Technologies',
    impact: {
      title: ['Real scale, ', 'measured results'],
      items: ['stores on one multi-tenant platform', 'products in sync', 'HTTP requests per day', 'deploy time', 'unnecessary processing'],
    },
    projects: {
      label: '01 / Projects',
      title: 'Projects',
      subtitle: 'The problem, decisions and outcome of each.',
      decisions: 'Technical decisions',
      list: [
        {
          num: '01',
          kind: 'SaaS · multi-tenant',
          name: 'Broadcast',
          description:
            'SaaS platform where each customer manages connections, contacts and messages, with instant or scheduled sending and real-time per-recipient status.',
          decisions: [
            'Scheduling runs on Cloud Functions, independent of an open browser.',
            'Zod schemas shared between frontend and backend, one source of rules.',
            'Cascade deletes with a preview of what will be removed.',
          ],
          stack: projectsBase.broadcast.stack,
          links: [
            { label: 'Demo', href: projectsBase.broadcast.demo },
            { label: 'Code', href: projectsBase.broadcast.code },
          ],
          media: { type: 'browser', url: 'broadcast-paulofilho.web.app', image: '/projects/broadcast.webp', alt: 'Broadcast message sending screen' },
        },
        {
          num: '02',
          kind: 'Mobile + Web · AI',
          name: 'Finanças',
          description:
            'Finance app for couples and families on iOS, Android and web. Natural-language expense entry with AI, card statements, installments and recurring items.',
          decisions: [
            'Each household is an isolated tenant, with automated cross-household isolation tests.',
            'The AI only proposes the entry; the app validates it with Zod before saving.',
            'Card purchases land on the right statement based on the closing day.',
          ],
          stack: projectsBase.financas.stack,
          links: [{ label: 'Code', href: projectsBase.financas.code }],
          media: {
            type: 'phones',
            images: [
              { src: '/projects/financas-1.webp', alt: 'Monthly entries in the Finanças app' },
              { src: '/projects/financas-2.webp', alt: 'Spending by category dashboard in the Finanças app' },
              { src: '/projects/financas-3.webp', alt: 'Recurring and one-off entries in the Finanças app' },
            ],
          },
        },
        {
          num: '03',
          kind: 'B2B · AI',
          name: 'Lets Prospect',
          description:
            'B2B prospecting platform with human approval on every send: discovery, AI qualification, campaigns, sending, follow-ups and reports.',
          decisions: [
            'The AI cites its source and the code checks the quote word for word before using the fact.',
            'Web UI and CLI on top of the same use cases, with the same rules.',
            'End-to-end compliance: unsubscribe, suppression lists, robots.txt and confirmation before real sends.',
          ],
          stack: projectsBase.prospect.stack,
          links: [{ label: 'Code', href: projectsBase.prospect.code }],
          media: { type: 'browser', url: 'lets-prospect · companies', image: '/projects/lets-prospect.webp', alt: 'Lets Prospect company list' },
        },
      ] as Project[],
    },
    experience: {
      label: '02 / Experience',
      title: 'Experience',
      jobs: [
        {
          role: 'Software Engineer',
          company: 'ecenture',
          period: 'Nov 2025 – present',
          text: 'Multi-tenant e-commerce platform (dozens of stores, ~1M products) and an ERP with a financial module in C#/.NET. Deploy time from 40 to 5 minutes, −49.5% unnecessary processing, legacy finance migration with no data loss.',
          tags: jobTags[0],
        },
        {
          role: 'Software Engineer',
          company: 'iDw Soluções',
          period: 'Aug 2025 – Aug 2026',
          text: 'Software house. Built a financial reconciliation backend from scratch, a Help Desk with real-time chat and SLA, financial modules (QR code, transfers, virtual card) and the React frontend of a SaaS platform.',
          tags: jobTags[1],
        },
        {
          role: 'Frontend Developer',
          company: 'Super1',
          period: 'Feb – Aug 2025',
          text: 'Frontend for online stores and the company website. Learned Svelte on the job and shipped to production within weeks.',
          tags: jobTags[2],
        },
        {
          role: 'Full Stack Developer',
          company: 'Agência Gentileza',
          period: 'Oct 2024 – Feb 2025',
          text: 'Company and product certification platform from day one to production: AWS Cognito auth, PDF certificate generation and an admin panel.',
          tags: jobTags[3],
        },
      ] as Job[],
    },
    stack: {
      label: '03 / Stack',
      title: 'Stack',
      groups: [
        ['Backend', stackItems[0]],
        ['Frontend & mobile', stackItems[1]],
        ['Data & messaging', stackItems[2]],
        ['Cloud & DevOps', stackItems[3]],
        ['Quality', stackItems[4]],
        ['Applied AI', ['Claude API', 'Amazon Bedrock', 'LLM integrations with validation']],
      ] as [string, string[]][],
    },
    about: {
      label: '04 / About',
      title: 'About',
      photoAlt: 'Photo of Luiz Alves',
      text: "I'm a developer based in Natal, Brazil. I like understanding systems end to end, from the API request to the queue, the database and the screen, and solving the right problem before writing code. Today I split my time between .NET and Node.js in production, study Software Engineering and build my own projects to test ideas.",
      education: 'Software Engineering · Descomplica (in progress) · Explorer Program · Rocketseat',
    },
    contact: {
      label: '05 / Contact',
      title: "Let's talk?",
      text: "I'm open to remote Software Engineer, Full Stack or .NET developer roles.",
      email: 'Email',
      resumeValue: 'PDF · EN',
    },
    footer: { built: 'Built with Astro' },
  },
}

export type Content = (typeof content)['pt']
