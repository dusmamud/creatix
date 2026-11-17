// MOCK DATA — demo placeholders for the client presentation.
// NOTHING here is real yet. Replace every value with real details
// before launch: team names, email, phone, social handles and client
// stories are all invented for the demo. Social links are '#'
// placeholders — no real handles have been shared.
export const site = {
  name: 'Creatix',
  tagline: 'Empowering Brands Through Creative Solutions',
  url: 'https://creatiix.pages.dev',
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
  { quote: 'Working with Creatix Studio has been an incredible experience. They truly listened to our needs and delivered a design that exceeded our expectations. We could not be happier with the final product.', name: 'Alan Baker', company: 'Founder, TechWave', img: '/images/review-1.jpg' },
  { quote: 'From the first call to launch day, everything was smooth. Our new website loads fast, looks stunning, and our enquiries have doubled in three months.', name: 'Priya Nair', company: 'Marketing Head, UrbanNest', img: '/images/review-2.jpg' },
  { quote: 'The 3D renders made our product look like a premium global brand. Customers keep asking who designed our packaging — it was Creatix.', name: 'Dev Patel', company: 'CEO, BrewBox', img: '/images/review-3.jpg' },
  { quote: 'They rebuilt our app UX from scratch. Drop-offs fell by 40% in the first month after launch. Worth every rupee.', name: 'Meera Joshi', company: 'Product Lead, Finlytics', img: '/images/review-4.jpg' },
];

export const projects = [
  { slug: 'lumina-brand-identity', title: 'Lumina — Brand Identity', category: 'Branding', service: 'UI/UX Design', img: '/images/project-1.jpg', year: '2026', summary: 'A complete identity for a skincare startup — logo, packaging and launch campaign.' },
  { slug: 'finlytics-app-redesign', title: 'Finlytics — App Redesign', category: 'Product Design', service: 'UI/UX Design', img: '/images/project-2.jpg', year: '2026', summary: 'A fintech app rebuilt around one thumb — onboarding time cut from 6 minutes to 90 seconds.' },
  { slug: 'northwind-dashboard', title: 'Northwind — Analytics Dashboard', category: 'Web App', service: 'Web Development', img: '/images/project-3.jpg', year: '2025', summary: 'A real-time dashboard for a logistics company tracking 2,000+ deliveries a day.' },
  { slug: 'orbit-3d-campaign', title: 'Orbit — 3D Launch Campaign', category: '3D & CGI', service: '3D Designs', img: '/images/project-4.jpg', year: '2025', summary: 'Floating product renders for a headphone launch that ran across every metro billboard.' },
  { slug: 'brewbox-motion', title: 'BrewBox — Motion Launch', category: 'Motion', service: 'Motion Graphics', img: '/images/project-5.jpg', year: '2025', summary: 'A 30-second animated launch film — 1.2M views in its first week.' },
  { slug: 'urbannest-ecommerce', title: 'UrbanNest — E-commerce Store', category: 'E-commerce', service: 'Web Development', img: '/images/project-6.jpg', year: '2026', summary: 'A furniture storefront with 3D product views and one-page checkout.' },
];

