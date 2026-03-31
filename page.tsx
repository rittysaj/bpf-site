"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a1a] font-sans selection:bg-cyan-100 selection:text-cyan-900 overflow-x-hidden relative">
      
      {/* 1. BACKGROUND AURA */}
      <div 
        className="fixed inset-0 z-0 opacity-60 scale-110 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(80px)' 
        }}
      ></div>

      {/* 2. SIDEBAR NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed right-0 top-0 h-full w-full md:w-[380px] bg-white z-[70] p-12 flex flex-col shadow-2xl uppercase">
              <button onClick={() => setIsOpen(false)} className="self-end text-[10px] font-black tracking-widest opacity-40 hover:opacity-100 mb-20">Menu_Close</button>
              <nav className="flex flex-col gap-6 text-4xl font-black tracking-tighter text-black">
                <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-600">About</Link>
                <Link href="#products" onClick={() => setIsOpen(false)} className="hover:text-cyan-600">Products</Link>
                <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-cyan-600">Services</Link>
                <Link href="#experience" onClick={() => setIsOpen(false)} className="hover:text-cyan-600">Experience</Link>
                {/* UPDATED: SIDEBAR CONTACT LINK */}
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm mt-10 font-bold border-b-2 border-black w-fit pb-1 lowercase tracking-normal">Get in touch →</Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 3. NAVIGATION (Sticky Glass) */}
      <nav className="relative z-50 p-8 flex justify-between items-center bg-white/30 backdrop-blur-md sticky top-0 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-black text-xs italic">B</div>
          <span className="font-bold tracking-tight text-xl text-black">Bipolar Factory</span>
        </div>
        
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest opacity-60">
            <Link href="#about" className="hover:opacity-100 transition-opacity">About</Link>
            <Link href="#products" className="hover:opacity-100 transition-opacity">Products</Link>
            <Link href="#services" className="hover:opacity-100 transition-opacity">Services</Link>
          </div>
          <button aria-label="Open menu" onClick={() => setIsOpen(true)} className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform text-[11px] font-bold uppercase tracking-widest">
            Menu +
          </button>
        </div>
      </nav>

      {/* 4. HERO SECTION */}
      <section className="relative z-20 px-8 py-32 md:py-52 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-6 block text-black">Elevate your digital frontier</span>
          <h1 className="text-[10vw] md:text-[6.5vw] font-medium leading-[1.1] tracking-tight mb-10 text-zinc-900">
            Innovations of tomorrow, <br/>
            <span className="italic font-serif text-zinc-500 underline decoration-zinc-200 underline-offset-8">delivered today.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-zinc-600 leading-relaxed mb-12 normal-case">
            A collective of dreamers, thinkers, and doers transforming challenges into global opportunities.
          </p>
          
          <div className="flex items-center bg-white shadow-2xl shadow-black/5 p-2 rounded-2xl max-w-md mx-auto border border-zinc-100 overflow-hidden">
            <input aria-label="Email address" type="email" placeholder="Your email address" className="flex-1 bg-transparent border-none outline-none px-6 text-zinc-800 normal-case" />
            {/* UPDATED: HERO JOIN US LINK */}
            <Link href="/contact" className="bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors whitespace-nowrap">Join Us</Link>
          </div>
        </motion.div>
      </section>

      {/* 5. ABOUT SECTION */}
      <section id="about" className="relative z-20 py-32 px-8 md:px-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.5em] opacity-30 text-black block mb-4">Established_2020</span>
            <h2 className="text-6xl font-black tracking-tighter uppercase mb-8">We are Bipolar Factory.</h2>
          </div>
          <div className="text-xl font-medium leading-relaxed text-zinc-600 normal-case">
            <p className="mb-6">Our journey began with the recognition that seemingly insurmountable challenges are opportunities waiting for the right idea. At Bipolar Factory, innovation is our heartbeat, fueled by a relentless commitment to quality and a passion for making a difference.</p>
            <p>We strive to be the catalyst for ideas that elevate the essence of everyday living, rooted in integrity, teamwork, and bold execution.</p>
          </div>
        </div>
      </section>

      {/* 6. PRODUCTS SECTION */}
      <section id="products" className="py-32 px-8 md:px-24 bg-[#fafaf8] relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 max-w-7xl mx-auto w-full gap-8">
          <div className="max-w-xl">
             <span className="text-[11px] font-black uppercase tracking-[0.5em] opacity-30 text-black">Section_01</span>
             <h2 className="text-6xl font-black tracking-tighter text-black mt-4 uppercase">Products.</h2>
          </div>
          <Link href="#products" className="px-8 py-4 bg-[#222] text-white rounded-md text-[11px] font-black uppercase tracking-widest hover:bg-black">
            View Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto w-full text-black">
          <ProjectCard title="OLY Store Sync" href="/oly-store" img="/oly-sync.jpg" bgColor="bg-sky-400" />
          <ProjectCard title="OLY Control" href="/oly-control" img="/control-center.jpg" bgColor="bg-rose-400" />
          <ProjectCard title="Metawood" href="/metawood" img="/metawood-ui.jpg" bgColor="bg-violet-400" />
        </div>
      </section>

      {/* 7. SERVICES SECTION */}
      <section id="services" className="py-40 px-8 bg-[#0a0a0a] text-white relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 mb-24 text-center">
           <span className="text-[11px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-6 block uppercase">Our Services_</span>
           <p className="max-w-4xl mx-auto mt-8 text-zinc-400 font-medium normal-case leading-relaxed">
             At Bipolar Factory, we extend beyond conventional products, positioning ourselves as dedicated technology partners. We collaborate closely with clients to transform aspirations into reality, navigating the entire development lifecycle with custom solutions.
           </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10">
          <ServiceCard title="Technology Partner" desc="Transforming challenges into opportunities through close collaboration." icon="◎" />
          <ServiceCard title="SaaS Architect" desc="Scalable software strategies designed to drive sustainable growth." icon="◇" />
          <ServiceCard title="Future Ready" desc="Proactively preparing for future technological shifts to stay ahead." icon="△" />
        </div>
      </section>

      {/* 8. EXPERIENCE & MARKET */}
      <section id="experience" className="py-32 px-8 md:px-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10 border-b-4 border-black pb-4 w-fit">Experience_</h3>
            <p className="text-lg font-bold text-zinc-500 leading-tight normal-case">
              From retail analytics to gamified streaming, our experience spans across industries, delivering solutions that go beyond expectations and impact lives positively.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-10 border-b-4 border-black pb-4 w-fit">Market_</h3>
            <p className="text-lg font-bold text-zinc-500 leading-tight normal-case">
              We serve a diverse range of industries, including retail, manufacturing, civil aviation, road safety, entertainment, and content creation.
            </p>
          </div>
        </div>
      </section>

      {/* 9. STRATEGIC PARTNERS (TRUE BLACK) */}
      <section className="py-24 px-8 bg-[#000000] border-t border-white/5 text-center relative z-20">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-800 mb-12 block">Strategic_Partnerships</span>
          <div className="flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-700">
            <Image
              src="/partners.png"
              alt="Bipolar Factory Strategic Partners"
              width={1200}
              height={440}
              className="max-w-full h-auto md:max-h-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* 10. NEURAL PULSE FOOTER */}
      <footer className="relative z-20 bg-[#080808] py-32 px-8 md:px-24 overflow-hidden border-t border-white/5">
        
        {/* Glow Effects (Light Blue, Violet, Pink) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full" />
          <div className="absolute -bottom-48 -right-24 w-[700px] h-[700px] bg-pink-500/10 blur-[130px] rounded-full animate-pulse [animation-delay:2s]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          <div className="md:col-span-4 flex flex-col gap-10">
            <h2 className="text-4xl font-black tracking-tighter text-white lowercase">bipolarfactory_</h2>
            <nav className="flex flex-col gap-5 text-lg font-black tracking-tight text-zinc-400 uppercase">
              <Link href="#products" className="hover:text-sky-400 transition-all hover:translate-x-2">_Products</Link>
              <Link href="#services" className="hover:text-violet-400 transition-all hover:translate-x-2">_Technology_Partnership</Link>
              <Link href="#about" className="hover:text-pink-400 transition-all hover:translate-x-2 text-white border-l-2 border-[#ff4d00] pl-4">_About</Link>
              <Link href="#" className="hover:text-zinc-200 transition-all hover:translate-x-2">_Careers</Link>
              <Link href="#" className="hover:text-[#ff4d00] transition-all hover:translate-x-2">_Case_Studies</Link>
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-sky-400 uppercase">Hub_Location</span>
            <p className="text-sm font-bold text-zinc-500 normal-case leading-relaxed">
              Bipolar Factory Private Limited,<br />
              2/118, First Floor, Nehru Nagar,<br />
              Koundampalayam Road, Coimbatore,<br />
              Tamil Nadu 641025
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-violet-400 uppercase">Network_Sync</span>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-xs font-black text-zinc-400 hover:text-white transition-colors uppercase">Facebook_</Link>
              <Link href="#" className="text-xs font-black text-zinc-400 hover:text-white transition-colors uppercase">Twitter_𝕏</Link>
              <Link href="#" className="text-xs font-black text-zinc-400 hover:text-white transition-colors uppercase">Linkedin_</Link>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-8 items-start md:items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-400 text-right uppercase">Inquiries_Log</span>
            {/* UPDATED: FOOTER CONTACT LINK */}
            <Link 
              href="/contact" 
              className="group relative overflow-hidden bg-transparent border-2 border-[#ff4d00] text-white px-12 py-5 rounded-full font-black text-lg transition-all hover:border-white uppercase"
            >
              <span className="relative z-10">Initialize_Contact ↘</span>
              <div className="absolute inset-0 bg-[#ff4d00] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 uppercase">
           <Link href="/contact" className="text-[10px] font-black tracking-widest text-zinc-500 hover:text-white underline underline-offset-4">Security & Privacy Protocol ↗</Link>
           <p className="text-[9px] font-black text-zinc-600 tracking-widest">© 2026 Bipolar Factory Lab</p>
        </div>
      </footer>
    </main>
  );
}

