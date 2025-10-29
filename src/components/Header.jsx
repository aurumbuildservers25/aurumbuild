import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ t = {}, languages = [], currentLang = 'en', setCurrentLang = () => {}, handleSectionClick = () => {}, SECTION_IDS = [], division = 'industrial', setDivision = () => {}, currentSection = 'home' }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  
  // Safe translation object with fallbacks
  const safeT = {
    nav: {
      home: t?.nav?.home || 'Home',
      about: t?.nav?.about || 'About',
      technology: t?.nav?.technology || 'Technology',
      projects: t?.nav?.projects || 'Projects',
      contact: t?.nav?.contact || 'Contact'
    }
  };
  
  // Get current language object from languages array
  const currentLanguageObj = languages?.find(lang => lang.code === currentLang) || languages?.[0] || { code: 'en', name: 'English', flag: 'EN' };
  
  const isHomePage = location.pathname === '/' || location.pathname === '/Home' || location.pathname === createPageUrl('Home');
  const isContactPage = location.pathname === createPageUrl('contact');
  const isDreamhousePage = location.pathname === createPageUrl('dreamhouse');
  const isTechnologyPage = location.pathname === createPageUrl('technology'); 

  const handleGoHome = () => {
    if (isDreamhousePage) {
      setDivision('residential');
      localStorage.setItem('aurum-theme', 'residential');
    }
  };

  return (
    <>
      <style>{`
        .mobile-nav-dropdown {
          --dd-bg: #111827;
          --dd-bg-elev: #0b1220;
          --dd-border: #1f2937;
          --dd-shadow: 0 10px 24px rgba(0,0,0,.35);
          --dd-text: #e5e7eb;
          --dd-muted: #9ca3af;
          --dd-hover: rgba(255,255,255,.06);
          --dd-active: rgba(255,255,255,.10);
          --dd-sep: rgba(255,255,255,.08);
          --dd-cta-border: #84cc16;
          --dd-cta-text: #e5e7eb;
          --dd-cta-bg: transparent;
          --dd-cta-hover-bg: rgba(132,204,22,.12);
        }

        .theme-industrial.mobile-nav-dropdown {
          --dd-bg: #1B2A3A;
          --dd-bg-elev: #132132;
          --dd-border: rgba(255,255,255,0.10);
          --dd-text: #E2E8F0;
          --dd-muted: #94a3b8;
          --dd-hover: rgba(255,184,51,.10);
          --dd-active: rgba(255,184,51,.18);
          --dd-sep: rgba(255,255,255,.08);
          --dd-cta-border: #FFB833;
          --dd-cta-text: #E2E8F0;
          --dd-cta-bg: transparent;
          --dd-cta-hover-bg: rgba(255,184,51,.14);
        }

        .theme-residential.mobile-nav-dropdown {
          --dd-bg: #F7F7F5;
          --dd-bg-elev: #FFFFFF;
          --dd-border: rgba(36,50,75,0.15);
          --dd-shadow: 0 10px 24px rgba(36,50,75,.15);
          --dd-text: #24324B;
          --dd-muted: #6b7280;
          --dd-hover: rgba(36,50,75,0.08);
          --dd-active: rgba(217,181,102,0.15);
          --dd-sep: rgba(36,50,75,0.10);
          --dd-cta-border: #D9B566;
          --dd-cta-text: #24324B;
          --dd-cta-bg: transparent;
          --dd-cta-hover-bg: rgba(217,181,102,.12);
        }

        .mobile-nav-dropdown {
          background: linear-gradient(180deg, var(--dd-bg-elev), var(--dd-bg));
          border: 1px solid var(--dd-border);
          box-shadow: var(--dd-shadow);
          color: var(--dd-text);
          border-radius: 12px;
          overflow: hidden;
          max-height: 70vh;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .nav-dd__item {
          display: flex;
          align-items: center;
          width: 100%;
          text-align: left;
          gap: .6rem;
          padding: .75rem 1rem;
          color: var(--dd-text);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 0.75rem;
          transition: background .15s ease, color .15s ease;
        }

        .nav-dd__item:hover { background: var(--dd-hover); }
        .nav-dd__item:active { background: var(--dd-active); }

        .nav-dd__item.is-active {
          background: var(--dd-active);
          font-weight: 700;
        }

        .nav-dd__cta {
          display: block;
          margin: .5rem .25rem .5rem;
          border: 1.5px solid var(--dd-cta-border);
          color: var(--dd-cta-text);
          background: var(--dd-cta-bg);
          border-radius: 10px;
          padding: .75rem 1rem;
          text-align: center;
          font-weight: 600;
          transition: background .15s ease, border-color .15s ease, transform .1s ease;
          font-size: 0.875rem;
        }

        .nav-dd__cta:hover { background: var(--dd-cta-hover-bg); }
        .nav-dd__cta:active { transform: translateY(1px); }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 h-14 shadow-lg`} style={{
        backgroundColor: division === 'industrial' ? '#0C0E14' : '#F5F3F0',
        color: division === 'industrial' ? 'white' : '#24324B'
      }}>
        <div className="max-w-screen-xl mx-auto px-6 h-full relative flex items-center justify-between">
          {isHomePage ? (
            <button type="button" onClick={() => handleSectionClick('home')} className="font-bold transition-all duration-300">
              <div className="hidden sm:block text-xl">
                <span className="font-bold" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>AURUM</span>
                <span style={{ color: division === 'industrial' ? '#FFFFFF' : '#24324B' }}>Build</span>
              </div>
              <div className={`sm:hidden flex items-baseline p-2 rounded-lg`} style={{ backgroundColor: division === 'industrial' ? 'rgba(27,42,58,0.80)' : 'rgba(36,50,75,0.08)' }}>
                <span className="text-2xl leading-none font-bold" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>A</span>
                <span className={`text-[26px] leading-none font-bold`} style={{ color: division === 'industrial' ? '#FFFFFF' : '#24324B' }}>B</span>
              </div>
            </button>
          ) : (
            <Link to={createPageUrl('Home')} onClick={handleGoHome} className="font-bold transition-all duration-300">
              <div className="hidden sm:block text-xl">
                <span className="font-bold" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>AURUM</span>
                <span style={{ color: division === 'industrial' ? '#FFFFFF' : '#24324B' }}>Build</span>
              </div>
              <div className={`sm:hidden flex items-baseline p-2 rounded-lg`} style={{ backgroundColor: division === 'industrial' ? 'rgba(27,42,58,0.80)' : 'rgba(36,50,75,0.08)' }}>
                <span className="text-2xl leading-none font-bold" style={{ color: division === 'industrial' ? '#FFB833' : '#D9B566' }}>A</span>
                <span className={`text-[26px] leading-none font-bold`} style={{ color: division === 'industrial' ? '#FFFFFF' : '#24324B' }}>B</span>
              </div>
            </Link>
          )}

          {isHomePage && (
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
              <button type="button" onClick={() => handleSectionClick('home')} className={`font-medium transition-all duration-300 rounded-full px-4 py-2 ${currentSection === 'home' ? 'font-semibold shadow-lg' : ''}`} style={{ backgroundColor: currentSection === 'home' ? (division === 'industrial' ? '#FFB833' : '#D9B566') : 'transparent', color: currentSection === 'home' ? (division === 'industrial' ? '#0C0E14' : '#24324B') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }} aria-current={currentSection === 'home' ? 'page' : undefined}>{safeT.nav.home}</button>
              <button type="button" onClick={() => handleSectionClick('about')} className={`font-medium transition-colors duration-300`} style={{ color: currentSection === 'about' ? (division === 'industrial' ? '#FFB833' : '#D9B566') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }}>{safeT.nav.about}</button>
              <button type="button" onClick={() => handleSectionClick('technology')} className={`font-medium transition-colors duration-300`} style={{ color: currentSection === 'technology' ? (division === 'industrial' ? '#FFB833' : '#D9B566') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }}>{safeT.nav.technology}</button>
              <button type="button" onClick={() => handleSectionClick('projects')} className={`font-medium transition-colors duration-300`} style={{ color: currentSection === 'projects' ? (division === 'industrial' ? '#FFB833' : '#D9B566') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }}>{safeT.nav.projects}</button>
              <Link to={createPageUrl('contact')} className={`font-medium transition-colors duration-300`} style={{ color: isContactPage ? (division === 'industrial' ? '#FFB833' : '#D9B566') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }}>{safeT.nav.contact}</Link>
              <Link to={createPageUrl('dreamhouse')} className={`font-medium transition-colors duration-300`} style={{ color: isDreamhousePage ? (division === 'industrial' ? '#8B5CF6' : '#8B5CF6') : (division === 'industrial' ? '#E2E8F0' : '#24324B') }}>DH</Link>
            </div>
          )}

          <div className="flex items-center gap-2">
            {!isHomePage && (
              <Button asChild size="sm" className={`font-semibold shadow-lg text-sm hidden sm:inline-flex`} style={{ backgroundColor: division === 'industrial' ? '#FFFFFF' : '#24324B', color: division === 'industrial' ? '#0C0E14' : '#F5F3F0' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = division === 'industrial' ? '#E2E8F0' : '#1E293B'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = division === 'industrial' ? '#FFFFFF' : '#24324B'}>
                <Link to={createPageUrl('Home')} onClick={handleGoHome}>{safeT.nav.home}</Link>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`flex items-center gap-1 px-3 py-1 text-sm transition-colors duration-300`} style={{ color: division === 'industrial' ? '#E2E8F0' : '#24324B' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = division === 'industrial' ? 'rgba(255,255,255,0.10)' : 'rgba(36,50,75,0.08)'; e.currentTarget.style.color = division === 'industrial' ? '#FFB833' : '#D9B566'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = division === 'industrial' ? '#E2E8F0' : '#24324B'; }} title="Change language" aria-label="Change language">
                  <span className="text-xs font-bold tracking-wider">{currentLanguageObj.flag}</span>
                  <ChevronDown className="w-4 h-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className={`backdrop-blur-md shadow-xl`} style={{ backgroundColor: division === 'industrial' ? '#1B2A3A' : '#FFFFFF', borderColor: division === 'industrial' ? 'rgba(255,255,255,0.10)' : 'rgba(36,50,75,0.15)', color: division === 'industrial' ? 'white' : '#24324B' }}>
                {languages?.map((lang) => 
                  <DropdownMenuItem key={lang.code} onClick={() => setCurrentLang(lang.code)} className={`flex items-center gap-3 cursor-pointer ${currentLang === lang.code ? (division === 'industrial' ? 'bg-[#FFB833]/20' : 'bg-[#D9B566]/20') : ''}`}>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-md transition-colors duration-300"
              style={{ color: division === 'industrial' ? '#E2E8F0' : '#24324B' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = division === 'industrial' ? 'rgba(255,255,255,0.10)' : 'rgba(36,50,75,0.08)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Toggle mobile menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 0.2}} className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden" onClick={() => setShowMobileMenu(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-16 right-4 z-50 lg:hidden min-w-[200px] mobile-nav-dropdown ${division === 'industrial' ? 'theme-industrial' : 'theme-residential'}`}
              role="menu">
                {isHomePage ? (
                  <>
                    <button
                      key="mobile-home"
                      type="button"
                      onClick={() => { handleSectionClick('home'); setShowMobileMenu(false); }}
                      className={`nav-dd__item ${currentSection === 'home' ? 'is-active' : ''}`}
                      role="menuitem">
                      {safeT.nav.home}
                    </button>
                    <button
                      key="mobile-about"
                      type="button"
                      onClick={() => { handleSectionClick('about'); setShowMobileMenu(false); }}
                      className={`nav-dd__item ${currentSection === 'about' ? 'is-active' : ''}`}
                      role="menuitem">
                      {safeT.nav.about}
                    </button>
                    <button
                      key="mobile-technology"
                      type="button"
                      onClick={() => { handleSectionClick('technology'); setShowMobileMenu(false); }}
                      className={`nav-dd__item ${currentSection === 'technology' ? 'is-active' : ''}`}
                      role="menuitem">
                      {safeT.nav.technology}
                    </button>
                    <button
                      key="mobile-projects"
                      type="button"
                      onClick={() => { handleSectionClick('projects'); setShowMobileMenu(false); }}
                      className={`nav-dd__item ${currentSection === 'projects' ? 'is-active' : ''}`}
                      role="menuitem">
                      {safeT.nav.projects}
                    </button>
                    <Link
                      key="mobile-contact"
                      to={createPageUrl('contact')}
                      className={`nav-dd__item ${isContactPage ? 'is-active' : ''}`}
                      onClick={() => setShowMobileMenu(false)}
                      role="menuitem">
                      {safeT.nav.contact}
                    </Link>
                    <Link
                      key="mobile-dreamhouse"
                      to={createPageUrl('dreamhouse')}
                      className={`nav-dd__item ${isDreamhousePage ? 'is-active' : ''}`}
                      onClick={() => setShowMobileMenu(false)}
                      role="menuitem">
                      Dreamhouse
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      key="mobile-home-alt"
                      to={createPageUrl('Home')}
                      className={`nav-dd__item ${isHomePage ? 'is-active' : ''}`}
                      onClick={() => { handleGoHome(); setShowMobileMenu(false); }}
                      role="menuitem">
                      {safeT.nav.home}
                    </Link>
                    <Link
                      key="mobile-technology-alt"
                      to={createPageUrl('technology')}
                      className={`nav-dd__item ${isTechnologyPage ? 'is-active' : ''}`}
                      onClick={() => setShowMobileMenu(false)}
                      role="menuitem">
                      {safeT.nav.technology}
                    </Link>
                    <Link
                      key="mobile-contact-alt"
                      to={createPageUrl('contact')}
                      className={`nav-dd__item ${isContactPage ? 'is-active' : ''}`}
                      onClick={() => setShowMobileMenu(false)}
                      role="menuitem">
                      {safeT.nav.contact}
                    </Link>
                    <Link
                      key="mobile-dreamhouse-alt"
                      to={createPageUrl('dreamhouse')}
                      className={`nav-dd__item ${isDreamhousePage ? 'is-active' : ''}`}
                      onClick={() => setShowMobileMenu(false)}
                      role="menuitem">
                      Dreamhouse
                    </Link>
                  </>
                )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}