export const blogPosts = [
  {
    slug: 'why-fast-websites-convert',
    title: 'Why Fast Websites Convert (and Slow Ones Quietly Lose Sales)',
    category: 'Web Development',
    author: 'Sana Sheikh',
    authorRole: 'Lead Web Developer',
    date: '2026-11-10',
    readingTime: '5 min read',
    excerpt: 'Every extra second of load time costs real enquiries. Here is what actually makes a website fast — and how we measure it before launch.',
    img: '/images/project-3.jpg',
    body: [
      'A fast website is not a technical luxury. It is the first thing your customer feels. When a page opens instantly, people trust the business behind it. When it stutters, they leave before reading a single word — and they rarely come back. Studies across the web consistently show the same pattern: as load time rises, the share of visitors who stay and buy falls. Speed is a design decision, not just a hosting decision.',
      'The biggest culprit is usually weight. Oversized hero images, five different fonts, a video that autoplays, a chat widget, a tracking script for every tool ever tried — it all adds up. We start every build by asking what each element earns. If a 2 MB image can be a 120 KB image at the same visual quality, that is not a compromise, it is craft. Modern formats, correct sizing and lazy loading below the fold do most of the heavy lifting.',
      'The second culprit is how the page is built. A site that ships a heavy JavaScript framework for a mostly static page is paying a tax on every visit. For most business websites, a static build with almost no JavaScript is faster, cheaper to host and far easier to keep secure. We measure with real tools — PageSpeed Insights and Core Web Vitals — and we do not ship until the numbers are green on a mid-range phone, not just on our fast office wifi.',
      'Speed also shapes search rankings. Google uses loading experience as a ranking signal, and it shows slow pages less often. So a slow site loses twice: fewer of the visitors it does get convert, and fewer visitors arrive at all. The fix is rarely a bigger server. It is smaller images, fewer fonts, no render-blocking extras, and a host close to your audience.',
      'If you are wondering where your own site stands, run it through PageSpeed Insights and look at the largest contentful paint and interaction scores. Anything above 2.5 seconds for the main content deserves attention. The good news is that most speed problems are fixable in days, not months — and the return shows up immediately in enquiries, sales and search visibility. That is why performance is the first line item in every Creatix build, not an afterthought.',
      'When we audit a site for speed, we check the same things in the same order: image sizes and formats, font loading, third-party scripts, server response time and whether a content delivery network is in play. Most audits find the same handful of wins — an uncompressed hero image, a font family loaded in six weights when two would do, a chat widget that blocks rendering. Fixing those rarely needs a redesign, and the improvement is measurable the same day. The discipline is in keeping the site fast afterwards: every new image, plugin or tracking script should pass the same test before it goes live, because speed is lost one small addition at a time, and regained the same way.',
    ],
  },
  {
    slug: 'brand-identity-process',
    title: 'How a Brand Identity Actually Gets Made: Our 5-Step Process',
    category: 'Branding',
    author: 'Kabir Mehta',
    authorRole: 'Senior UX Designer',
    date: '2026-11-03',
    readingTime: '6 min read',
    excerpt: 'A logo is the last 10% of a brand identity. Here is the process that comes before it — and why skipping it produces forgettable brands.',
    img: '/images/project-1.jpg',
    body: [
      'Every client who asks for a logo really wants something else: to be remembered, trusted and chosen over a competitor. A logo alone cannot do that. A brand identity is a system — the words, colours, shapes and feelings that make a business recognisable in a crowded feed. Here is how we build one, step by step.',
      'Step one is discovery. We interview the founders, study competitors and talk to real customers. We ask what the brand refuses to be as much as what it wants to be. The output is a short positioning statement: who this is for, what it promises, and why anyone should believe it. If that sentence is vague, everything after it will be vague too.',
      'Step two is direction. We present two or three visual directions — moodboards, type pairings, colour stories — before any logo is drawn. Clients react to directions honestly because nothing feels final yet. Picking a direction early saves weeks of arguing over a finished logo that was built on the wrong idea.',
      'Step three is the identity itself: logo, colour palette, typography, imagery style and the small details — icons, patterns, packaging. We design it in real contexts from day one: a business card, an Instagram post, a shop sign. A mark that only looks good on a white slide is not finished.',
      'Steps four and five are guidelines and launch. We hand over a simple brand book any designer can follow, then help with the launch assets — social templates, packaging, the website header. A good identity is judged a year later, when the brand still looks like itself everywhere. That consistency is the whole point, and it only happens when the process before the logo is taken seriously.',
      'One practical note: a brand book nobody reads is worthless. Ours is short — ten pages, not fifty — with real examples instead of abstract rules: this is how a headline looks, this is how a photo is treated, this is what never to do with the logo. We also supply templates for the things the client will make every week, like social posts and price lists, because the identity lives or dies in those everyday pieces. If you are briefing an agency, ask to see a brand book from a past project. Its thickness tells you less than its clarity: the best ones are the ones a new hire can follow on day one without asking anyone.',
    ],
  },
  {
    slug: 'ux-audit-checklist',
    title: 'The UX Audit Checklist We Run Before Every Redesign',
    category: 'UX Design',
    author: 'Kabir Mehta',
    authorRole: 'Senior UX Designer',
    date: '2026-10-27',
    readingTime: '6 min read',
    excerpt: 'Before changing a single pixel, we run this 10-point audit. Steal it — it finds the problems that actually cost you customers.',
    img: '/images/project-2.jpg',
    body: [
      'Most redesigns start with opinions: the homepage looks dated, the competitor has a nicer site, the founder is bored of the colours. Opinions are a bad brief. Before we redesign anything, we audit what exists — with evidence. Here is the checklist we run, and it works on any website or app.',
      'First, the five-second test. Show a stranger your homepage for five seconds, then ask what the business does and what they should do next. If they cannot answer both, the page has failed its only job. Next, the journey test: complete the main task yourself — buy, enquire, sign up — and count every step, every field and every moment of confusion. Most sites ask for information they never use.',
      'Then we check the numbers. Where do visitors drop off? Which pages do they never scroll? What do people search for on the site itself — that search box is a confession booth for missing content. We pair that with a mobile pass: the majority of traffic is on phones, so we test on a real phone, on real mobile data, with one thumb. If the main button is unreachable or the form zooms awkwardly, that is a finding, not a nitpick.',
      'We also audit trust. Are prices, timelines and contact details easy to find? Is there proof — reviews, work, real photos — near the point of decision? And we audit accessibility: contrast, font size, keyboard navigation, alt text. An audit that ignores accessibility ignores a large share of your audience.',
      'The output is a short, ranked list: what to fix first, what it costs, and what it should improve. Usually the top three items are small — a clearer headline, one fewer form field, a button that is visible without scrolling. You do not need a redesign to fix those. You need an audit first, and the redesign second. That order is the difference between spending money and investing it.',
      'A final habit worth keeping: audit again three months after any change. Real users behave differently from test users, and the numbers will show you which fixes worked and which were guesses. We re-run the same checklist for our clients after launch, because an audit is not a one-off report — it is a loop. Each pass makes the next redesign smaller and cheaper, until one day the audit says the site is fine and the money is better spent on the product itself. That is the best possible result of an audit, and it is the one we aim for.',
    ],
  },
  {
    slug: '3d-product-visuals-sell-more',
    title: 'Do 3D Product Visuals Actually Sell More? What We Have Seen',
    category: '3D Design',
    author: 'Rohan Iyer',
    authorRole: '3D & Motion Artist',
    date: '2026-10-20',
    readingTime: '5 min read',
    excerpt: 'A flat photo shows a product. A 3D visual lets a customer hold it in their mind. Here is when 3D pays for itself — and when it does not.',
    img: '/images/project-4.jpg',
    body: [
      'A customer cannot pick up your product through a screen. They can only imagine it — and imagination is where most online sales are won or lost. That is the job of a 3D visual: to close the gap between a flat image and holding the thing in your hand. Done well, it makes a product feel real, premium and worth its price before a single word is read.',
      'The strongest case for 3D is products with detail that photos flatten: texture, layers, how parts fit together, how light moves across a surface. Skincare, headphones, furniture, jewellery, packaging — all of these sell on feel as much as on features. A 3D render can show a jar from an angle no camera can reach, explode a product into its parts, or place it in a scene a photoshoot would need a full set to build.',
      '3D also pays for itself in reuse. One model becomes the website hero, the Amazon listing, the Instagram reel, the billboard and the packaging render. A photoshoot gives you one angle per shot; a 3D model gives you every angle, forever, in any colour. For brands that launch colour variants or seasonal editions, that difference alone often covers the cost.',
      'It is not always the right call. If your product is simple, cheap and bought on price, a clean photo is enough. 3D also needs honest expectations: good renders take time, and a bad render is worse than a good photo. The test we give clients is simple — if your customer needs to believe in the quality before they buy, 3D helps. If they already believe and just need the price, spend the money on the checkout instead.',
      'Our advice: start with one hero visual for your best product and measure it. Watch time on page, add-to-cart rate and the questions customers stop asking. If the numbers move, build the rest of the range. 3D is a sales tool with a design budget — judge it like one, and it will earn its keep.',
      'The process itself is straightforward, and worth knowing before you commission it. We start from your product — a sample, detailed photos, or CAD files if you have them — and build an accurate 3D model. Then comes lighting and material work, which is where realism lives: the difference between a render that looks like a photo and one that looks like a video game is almost always the lighting. You approve still frames before any animation begins, so there are no expensive surprises. A single hero visual typically takes one to two weeks; a full range with variants takes three to four. The model is yours afterwards, ready for the next launch, the next colour and the next campaign.',
    ],
  },
  {
    slug: 'motion-graphics-for-social',
    title: 'Motion Graphics for Social: How to Stop the Scroll in 3 Seconds',
    category: 'Motion Graphics',
    author: 'Rohan Iyer',
    authorRole: '3D & Motion Artist',
    date: '2026-10-13',
    readingTime: '5 min read',
    excerpt: 'You have three seconds before the thumb moves on. Here is how we structure social motion that earns the next three — and the click after that.',
    img: '/images/project-5.jpg',
    body: [
      'Social feeds are the least patient audience in history. Your video competes with everything a person cares about, and it gets about three seconds to prove it belongs. The brands that win are not the ones with the biggest budgets. They are the ones that understand the first three seconds are a different job from the rest of the video.',
      'The opening must do three things at once: show the product or idea, promise a payoff, and look different from the last five posts the viewer saw. That usually means movement in the first frame, not a slow fade-in. A bold claim on screen, a surprising visual, a question the viewer already has — any of these works. A logo sting does not. Nobody ever stopped scrolling for a logo.',
      'After the hook, the structure is simple: one idea per video, one sentence per scene, and captions on everything, because most social video is watched on mute. We design motion so the story survives with the sound off — the text carries the message and the sound is a bonus, not a requirement. Keep it under 30 seconds for a launch film and under 15 for a paid ad; every extra second must earn its place.',
      'The other half of motion is consistency. One beautiful reel helps once. A recognisable style — the same colours, the same type, the same rhythm — builds a brand people spot without reading the handle. We build templates for our clients so each new reel is fast to make and instantly recognisable.',
      'Finally, measure the right thing. Views flatter; saves, shares and profile visits tell the truth. If people save a video, it taught them something. If they share it, it said something about them. Make more of that, and less of whatever only got a polite like.',
      'One more advantage of motion is how far a single idea travels. A 30-second launch film is not one asset — it is a reel, three stories, a website hero, a looping display for a shop counter and a muted cut for a paid ad, all from the same animation. We plan those cut-downs at the storyboard stage, so nothing is cropped as an afterthought and the message survives at every length and aspect ratio. That is also why motion is often cheaper per use than it looks: the upfront cost is real, but one well-planned film can fill a month of content. Brief your motion team with the full list of placements, not just the hero video, and the same budget works twice as hard.',
    ],
  },
  {
    slug: 'how-much-does-a-website-cost-india',
    title: 'How Much Does a Website Cost in India in 2026? An Honest Breakdown',
    category: 'Strategy',
    author: 'Ananya Das',
    authorRole: 'Content Strategist',
    date: '2026-10-06',
    readingTime: '6 min read',
    excerpt: 'Website quotes in India range from Rs 5,000 to Rs 5,00,000. Here is what each price band actually buys — and the questions that reveal a bad quote.',
    img: '/images/project-6.jpg',
    body: [
      'Ask ten agencies what a website costs and you will get ten different answers, from five thousand rupees to five lakh. None of them are lying — they are selling different things. This guide explains what each price band actually buys, so you can tell a bargain from a trap.',
      'At the bottom, under Rs 15,000, you are usually buying a template with your logo swapped in. It can look fine on day one, but it is rarely fast, rarely original, and often impossible to update without the person who built it. That is acceptable for a one-page placeholder. It is a bad foundation for a business that wants enquiries.',
      'The middle band — roughly Rs 30,000 to Rs 1,00,000 — is where most good small-business websites live. Here you should expect a custom design, real copywriting help, mobile-first layout, basic SEO setup and a site you can update yourself. Our own starting prices sit in this band: motion from Rs 29,999, 3D from Rs 39,999, UI/UX from Rs 49,999 and web development from Rs 59,999. A fixed quote, not an hourly meter, is the sign of an agency that knows its process.',
      'Above Rs 1,00,000 you are paying for depth: e-commerce with real checkout flows, custom tools, integrations, content systems and ongoing optimisation. The price is justified when the website is the business — a store, a booking platform, a product. The warning sign at any price is vagueness: no timeline, no list of deliverables, no answer to who owns the files.',
      'Before you sign anything, ask four questions: what exactly is included, when will I see progress, what happens after launch, and do I own everything? A good agency answers all four in writing. Price matters, but the most expensive website is the one you have to rebuild in a year because the cheap one could not grow with you.',
      'Remember the ongoing costs too, because they are where cheap builds quietly get expensive. A domain costs a few hundred rupees a year, hosting for a static site is often free or very cheap, and a simple site needs little maintenance. What costs real money later is a site that cannot be updated without its builder, a template locked to one vendor, or a design that has to be redone when you add a second service. Budget a small monthly amount for updates and improvements — new pages, fresh photos, small fixes — and the site stays an asset instead of slowly going stale. A website is not a one-time purchase; it is a shopfront you repaint, and the good ones are repainted often.',
    ],
  },
];

