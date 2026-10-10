export type Project = {
  title: string;
  dates: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  github: string;
  live: string | null; // null = no deployed version yet
};

export const projects: Project[] = [
  {
    title: 'QuickRoute: URL Shortener',
    dates: 'Jan 2026 – Mar 2026',
    description:
      'A high-throughput URL shortening service with Base62 encoding, a custom LRU cache (99% hit rate) and a live cache stats endpoint.',
    tags: ['C#', 'ASP.NET Core', 'PostgreSQL'],
    image: '/images/quickroute.jpg',
    imageAlt: 'Screenshot of the QuickRoute URL shortener interface',
    github: 'https://github.com/Shivani-Toorpu/Quickroute',
    live: null,
  },
  {
    title: 'Sorting Algorithm Analyzer',
    dates: 'Aug 2025 – Oct 2025',
    description:
      'An interactive sorting visualizer with a C++ benchmarking engine and an animated React UI that compares 5 algorithms side by side.',
    tags: ['C++', 'STL', 'React'],
    image: '/images/sorting.png',
    imageAlt: 'Screenshot of the Sorting Algorithm Analyzer',
    github: 'https://github.com/Shivani-Toorpu/Sorting-Algo-Analyzer-CPP',
    live: 'https://sorting-algo-analyzer-cpp.vercel.app',
  },
  {
    title: 'FakeBuster: News Verification',
    dates: 'May 2025 – Jul 2025',
    description:
      'An LLM-powered system that automates multilingual news claim verification using real-time web evidence.',
    tags: ['Python', 'Groq (Llama)', 'Tavily API', 'Streamlit'],
    image: '/images/fakebuster.jpeg',
    imageAlt: 'Screenshot of the FakeBuster news verification app',
    github: 'https://github.com/Shivani-Toorpu/FakeBuster',
    live: 'https://fakebuster-tpes.onrender.com/',
  },
  {
    title: 'Healthcare Booking System',
    dates: 'Feb 2025 – Jun 2025',
    description:
      'A full-stack healthcare appointment platform with role-based dashboards for patients, doctors and admins.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/images/healthcare.jpeg',
    imageAlt: 'Screenshot of the Healthcare Booking System',
    github: 'https://github.com/Shivani-Toorpu/Healthcare-Booking-System',
    live: 'https://healthcare-booking-system-ivory.vercel.app',
  },
];