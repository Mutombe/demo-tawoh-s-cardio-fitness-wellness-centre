export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic", serviceCardStyle: "overlay", projectGridStyle: "masonry", testimonialStyle: "carousel", statsStyle: "overlay", bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Tawoh's Cardio Fitness & Wellness Centre", legalName: "Tawoh's Cardio Fitness & Wellness Centre", tagline: "Fitness For Every Body",
    description: "Fitness For Every Body",
    phone: "+263 77 170 3624", phoneRaw: "+263771703624", whatsappNumber: "263771703624", email: "info@tawohsfitness.co.zw",
    address: "University of Zimbabwe Sports Arena, Harare, Zimbabwe", country: "Zimbabwe", city: "Harare",
    rating: 4.9, ratingRounded: 5, reviewCount: 16, established: "2017", yearsExperience: "7+", projectsCompleted: "400+", employees: "12+",
    coordinates: { lat: -17.83, lng: 31.05 },
    hours: [{ day: "Monday - Friday", time: "8:00 AM - 5:00 PM" }, { day: "Saturday", time: "8:00 AM - 1:00 PM" }, { day: "Sunday", time: "Closed" }],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.05!3d-17.83",
    cookieConsentKey: "tawoh-s-cardio-fitness-wellness-centre-consent",
    socialLinks: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  navbar: { logoImage: null, logoLine1: "Tawoh's", logoLine2: "Cardio Fitness" },
  hero: {
    badge: "University of Zimbabwe's Premier Wellness Destination",
    titleParts: [{ text: "FITNESS FOR " }, { text: "EVERY", highlight: true }, { text: " BODY." }],
    subtitle: "Fitness For Every Body.",
    ctaPrimary: "Start Your Journey", ctaSecondary: "View Programs", trustBadge: "400+ Members",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Tawoh's Cardio Fitness & Wellness Centre - professional service" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "Tawoh's Cardio Fitness & Wellness Centre - professional service" },
      { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=85", alt: "Tawoh's Cardio Fitness & Wellness Centre - professional service" }
    ],
  },
  stats: [
    { number: "400+", label: "Active Members" },
    { number: "7+", label: "Years Open" },
    { number: "15+", label: "Certified Trainers" },
    { number: "50+", label: "Weekly Classes" }
  ],
  servicesPreview: [
    { title: "Strength Training", desc: "State-of-the-art free weights, machines, and functional training zones designed for all fitness levels.", icon: "Heart" },
    { title: "Cardio Zone", desc: "Premium treadmills, bikes, and ellipticals with personal entertainment screens and heart rate monitoring.", icon: "Star" },
    { title: "Personal Training", desc: "One-on-one coaching from certified trainers who build custom programs around your unique goals.", icon: "Target" },
    { title: "Group Classes", desc: "High-energy group sessions including HIIT, spinning, yoga, boxing, and dance fitness.", icon: "ShieldCheck" },
    { title: "Nutrition Coaching", desc: "Personalised meal plans and supplementation guidance to fuel your transformation.", icon: "Rocket" },
    { title: "Recovery & Wellness", desc: "Sauna, stretching zones, and sports massage to accelerate recovery and prevent injury.", icon: "Buildings" }
  ],
  services: {
    heroTitle: "Our Services", heroSubtitle: "Comprehensive solutions delivered with expertise and care.",
    items: [
      { title: "Strength Training", slug: "strength-training", desc: "State-of-the-art free weights, machines, and functional training zones designed for all fitness levels. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Cardio Zone", slug: "cardio-zone", desc: "Premium treadmills, bikes, and ellipticals with personal entertainment screens and heart rate monitoring. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Personal Training", slug: "personal-training", desc: "One-on-one coaching from certified trainers who build custom programs around your unique goals. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" },
      { title: "Group Classes", slug: "group-classes", desc: "High-energy group sessions including HIIT, spinning, yoga, boxing, and dance fitness. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Nutrition Coaching", slug: "nutrition-coaching", desc: "Personalised meal plans and supplementation guidance to fuel your transformation. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Recovery & Wellness", slug: "recovery-wellness", desc: "Sauna, stretching zones, and sports massage to accelerate recovery and prevent injury. Our experienced team ensures every project meets the highest standards of quality and professionalism.", features: ["Expert Team","Quality Materials","Fast Turnaround","Warranty Included","Free Assessment","Full Support"], image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80" }
    ],
  },
  projects: {
    heroTitle: "Our Portfolio", heroSubtitle: "A selection of our finest work.",
    items: [
      { title: "Client Transformation", slug: "client--transformation", category: "Transformation", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Weight Loss Journey", slug: "weight--loss--journey", category: "Weight Loss", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Muscle Building Program", slug: "muscle--building--program", category: "Muscle Gain", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", images: ["https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"] },
      { title: "Marathon Preparation", slug: "marathon--preparation", category: "Fitness", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Corporate Wellness", slug: "corporate--wellness", category: "Strength", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Rehabilitation Program", slug: "rehabilitation--program", category: "Wellness", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", images: ["https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80"] },
      { title: "Youth Athletics", slug: "youth--athletics", category: "Cardio", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Senior Fitness", slug: "senior--fitness", category: "Training", location: "Harare", desc: "A showcase of our expertise and commitment to quality.", client: "Client", services: ["Service"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] }
    ],
  },
  homeTestimonials: [
    { text: "Outstanding service from Tawoh's Cardio Fitness & Wellness Centre. Professional, thorough, and delivered exactly what was promised. I would not hesitate to recommend them to anyone.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "We have been using Tawoh's Cardio Fitness & Wellness Centre for years and the quality has never dropped. Consistent excellence and genuine care for their clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "From the initial consultation to final delivery, every step was handled with professionalism. Tawoh's Cardio Fitness & Wellness Centre sets the standard in their industry.", name: "James Karonga", role: "Property Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The team at Tawoh's Cardio Fitness & Wellness Centre went above and beyond our expectations. Their expertise and attention to detail are truly impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "I have referred Tawoh's Cardio Fitness & Wellness Centre to everyone I know. Their combination of skill, integrity, and fair pricing is unmatched in Harare.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" }
  ],
  reviews: {
    heroTitle: "Client Reviews", heroSubtitle: "What our clients say about our work.",
    items: [
      { text: "Outstanding service. Professional and delivered exactly what was promised.", name: "Tendai Moyo", role: "Satisfied Client", rating: 5 },
      { text: "Consistent excellence over years of working together. Genuine care for clients.", name: "Grace Mutasa", role: "Business Owner", rating: 5 },
      { text: "Every step handled with professionalism. Tawoh's Cardio Fitness & Wellness Centre sets the standard.", name: "James Karonga", role: "Property Owner", rating: 5 },
      { text: "Above and beyond expectations. Expertise and attention to detail are impressive.", name: "Patricia Sibanda", role: "Corporate Client", rating: 5 },
      { text: "Skill, integrity, and fair pricing unmatched in Harare. Highly recommended.", name: "Michael Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Exceptional quality and service. Will definitely use again.", name: "Angela Mhembere", role: "New Client", rating: 5 }
    ],
  },
  about: {
    heroTitle: "Our Story", heroSubtitle: "Built on expertise, driven by quality.",
    story: ["Founded in 2017 at the University of Zimbabwe Sports Arena, Tawoh's Cardio Fitness brings a holistic approach to health. We believe fitness is for every body, regardless of age or experience.", "With 400+ members and a 4.9 rating, our wellness-focused approach combines cardio, strength, flexibility, and nutrition into a balanced program that changes lives.", "We are committed to delivering results that exceed expectations, every single time."],
    values: [
      { title: "Quality First", desc: "Every project meets our exacting standards before we consider it complete." },
      { title: "Client Focus", desc: "Your satisfaction is our measure of success. We listen, we deliver, we follow up." },
      { title: "Expert Team", desc: "Certified professionals with years of specialised experience in their craft." },
      { title: "Fair Pricing", desc: "Transparent quotes with no hidden costs. The price we quote is the price you pay." },
    ],
    team: [
      { name: "David Moyo", role: "Managing Director", bio: "Over 15 years of industry experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Sarah Mutasa", role: "Operations Manager", bio: "Ensures every project runs smoothly.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Peter Chimwanda", role: "Lead Specialist", bio: "Master craftsman with decades of expertise.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Lisa Karonga", role: "Client Relations", bio: "Dedicated to ensuring every client receives premium service.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },
  whyChooseUs: { title: "Why Tawoh's", points: [{ title: "Holistic Approach", desc: "Cardio, strength, flexibility, and nutrition -- balanced for total wellness." },{ title: "Inclusive Environment", desc: "Every body is welcome, every goal is valid." },{ title: "UZ Location", desc: "Premium facility inside the University of Zimbabwe Sports Arena." },{ title: "Wellness Focus", desc: "We train for health and longevity, not just aesthetics." }] },
  featuredProjects: [{ title: "Client Transformation", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", category: "Transformation" },{ title: "Weight Loss Journey", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", category: "Weight Loss" },{ title: "Muscle Building Program", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", category: "Muscle Gain" }],
  careers: { heroTitle: "Join Our Team", heroSubtitle: "We are always looking for talented people.", positions: [
    { title: "Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our team of skilled professionals." },
    { title: "Client Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients with expert advice." },
  ] },
  contact: { heroTitle: "Get In Touch", heroSubtitle: "Visit us or reach out for a free consultation.", branches: [
    { name: "Harare Office", address: "University of Zimbabwe Sports Arena, Harare, Zimbabwe", phone: "+263 77 170 3624", email: "info@tawohsfitness.co.zw" },
  ] },
  homeCta: {
    title: "YOUR WELLNESS JOURNEY BEGINS.", subtitle: "Cardio, strength, flexibility, and nutrition -- all in one place. Transform your health at Tawoh's.",
    ctaPrimary: "Start Your Journey", ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Tawoh's! I'd like to learn about your wellness programs.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85",
  },
  footer: { description: "University of Zimbabwe's premier wellness destination since 2017.", copyright: "Tawoh's Cardio Fitness & Wellness Centre" },
};

export default siteData;
