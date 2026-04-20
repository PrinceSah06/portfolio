export type Project = {
  title: string
  description: string
  techs: string[]
  github: string
}

export const projects: Project[] = [
  {
    title: 'Best Practice Backend',
    description:
      'A backend system built with Hono.js and Bun runtime. Includes JWT authentication, bcrypt password hashing, Redis caching, and API endpoint testing with Zod validation.',
    techs: ['Hono.js', 'Bun', 'MongoDB', 'Redis', 'TypeScript', 'Zod'],
    github: 'https://github.com/PrinceSah06/bestPracticeBackend',
  },
  {
    title: 'Code Editor',
    description:
      'A browser-based code editor with real-time collaboration using Socket.IO. Built with React on the frontend and Express with MongoDB on the backend.',
    techs: ['React', 'Socket.IO', 'Express', 'MongoDB', 'TypeScript'],
    github: 'https://github.com/PrinceSah06/Code_Editer',
  },
  {
    title: 'Chat App with AI',
    description:
      'A real-time chat application with Google Gemini AI integration. Features include Socket.IO messaging, Redis for session management, and syntax highlighted code responses.',
    techs: ['React', 'Express', 'Socket.IO', 'Google Gemini', 'MongoDB', 'Redis'],
    github: 'https://github.com/PrinceSah06/ChatAppWithAI_backend',
  },
  {
    title: 'Netflix GPT',
    description:
      'A Netflix-inspired streaming UI with GPT-powered movie recommendations. Uses Firebase for authentication and Redux Toolkit for global state management.',
    techs: ['React', 'Firebase', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/PrinceSah06/Netflix-Gpt',
  },
]