export const caseStudies = {
  'lumina-brand-identity': {
    challenge: 'Lumina was a skincare startup with a good product and an invisible brand. Its packaging looked like every other clean-beauty label on the shelf, its website did not match its price point, and retailers kept passing because the shelf presence did not justify premium pricing.',
    solution: 'We rebuilt the identity from positioning up: a calm, confident visual system, packaging designed to be recognised from two metres away, and a launch campaign that led with texture and light rather than claims. Every asset — labels, social templates, the website — came from one design system so the brand looked like itself everywhere.',
    metrics: [
      { value: '+38%', label: 'Repeat purchase rate' },
      { value: '2.4x', label: 'Launch-week sales vs target' },
      { value: '12', label: 'SKUs packaged' },
    ],
    quote: { text: 'Creatix gave us a brand retailers finally took seriously. Our shelf presence changed everything.', name: 'Lumina founder', role: 'Founder, Lumina (mock client story)' },
    gallery: ['/images/project-1.jpg', '/images/thinking-woman.jpg'],
  },
  'finlytics-app-redesign': {
    challenge: 'Finlytics had a powerful product hidden behind a confusing app. New users took six minutes to finish onboarding, most gave up halfway, and support tickets were dominated by the same three questions about where things lived.',
    solution: 'We rebuilt the app around one thumb and one job at a time: a 90-second onboarding flow, plain-language labels instead of finance jargon, and a home screen that answers the only question users open the app to ask. We tested every screen with real users before shipping.',
    metrics: [
      { value: '90 sec', label: 'Onboarding, down from 6 min' },
      { value: '-40%', label: 'Drop-offs in the first month' },
      { value: '4.8', label: 'App store rating after relaunch' },
    ],
    quote: { text: 'They rebuilt our app UX from scratch. Drop-offs fell by 40% in the first month after launch.', name: 'Meera Joshi', role: 'Product Lead, Finlytics' },
    gallery: ['/images/project-2.jpg', '/images/designer.jpg'],
  },
  'northwind-dashboard': {
    challenge: 'Northwind tracked 2,000+ deliveries a day across spreadsheets and phone calls. Dispatchers could not see delays until customers complained, and managers had no single view of where the fleet actually was.',
    solution: 'We designed and built a real-time dashboard around the dispatcher’s day: live map, exception alerts for late deliveries, and one-click re-routing. The interface hides everything except the decision in front of the user, with detail one tap away when it is needed.',
    metrics: [
      { value: '2,000+', label: 'Deliveries tracked daily' },
      { value: '-32%', label: 'Average dispatch time' },
      { value: '99.9%', label: 'Dashboard uptime' },
    ],
    quote: { text: 'For the first time we see a delay before the customer does. That alone paid for the project.', name: 'Northwind operations lead', role: 'Operations, Northwind (mock client story)' },
    gallery: ['/images/project-3.jpg', '/images/office-team.jpg'],
  },
  'orbit-3d-campaign': {
    challenge: 'Orbit was launching premium headphones into a market where every brand shows the same black product on a white background. They needed a launch people would actually stop for — across billboards, social and retail, on one deadline.',
    solution: 'We built a 3D campaign around floating product renders: the headphones suspended in light, mid-air, with colour stories for each variant. One 3D model produced every asset — billboards, reels, retail displays — so the launch looked identical everywhere it appeared.',
    metrics: [
      { value: '4.8M', label: 'Campaign impressions' },
      { value: '+62%', label: 'Pre-orders vs target' },
      { value: '9', label: 'Metro billboards' },
    ],
    quote: { text: 'The floating renders stopped people on the street. Our launch looked like a global brand on day one.', name: 'Orbit marketing lead', role: 'Marketing, Orbit (mock client story)' },
    gallery: ['/images/project-4.jpg', '/images/thinking-woman.jpg'],
  },
  'brewbox-motion': {
    challenge: 'BrewBox had a loyal local following and a launch that nobody outside their neighbourhood knew about. A static post would not carry a new coffee subscription — they needed a film people would share.',
    solution: 'We made a 30-second animated launch film: the box, the brew, the morning ritual, told without a single word of voiceover so it worked muted on every feed. Cut-downs for reels, stories and ads came from the same animation, so the campaign stayed consistent at every length.',
    metrics: [
      { value: '1.2M', label: 'Views in the first week' },
      { value: '+210%', label: 'Instagram followers in a month' },
      { value: '18%', label: 'Click-through on the launch ad' },
    ],
    quote: { text: 'The 3D renders made our product look like a premium global brand. Customers keep asking who designed our packaging.', name: 'Dev Patel', role: 'CEO, BrewBox' },
    gallery: ['/images/project-5.jpg', '/images/designer.jpg'],
  },
  'urbannest-ecommerce': {
    challenge: 'UrbanNest sold beautiful furniture through a store that made buying it hard: slow pages, a five-step checkout, and product photos that could not show scale. Shoppers browsed, then bought elsewhere.',
    solution: 'We rebuilt the storefront with 3D product views, room-scale imagery and a one-page checkout. The design leads with the furniture in real rooms, and the buying path is three taps from product to payment — with delivery and returns answered before the customer has to ask.',
    metrics: [
      { value: '+84%', label: 'Conversion rate after relaunch' },
      { value: '-55%', label: 'Cart abandonment' },
      { value: '1-page', label: 'Checkout, down from five steps' },
    ],
    quote: { text: 'Our new website loads fast, looks stunning, and our enquiries have doubled in three months.', name: 'Priya Nair', role: 'Marketing Head, UrbanNest' },
    gallery: ['/images/project-6.jpg', '/images/office-team.jpg'],
  },
};

