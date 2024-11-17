import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";



export const histories = [
    {
        title: "Konsep & Pembangunan",
        iconBg: "#accbe1",
        date: "1880an",
        points: [
            "Pada pertengahan 1880-an, insinyur Maurice Koechlin dan Émile Nouguier di bawah bimbingan Gustave Eiffel mengusulkan desain menara besi setinggi 300 meter untuk Pameran Dunia 1889. Setelah melalui protes dari seniman dan arsitek, konstruksi dimulai pada 1887 dan selesai pada Maret 1889, menjadikannya struktur tertinggi di dunia."
        ],
    },
    {
        title: "Ancaman Pembongkaran",
        iconBg: "#fbc3bc",
        date: "1890 - 1910",
        points: [
            "Setelah Pameran Dunia, Menara Eiffel hampir dibongkar karena izin mendirikan hanya berlaku 20 tahun. Namun, Gustave Eiffel berhasil menyelamatkannya dengan membuktikan kegunaannya sebagai alat komunikasi radio, yang mulai populer dan bernilai strategis bagi Prancis."
        ],
    },
    {
        title: "Era Komunikasi Radio",
        iconBg: "#b7e4c7",
        date: "1920 - 1930",
        points: [
            "Menara Eiffel menjadi pusat komunikasi nirkabel, dengan antena yang mendukung siaran radio dan komunikasi internasional. Pada masa ini, terjadi kejadian penipuan terkenal ketika seorang pria mengaku “menjual” menara sebagai besi bekas, yang mencatat sejarah unik tersendiri.",
        ],
    },
    {
        title: "Nazi & Perang Dunia II",
        iconBg: "#a2d2ff",
        date: "1940an",
        points: [
            "Saat Perang Dunia II, kabel lift Menara Eiffel dipotong untuk mencegah akses tentara Nazi. Meskipun ada okupasi Jerman, menara ini menjadi simbol ketahanan Prancis, berdiri tegak hingga akhir perang dan kemudian dipulihkan untuk kembali berfungsi penuh.",
        ],
    },
    {
        title: "Renovasi & Modernisasi",
        iconBg: "#de32ff",
        date: "1950 - 1980",
        points: [
            "Pada periode ini, Menara Eiffel menjalani renovasi dan pengecatan ulang secara berkala untuk menjaga strukturnya. Pada 1980-an, pencahayaan malam hari ditambahkan, menjadikan menara semakin menarik dan romantis bagi pengunjung.",
        ],
    },
    {
        title: "Warisan Budaya",
        iconBg: "#aed23f",
        date: "1990 - Sekarang",
        points: [
            "Pencahayaan khusus ditambahkan pada 2000 untuk menyambut milenium baru, menambah daya tarik malam hari. Kini, Menara Eiffel menjadi ikon global, menerima jutaan pengunjung setiap tahun, dan tetap dipelihara sebagai simbol budaya Prancis serta salah satu monumen paling terkenal di dunia.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];