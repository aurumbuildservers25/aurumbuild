
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact({ t, division = 'industrial' }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isIndustrial = division === 'industrial';

  return (
    <div className="min-h-screen" style={{ backgroundColor: isIndustrial ? '#0C0E14' : '#F5F3F0', color: isIndustrial ? '#F1F5F9' : '#24324B' }}>
      <div style={{ 
        paddingTop: 'calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))',
        paddingBottom: 'clamp(24px, 5vh, 48px)',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }}>
        <main className="pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>

              <h1 
                className="font-bold tracking-tight text-center mb-2" 
                style={{ 
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 700,
                  color: isIndustrial ? '#FFB833' : '#D9B566',
                  lineHeight: 1.2,
                  textShadow: isIndustrial 
                    ? '0 2px 12px rgba(255,184,51,0.22)' 
                    : '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                {t.nav.contact}
              </h1>
              <p className="text-center text-base mb-6 max-w-2xl mx-auto" style={{ color: isIndustrial ? '#C9D1D9' : '#4A5568' }}>
                {t.contact.subtitle}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Card className="border-2 rounded-2xl transition-all duration-300" style={{ 
                    backgroundColor: isIndustrial ? '#132132' : '#FFFFFF', 
                    borderColor: isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)', 
                    boxShadow: isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' 
                  }} onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,184,51,0.15)' : 'rgba(139,105,20,0.25)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 6px 16px rgba(0,0,0,0.4)' : '0 6px 16px rgba(0,0,0,0.12)'; 
                  }} onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'; 
                  }}>
                    <CardContent className="p-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-250" style={{ backgroundColor: isIndustrial ? '#1B2A3A' : 'rgba(36,50,75,0.08)' }}>
                        <Mail className="w-6 h-6" style={{ color: isIndustrial ? '#FFB833' : '#8B6914' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>{t.contact.email}</h3>
                      <div className="space-y-1 text-sm">
                        <a href="mailto:contact@aurumbuild.eu" className="block transition-colors duration-300" style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }} onMouseEnter={(e) => e.currentTarget.style.color = isIndustrial ? '#FFB833' : '#8B6914'} onMouseLeave={(e) => e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#1E293B'}>
                          contact@aurumbuild.eu
                        </a>
                        <a href="mailto:projects@aurumbuild.eu" className="block transition-colors duration-300" style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }} onMouseEnter={(e) => e.currentTarget.style.color = isIndustrial ? '#FFB833' : '#8B6914'} onMouseLeave={(e) => e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#1E293B'}>
                          projects@aurumbuild.eu
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Card className="border-2 rounded-2xl transition-all duration-300" style={{ 
                    backgroundColor: isIndustrial ? '#132132' : '#FFFFFF', 
                    borderColor: isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)', 
                    boxShadow: isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' 
                  }} onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(127,207,138,0.15)' : 'rgba(44,122,123,0.25)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 6px 16px rgba(0,0,0,0.4)' : '0 6px 16px rgba(0,0,0,0.12)'; 
                  }} onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'; 
                  }}>
                    <CardContent className="p-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-250" style={{ backgroundColor: isIndustrial ? '#1B2A3A' : 'rgba(36,50,75,0.08)' }}>
                        <Phone className="w-6 h-6" style={{ color: isIndustrial ? '#7FCF8A' : '#2C7A7B' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>{t.contact.phone}</h3>
                      <div className="space-y-1 text-sm">
                        <a href="tel:+48221234567" className="block transition-colors duration-300" style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }} onMouseEnter={(e) => e.currentTarget.style.color = isIndustrial ? '#7FCF8A' : '#2C7A7B'} onMouseLeave={(e) => e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#1E293B'}>
                          +48 22 123 4567
                        </a>
                        <a href="tel:+39021234567" className="block transition-colors duration-300" style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }} onMouseEnter={(e) => e.currentTarget.style.color = isIndustrial ? '#7FCF8A' : '#2C7A7B'} onMouseLeave={(e) => e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#1E293B'}>
                          +39 02 123 4567
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Card className="border-2 rounded-2xl transition-all duration-300" style={{ 
                    backgroundColor: isIndustrial ? '#132132' : '#FFFFFF', 
                    borderColor: isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)', 
                    boxShadow: isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' 
                  }} onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(139,92,246,0.15)' : 'rgba(139,92,246,0.25)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 6px 16px rgba(0,0,0,0.4)' : '0 6px 16px rgba(0,0,0,0.12)'; 
                  }} onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'; 
                  }}>
                    <CardContent className="p-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-250" style={{ backgroundColor: isIndustrial ? '#1B2A3A' : 'rgba(36,50,75,0.08)' }}>
                        <MapPin className="w-6 h-6" style={{ color: isIndustrial ? '#8B5CF6' : '#8B6914' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>{t.contact.headquarters}</h3>
                      <div className="space-y-1 text-sm">
                        <p style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }}>{t.contact.location}</p>
                        <p style={{ color: isIndustrial ? '#C9D1D9' : '#4A5568' }}>{t.contact.operationsCenter}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  whileHover={{ y: -3, transition: { duration: 0.3 } }}
                >
                  <Card className="border-2 rounded-2xl transition-all duration-300" style={{ 
                    backgroundColor: isIndustrial ? '#132132' : '#FFFFFF', 
                    borderColor: isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)', 
                    boxShadow: isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' 
                  }} onMouseEnter={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,184,51,0.15)' : 'rgba(139,105,20,0.25)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 6px 16px rgba(0,0,0,0.4)' : '0 6px 16px rgba(0,0,0,0.12)'; 
                  }} onMouseLeave={(e) => { 
                    e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)'; 
                    e.currentTarget.style.boxShadow = isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'; 
                  }}>
                    <CardContent className="p-5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 transition-all duration-250" style={{ backgroundColor: isIndustrial ? '#1B2A3A' : 'rgba(36,50,75,0.08)' }}>
                        <Clock className="w-6 h-6" style={{ color: isIndustrial ? '#FFB833' : '#8B6914' }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>{t.contact.officeHours}</h3>
                      <div className="space-y-1 text-sm">
                        <p style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }}>{t.contact.mondayFriday}</p>
                        <p style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }}>{t.contact.saturday}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
              >
                <Card className="border-2 rounded-2xl transition-all duration-300" style={{ 
                  backgroundColor: isIndustrial ? '#132132' : '#FFFFFF', 
                  borderColor: isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)', 
                  boxShadow: isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)' 
                }} onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = isIndustrial ? 'rgba(127,207,138,0.15)' : 'rgba(44,122,123,0.25)'; 
                  e.currentTarget.style.boxShadow = isIndustrial ? '0 6px 16px rgba(0,0,0,0.4)' : '0 6px 16px rgba(0,0,0,0.12)'; 
                }} onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = isIndustrial ? 'rgba(255,255,255,0.06)' : 'rgba(36,50,75,0.08)'; 
                  e.currentTarget.style.boxShadow = isIndustrial ? '0 4px 12px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.08)'; 
                }}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-250" style={{ backgroundColor: isIndustrial ? '#1B2A3A' : 'rgba(36,50,75,0.08)' }}>
                        <Globe className="w-6 h-6" style={{ color: isIndustrial ? '#7FCF8A' : '#2C7A7B' }} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>{t.contact.coverageAreas}</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      {['Italy', 'Poland', 'Spain', 'Turkey'].map((country) =>
                        <span key={country} style={{ color: isIndustrial ? '#E2E8F0' : '#1E293B' }}>
                          {country}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