export const jobs = [
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    dept: 'Design',
    type: 'Full-time · Mumbai / Hybrid',
    experience: '3+ years',
    salary: '₹8–14 LPA',
    intro: 'You will own product design end to end — from research and flows to polished screens and design systems — for startups and brands across fintech, retail and health.',
    responsibilities: ['Run user research and turn findings into flows, wireframes and prototypes', 'Design interfaces in Figma and maintain our client design systems', 'Present work to clients and fold feedback into the next iteration', 'Partner with developers so what ships matches what was designed'],
    requirements: ['3+ years designing web or app products, with a portfolio to prove it', 'Strong Figma skills and a working knowledge of design systems', 'Comfortable talking to clients, not just to other designers', 'Bonus: motion, illustration or front-end basics'],
  },
  {
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    dept: 'Development',
    type: 'Full-time · Mumbai / Hybrid',
    experience: '2+ years',
    salary: '₹7–12 LPA',
    intro: 'You will build the fast, accessible websites our designers draw — static builds, e-commerce storefronts and interactive pages that score 95+ on PageSpeed.',
    responsibilities: ['Build responsive websites from Figma files with clean, semantic code', 'Keep performance budgets: fast loads on mid-range phones, not just desktops', 'Set up CMS, forms and analytics so clients can run their own sites', 'Review your own work in the browser at 390px and 1440px before handover'],
    requirements: ['2+ years with HTML, CSS and JavaScript/TypeScript in production', 'Experience with a modern framework such as Astro, SvelteKit or Next.js', 'Care about accessibility, semantics and Core Web Vitals', 'Bonus: Tailwind CSS, GSAP, or headless CMS experience'],
  },
  {
    slug: '3d-artist',
    title: '3D Artist',
    dept: '3D & CGI',
    type: 'Full-time · Mumbai / Hybrid',
    experience: '2+ years',
    salary: '₹6–11 LPA',
    intro: 'You will create the product renders, pack shots and campaign visuals our clients launch with — from a single hero image to a full 3D campaign across billboards and social.',
    responsibilities: ['Model, light and render product visuals and brand illustrations', 'Build reusable 3D assets for packaging, web and social campaigns', 'Work with the motion team on animated product films', 'Keep renders photoreal and on-brand across every format'],
    requirements: ['2+ years in Blender, Cinema 4D or equivalent, with a strong reel', 'Good eye for light, material and composition', 'Able to take a brief and run with it, with minimal hand-holding', 'Bonus: AR-ready assets, product animation, or Unreal experience'],
  },
  {
    slug: 'motion-designer',
    title: 'Motion Designer',
    dept: 'Motion',
    type: 'Full-time · Mumbai / Hybrid',
    experience: '2+ years',
    salary: '₹6–11 LPA',
    intro: 'You will turn static brands into moving ones — explainers, social reels, logo animation and launch films that stop the scroll in three seconds.',
    responsibilities: ['Design and animate explainers, reels and ads from storyboard to delivery', 'Build reusable motion templates so client campaigns stay consistent', 'Cut and adapt films for every format: feed, story, reel and billboard', 'Work directly with clients on scripts and storyboards'],
    requirements: ['2+ years in After Effects (or equivalent) with a reel that shows range', 'Strong sense of timing, typography in motion, and sound', 'Comfortable working to a launch deadline without cutting corners', 'Bonus: 3D animation, Lottie, or sound design skills'],
  },
];

