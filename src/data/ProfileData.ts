import type { SkillCategory } from "@/types";
import { Proportions, Brain, Server } from "lucide-react";

const features = [
    {
        key: 'frontend',
        name: 'Développement Frontend',
        description:
            'Expérimenté dans les frameworks frontend modernes comme React, Next.js et TypeScript. Création d\'interfaces réactives et conviviales avec un accent sur la performance et l\'accessibilité.',
        icon: Proportions,
    },
    {
        key: 'backend',
        name: 'Développement Backend',
        description:
            'Construction d\'applications côté serveur évolutives utilisant Node.js, Express, Supabase et travail avec diverses bases de données. Expérimenté dans le développement d\'API et l\'architecture système.',
        icon: Server,
    },
    {
        key: 'automation',
        name: 'Automatisation des Flux de Travail',
        description:
            'Expertise en n8n pour créer des flux de travail automatisés puissants, intégrant divers services et APIs pour optimiser les processus métier et augmenter la productivité.',
        icon: Brain,
    },
];

const skillCategories: SkillCategory[] = [
    {
        key: 'frontend',
        title: 'Frontend',
        color: 'bg-blue-100 dark:bg-slate-900',
        skills: [
            {
                name: 'React',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            },
            {
                name: 'TypeScript',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            },
            {
                name: 'Tailwind CSS',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            },
            {
                name: 'Next.js',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
            },
        ],
    },
    {
        key: 'backend',
        title: 'Backend',
        color: 'bg-green-50 dark:bg-lime-950',
        skills: [
            {
                name: 'Node.js',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            },
            {
                name: 'PostgreSQL',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
            },
            {
                name: 'Express',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            },
            {
                name: 'Supabase',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
            },
        ],
    },
    {
        key: 'ia_automation',
        title: 'IA & Automatisation',
        color: 'bg-purple-50 dark:bg-indigo-950',
        skills: [
            {
                name: 'n8n',
                logo: 'https://avatars.githubusercontent.com/u/45487711',
            },
            {
                name: 'Langchain',
                logo: 'data:image/webp;base64,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',
            },
            {
                name: 'Open Router',
                logo: 'data:image/webp;base64,UklGRkADAABXRUJQVlA4IDQDAABQHgCdASq/AOQAPp1OpEulpKQhp1iYMLATiWlu4XHg+QRimP7rGv4ifrhu+n0x4f8vwo/9A7LhSgfClA+FKB8KUD4UoHwpQPhSf8cNpLu0mx++X02U7N9WeMe1VGvpjdCtJFep3cjfVL4SGclatIZL/g98aXknHfXP8+MAfdn7Wy/8qKi23odJ0P3Ep77NlxYz2/flT5pAJnR4uurFuJydpPhUbFbzgvfbtvgujp5A31TkYXDQAqMtOsSW6jhj9/xyk+d3j4k2QuSBuBtk+dkVGp//SbpiffMUe/1Dgy0qIboR2wlA+FKB8KUD4UoHwpQPhSgfClA+FKBwAAD+/r0QAAACZXzo0ktTJUXzdnrZcLYHJnkjqAdlGJA7lB8j4VuPeYrlIFxnzvRZ2CaceWl9+n1wLVjw+k2K8Ki8oIhrMTKumFO3BFE2GA2RgLFbxE1D9OZhAKAR5BFBdsGvYEc0f136gbjwApPX1JYMJjODZfw4J7795tuXdYwbYbdvYQoc0QvSLm04hfBkDxgUyAaDxW5/M3KzUGzIOFY8C+A1GWJuQhGmq+BGdvLXjwduB3k2XVKlOHrFBewUUozJt7LtWmyYEeizz145MUI3KAgY54G54S84w2mo8Gc0Z19nv8New9ZfXMe4xgTDncVa8NlSdJzIDpbIkv+vlLy9INcAafYAgqFKNQZcMhIFeeXm80pCGMPi052nKWsEhk/Xf0Psi93tFvoa4f2tt3WVWY4fyxQIJtdQXZ7mUhFNGKU0LwAuetvRNVAba9MmwXCZiGKAtzRukQX8DvVuF1F7PEHxEdhRsIGtcEqURdmC19sacMKMShlbFAk4FNaylykv1d7Lem+SumP+nSVDm8dlSU2vxXO4g2/0SlFmHwtP9y/zjEPeyULFdEGL9upQXNMa3nsFOqM83db+rx5KQKnjLPNtsgBftWM3xteD2HVPxHiyID4aiz6F+ygvkBVoIFIGpDwcQfYbKSMXI5pR1tjxVrPmvUEgROW5LQwKuIe75KCE4yNqm81MO6DBu7HmaKf5rMvVTSWf3JrvM+Qabfwjq6zu4speeAj3Ox7FFDhzOeUTAAAAAAAA',
            },
        ],
    },
    {
        key: 'tools_devops',
        title: 'Outils & DevOps',
        color: 'bg-orange-50 dark:bg-yellow-950',
        skills: [
            {
                name: 'Git',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            },
            {
                name: 'Docker',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
            },
            {
                name: 'Linux',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
            },
        ],
    },
];

export { skillCategories, features };