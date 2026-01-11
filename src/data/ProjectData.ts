import sahdcn from '@/assets/icon/shadcn.svg'
import welia from '@/assets/image/screenWelia.png'
import n8n from '@/assets/image/screenN8n.png'
import greencraft from '@/assets/image/screenGreenCraft.png'
import ikaly from '@/assets/image/screenIkaly.png'

const projects = [
    {
        id: 1,
        key: 'n8n_email',
        title: 'Automatisation Email avec n8n',
        date: '20-03-2024',
        version: '1.0',
        description:
            'Workflow n8n pour la gestion automatisée et intelligente des emails avec catégorisation et étiquetage.',
        image: n8n,
        types: ['Automatisation', 'Workflow', 'Productivité'],
        technologies: [
            'n8n',
            'Node.js',
            'Docker',
            'PostgreSQL'
        ],
        features: [
            'Tri automatique des emails par catégorie',
            'Création et application intelligente de labels',
            'Classification basée sur le contenu et l\'expéditeur',
            'Système de règles personnalisables',
            'Historique des actions et reporting'
        ],
        details:
            "Développement d'un workflow n8n pour automatiser la gestion des emails. Le système analyse, catégorise et étiquette automatiquement les emails entrants, créant de nouveaux labels si nécessaire. Une solution pour optimiser la productivité et maintenir une boîte mail organisée.",
        githubUrl: 'https://github.com/GiovaniF25/email-automation-n8n',
        liveUrl: null,
    },
    {
        id: 2,
        key: 'devfest',
        title: 'Hackathon DevFest – IA & Économie Circulaire',
        date: '11-05-2024',
        version: '1.0',
        description:
            'Frontend d\'une solution IA pour la gestion durable des ressources, dans le cadre du DevFest Hackathon.',
        image: greencraft,
        types: ['Hackathon', 'Web', 'IA', 'Environnement'],
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'shadcn/ui',
            'Supabase',
            'PostgreSQL',
        ],
        features: [
            'Interface intuitive pour visualiser l\'impact écologique',
            'Formulaires dynamiques alimentés par Supabase',
            'Design responsive et UX épurée',
            'Architecture modulaire adaptée aux APIs IA',
            'Optimisation des performances côté client',
        ],
        details:
            "Développement du front d'une plateforme éco-responsable intégrant l'IA, permettant aux utilisateurs de suivre et d'améliorer leur impact sur l'environnement. Réalisé lors du Hackathon DevFest avec une approche UI/UX moderne.",
        githubUrl: 'https://github.com/GiovaniF25/devfest-eco-ai',
        liveUrl: null,
    },
    {
        id: 3,
        key: 'welia',
        title: 'Hackathon HIU – Welia, IA pour actions positives',
        date: '17-03-2024',
        version: '1.0',
        description:
            'Application front pour valoriser les bonnes actions quotidiennes, gamifiées et automatisées par l\'IA.',
        image: welia,
        types: ['Hackathon', 'Web', 'IA', 'Gamification'],
        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'shadcn/ui',
            'Supabase',
            'PostgreSQL',
            'Docker',
        ],
        features: [
            'Suivi des bonnes actions via une interface dynamique',
            'Points et récompenses automatisés avec logique IA',
            'Thèmes clairs/sombres avec accessibilité renforcée',
            'Composants UI réutilisables (shadcn)',
            'Feedback utilisateur instantané',
        ],
        details:
            "J'ai participé au développement front de Welia, une app qui automatise la reconnaissance des comportements positifs via des mécanismes de scoring IA. Projet présenté lors du Hackathon Inter Universitaire (HIU).",
        githubUrl: 'https://github.com/GiovaniF25/welia-hackathon-hiu',
        liveUrl: null,
    },
    {
        id: 4,
        key: 'restaurant_app',
        title: 'Veille Technologique – App de Réservation de Restaurants',
        date: '04-02-2024',
        version: '1.0',
        description:
            'Application de réservation de tables pour les clients et de gestion pour les restaurateurs.',
        image: ikaly,
        types: ['Web', 'Frontend', 'UX/UI'],
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        features: [
            'Système de réservation fluide pour les utilisateurs',
            'Tableau de bord pour restaurateurs (présence, tables)',
            'Composants UI modernes et responsives',
            'Filtres avancés (date, heure, nombre de personnes)',
            'Expérience mobile-first',
        ],
        details:
            "Projet de veille technologique sur une app intuitive permettant aux clients de réserver une table facilement et aux restaurateurs de gérer leurs réservations en temps réel via une interface soignée.",
        githubUrl: 'https://github.com/GiovaniF25/restaurant-reservation-app',
        liveUrl: null,
    },
];

const techIcons: Record<string, string> = {
    React:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js':
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    TypeScript:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS':
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    PostgreSQL:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'shadcn/ui':
        sahdcn,
    Python:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Raspberry Pi':
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg',
    InfluxDB:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg',
    Grafana:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
    TensorFlow:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'Vue.js':
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Node.js':
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    Express:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    MongoDB:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    Docker:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    Supabase:
        'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
    'n8n':
        'https://avatars.githubusercontent.com/u/45487711'
};

export { projects, techIcons };