export const jobPerks = ['Flexible hours and hybrid work from our Mumbai studio', 'Health cover and 24 days paid leave', 'A learning budget for courses, books and conferences', 'Work on real client launches, not internal mock briefs', '30-day post-launch support culture — we finish what we start'];

export const clients = [
  { name: 'Lumina', industry: 'Skincare & Beauty', service: 'Brand Identity', result: '2.4x launch-week sales' },
  { name: 'Finlytics', industry: 'Fintech', service: 'App Redesign', result: 'Onboarding 6 min → 90 sec' },
  { name: 'Northwind', industry: 'Logistics', service: 'Analytics Dashboard', result: 'Dispatch time down 32%' },
  { name: 'Orbit', industry: 'Consumer Electronics', service: '3D Campaign', result: '4.8M campaign impressions' },
  { name: 'BrewBox', industry: 'Food & Beverage', service: 'Motion Launch', result: '1.2M views in week one' },
  { name: 'UrbanNest', industry: 'Furniture & Retail', service: 'E-commerce', result: 'Conversion up 84%' },
  { name: 'GlowFit', industry: 'Fitness & Wellness', service: 'Brand + Web', result: 'New site + identity in 5 weeks' },
  { name: 'TechWave', industry: 'SaaS & Technology', service: 'Web Design', result: 'Enquiries doubled in 3 months' },
  { name: 'SpiceRoute', industry: 'Restaurants & Hospitality', service: 'Brand + Motion', result: 'Launch film shared 40k times' },
  { name: 'PaperTrail', industry: 'Education', service: 'UI/UX Design', result: 'Course completion up 27%' },
];

