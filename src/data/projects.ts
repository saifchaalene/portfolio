export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  demo: string
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
    title: 'Moving CRM Platform',
    description: 'A comprehensive CRM platform built with React and Django, featuring user roles, Docker containerization, and CI/CD pipeline integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    tech: ['React', 'Django', 'MySQL', 'Docker'],
    demo: 'https://github.com/SamehAMKouki',
    year: '2024',
    duration: '3 months',
    type: 'Professional'
  },
  {
    id: 'p2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Angular frontend and Django REST API backend, containerized with Docker and automated CI/CD.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop',
    tech: ['Angular', 'Django', 'MySQL', 'Docker'],
    github: 'https://github.com/Majicl21/E-commerce-site',
    demo: 'https://github.com/Majicl21/E-commerce-site',
    year: '2024',
    duration: '3 months',
    type: 'Professional'
  },
  {
    id: 'p3',
    title: 'Healthcare Insurance App',
    description: 'Enterprise healthcare application with Angular frontend and Spring Boot backend, featuring role-based access control and improved onboarding efficiency.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    tech: ['Angular', 'Spring Boot', 'Scrum', 'UML'],
    demo: 'https://github.com/SamehAMKouki',
    year: '2023',
    duration: '3 months',
    type: 'Professional'
  },
  {
    id: 'p4',
    title: 'Inventory Management System',
    description: 'Automated inventory tracking system built with Laravel and MySQL, reducing manual reconciliation effort by 50% through efficient stock and order management.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop',
    tech: ['Laravel', 'PHP', 'MySQL'],
    demo: 'https://github.com/SamehAMKouki',
    year: '2022',
    duration: '2 months',
    type: 'Professional'
  },
  {
    id: 'p5',
    title: 'Timesheet Management',
    description: 'Modern timesheet tracking application with React frontend and .NET backend, featuring Docker containerization and automated CI/CD deployment pipeline.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop',
    tech: ['React', '.NET', 'Docker', 'CI/CD'],
    github: 'https://github.com/Majicl21/PDL',
    demo: 'https://drive.google.com/file/d/1Hb0T5XlrdvgUkWc58DeaDPWw__mSVibq/view',
    year: '2024',
    type: 'Academic',
    detailedDescription: 'The Timesheet Management System is a secure, feature-rich platform built to streamline employee time tracking, project management, and attendance monitoring. With a modern, responsive UI and advanced analytics, it delivers real-time insights that enhance efficiency and decision-making. Employees can log work hours, submit leave requests, and track daily tasks with ease. Managers can review and approve timesheets quickly, while admins manage users, roles, and projects effortlessly.',
    keyFeatures: [
      'Intuitive employee time logging and leave request submission',
      'Fast manager review and approval workflows',
      'Comprehensive admin panel for users, roles, and projects',
      'Advanced statistics on total users and work hours (daily/weekly/monthly)',
      'Visual dashboards with bar and curve charts showing hours per employee',
      'Project tracking trends and analytics',
      'Interactive calendar for tasks, leaves, and timesheets management',
      'Day, week, and month views for better time visualization',
      'Smart filters and dynamic tables for efficient data management',
      'Fully responsive design for desktop and mobile devices',
      'Automated statistics generation and reporting'
    ],
    metrics: [
      'Up to 40% faster approvals with intuitive workflows',
      'Reduces manual reporting effort by 60% through automation',
      'Real-time insights for enhanced decision-making',
      'Improved accuracy in time tracking and attendance',
      'Streamlined workforce planning capabilities'
    ]
  },
  {
    id: 'p6',
    title: 'Freelancer Platform',
    description: 'Full-stack freelancing marketplace connecting clients with freelancers, built with React and Django with real-time messaging and project management features.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    tech: ['React', 'Django'],
    github: 'https://github.com/Majicl21/Django-JS',
    demo: 'https://github.com/Majicl21/Django-JS',
    year: '2023',
    type: 'Academic'
  },
  {
    id: 'p7',
    title: 'Training Management System',
    description: 'Comprehensive training management platform with Angular and Flutter mobile app, powered by Spring Boot microservices architecture for scalability.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    tech: ['Angular', 'Flutter', 'Spring Boot', 'Microservices'],
    github: 'https://github.com/Majicl21/Integration-project',
    demo: 'https://github.com/Majicl21/Integration-project',
    year: '2022',
    type: 'Academic'
  }
]
