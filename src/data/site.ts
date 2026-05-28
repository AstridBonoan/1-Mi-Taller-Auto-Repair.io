export const SITE = {
  name: '1 Mi Taller Auto Repair Corp.',
  shortName: '1 Mi Taller',
  phone: '(718) 424-7289',
  phoneTel: 'tel:+17184247289',
  altPhone: '(917) 584-1709',
  altPhoneTel: 'tel:+19175841709',
  fax: '(718) 606-9122',
  email: 'info@mitallerauto.com',
  contactName: 'Franklin',
  address: '51-06 70th St',
  city: 'Woodside, NY 11377',
  fullAddress: '51-06 70th St, Woodside, NY 11377',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1+Mi+Taller+Auto+Repair+Corp+51-06+70th+St+Woodside+NY+11377',
  hours: [
    { days: 'Mon – Fri', time: '7:00 AM – 9:00 PM' },
    { days: 'Saturday', time: '7:00 AM – 7:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  established: '2000',
  yearsExperience: '10+',
  rating: '5.0',
  reviewCount: '190+',
  googleReviewsUrl:
    'https://www.google.com/maps/search/?api=1&query=1+Mi+Taller+Auto+Repair+51-06+70th+St+Woodside+NY+11377',
  serviceAreas: [
    'Queens',
    'Woodside',
    'Jackson Heights',
    'Corona',
    'Astoria',
    'East Elmhurst',
    'Elmhurst',
  ],
} as const

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Specials', href: '#specials' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
] as const

export const TRUST_ITEMS = [
  { label: '10+ Years Experience', sub: 'Professional auto repair you can trust' },
  { label: 'Family-Owned & Operated', sub: 'Friendly staff, neighborhood care' },
  { label: 'Military Discounts', sub: 'Ask when you call or visit' },
  { label: 'Honest Pricing', sub: 'Quality service within your budget' },
  { label: 'Serving All of Queens', sub: 'Woodside, Corona, Astoria & more' },
] as const

export const SPECIAL_OFFERS = [
  {
    title: '6th Oil Change FREE',
    description:
      'First-time customers receive their 6th oil change free — our way of saying thank you for choosing us.',
  },
  {
    title: '$10 OFF Towing',
    description:
      'Mention this offer when you call for engine repair and save $10 on towing to our shop.',
  },
  {
    title: '6-Month Warranty',
    description:
      'Up to 6-month warranties on parts and labor for engine work — care you can count on.',
  },
] as const

export const SERVICES = [
  {
    id: 'auto-repair',
    title: 'Full Auto Repair',
    description:
      'One minor repair can keep your car on the road for years. Full-service care including catalytic converters, rack & pinion, AC recharge, brakes, and general mechanics for any make or model.',
    icon: 'general' as const,
  },
  {
    id: 'engine-repairs',
    title: 'Engine Repairs',
    description:
      'Thorough inspections and repairs: timing belts, water pumps, oil leaks, valve cover gaskets, engine cleanings, and tune-ups. New, used, and rebuilt engines with experienced technicians.',
    icon: 'engine' as const,
  },
  {
    id: 'transmissions',
    title: 'Transmissions',
    description:
      'Repair, replace, or rebuild automatic and manual transmissions. Used transmissions that run like new, plus complete custom rebuilds built for your car.',
    icon: 'transmission' as const,
  },
  {
    id: 'suspension',
    title: 'Suspension',
    description:
      'Axle control arms, ball-joints, struts, links, and axles — thorough suspension inspection and repair for a smooth, comfortable ride.',
    icon: 'suspension' as const,
  },
  {
    id: 'tires',
    title: 'Tires',
    description:
      'TPMS light reset, tire repair, replacement, and a large selection of new tires at affordable prices. We help you find the perfect brand for your vehicle.',
    icon: 'tires' as const,
  },
  {
    id: 'brakes',
    title: 'Brake Service',
    description:
      'Complete brake care as part of our total auto repair services — inspections, pads, rotors, and the attention your stopping system deserves.',
    icon: 'brakes' as const,
  },
  {
    id: 'oil-tuneups',
    title: 'Oil Changes & Tune-Ups',
    description:
      'Quality oil changes and tune-ups to keep your engine running smoothly. First-time customers: ask about your 6th oil change free.',
    icon: 'oil' as const,
  },
  {
    id: 'towing',
    title: 'Towing Assistance',
    description:
      'Need a tow to our shop? Call us to coordinate assistance. Mention our ad for $10 off towing when scheduling engine repair.',
    icon: 'towing' as const,
  },
] as const

export const WHY_US = [
  'Over 10 years of professional auto repair experience in Queens',
  'Personalized care — your car\'s needs go beyond make and model',
  'Full-service mechanic: engines, transmissions, suspension, tires, and more',
  'Friendly, dedicated staff focused on keeping your car in great shape',
  'Military discounts and affordable prices on service and repairs',
  'Call or stop by for an honest estimate — talk to Franklin and our team',
] as const

/** Verbatim Google reviews — names and text from public Google listings */
export const REVIEWS = [
  {
    id: 'ivonne-gonzalez',
    author: 'Ivonne Gonzalez',
    date: 'December 2024',
    rating: 5,
    text: 'If you need an honest and proficient mechanic shop - THIS IS YOUR PLACE!. Save the information!! You will thank me for it. Franklin and his team are trustworthy and very experienced. They will check your vehicle and if nothing is wrong with it they will let you know. This shop has been here for years. I fully recommend it to everyone!',
  },
  {
    id: 'chuck-rhoades',
    author: 'Chuck Rhoades',
    date: 'September 2024',
    rating: 5,
    text: "Mi taller is a great, local shop. They do honest work, stay true to their word, and are affordable. What more can one ask from a mechanic? Frank is the man. He's always available, even when he's busy, and he tells you what you need to hear. The shop is quite large, indoor and outdoor seating if needed, and they'll do anything from brake pads to engines. I absolutely recommend them for all your needs.",
  },
  {
    id: 'sadira-andujar',
    author: 'sadira andujar',
    date: 'December 2024',
    rating: 5,
    text: 'From Shantal setting up my appointment to Franklin assisting me with my car once I got there, everything was perfect. Went in to change my 2 front struts. The car is running smooth. Also, thank you to Veronica for letting me know all the other services they provide, since it was my first time there. Definitely will be going back.',
  },
  {
    id: 'google-nov-2025',
    author: null,
    date: 'November 2025',
    rating: 5,
    text: 'HIGHLY RECOMMENDED! Franklyn and his team are very professional, honest, punctual, and deliver excellent results.',
  },
  {
    id: 'google-sep-2025',
    author: null,
    date: 'September 2025',
    rating: 5,
    text: 'It was my first time visiting, and I had such a great experience! Franklin was super friendly and really helpful. His knowledge about cars and mechanics was spot on and truly impressive!',
  },
  {
    id: 'google-aug-2025',
    author: null,
    date: 'August 2025',
    rating: 5,
    text: "5/5 mechanic. Where do I begin. The staff is extremely friendly, helpful, and accommodating. I was a walk in customer and typically that means you don't get service quickly but I was taken right away even though the shop was busy. I will most definitely be making this my go to shop when it comes to the maintenance…",
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

export const SERVICE_FORM_OPTIONS = [
  'Full Auto Repair',
  'Engine Repair / Rebuild',
  'Transmission Repair / Rebuild',
  'Suspension',
  'Tires',
  'Brake Service',
  'Oil Change / Tune-Up',
  'AC Recharge',
  'Towing',
  'Other',
] as const