export const awards = [
  { title: 'Design Agency of the Year', org: 'India Design Awards', year: '2025', status: 'Shortlist' },
  { title: 'Site of the Day', org: 'CSS Design Awards', year: '2026', status: 'Nomination' },
  { title: 'Best Brand Identity', org: 'DesignRush Awards', year: '2025', status: 'Shortlist' },
  { title: 'Agency of the Year', org: 'Indian Creative Awards', year: '2026', status: 'Nomination' },
];

export const processSteps = [
  { num: '01', title: 'Discover', weeks: 'Week 1', who: 'You talk to Aarav (founder) and Ananya (strategy)', detail: 'A free 30-minute call, then a short questionnaire. We learn your goals, audience, competitors and budget. You approve the scope and fixed quote before anything is designed — no surprises later.', approval: 'You approve the scope, timeline and fixed quote.' },
  { num: '02', title: 'Design', weeks: 'Weeks 2–3', who: 'You talk to Kabir (design) or Sana (web)', detail: 'We show you directions first, then real screens — not a big reveal at the end. You see progress every week and give feedback on actual work, in plain language, with two revision rounds included.', approval: 'You approve the design direction, then the final screens.' },
  { num: '03', title: 'Build', weeks: 'Weeks 3–5', who: 'You talk to Sana (web) or Rohan (3D / motion)', detail: 'Design becomes a working website, app or film. We test on real phones, check speed and accessibility, and share a staging link so you can click through everything before launch.', approval: 'You approve the staging link — every page, every button.' },
  { num: '04', title: 'Launch', weeks: 'Week 5–6', who: 'You talk to Ishita (operations)', detail: 'We go live, check every link and form, set up analytics and hand over all files and logins. Launch day is planned, not improvised — and we stay on call while it happens.', approval: 'You sign off the launch checklist with us.' },
  { num: '05', title: 'Grow', weeks: 'After launch', who: 'You talk to your project lead', detail: '30 days of free fixes, then optional monthly support: updates, new pages, campaigns and improvements based on real visitor data. Most of our clients stay with us for years.', approval: 'You choose whether to continue on a support plan.' },
];

