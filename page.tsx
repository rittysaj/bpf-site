"use client";
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a1a] font-sans selection:bg-[#ff4d00]/10 overflow-x-hidden relative uppercase">
      
      {/* 1. SHARED BACKGROUND AURA */}
      <div 
        className="fixed inset-0 z-0 opacity-40 scale-110 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2560')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(100px)' 
        }}
      ></div>

      {/* 2. NAVIGATION */}
      <nav className="relative z-50 p-8 flex justify-between items-center bg-white/30 backdrop-blur-md sticky top-0 border-b border-white/20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xs group-hover:bg-[#ff4d00] transition-all">
            ←
          </div>
          <span className="font-black tracking-tighter text-xl text-black">Back_To_Lab</span>
        </Link>
        <span className="text-[10px] font-black opacity-40 tracking-[0.2em]">Contact_Protocol_V1.0</span>
      </nav>

      {/* 3. CONTACT FORM SECTION */}
      <section className="relative z-20 px-8 py-20 md:py-32 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] font-black tracking-[0.5em] text-[#ff4d00] mb-4 block">Contact Us</span>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 text-zinc-900 uppercase leading-[0.9]">
            Drop us <br/> a Line
          </h1>
          <p className="text-xl font-medium text-zinc-500 normal-case mb-20 max-w-xl leading-snug">
            Feel free to ask us more about the company and its products.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* FIRST NAME */}
            <div className="flex flex-col gap-4">
              <label htmlFor="first-name" className="text-[11px] font-black tracking-widest opacity-60">First name *</label>
              <input id="first-name" type="text" required className="bg-white border border-zinc-200 p-4 outline-none focus:border-[#ff4d00] transition-colors normal-case text-lg font-bold" />
            </div>

            {/* LAST NAME */}
            <div className="flex flex-col gap-4">
              <label htmlFor="last-name" className="text-[11px] font-black tracking-widest opacity-60">Last name *</label>
              <input id="last-name" type="text" required className="bg-white border border-zinc-200 p-4 outline-none focus:border-[#ff4d00] transition-colors normal-case text-lg font-bold" />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="text-[11px] font-black tracking-widest opacity-60">Email *</label>
              <input id="email" type="email" required className="bg-white border border-zinc-200 p-4 outline-none focus:border-[#ff4d00] transition-colors normal-case text-lg font-bold" />
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-4">
              <label htmlFor="phone" className="text-[11px] font-black tracking-widest opacity-60">Phone *</label>
              <div className="relative flex items-center bg-white border border-zinc-200 focus-within:border-[#ff4d00] transition-colors">
                  <div className="px-4 border-r border-zinc-200 text-xl">🌐</div>
                  <input id="phone" type="tel" required placeholder="Enter a phone number" className="p-4 outline-none w-full normal-case text-lg font-bold placeholder:opacity-20" />
              </div>
            </div>

            {/* COMPANY NAME */}
            <div className="flex flex-col gap-4">
              <label htmlFor="company" className="text-[11px] font-black tracking-widest opacity-60">Company name</label>
              <input id="company" type="text" className="bg-white border border-zinc-200 p-4 outline-none focus:border-[#ff4d00] transition-colors normal-case text-lg font-bold" />
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col gap-4">
              <label htmlFor="subject" className="text-[11px] font-black tracking-widest opacity-60">Subject *</label>
              <div className="relative">
                <select id="subject" required className="bg-white border border-zinc-200 p-4 outline-none focus:border-[#ff4d00] transition-colors w-full normal-case text-lg font-bold appearance-none cursor-pointer">
                  <option value="">Click to select</option>
                  <option value="product">Product Inquiry</option>
                  <option value="partnership">Technology Partnership</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                  <span className="text-xs font-black">↓</span>
                </div>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="md:col-span-2 pt-10">
              <button type="submit" className="bg-[#ff4d00] text-white px-16 py-5 rounded-full font-black text-xl hover:bg-black transition-all hover:scale-105 shadow-xl shadow-orange-500/20">
                Send Message ↘
              </button>
            </div>

          </form>
        </motion.div>
      </section>

      {/* 4. FOOTER */}
      <footer className="relative z-20 py-20 px-8 bg-white border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">© 2026 Bipolar Factory Lab</p>
          <div className="flex gap-8 text-[10px] font-black tracking-widest opacity-40">
             <span>Twitter</span>
             <span>Facebook</span>
             <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </main>
  );
}