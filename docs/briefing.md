# Briefing do portfólio: Paulo Barbosa

Briefing para o design (Claude Design) e, depois, para o desenvolvimento. Cobre objetivo, público, estrutura, textos finais em PT e EN, direção visual e animações.

## 1. Objetivo e público

- **Objetivo:** conseguir vaga remota de Desenvolvedor Full Stack ou .NET no Brasil.
- **Público principal:** recrutadores de tecnologia e gestores de engenharia, que passam os olhos em menos de um minuto. Secundário: recrutadores de fora, que veem a versão em inglês.
- **O que precisam entender em 10 segundos:** quem eu sou (Full Stack, C#/.NET + Node.js), que entrego em escala real (números) e que estou aberto a vagas remotas.
- **Tom:** direto, seguro, sem jargão de marketing. Números e decisões concretas no lugar de adjetivos.

## 2. Restrições técnicas (para orientar o design)

- Página única com âncoras, mais seletor PT/EN (`/` = PT, `/en` = EN).
- Endereço sem domínio próprio por enquanto: `paulobarbosa-dev.github.io` (GitHub Pages). Alternativa: Cloudflare Pages (`*.pages.dev`).
- Stack prevista: Astro + ilhas React, Tailwind, Motion, GSAP ScrollTrigger, Lenis.
- Precisa funcionar em celular (360px) sem rolagem horizontal.
- Respeitar `prefers-reduced-motion`: sem animação, tudo aparece no estado final.
- Tema escuro por padrão, com opção de tema claro.

## 3. Direção visual

- **Clima:** técnico e refinado. Fundo escuro com profundidade (grade de pontos sutil, brilho suave), bastante respiro e tipografia forte.
- **Consistência de marca:** o banner do LinkedIn já usa fundo escuro `#0b0f19 → #151a2e`, destaque roxo `#6d5dfc` / `#a9a3ff` e textura de pontos. Manter a mesma família, para perfil, banner e site parecerem uma identidade só.
- **Tipografia:** Inter Display (títulos), Inter (texto), JetBrains Mono (rótulos, números, detalhes de código, numeração das seções).
- **Elementos de referência:**
  - Seções numeradas (`01 / Projetos`) em fonte mono.
  - Cards de projeto como estudos de caso, com prints grandes.
  - Números grandes e legíveis na seção de impacto.
- **Referências:** portfolio.hanrry.top (projetos como estudo de caso, hero com simulação de produto, linha do tempo) e yudiganeko.com (prova social e métricas nas experiências). Não copiar layout nem visual, só a ideia de cada seção.

## 4. Animações

As animações devem parecer caprichadas sem atrapalhar a leitura. Cada uma serve ao conteúdo.

- **Hero:** texto revelado por linha ou palavra ao carregar. Ao lado, a animação de sistema ao vivo (ver 5.1).
- **Rolagem suave** (Lenis).
- **Seções:** fade + deslocamento sutil ao entrar na tela (ScrollTrigger), com atraso escalonado entre itens.
- **Números:** contagem crescente quando entram na tela.
- **Stack:** faixa em loop infinito, que pausa com o mouse em cima.
- **Projetos:** print com parallax leve e zoom suave no hover; card com inclinação ou brilho seguindo o cursor (só no computador).
- **Linha do tempo:** linha que se preenche conforme a rolagem.
- **Microinterações:** botões e links com estado de hover; seletores de idioma e tema com transição suave.
- **Evitar:** cursor customizado, 3D pesado, tela de carregamento na entrada, qualquer coisa que atrase ver o conteúdo.

## 5. Estrutura e textos

### 5.0 Cabeçalho (fixo)
- Logo: `paulo.` ou `PB` em fonte mono.
- Menu de âncoras: Projetos, Experiência, Stack, Sobre, Contato / Projects, Experience, Stack, About, Contact.
- Seletor PT | EN, seletor de tema e botão "Currículo" / "Résumé" (PDF).

### 5.1 Hero

| | PT | EN |
|---|---|---|
| Selo | Disponível para vagas remotas | Open to remote roles |
| Saudação | Olá, eu sou o Paulo. | Hi, I'm Paulo. |
| Título | Software Engineer Full Stack | Full Stack Software Engineer |
| Subtítulo | Construo sistemas que aguentam o dia a dia de um negócio: SaaS multi-tenant, e-commerce e financeiro, do banco de dados à interface, com C#/.NET, Node.js e React. | I build systems that hold up to a business's daily load: multi-tenant SaaS, e-commerce and finance, from the database to the interface, with C#/.NET, Node.js and React. |
| Botão 1 | Ver projetos | See projects |
| Botão 2 | Falar comigo | Get in touch |

**Conceito visual do hero (sistema ao vivo):** um card escuro de "painel de operação" com três contadores subindo em tempo real (requisições, webhooks, jobs processados), um gráfico de linha pequeno e um feed de logs rolando em mono (`POST /orders 201 · 38ms`, `webhook mercadolivre ok`, `job sync-stock done`). Passa a ideia de "sistemas em produção, em escala", que é meu ponto forte, sem depender de um projeto específico. Todos os dados são ilustrativos.

### 5.2 Faixa de stack (loop)
C# · .NET · ASP.NET Core · Entity Framework · Node.js · NestJS · TypeScript · React · Next.js · Expo · PostgreSQL · Redis · RabbitMQ · Docker · AWS · Firebase · Cloudflare

### 5.3 Impacto em números
Título: **Escala real, resultado medido** / **Real scale, measured results**

| Número | PT | EN |
|---|---|---|
| 87 | lojas em uma plataforma multi-tenant | stores on one multi-tenant platform |
| ~1M | de produtos sincronizados | products in sync |
| 500k+ | requisições HTTP por dia | HTTP requests per day |
| 40 → 5 min | no tempo de deploy | deploy time |
| −49,5% | de processamento desnecessário | unnecessary processing |

### 5.4 Projetos (`01 / Projetos`)
Título: **Projetos** / **Projects**. Subtítulo: **Problema, decisões e resultado de cada um.** / **The problem, decisions and outcome of each.**

Cada card tem: número, tipo do projeto, nome, descrição, "Decisões técnicas" / "Technical decisions" (3 itens), tags de stack, links e print. Os prints já estão em `~/Pictures/broadcast-linkedin/`, `~/Pictures/financas-linkedin/` e `~/Pictures/lets-prospect-linkedin/`.

**01 · Broadcast** (SaaS · multi-tenant)
- PT: Plataforma SaaS em que cada cliente gerencia conexões, contatos e mensagens, com envio imediato ou agendado e status por destinatário em tempo real.
- EN: SaaS platform where each customer manages connections, contacts and messages, with instant or scheduled sending and real-time per-recipient status.
- Decisões:
  - PT: Agendamento processado por Cloud Functions, sem depender do navegador aberto. / EN: Scheduling runs on Cloud Functions, independent of an open browser.
  - PT: Schemas Zod compartilhados entre frontend e backend, uma única fonte de regras. / EN: Zod schemas shared between frontend and backend, one source of rules.
  - PT: Exclusão em cascata com prévia do que será apagado. / EN: Cascade deletes with a preview of what will be removed.
- Stack: React, TypeScript, Firebase, Cloud Functions, Firestore, Vitest, GitHub Actions
- Links: Demo (https://broadcast-paulofilho.web.app) · Código (https://github.com/paulobarbosa-dev/broadcast)

**02 · Finanças** (Mobile + Web · IA)
- PT: App de finanças para casais e famílias no iOS, Android e web. Lançamento de gastos por linguagem natural com IA, cartões por fatura, parcelamentos e recorrentes.
- EN: Finance app for couples and families on iOS, Android and web. Natural-language expense entry with AI, card statements, installments and recurring items.
- Decisões:
  - PT: Cada casa é um tenant isolado, com testes automatizados de isolamento entre casas. / EN: Each household is an isolated tenant, with automated cross-household isolation tests.
  - PT: A IA só propõe o lançamento; o app valida com Zod antes de gravar. / EN: The AI only proposes the entry; the app validates it with Zod before saving.
  - PT: Compra no cartão cai na fatura certa pelo dia de fechamento. / EN: Card purchases land on the right statement based on the closing day.
- Stack: Expo, React Native, TypeScript, PostgreSQL, Drizzle, Zod, Claude API
- Links: Código (https://github.com/paulobarbosa-dev/financas)

**03 · Lets Prospect** (B2B · IA)
- PT: Plataforma de prospecção B2B com aprovação humana em cada envio: descoberta, qualificação por IA, campanhas, envio, follow-ups e relatórios.
- EN: B2B prospecting platform with human approval on every send: discovery, AI qualification, campaigns, sending, follow-ups and reports.
- Decisões:
  - PT: A IA cita a fonte e o código confere a citação palavra por palavra antes de usar o fato. / EN: The AI cites its source and the code checks the quote word for word before using the fact.
  - PT: Interface web e CLI sobre os mesmos casos de uso, com as mesmas regras. / EN: Web UI and CLI on top of the same use cases, with the same rules.
  - PT: Conformidade de ponta a ponta: descadastro, supressão, robots.txt e confirmação antes do envio real. / EN: End-to-end compliance: unsubscribe, suppression lists, robots.txt and confirmation before real sends.
- Stack: TypeScript, Node.js, Fastify, React, SQLite, Amazon Bedrock, Cloudflare Workers
- Links: Código (https://github.com/paulobarbosa-dev/lets-prospect)

**04 · Projeto .NET** (espaço reservado, em construção)
- Desenhar um 4º card que possa ficar escondido até o projeto estar pronto.

### 5.5 Experiência (`02 / Experiência`)
Título: **Experiência** / **Experience**. Linha do tempo vertical.

**Software Engineer · ecenture** · nov 2025 – presente / present
- PT: Plataforma de e-commerce multi-tenant (87 lojas, ~1M de produtos) e ERP com módulo financeiro em C#/.NET. Deploy de 40 para 5 minutos, −49,5% de processamento desnecessário, migração do financeiro legado sem perda de dados.
- EN: Multi-tenant e-commerce platform (87 stores, ~1M products) and an ERP with a financial module in C#/.NET. Deploy time from 40 to 5 minutes, −49.5% unnecessary processing, legacy finance migration with no data loss.
- Tags: C#, .NET, Node.js, PostgreSQL, Redis, RabbitMQ, AWS

**Software Engineer · iDw Soluções** · ago 2025 – ago 2026 / Aug 2025 – Aug 2026
- PT: Software house. Backend de conciliação financeira do zero, Help Desk com chat em tempo real e SLA, módulos financeiros (QR Code, transferências, cartão virtual) e frontend React de uma plataforma SaaS.
- EN: Software house. Built a financial reconciliation backend from scratch, a Help Desk with real-time chat and SLA, financial modules (QR code, transfers, virtual card) and the React frontend of a SaaS platform.
- Tags: Node.js, TypeScript, PostgreSQL, Socket.io, React, Next.js

**Desenvolvedor Frontend · Super1** · fev – ago 2025 / Feb – Aug 2025
- PT: Frontend de lojas virtuais e do site institucional. Aprendi Svelte no trabalho e entreguei em produção em poucas semanas.
- EN: Frontend for online stores and the company website. Learned Svelte on the job and shipped to production within weeks.
- Tags: Svelte, TypeScript

**Desenvolvedor Full Stack · Agência Gentileza** · out 2024 – fev 2025 / Oct 2024 – Feb 2025
- PT: Plataforma de certificação de empresas e produtos do início à produção: autenticação com AWS Cognito, emissão de certificados em PDF e painel administrativo.
- EN: Company and product certification platform from day one to production: AWS Cognito auth, PDF certificate generation and an admin panel.
- Tags: Node.js, React, AWS Cognito

### 5.6 Stack por categoria (`03 / Stack`)

| PT | EN | Itens |
|---|---|---|
| Backend | Backend | C#, .NET, ASP.NET Core, Entity Framework Core, Node.js, NestJS, Fastify, Express |
| Frontend e mobile | Frontend & mobile | React, Next.js, Expo / React Native, Tailwind CSS |
| Dados e mensageria | Data & messaging | PostgreSQL, Redis, RabbitMQ, SQLite, Firestore |
| Cloud e DevOps | Cloud & DevOps | AWS (Lambda, EventBridge, Cognito, Bedrock), Docker, GitHub Actions, Cloudflare, Firebase |
| Qualidade | Quality | xUnit, Testcontainers, Vitest, Clean Architecture, DDD |
| IA aplicada | Applied AI | Claude API, Amazon Bedrock, integrações com LLM com validação |

### 5.7 Sobre (`04 / Sobre`)
Foto de perfil (a mesma do LinkedIn) e texto curto.

- PT: Sou desenvolvedor em Natal, no Rio Grande do Norte. Gosto de entender o sistema de ponta a ponta, da requisição na API à fila, ao banco e à tela, e de resolver o problema certo antes de escrever código. Hoje divido meu tempo entre .NET e Node.js em produção, estudo Engenharia de Software e construo projetos próprios para testar ideias.
- EN: I'm a developer based in Natal, Brazil. I like understanding systems end to end, from the API request to the queue, the database and the screen, and solving the right problem before writing code. Today I split my time between .NET and Node.js in production, study Software Engineering and build my own projects to test ideas.
- Formação (linha pequena): Engenharia de Software · Descomplica (em andamento / in progress) · Formação Explorer · Rocketseat

### 5.8 Contato (`05 / Contato`)
- Título PT: **Vamos conversar?** Texto: Estou aberto a vagas remotas de Software Engineer e Desenvolvedor Full Stack ou .NET.
- Título EN: **Let's talk?** Texto: I'm open to remote Software Engineer, Full Stack or .NET developer roles.
- Links: E-mail (paulobarbosacode@gmail.com) · LinkedIn (https://www.linkedin.com/in/paulobarbosa-dev/) · GitHub (https://github.com/paulobarbosa-dev) · Currículo (PDF)
- Rodapé: © 2026 Paulo Barbosa · Feito com Astro / Built with Astro

## 6. Pendências

- [x] E-mail de contato: paulobarbosacode@gmail.com
- [x] LinkedIn: https://www.linkedin.com/in/paulobarbosa-dev/
- [ ] Foto de perfil em alta resolução (a atual tem 383×384 px: serve para avatar pequeno, mas o ideal é 800 px ou mais)
- [ ] Currículo em PDF (PT e EN)
- [ ] Projeto .NET (4º card), quando estiver pronto
