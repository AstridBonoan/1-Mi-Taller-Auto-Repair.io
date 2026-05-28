export const SITE = {
  name: '1 Mi Taller Auto Repair Corp.',
  shortName: '1 Mi Taller',
  phone: '(718) 424-7289',
  phoneTel: 'tel:+17184247289',
  altPhone: '(917) 584-1709',
  altPhoneTel: 'tel:+19175841709',
  email: 'info@mitallerauto.com',
  address: '51-06 70th St',
  city: 'Woodside, NY 11377',
  fullAddress: '51-06 70th St, Woodside, NY 11377',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1+Mi+Taller+Auto+Repair+Corp+51-06+70th+St+Woodside+NY+11377',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-73.9!3d40.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTEtMDYgNzB0aCBTdCwgV29vZHNpZGUsIE5ZIDExMzc3!5e0!3m2!1sen!2sus!4v1',
  hours: [
    { days: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
    { days: 'Saturday', time: '7:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  established: '2000',
  rating: '5.0',
  serviceAreas: ['Queens', 'Woodside', 'Jackson Heights', 'Corona', 'Elmhurst'],
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const

export const TRUST_ITEMS = [
  { label: 'ASE-Certified Technicians', sub: 'Skilled, trained mechanics' },
  { label: '25+ Years Experience', sub: 'Est. 2000 — trusted locally' },
  { label: 'Honest Pricing', sub: 'Clear quotes, no surprises' },
  { label: 'Fast Turnaround', sub: 'Respect your time' },
  { label: 'Local Queens Shop', sub: 'Family-owned neighborhood care' },
] as const

export const SERVICES = [
  {
    title: 'Engine Repairs',
    description:
      'Timing belts, water pumps, tune-ups, and complete engine diagnostics to keep you running smoothly.',
    icon: 'engine' as const,
  },
  {
    title: 'Diagnostics',
    description:
      'Check-engine lights, electrical issues, and thorough inspections to find problems before they grow.',
    icon: 'diagnostics' as const,
  },
  {
    title: 'Brake Service',
    description:
      'Pads, rotors, fluid checks, and brake system repairs for safe stopping in NYC traffic.',
    icon: 'brakes' as const,
  },
  {
    title: 'Oil Changes',
    description:
      'Quick, quality oil and filter service using the right products for your vehicle.',
    icon: 'oil' as const,
  },
  {
    title: 'Tires',
    description:
      'New tire sales, mounting, balancing, and rotations — we help you find the right fit.',
    icon: 'tires' as const,
  },
  {
    title: 'Suspension Repairs',
    description:
      'Shocks, struts, alignment-related work, and ride-quality repairs for a smoother drive.',
    icon: 'suspension' as const,
  },
  {
    title: 'Transmission Service',
    description:
      'Transmission diagnostics, fluid service, and repairs for automatic and manual vehicles.',
    icon: 'transmission' as const,
  },
  {
    title: 'Towing Assistance',
    description:
      'Need a tow? We can help coordinate assistance and get your vehicle into our shop.',
    icon: 'towing' as const,
  },
] as const

export const WHY_US = [
  'Honest mechanics who explain repairs in plain language',
  'Personalized service — your car is not just another ticket',
  'Strong neighborhood reputation across Queens',
  'Experienced technicians on engines, brakes, and general repair',
  'Fair pricing with no unnecessary upsells',
  'Fast communication — call us and talk to real people',
] as const

export const REVIEWS = [
  {
    name: 'Maria G.',
    location: 'Woodside, Queens',
    rating: 5,
    text: 'Fair prices and honest work. They told me exactly what my car needed — nothing extra. I have been coming here for years.',
  },
  {
    name: 'James R.',
    location: 'Jackson Heights',
    rating: 5,
    text: 'Professional, friendly staff. My engine repair was done right the first time. Fast turnaround without cutting corners.',
  },
  {
    name: 'Carlos M.',
    location: 'Corona, Queens',
    rating: 5,
    text: 'Trustworthy neighborhood shop. Franklin and the team treat you like family. Best mechanic experience I have had in NYC.',
  },
  {
    name: 'Linda K.',
    location: 'Elmhurst',
    rating: 5,
    text: 'Got new tires and a brake check — great service, clear pricing, and they respected my schedule. Highly recommend.',
  },
  {
    name: 'David P.',
    location: 'Queens, NY',
    rating: 5,
    text: 'Reliable, honest, and professional. They diagnosed an issue another shop missed. This is my go-to auto repair in Queens.',
  },
] as const

export const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    alt: 'Mechanic working under car hood',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
    alt: 'Auto repair shop workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    alt: 'Technician inspecting engine bay',
  },
  {
    src: 'https://images.unsplash.com/photo-1597852074816-d933fbb2f5c3?w=800&q=80',
    alt: 'Tire service and wheel work',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c593f7f14c70?w=800&q=80',
    alt: 'Vehicle on lift in repair bay',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    alt: 'Everyday car maintenance service',
  },
] as const
