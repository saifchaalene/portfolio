export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo?: string
  year: string
  type: string
  duration?: string
  detailedDescription?: string
  keyFeatures?: string[]
  metrics?: string[]
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'BIE CRM Modernization (Joomla 5 + CiviCRM 6 + React)',
    description:
      'Modernized an internal CRM by upgrading Joomla 3 to Joomla 5 and migrating CiviCRM 4.7 to CiviCRM 6. Built new REST endpoints and integrated a React + Vite frontend with Tailwind CSS, improving workflows and maintainability.',
    image: 'assets/images/projects/BIECRM.png',
    gallery: [
      'assets/images/projects/BIECRM-1.png',
      'assets/images/projects/BIECRM-2.png',
    ],
    tech: ['Joomla 5', 'CiviCRM', 'PHP 8.2', 'REST APIs', 'React', 'Vite', 'Tailwind CSS'],
    demo: 'https://lnkd.in/https://www.linkedin.com/in/chaalane-saif-116a85205/',
    github: 'https://github.com/saifchaalene/bie-crm-react',
    year: '2025',
    duration: 'Mar - Sept 2025',
    type: 'Professional',
  },
  {
    id: 'p2',
    title: 'FIDNESS — E-commerce Marketplace + Golang Microservices',
    description:
      'Contributed to an online marketplace storefront and core business modules (catalog, cart, coupons, orders, OTP authentication). Built Golang microservices and integrated external banking APIs for transaction validation and real-time callbacks.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    gallery: [
      'assets/images/projects/Findness-1.png',
      'assets/images/projects/Findness-2.png',

    ],
    tech: ['Golang', 'Microservices', 'APIs', 'Authentication', 'E-commerce'],
    github: 'https://github.com/saifchaalene',
    demo: 'https://github.com/saifchaalene',
    year: '2024',
    duration: 'Oct 2024 – Jan 2025',
    type: 'Professional',
  },
  {
    id: 'p3',
    title: 'WEVIOO — .NET REST Services + Angular Components',
    description:
      'Implemented RESTful backend services using C#/.NET and built reusable Angular components. Contributed to code quality improvements through reviews and documentation.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    gallery: [

    ],
    tech: ['C#', '.NET', 'REST APIs', 'Angular'],
    github: 'https://github.com/saifchaalene',
    year: '2024',
    duration: 'Jun – Aug 2024',
    type: 'Professional',
  },
  {
    id: 'p4',
    title: 'ALFA Computers — React Frontend + Node.js & MongoDB',
    description:
      'Built frontend modules in React.js integrated with REST APIs and supported backend development using Node.js and MongoDB. Assisted with deployment tasks and production rollout support.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop',
    gallery: [

    ],
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    demo: 'https://github.com/saifchaalene',
    year: '2023',
    duration: 'Aug 2023',
    type: 'Professional',
  },

  {
    id: 'p5',
    title: 'Music Streaming Platform',
    description:
      'Music streaming web application with playlist management, user sessions, and secure OAuth2/JWT authentication. Responsive UI built with Tailwind CSS.',
    image: 'assets/images/projects/music-1.png',
    gallery: [
      'assets/images/projects/music-2.png',
    ],
    tech: ['React', 'Node.js', 'Express', 'OAuth2', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/saifchaalene',
    demo: 'https://drive.google.com/file/d/1Hb0T5XlrdvgUkWc58DeaDPWw__mSVibq/view',
    year: '2024',
    duration: 'Apr – Jun 2024',
    type: 'Academic',
  },
  {
    id: 'p6',
    title: 'DevOps Foyer — CI/CD Pipeline',
    description:
      'Designed and deployed a CI/CD pipeline with automated build and testing, SonarQube analysis, Docker image generation, and Jenkins orchestration. Monitoring with Grafana and artifact storage on Nexus.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    gallery: [
    ],
    tech: ['CI/CD', 'Jenkins', 'Docker', 'SonarQube', 'Grafana', 'Nexus'],
    github: 'https://github.com/saifchaalene',
    demo: 'https://github.com/saifchaalene',
    year: '2024',
    duration: 'Mar – May 2024',
    type: 'Academic',
  },
  {
    id: 'p7',
    title: 'EpicJourneys — Travel Manager',
    description:
      'Java MVC application with a MySQL backend for managing events, itineraries, reservations, and user interactions.',
    image: 'assets/images/projects/Epicjourney.png',
    gallery: [
    ],
    tech: ['Java', 'MVC', 'MySQL'],
    github: 'https://github.com/saifchaalene',
    demo: 'https://drive.google.com/file/d/1WLpkPyckpkajilSxICuZu_TswELUuOG3/view?usp=drive_link',
    year: '2024',
    duration: 'Dec 2023 – Feb 2024',
    type: 'Academic',
  },
  {
    id: 'p8',
    title: 'Co & Co — Carpooling and Colocation Platform',
    description:
      'Full-stack platform combining a Spring Boot backend with an Angular frontend, offering listings, user profiles, and search features for students.',
    image: 'assets/images/projects/Carpooling.png',
    gallery: [
    ],
    tech: ['Spring Boot', 'Angular', 'REST APIs'],
    demo: 'https://github.com/saifchaalene',
    year: '2023',
    duration: 'Sept – Nov 2023',
    type: 'Academic',
  },
]
