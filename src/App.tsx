import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-emerald-dark text-white font-sans selection:bg-gold selection:text-emerald-dark">

      {/* 1. Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-emerald-dark/80 backdrop-blur-lg py-4 border-b border-gold/10' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-col items-center z-50 cursor-pointer">
            <img src="/Logo.png" alt="Mahify Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {['Expertise', 'Systems', 'Niches'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-light tracking-widest text-white hover:text-gold transition-colors duration-300 uppercase">
                {item}
              </a>
            ))}
            <button className="border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-emerald-dark transition-all duration-500">
              [ Book Consultation ]
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-emerald-dark z-40 flex flex-col items-center justify-center space-y-8">
          {['Expertise', 'Systems', 'Niches'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="border border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold hover:text-emerald-dark transition-all duration-500 mt-8">
            [ Book Consultation ]
          </button>
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-gold mb-8 leading-[1.1] tracking-tight"
          >
            ARCHITECTS OF THE<br />DIGITAL ELITE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-14 font-light tracking-wide leading-relaxed"
          >
            Bespoke digital storefronts and automated systems for the world's most exclusive brands.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="bg-gold text-emerald-dark px-10 py-4 text-sm tracking-[0.2em] font-medium uppercase hover:bg-gold-light transition-all duration-500"
          >
            Explore Our Systems
          </motion.button>
        </div>
      </section>

      {/* 3. The Philosophy Section */}
      <section id="expertise" className="relative py-32 lg:py-48 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-[4/5] lg:aspect-square">
                <img
                  src="/images/A_closeup_highdefinition_photorealistic_render_of__c79c1e3572.jpeg"
                  alt="Abstract Gold Structure"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold mb-8 leading-tight">
                DESIGNING ORDER.<br />BUILDING SUCCESS.
              </h2>
              <p className="text-white font-light text-lg leading-relaxed tracking-wide">
                We don't just build websites; we engineer complete digital ecosystems. Our foundational architecture ensures seamless integration between your high-end service and your client's digital experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Elite Niches Section */}
      <section id="niches" className="relative py-32 lg:py-48 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold tracking-tight">
              TAILORED DIGITAL SCHEMATICS.
            </h2>
          </motion.div>

          <div className="space-y-40 lg:space-y-64">
            {/* Niche 1: Luxury Auto */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 order-2 lg:order-1"
              >
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Precision Systems for Luxury Detailing
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 order-1 lg:order-2 group"
              >
                <div className="relative rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                  <img
                    src="/images/Sports_car_chassis_golden_lines_78443dd024.jpeg"
                    alt="Car Chassis Blueprint"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Niche 2: Upscale Hospitality */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 group"
              >
                <div className="relative rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                  <img
                    src="/images/An_abstract_3d_visualization_of_a_luxury_concierge_88e722d077.jpeg"
                    alt="Hospitality Schematic"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 lg:text-right"
              >
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Seamless Concierge & Booking Integration
                </h3>
              </motion.div>
            </div>

            {/* Niche 3: Premium Pet Care */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 order-2 lg:order-1"
              >
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Organized Elite Pet Care Dashboards
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 order-1 lg:order-2 group"
              >
                <div className="relative rounded-xl overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]">
                  <img
                    src="/images/An_aesthetic_organized_blueprint_visualization_of__5c80839904.jpeg"
                    alt="Dog Profile Blueprint"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer & Final CTA */}
      <footer className="bg-emerald-darkest py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-gold mb-16 leading-tight"
          >
            READY TO BUILD YOUR<br />DIGITAL EMPIRE?
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center max-w-xl mx-auto mb-32 relative group"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-gold/50 py-4 pr-12 text-white placeholder-text-light/50 focus:outline-none focus:border-gold text-lg font-light transition-colors"
              required
            />
            <button
              type="submit"
              className="absolute right-0 text-gold hover:text-gold-light transition-colors p-2"
              aria-label="Submit"
            >
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          <div className="text-text-light/40 text-xs tracking-widest uppercase font-light">
            Copyright &copy; {new Date().getFullYear()} Mahify. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
