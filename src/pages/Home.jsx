import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight, CheckCircle, MapPin, FileCheck, HardHat, Users, KeyRound,
  ShieldCheck, Globe, Star, Cpu, BarChart4, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '' }) =>
  <motion.section
    id={id}
    data-section
    className={`grid align-content-start ${className}`}
    style={{
      paddingTop: 'clamp(16px, 3vh, 32px)',
      paddingBottom: 'clamp(24px, 5vh, 48px)',
      minHeight: 'calc(100vh - var(--header-h-current, 64px)'
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}>
    <div id={`${id}-heading`} tabIndex="-1"></div>
    {children}
  </motion.section>;

export default function Home({ t = {}, division = 'industrial', setDivision = () => {} }) {
  // ALL HOOKS MUST BE AT THE TOP - BEFORE ANY CONDITIONAL LOGIC OR RETURNS
  useEffect(() => {
    if (division) {
      document.documentElement.setAttribute('data-theme', division);
    }
  }, [division]);

  // Safe check for translations - provide defaults
  const safeT = {
    nav: t?.nav || { contact: 'Contact' },
    hero: t?.hero || { 
      title: 'Building Tomorrow, Today.', 
      subtitle: 'Industrial & Residential Turnkey Projects', 
      description: 'From initial design to final handover, we deliver excellence and precision in every project across Europe.', 
      industrial: 'Industrial', 
      residential: 'Residential', 
      buildDream: 'Build Your Dream' 
    },
    about: t?.about || { 
      residential: { title: 'Living the dream', description: 'Quality residences', microclaim: 'Excellence' }, 
      industrial: { title: 'General Contractor', description: 'Projects built to last', microclaim: 'Efficiency' }, 
      reach: 'European Reach', 
      methods: 'Proven Methods', 
      team: 'Expert Team', 
      quality: 'Quality' 
    },
    process: t?.process || { 
      title: 'Our Process', 
      description: 'Transparent and efficient', 
      steps: { 
        land: { title: 'Land', desc: 'Secure location' }, 
        permits: { title: 'Permits', desc: 'Get approval' }, 
        design: { title: 'Design', desc: 'Blueprint to life' }, 
        supervision: { title: 'Supervision', desc: 'Quality control' }, 
        handover: { title: 'Handover', desc: 'Final delivery' } 
      } 
    },
    technology: t?.technology || { 
      title: 'Technology', 
      challenge_title: 'Challenge', 
      challenge_desc: 'Manual monitoring issues', 
      solution_title: 'Solution', 
      solution_desc: '4D BIM digital twin', 
      feature_4dbim_title: '4D BIM', 
      feature_4dbim_desc: 'Integrated tracking', 
      feature_quality_title: 'Quality', 
      feature_quality_desc: 'AI-powered', 
      feature_future_title: 'Future', 
      feature_future_desc: 'Smart tools', 
      cta: 'Explore Technology' 
    },
    bim_monitoring: t?.bim_monitoring || { 
      title: 'BIM Monitoring', 
      subtitle: '4D progress tracking', 
      benefits: ['Reduce time', 'Early detection', 'Better control'] 
    },
    projects: t?.projects || { 
      title: 'Our Portfolio', 
      industrial: ['Project 1', 'Project 2', 'Project 3'], 
      residential: ['Villa 1', 'Apartment 2', 'Residence 3'] 
    }
  };

  const residentialPalette = {
    background: 'transparent',
    title: '#D9B566',
    text_primary: '#24324B',
    text_secondary: '#4A5568',
    accent_main: '#D9B566',
    accent_secondary: '#2C7A7B',
    divider: 'rgba(139,105,20,0.25)'
  };

  const industrialPalette = {
    background: '#0C0E14',
    text_primary: '#E2E8F0',
    text_secondary: '#C9D1D9',
    accent_main: '#FFB833',
    accent_hover: '#E19A00',
    accent_secondary: '#7FCF8A',
    divider: 'rgba(255,184,51,0.18)'
  };

  const currentPalette = division === 'residential' ? residentialPalette : industrialPalette;
  const currentContent = division === 'residential' ? safeT.about.residential : safeT.about.industrial;

  return (
    <div style={{ backgroundColor: division === 'industrial' ? '#0C0E14' : '#F5F3F0', minHeight: '100vh' }} className="overflow-x-hidden min-w-0">
      <header id="home" data-section className="relative h-screen flex items-center justify-center overflow-hidden" style={{ background: division === 'industrial' ? 'linear-gradient(to bottom, #0C0E14 0%, #132132 100%)' : 'linear-gradient(to bottom, #ECEBE9 0%, #E8E6E3 100%)' }}>
        <div className="absolute inset-0 grid grid-cols-2 opacity-30">
          <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547898141-9453293a34a0?auto=format&fit=crop&w=1200&q=80')" }}></div>
          <div className="h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80')" }}></div>
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: division === 'industrial' ? 'rgba(0,0,0,0.60)' : 'rgba(255,255,255,0.75)' }}></div>
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-screen-xl mx-auto flex flex-col items-center justify-center" style={{ color: division === 'industrial' ? 'white' : '#24324B' }}>
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-3 sm:mb-4" style={{ color: division === 'industrial' ? '#F1F5F9' : '#24324B', textShadow: division === 'industrial' ? '0 2px 8px rgba(0,0,0,0.3)' : 'none' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {safeT.hero.title}
            <span className="block text-2xl sm:text-3xl md:text-5xl font-semibold mt-2" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>{safeT.hero.subtitle}</span>
          </motion.h1>
          <motion.p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto" style={{ color: division === 'industrial' ? '#C9D1D9' : '#4A5568' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>{safeT.hero.description}</motion.p>
          <motion.div className="my-6 sm:my-10 flex justify-center w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="p-1.5 rounded-full flex gap-1 border-2 w-full max-w-md" style={{ backgroundColor: division === 'industrial' ? 'rgba(12,14,20,0.50)' : 'rgba(244,246,248,0.80)', backdropFilter: 'blur(8px)', borderColor: division === 'industrial' ? '#1E4A6B' : 'rgba(36,50,75,0.15)' }}>
              <button onClick={() => setDivision('industrial')} className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${division === 'industrial' ? 'shadow-lg' : ''}`} style={{ backgroundColor: division === 'industrial' ? '#FFB833' : 'transparent', color: division === 'industrial' ? '#0C0E14' : '#24324B' }}>{safeT.hero.industrial}</button>
              <button onClick={() => setDivision('residential')} className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${division === 'residential' ? 'shadow-md' : ''}`} style={{ backgroundColor: division === 'residential' ? '#8B5CF6' : 'transparent', color: division === 'residential' ? 'white' : '#24324B', boxShadow: division === 'residential' ? '0 4px 12px rgba(139,92,246,0.25)' : 'none' }}>{safeT.hero.residential}</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="w-full flex justify-center">
            {division === 'residential' ?
            <Link to={createPageUrl('dreamhouse')} className="inline-block">
                <Button className="font-semibold transition-all duration-300 px-8 py-3 text-sm sm:text-md rounded-full" style={{ backgroundColor: '#D9B566', color: '#24324B', boxShadow: '0 8px 24px rgba(217,181,102,0.45), 0 0 40px rgba(217,181,102,0.20)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C49D4E'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(217,181,102,0.60), 0 0 60px rgba(217,181,102,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D9B566'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(217,181,102,0.45), 0 0 40px rgba(217,181,102,0.20)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {safeT.hero.buildDream}
                </Button>
              </Link> :
            <Link to={createPageUrl('contact')} className="inline-block">
                <Button className="font-semibold transition-all duration-300 px-8 py-3 text-sm sm:text-md rounded-full" style={{ backgroundColor: '#8B5CF6', color: 'white', boxShadow: '0 8px 24px rgba(139,92,246,0.45), 0 0 40px rgba(139,92,246,0.20)' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#6D28D9'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(139,92,246,0.60), 0 0 60px rgba(139,92,246,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#8B5CF6'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(139,92,246,0.45), 0 0 40px rgba(139,92,246,0.20)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {safeT.nav.contact}
                </Button>
              </Link>
            }
          </motion.div>
        </div>
      </header>

      <div className="section-divider"></div>

      <SectionWrapper id="about" className="border-b" style={{ backgroundColor: currentPalette.background || (division === 'industrial' ? '#0C0E14' : '#F5F3F0'), borderColor: 'var(--border-color)' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            className="max-w-[850px] mx-auto text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-bold tracking-tight mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: currentPalette.accent_main,
                lineHeight: 1.2,
                textShadow: division === 'residential'
                  ? '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                  : 'none'
              }}
            >
              {currentContent.title}
            </h2>
            <p
              className="mb-5"
              style={{
                fontWeight: 400,
                color: currentPalette.text_primary,
                lineHeight: 1.6,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)'
              }}
            >
              {currentContent.description}
            </p>
            <p
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                opacity: 0.9,
                color: currentPalette.accent_secondary,
                fontWeight: 500,
                fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)'
              }}
            >
              {currentContent.microclaim}
            </p>
          </motion.div>

          <div
            className="mb-8 mx-auto"
            style={{
              height: '1px',
              background: `linear-gradient(90deg, transparent, ${currentPalette.divider}, transparent)`,
              maxWidth: '650px'
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
            {[{ icon: Globe, label: safeT.about.reach, color: division === 'industrial' ? '#7FCF8A' : '#2C7A7B' }, { icon: ShieldCheck, label: safeT.about.methods, color: division === 'industrial' ? '#7FCF8A' : '#2C7A7B' }, { icon: Users, label: safeT.about.team, color: division === 'industrial' ? '#8B5CF6' : '#8B5CF6' }, { icon: Star, label: safeT.about.quality, color: division === 'industrial' ? '#FFB833' : '#8B6914' }].map((item) =>
            <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center rounded-full" style={{ backgroundColor: division === 'industrial' ? 'rgba(27,42,58,0.60)' : 'rgba(36,50,75,0.08)' }}><item.icon className="w-6 h-6 opacity-90" style={{ color: item.color }} /></div>
                <span className="font-medium text-base text-center" style={{ color: division === 'industrial' ? '#E2E8F0' : '#24324B' }}>{item.label}</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-inherit py-12" style={{ backgroundColor: division === 'industrial' ? 'rgba(27,42,58,0.50)' : 'rgba(247,247,245,0.70)' }}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-10">
              <h2
                className="font-bold tracking-tight text-center mb-6"
                style={{
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 700,
                  color: division === 'industrial' ? '#FFB833' : '#D9B566',
                  lineHeight: 1.2,
                  textShadow: division === 'residential'
                    ? '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                    : 'none'
                }}
              >
                {safeT.process.title}
              </h2>
              <p className="text-xl font-bold" style={{ color: division === 'industrial' ? '#E2E8F0' : '#1E293B' }}>{safeT.process.description}</p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-6 relative z-10">
                {[{ icon: MapPin, title: safeT.process.steps.land.title, description: safeT.process.steps.land.desc, step: 1 }, { icon: FileCheck, title: safeT.process.steps.permits.title, description: safeT.process.steps.permits.desc, step: 2 }, { icon: HardHat, title: safeT.process.steps.design.title, description: safeT.process.steps.design.desc, step: 3 }, { icon: Users, title: safeT.process.steps.supervision.title, description: safeT.process.steps.supervision.desc, step: 4 }, { icon: KeyRound, title: safeT.process.steps.handover.title, description: safeT.process.steps.handover.desc, step: 5 }].map((step, index) =>
                <div key={index} className={`relative flex flex-col items-center text-center ${index === 4 ? 'col-span-2 md:col-span-1' : ''}`}>
                    <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 mb-2" style={{ backgroundColor: index === 4 ? (division === 'industrial' ? '#7FCF8A' : '#2C7A7B') : (division === 'industrial' ? '#FFB833' : '#D9B566'), borderColor: division === 'industrial' ? '#132132' : '#F7F7F5' }}><step.icon className="w-5 h-5 text-white" /></div>
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white border-2" style={{ backgroundColor: index === 4 ? (division === 'industrial' ? '#6AB877' : '#236B6A') : (division === 'industrial' ? '#E19A00' : '#C49D4E'), borderColor: division === 'industrial' ? '#132132' : '#F7F7F5' }}>{step.step}</div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: index === 4 ? (division === 'industrial' ? '#7FCF8A' : '#2C7A7B') : (division === 'industrial' ? '#FFB833' : '#D9B566') }}>{step.title}</h3>
                    <p className="text-xs" style={{ color: division === 'industrial' ? '#C9D1D9' : '#4A5568' }}>{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="section-divider"></div>

      <SectionWrapper id="technology" className="border-b" style={{ backgroundColor: division === 'industrial' ? '#0C0E14' : '#E8E6E3', borderColor: 'var(--border-color)' }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2
              className="font-bold tracking-tight text-center mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: division === 'industrial' ? '#FFB833' : '#D9B566',
                lineHeight: 1.2,
                textShadow: division === 'residential'
                  ? '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                  : 'none'
              }}
            >
              {safeT.technology.title}
            </h2>
            <p className="text-lg" style={{ color: division === 'industrial' ? '#7FCF8A' : '#2C7A7B' }}>{safeT.technology.solution_desc}</p>
          </div>
          <div className="rounded-2xl p-6 md:p-8 mb-8 border-2" style={{ backgroundColor: division === 'industrial' ? '#132132' : '#F7F7F5', color: division === 'industrial' ? 'white' : '#24324B', borderColor: division === 'industrial' ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)' }}>
            <h3 className="text-xl font-semibold mb-2">{safeT.technology.challenge_title}</h3>
            <p className="mb-4 text-sm" style={{ color: division === 'industrial' ? '#C9D1D9' : '#4A5568' }}>{safeT.technology.challenge_desc}</p>
            <h3 className="text-xl font-semibold mb-2">{safeT.technology.solution_title}</h3>
            <p className="text-sm" style={{ color: division === 'industrial' ? '#C9D1D9' : '#4A5568' }}>{safeT.technology.solution_desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
            { icon: Cpu, title: safeT.technology.feature_4dbim_title, text: safeT.technology.feature_4dbim_desc },
            { icon: BarChart4, title: safeT.technology.feature_quality_title, text: safeT.technology.feature_quality_desc },
            { icon: Sparkles, title: safeT.technology.feature_future_title, text: safeT.technology.feature_future_desc }].
            map((f, index) =>
            <motion.div
              key={f.title}
              className="rounded-2xl p-6 border-2"
              style={{ backgroundColor: division === 'industrial' ? '#1B2A3A' : '#F7F7F5', borderColor: division === 'industrial' ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
                <f.icon className="w-8 h-8 mb-3" style={{ color: division === 'industrial' ? (index === 0 ? '#FFB833' : index === 1 ? '#7FCF8A' : '#8B5CF6') : (index === 0 ? '#D9B566' : index === 1 ? '#2C7A7B' : '#8B5CF6') }} />
                <div className="font-semibold mb-1 text-base" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>{f.title}</div>
                <div className="text-sm" style={{ color: division === 'industrial' ? '#C9D1D9' : '#4A5568' }}>{f.text}</div>
              </motion.div>
            )}
          </div>

          <div className="flex justify-center mb-6">
            <Button asChild variant="outline" size="default"
            className="px-6 py-3 text-base font-semibold shadow-lg bg-transparent border-2 w-full sm:w-auto max-w-sm" style={{ borderColor: division === 'industrial' ? '#FFB833' : '#8B5CF6', color: division === 'industrial' ? '#FFB833' : '#8B5CF6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = division === 'industrial' ? 'rgba(255,184,51,0.10)' : 'rgba(139,92,246,0.10)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <Link to={createPageUrl('technology')} className="flex items-center justify-center gap-2">
                {safeT.technology.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl p-5 md:p-6 border-2 shadow-xl" style={{ backgroundColor: division === 'industrial' ? '#132132' : 'rgba(247,247,245,0.90)', borderColor: division === 'industrial' ? 'rgba(127,207,138,0.30)' : 'rgba(44,122,123,0.30)' }}>
            <h3
              className="font-bold mb-2 text-center"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                fontWeight: 700,
                color: division === 'industrial' ? '#FFB833' : '#D9B566',
                lineHeight: 1.2,
                textShadow: division === 'residential'
                  ? '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                  : 'none'
              }}
            >
              {safeT.bim_monitoring.title}
            </h3>
            <p className="mb-4 text-center text-sm" style={{ color: division === 'industrial' ? '#7FCF8A' : '#2C7A7B' }}>{safeT.bim_monitoring.subtitle}</p>
            <ul className="space-y-2">
              {safeT.bim_monitoring.benefits.map((b, index) =>
              <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: division === 'industrial' ? '#7FCF8A' : '#2C7A7B' }} />
                  <span className="text-sm" style={{ color: division === 'industrial' ? '#E2E8F0' : '#1E293B' }}>{b}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <div className="section-divider"></div>

      <SectionWrapper id="projects" className="border-b" style={{ backgroundColor: division === 'industrial' ? '#0C0E14' : '#E8E6E3', borderColor: 'var(--border-color)' }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2
              className="font-bold tracking-tight text-center mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: division === 'industrial' ? '#FFB833' : '#D9B566',
                lineHeight: 1.2,
                textShadow: division === 'residential'
                  ? '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                  : 'none'
              }}
            >
              {safeT.projects.title}
            </h2>
            <div className="flex justify-center mt-4">
              <div className="p-1.5 rounded-full flex gap-1 border-2 w-full max-w-md" style={{ backgroundColor: division === 'industrial' ? 'rgba(12,14,20,0.50)' : 'rgba(244,246,248,0.80)', backdropFilter: 'blur(8px)', borderColor: division === 'industrial' ? '#1E4A6B' : 'rgba(36,50,75,0.15)' }}>
                <button onClick={() => setDivision('industrial')} className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${division === 'industrial' ? 'shadow-lg' : ''}`} style={{ backgroundColor: division === 'industrial' ? '#FFB833' : 'transparent', color: division === 'industrial' ? '#0C0E14' : '#24324B' }}>{safeT.hero.industrial}</button>
                <button onClick={() => setDivision('residential')} className={`flex-1 px-4 sm:px-8 py-2 text-sm sm:text-md font-bold rounded-full transition-all ${division === 'residential' ? 'shadow-md' : ''}`} style={{ backgroundColor: division === 'residential' ? '#8B5CF6' : 'transparent', color: division === 'residential' ? 'white' : '#24324B', boxShadow: division === 'residential' ? '0 4px 12px rgba(139,92,246,0.25)' : 'none' }}>{safeT.hero.residential}</button>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={`${division}-projects`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(division === 'industrial' ? [{ img: 'https://images.unsplash.com/photo-1564939558297-fc319db62985?auto=format&fit=crop&w=800&q=80', title: safeT.projects.industrial[0] }, { img: 'https://images.unsplash.com/photo-1444419219b7-53359079b9b7?auto=format&fit=crop&w=800&q=80', title: safeT.projects.industrial[1] }, { img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80', title: safeT.projects.industrial[2] }] : [{ img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', title: safeT.projects.residential[0] }, { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', title: safeT.projects.residential[1] }, { img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', title: safeT.projects.residential[2] }]).map((proj) =>
              <Card key={proj.title} className="overflow-hidden group border transition-all duration-300 hover:shadow-2xl" style={{ backgroundColor: division === 'industrial' ? '#132132' : '#F7F7F5', borderColor: division === 'industrial' ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)' }}>
                  <div className="aspect-[4/3] overflow-hidden"><img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                  <CardContent className="p-5"><h3 className="text-lg font-bold" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>{proj.title}</h3></CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </div>
  );
}