export const pricingPlans = [
  { slug: 'motion-graphics', name: 'Motion', price: '₹29,999', per: 'from, per project', bestFor: 'Social launches, explainers and ads', timeline: '1–2 weeks', features: ['30-sec animated film or 4 social reels', 'Script + storyboard included', 'Captions and muted-friendly cut', 'All formats: feed, story, reel', '2 revision rounds'] },
  { slug: '3d-designs', name: '3D & Visuals', price: '₹39,999', per: 'from, per project', bestFor: 'Product launches and packaging', timeline: '2–3 weeks', features: ['Hero product renders (up to 5 angles)', 'Packaging renders', 'Social + web-ready exports', 'Colour variants included', '2 revision rounds'] },
  { slug: 'ui-ux-design', name: 'UI/UX Design', price: '₹49,999', per: 'from, per project', bestFor: 'Apps and products people love', timeline: '2–4 weeks', features: ['User research + personas', 'Wireframes and prototypes', 'Full design system in Figma', 'Usability testing with 5 users', '2 revision rounds'], popular: true },
  { slug: 'web-development', name: 'Website', price: '₹59,999', per: 'from, per project', bestFor: 'A complete business website', timeline: '3–5 weeks', features: ['Custom design + build, up to 8 pages', 'Mobile-first, 95+ PageSpeed', 'SEO setup + analytics', 'CMS so you can update it yourself', '30 days free post-launch support'] },
];

export const faqs = [
  { q: 'How long does a typical project take?', a: 'A landing page takes 1–2 weeks, a full website 3–5 weeks, and a complete brand identity 4–6 weeks. We share a timeline before we start, and we stick to it.' },
  { q: 'How much does a project cost?', a: 'UI/UX design starts at ₹49,999, web development at ₹59,999, 3D design at ₹39,999 and motion graphics at ₹29,999. Every quote is fixed — no hidden charges later.' },
  { q: 'Do you work with startups or only big brands?', a: 'Both. About half our clients are startups and small businesses. We have starter packages built for smaller budgets.' },
  { q: 'Will I own the design files?', a: 'Yes. All final files, source files and licences are handed over to you at the end of the project.' },
  { q: 'Do you provide support after launch?', a: 'Yes — 30 days of free fixes after launch, then optional monthly support plans for updates and improvements.' },
  { q: 'Can you redesign my existing website?', a: 'Yes. We start with a free audit of your current site, then show you exactly what we would change and why.' },
];
