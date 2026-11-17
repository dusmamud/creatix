// MOCK DATA — demo placeholders for the client presentation.
// NOTHING here is real yet. Replace every value with real details
// before launch: team names, email, phone, social handles and client
// stories are all invented for the demo. Social links are '#'
// placeholders — no real handles have been shared.
export const site = {
  name: 'Creatix',
  tagline: 'Empowering Brands Through Creative Solutions',
  url: 'https://creatix.pages.dev',
  description:
    'Creatix is a creative design agency — UI/UX design, web development, 3D design and motion graphics for brands that want to stand out.',
  year: 2026,
};

export const contact = {
  email: 'hello@creatix.in',
  phoneDisplay: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  hours: 'Mon–Sat, 10am–7pm IST',
  location: 'Mumbai, India · Working worldwide',
};

export const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
];

export const stats = [
  { value: 2000, suffix: '+', label: 'Company' },
  { value: 10, suffix: '+', label: 'Years Exp.' },
  { value: 800, suffix: '+', label: 'Hours of Digital' },
  { value: 150, suffix: 'M+', label: 'In Tracked Revenue' },
];

export const services = [
  {
    slug: 'ui-ux-design',
    num: '01',
    title: 'UI/UX Design',
    short: 'Interfaces people love to use — researched, wireframed and designed pixel by pixel.',
    price: 'From ₹49,999',
    points: ['User research & personas', 'Wireframes & prototypes', 'Design systems in Figma', 'Usability testing'],
  },
  {
    slug: 'web-development',
    num: '02',
    title: 'Web Development',
    short: 'Fast, responsive websites that load in a blink and rank on Google.',
    price: 'From ₹59,999',
    points: ['Static & CMS websites', 'E-commerce storefronts', 'Performance-first builds', 'SEO-ready structure'],
  },
  {
    slug: '3d-designs',
    num: '03',
    title: '3D Designs',
    short: 'Product renders, 3D illustrations and visuals that make a brand unforgettable.',
    price: 'From ₹39,999',
    points: ['Product visualisation', '3D brand illustrations', 'Packaging renders', 'AR-ready assets'],
  },
  {
    slug: 'motion-graphics',
    num: '04',
    title: 'Motion Graphics',
    short: 'Animated stories, explainers and social reels that stop the scroll.',
    price: 'From ₹29,999',
    points: ['Explainer videos', 'Social reels & ads', 'Logo animation', 'Lottie & micro-motion'],
  },
];

export const team = [
  { name: 'Aarav Shah', role: 'CEO and Founder', img: '/images/team-1.jpg', bio: '10+ years of experience turning small brands into household names across India and beyond.' },
  { name: 'Ishita Rao', role: 'Director of Operations', img: '/images/team-2.jpg', bio: 'Keeps every project on time and on budget — the calm centre of our creative chaos.' },
  { name: 'Kabir Mehta', role: 'Senior UX Designer', img: '/images/team-3.jpg', bio: 'Designs interfaces that feel effortless. 200+ screens shipped for fintech, health and retail.' },
  { name: 'Sana Sheikh', role: 'Lead Web Developer', img: '/images/team-4.jpg', bio: 'Builds websites that score 95+ on PageSpeed — fast, accessible and easy to maintain.' },
  { name: 'Rohan Iyer', role: '3D & Motion Artist', img: '/images/team-5.jpg', bio: 'Makes products float, spin and shine. Loves a brief that starts with "is this even possible?"' },
  { name: 'Ananya Das', role: 'Content Strategist', img: '/images/team-6.jpg', bio: 'Writes the words behind the visuals — brand voice, web copy and campaigns that convert.' },
];

export const testimonials = [
  { quote: 'Working with Creatix Studio has been an incredible experience. They truly listened to our needs and delivered a design that exceeded our expectations. We could not be happier with the final product.', name: 'Alan Baker', company: 'Founder, TechWave', img: '/images/team-3.jpg' },
  { quote: 'From the first call to launch day, everything was smooth. Our new website loads fast, looks stunning, and our enquiries have doubled in three months.', name: 'Priya Nair', company: 'Marketing Head, UrbanNest', img: '/images/team-2.jpg' },
  { quote: 'The 3D renders made our product look like a premium global brand. Customers keep asking who designed our packaging — it was Creatix.', name: 'Dev Patel', company: 'CEO, BrewBox', img: '/images/team-5.jpg' },
  { quote: 'They rebuilt our app UX from scratch. Drop-offs fell by 40% in the first month after launch. Worth every rupee.', name: 'Meera Joshi', company: 'Product Lead, Finlytics', img: '/images/team-6.jpg' },
];

export const projects = [
  { slug: 'lumina-brand-identity', title: 'Lumina — Brand Identity', category: 'Branding', service: 'UI/UX Design', img: '/images/project-1.jpg', year: '2026', summary: 'A complete identity for a skincare startup — logo, packaging and launch campaign.' },
  { slug: 'finlytics-app-redesign', title: 'Finlytics — App Redesign', category: 'Product Design', service: 'UI/UX Design', img: '/images/project-2.jpg', year: '2026', summary: 'A fintech app rebuilt around one thumb — onboarding time cut from 6 minutes to 90 seconds.' },
  { slug: 'northwind-dashboard', title: 'Northwind — Analytics Dashboard', category: 'Web App', service: 'Web Development', img: '/images/project-3.jpg', year: '2025', summary: 'A real-time dashboard for a logistics company tracking 2,000+ deliveries a day.' },
  { slug: 'orbit-3d-campaign', title: 'Orbit — 3D Launch Campaign', category: '3D & CGI', service: '3D Designs', img: '/images/project-4.jpg', year: '2025', summary: 'Floating product renders for a headphone launch that ran across every metro billboard.' },
  { slug: 'brewbox-motion', title: 'BrewBox — Motion Launch', category: 'Motion', service: 'Motion Graphics', img: '/images/project-5.jpg', year: '2025', summary: 'A 30-second animated launch film — 1.2M views in its first week.' },
  { slug: 'urbannest-ecommerce', title: 'UrbanNest — E-commerce Store', category: 'E-commerce', service: 'Web Development', img: '/images/project-6.jpg', year: '2026', summary: 'A furniture storefront with 3D product views and one-page checkout.' },
];

export const faqs = [
  { q: 'How long does a typical project take?', a: 'A landing page takes 1–2 weeks, a full website 3–5 weeks, and a complete brand identity 4–6 weeks. We share a timeline before we start, and we stick to it.' },
  { q: 'How much does a project cost?', a: 'UI/UX design starts at ₹49,999, web development at ₹59,999, 3D design at ₹39,999 and motion graphics at ₹29,999. Every quote is fixed — no hidden charges later.' },
  { q: 'Do you work with startups or only big brands?', a: 'Both. About half our clients are startups and small businesses. We have starter packages built for smaller budgets.' },
  { q: 'Will I own the design files?', a: 'Yes. All final files, source files and licences are handed over to you at the end of the project.' },
  { q: 'Do you provide support after launch?', a: 'Yes — 30 days of free fixes after launch, then optional monthly support plans for updates and improvements.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We start with a free audit of your current site, then show you exactly what we would change and why.' },
];