// Components
function ProjectCard({ title, href, img, bgColor }: { title: string; href: string; img: string; bgColor: string }) {
  return (
    <Link href={href} className="group flex flex-col items-center">
      <div className="aspect-square overflow-hidden bg-white rounded-[40px] mb-8 shadow-2xl relative p-8 group-hover:shadow-blue-500/10 transition-all duration-700">
        <div className={`absolute inset-0 z-0 opacity-20 blur-[80px] pointer-events-none scale-110 ${bgColor}`}></div>
        <div className="relative z-10 w-full h-full overflow-hidden rounded-[28px] border border-zinc-100">
          <Image
            src={img}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="text-center w-full">
         <span className="text-[10px] uppercase font-black tracking-[0.3em] opacity-30 text-black group-hover:text-blue-600 transition-colors">Explore</span>
         <h3 className="text-3xl font-black tracking-tighter text-black mt-2">{title}</h3>
      </div>
    </Link>
  );
}

function ServiceCard({ title, icon, desc }: { title: string; icon: string; desc: string }) {
  return (
    <div className="group p-12 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 text-center flex flex-col items-center uppercase">
      <div className="w-24 h-24 rounded-full border border-blue-500/30 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform bg-blue-500/5 shadow-2xl shadow-blue-500/10 text-cyan-500 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-blue-400 transition-colors uppercase">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors normal-case">{desc}</p>
      <button className="mt-10 px-8 py-2 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full uppercase">Learn More</button>
    </div>
  );
}