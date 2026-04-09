import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowDown, MapPin, Phone, WhatsappLogo, Star, Quotes,
  CaretLeft, CaretRight, CheckCircle, Lightning, Heart, Users, Trophy, Timer, Fire, Lightbulb,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';

const iconMap = { Heart, Star, Lightning, Trophy, Users, Timer, Fire, CheckCircle, Lightbulb };

function AnimatedCounter({ target, suffix = '', duration = 2.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);
  return <span ref={ref}>{inView ? count.toLocaleString() : '0'}{suffix}</span>;
}

function NoiseTexture({ opacity = 0.035 }) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10" style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat', backgroundSize: '128px 128px',
    }} />
  );
}


/* 1. HERO — Clean White with Accent Stripe */
function HeroSection() {
  const { business, hero } = siteData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      <NoiseTexture opacity={0.02} />
      {/* Accent stripe top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#EF4444] z-30" />
      <div className="relative z-20 grid lg:grid-cols-2 min-h-screen">
        <motion.div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-32 lg:py-20" style={{ y: textY, opacity }}>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.3 }}
            className="w-16 h-[3px] bg-[#EF4444] mb-6 origin-left" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-[#EF4444] text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-6" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.badge || "Modern Fitness"}
          </motion.p>
          <div className="overflow-hidden">
            {(hero.titleLines || ['TRAIN','SMARTER.']).map((line, i) => (
              <motion.div key={line} initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}>
                <h1 className={`font-heading leading-[0.90] tracking-tight ${i === 1 ? 'text-[#EF4444]' : 'text-neutral-900'}`}
                  style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', fontWeight: i === 1 ? 800 : 300 }}>{line}</h1>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="text-neutral-500 text-sm sm:text-base leading-relaxed mt-8 max-w-md" style={{ fontFamily: 'var(--font-sans)' }}>
            {hero.subtitle || "A clean, modern approach to fitness. Expert coaching, premium equipment, and a welcoming community."}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-wrap gap-4 mt-10">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:shadow-lg transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {hero.ctaPrimary || 'Get Started'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="group inline-flex items-center gap-3 border border-neutral-200 text-neutral-700 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:border-[#EF4444] hover:text-[#EF4444] transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {hero.ctaSecondary || 'View Classes'}
            </Link>
          </motion.div>
        </motion.div>
        <div className="relative hidden lg:block">
          <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Tawoh's Cardio Fitness & Wellness Centre" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}

/* 2. STATS */
function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const { stats } = siteData;
  const ds = stats?.length ? stats : [{ number: '16', label: 'Reviews' }, { number: '4.9', label: 'Stars' }, { number: '300', label: 'Members' }, { number: '20', label: 'Classes' }];
  return (
    <section ref={ref} className="bg-neutral-50 border-y border-neutral-100 py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {ds.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
              <div className="font-heading text-[#EF4444] font-bold leading-none" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
                <AnimatedCounter target={String(s.number).replace(/[^0-9]/g, '')} suffix={String(s.number).replace(/[0-9]/g, '')} />
              </div>
              <div className="text-neutral-400 text-xs uppercase tracking-[0.2em] mt-2" style={{ fontFamily: 'var(--font-sans)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3. SERVICES */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview, services } = siteData;
  const fi = ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80','https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80','https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80','https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'];
  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-neutral-900 leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Our <span className="text-[#EF4444]">Classes</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(servicesPreview || []).slice(0, 6).map((service, i) => {
            const IC = iconMap[service.icon] || iconMap[service.iconName] || Star;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.06 * i }}>
                <Link to={`/services#${services?.items?.[i]?.slug || ''}`} className="group relative block aspect-[3/4] overflow-hidden">
                  <img src={service.image || fi[i] || fi[0]} alt={service.title} className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#EF4444] flex items-center justify-center"><IC size={18} weight="fill" className="text-white" /></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-heading text-white text-lg font-bold mb-1">{service.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* 4. CLASS SCHEDULE GRID */
function ScheduleGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const classes = [
    { time: '06:00', name: 'Morning HIIT', trainer: 'Coach T.', day: 'Mon-Fri' },
    { time: '07:30', name: 'Strength', trainer: 'Coach K.', day: 'Mon/Wed/Fri' },
    { time: '09:00', name: 'Yoga Flow', trainer: 'Coach S.', day: 'Tue/Thu' },
    { time: '12:00', name: 'Lunchtime Express', trainer: 'Coach M.', day: 'Mon-Fri' },
    { time: '16:00', name: 'Boxing', trainer: 'Coach D.', day: 'Tue/Thu/Sat' },
    { time: '18:00', name: 'Spinning', trainer: 'Coach R.', day: 'Mon/Wed/Fri' },
  ];
  return (
    <section ref={ref} className="bg-neutral-50 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-14 sm:mb-20">
          <div className="w-12 h-[3px] bg-[#EF4444] mx-auto mb-6" />
          <h2 className="font-heading text-neutral-900 leading-[0.95] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Weekly <span className="text-[#EF4444]">Schedule</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls, i) => (
            <motion.div key={cls.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white border border-neutral-100 p-6 hover:border-[#EF4444]/30 hover:shadow-lg hover:shadow-[#EF4444]/5 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#EF4444] font-heading text-2xl font-bold">{cls.time}</span>
                <span className="text-neutral-400 text-xs uppercase tracking-wider border border-neutral-200 px-2 py-1" style={{ fontFamily: 'var(--font-sans)' }}>{cls.day}</span>
              </div>
              <h4 className="font-heading text-neutral-900 text-lg font-bold mb-1">{cls.name}</h4>
              <p className="text-neutral-400 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{cls.trainer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. TRAINER SPOTLIGHT */
function TrainerSpotlight() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const trainers = [
    { name: 'Coach Tawanda', role: 'Head Trainer • Strength', image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1200&q=80' },
    { name: 'Coach Nyasha', role: 'Cardio & HIIT Specialist', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80' },
    { name: 'Coach Fari', role: 'Yoga & Flexibility', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80' },
  ];
  return (
    <section ref={ref} className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-14 sm:mb-20">
          <div className="w-12 h-[3px] bg-[#EF4444] mb-6" />
          <h2 className="font-heading text-neutral-900 leading-[0.92] font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
            Meet Our <span className="text-[#EF4444]">Trainers</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((tr, i) => (
            <motion.div key={tr.name} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={tr.image} alt={tr.name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" loading="eager" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white font-heading text-xl font-bold">{tr.name}</h4>
                <p className="text-white/50 text-sm mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{tr.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 6. TESTIMONIALS */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const defaults = [{ text: 'Clean, professional, and motivating. A gym that respects your time.', name: 'Rudo P.', role: 'Member', rating: 5 }, { text: 'The trainers make all the difference. Personal attention at group prices.', name: 'Tapiwa L.', role: 'Client', rating: 5 }];
  const ts = homeTestimonials?.length ? homeTestimonials : defaults;
  const next = useCallback(() => setActive(p => (p+1) % ts.length), [ts.length]);
  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t); }, [next]);
  const t = ts[active];
  return (
    <section ref={ref} className="bg-neutral-50 py-24 sm:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <Quotes size={48} weight="fill" className="text-[#EF4444]/15 mx-auto mb-8" />
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
            <blockquote className="text-neutral-800 text-lg sm:text-xl lg:text-2xl leading-relaxed font-heading font-bold mb-8">&ldquo;{t.text}&rdquo;</blockquote>
            <div className="w-8 h-[2px] bg-[#EF4444] mx-auto mb-3" />
            <div className="text-neutral-800 text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>{t.name}</div>
            <div className="text-neutral-400 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>{t.role}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* 7. CTA */
function CTASection() {
  const { business, homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&q=80" alt="Tawoh's Cardio Fitness & Wellness Centre" className="w-full h-[130%] object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-neutral-900/70" />
      </motion.div>
      <NoiseTexture opacity={0.03} />
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="w-16 h-[3px] bg-[#EF4444] mx-auto mb-8" />
          <h2 className="font-heading text-white leading-[0.92] font-bold mb-8" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}>
            READY TO<br /><span className="text-[#EF4444]">GET STARTED?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#EF4444] text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:shadow-xl transition-all duration-500" style={{ fontFamily: 'var(--font-sans)' }}>
              {homeCta?.ctaPrimary || 'Book Free Trial'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={`https://wa.me/${business.whatsappNumber || '263771703624'}`} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-green-500/40 text-green-400 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-green-500/10 transition-all" style={{ fontFamily: 'var(--font-sans)' }}>
              <WhatsappLogo size={20} weight="fill" /> WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <StatsStrip />
      <ServicesGrid />
      <ScheduleGrid />
      <TrainerSpotlight />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}
