
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { CheckCircle, Cpu, BarChart4, Sparkles, Scan, Eye, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Technology({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0C0E14', color: '#F1F5F9' }}>
      <div style={{
        paddingTop: 'calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))',
        paddingBottom: 'clamp(24px, 5vh, 48px)',
        minHeight: '100vh'
      }}>
        <main className="pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
            <motion.h1 
              className="font-bold tracking-tight mb-4 text-center" 
              style={{ 
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: '#FFB833',
                lineHeight: 1.2
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {t.technology.title}
            </motion.h1>

            <motion.div 
              className="p-4 sm:p-5 rounded-2xl border-2 shadow-2xl" 
              style={{ backgroundColor: '#132132', borderColor: 'rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ borderColor: 'rgba(127,207,138,0.15)' }}
            >
              <h3 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  fontWeight: 700,
                  color: '#FFB833',
                  lineHeight: 1.2
                }}
              >
                {t.bim_monitoring.title}
              </h3>
              <p className="mb-3 text-sm" style={{ color: '#7FCF8A' }}>{t.bim_monitoring.subtitle}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {t.bim_monitoring.badges.map((badge) =>
                  <span key={badge} className="text-xs font-medium px-2 py-1 rounded-full" style={{ backgroundColor: '#1B2A3A', color: '#E2E8F0' }}>{badge}</span>
                )}
              </div>
              <ul className="space-y-1.5 mb-4">
                {t.bim_monitoring.benefits.map((benefit) =>
                  <li key={benefit} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                    <span className="text-xs" style={{ color: '#E2E8F0' }}>{benefit}</span>
                  </li>
                )}
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="sm" className="text-sm px-4 py-2 font-semibold transition-all duration-300" style={{ backgroundColor: '#FFB833', color: '#0C0E14' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#E19A00'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,184,51,0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#FFB833'; e.currentTarget.style.boxShadow = 'none'; }} asChild>
                    <Link to={createPageUrl('contact')}>{t.nav.contact}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-4">
              <motion.div 
                className="lg:col-span-1 border-2 rounded-2xl p-4 sm:p-5 flex flex-col" 
                style={{ backgroundColor: '#132132', borderColor: 'rgba(127,207,138,0.20)' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ borderColor: 'rgba(127,207,138,0.30)', transition: { duration: 0.3 } }}
              >
                <div>
                  <h3 
                    className="font-bold mb-2" 
                    style={{ 
                      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                      fontWeight: 700,
                      color: '#FFB833',
                      lineHeight: 1.2
                    }}
                  >
                    {t.technology.challenge_title}
                  </h3>
                  <p className="mb-3 text-sm" style={{ color: '#E2E8F0' }}>{t.technology.challenge_desc}</p>
                  <h3 
                    className="font-bold mb-2" 
                    style={{ 
                      fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                      fontWeight: 700,
                      color: '#FFB833',
                      lineHeight: 1.2
                    }}
                  >
                    {t.technology.solution_title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: '#E2E8F0' }}>{t.technology.solution_desc}</p>
                </div>
                <div className="mt-auto">
                  <div className="rounded-lg border-2 p-3" style={{ borderColor: 'rgba(248,113,113,0.30)', backgroundColor: 'rgba(220,38,38,0.12)' }}>
                    <p className="text-xs text-center" style={{ color: '#FCA5A5' }}>
                      {t.technology.eu_projects_delay_note} <span className="text-lg font-bold text-white drop-shadow-lg">{t.technology.eu_projects_delay_percentage}</span> {t.technology.eu_projects_delay_context}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="lg:grid-cols-2 grid gap-3 lg:col-span-2">
                {[
                  { icon: <Cpu className="w-6 h-6" style={{ color: '#FFB833' }} />, title: t.technology.feature_4dbim_title, description: t.technology.feature_4dbim_desc, color: '#FFB833' },
                  { icon: <Shield className="w-6 h-6" style={{ color: '#7FCF8A' }} />, title: t.technology.feature_quality_title, description: t.technology.feature_quality_desc, color: '#7FCF8A' },
                  { icon: <Sparkles className="w-6 h-6" style={{ color: '#8B5CF6' }} />, title: t.technology.feature_future_title, description: t.technology.feature_future_desc, color: '#8B5CF6' },
                  { icon: <TrendingUp className="w-6 h-6" style={{ color: '#FFB833' }} />, title: t.technology.feature_savings_title, description: t.technology.feature_savings_desc, color: '#FFB833' }
                ].map((tool, index) =>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="border-2 p-3 transition-all duration-300" style={{ backgroundColor: '#1B2A3A', borderColor: 'rgba(255,255,255,0.06)' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,184,51,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                      <CardContent className="p-0">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-2" style={{ backgroundColor: '#132132' }}>{tool.icon}</div>
                        <h3 className="text-sm font-bold mb-1" style={{ color: tool.color }}>{tool.title}</h3>
                        <p className="text-xs" style={{ color: '#E2E8F0' }}>{tool.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h3 
                className="font-bold text-center mb-4" 
                style={{ 
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#FFB833',
                  lineHeight: 1.2
                }}
              >
                {t.technology.roi_title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -3, transition: { duration: 0.3 } }}>
                  <Card className="border-2 p-4" style={{ backgroundColor: '#132132', borderColor: 'rgba(255,255,255,0.06)' }}>
                    <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
                      <AlertTriangle className="w-6 h-6 flex-shrink-0" style={{ color: '#FFB833' }} />
                      <CardTitle className="text-base sm:text-lg" style={{ color: '#F1F5F9' }}>{t.technology.roi_traditional_title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 text-sm">
                      <p className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_traditional_desc}</p>
                      <div className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: '#1B2A3A' }}>
                        <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_traditional_report_time}</span>
                        <span className="font-bold text-sm" style={{ color: '#F1F5F9' }}>{t.technology.roi_traditional_report_value}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: '#1B2A3A' }}>
                        <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_traditional_decision}</span>
                        <span className="font-bold text-sm" style={{ color: '#F1F5F9' }}>{t.technology.roi_traditional_decision_value}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ y: -3, transition: { duration: 0.3 } }}>
                  <Card className="border-2 p-4" style={{ backgroundColor: '#132132', borderColor: 'rgba(127,207,138,0.35)' }}>
                    <CardHeader className="p-0 mb-3 flex-row items-center gap-3">
                      <TrendingUp className="w-6 h-6 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                      <CardTitle className="text-base sm:text-lg" style={{ color: '#F1F5F9' }}>{t.technology.roi_aurum_title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2 text-sm">
                      <p className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_aurum_desc}</p>
                      <div className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: '#1B2A3A' }}>
                        <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_traditional_report_time}</span>
                        <span className="font-bold text-sm" style={{ color: '#7FCF8A' }}>{t.technology.roi_aurum_report_value}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: '#1B2A3A' }}>
                        <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.roi_traditional_decision}</span>
                        <span className="font-bold text-sm" style={{ color: '#7FCF8A' }}>{t.technology.roi_aurum_decision_value}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            <div className="border-t-2 pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <div className="max-w-5xl mx-auto">
                <motion.h3 
                  className="font-bold text-center mb-6" 
                  style={{ 
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: '#FFB833',
                    lineHeight: 1.2
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {t.technology.how_it_works_title}
                </motion.h3>
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  {[
                    { step: "1", icon: <Scan className="w-8 h-8" />, title: t.technology.step1_title, desc: t.technology.step1_desc, color: '#FFB833' },
                    { step: "2", icon: <Cpu className="w-8 h-8" />, title: t.technology.step2_title, desc: t.technology.step2_desc, color: '#7FCF8A' },
                    { step: "3", icon: <BarChart4 className="w-8 h-8" />, title: t.technology.step3_title, desc: t.technology.step3_desc, color: '#8B5CF6' },
                    { step: "4", icon: <Eye className="w-8 h-8" />, title: t.technology.step4_title, desc: t.technology.step4_desc, color: '#FFB833' }
                  ].map((step, index) =>
                    <motion.div
                      key={index}
                      className="text-center relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                      <div className="relative z-10 w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full transition-all duration-300" style={{ backgroundColor: '#1B2A3A' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 20px ${step.color}40`} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                        <div style={{ color: step.color }}>{step.icon}</div>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2" style={{ backgroundColor: step.color, borderColor: '#0C0E14', color: 'white' }}>{step.step}</div>
                      <h4 className="font-bold mb-2 text-sm" style={{ color: '#F1F5F9' }}>{step.title}</h4>
                      <p className="text-xs" style={{ color: '#C9D1D9' }}>{step.desc}</p>
                    </motion.div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                  >
                    <Card className="border-2 transition-all duration-300" style={{ backgroundColor: '#132132', borderColor: 'rgba(255,255,255,0.06)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,184,51,0.15)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base" style={{ color: '#FFB833' }}>{t.technology.tech_specs_title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2 space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.tech_specs_accuracy}</span>
                          <span className="font-semibold text-xs" style={{ color: '#F1F5F9' }}>{t.technology.tech_specs_accuracy_value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.tech_specs_coverage}</span>
                          <span className="font-semibold text-xs" style={{ color: '#F1F5F9' }}>{t.technology.tech_specs_coverage_value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.tech_specs_point_density}</span>
                          <span className="font-semibold text-xs" style={{ color: '#F1F5F9' }}>{t.technology.tech_specs_point_density_value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs" style={{ color: '#C9D1D9' }}>{t.technology.tech_specs_report_delivery}</span>
                          <span className="font-semibold text-xs" style={{ color: '#F1F5F9' }}>{t.technology.tech_specs_report_delivery_value}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                  >
                    <Card className="border-2 transition-all duration-300" style={{ backgroundColor: '#132132', borderColor: 'rgba(255,255,255,0.06)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(127,207,138,0.15)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-base" style={{ color: '#FFB833' }}>{t.technology.deliverables_title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <ul className="space-y-1.5 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                            <span className="text-xs" style={{ color: '#E2E8F0' }}>{t.technology.deliverables_item1}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                            <span className="text-xs" style={{ color: '#E2E8F0' }}>{t.technology.deliverables_item2}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                            <span className="text-xs" style={{ color: '#E2E8F0' }}>{t.technology.deliverables_item3}</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#7FCF8A' }} />
                            <span className="text-xs" style={{ color: '#E2E8F0' }}>{t.technology.deliverables_item4}</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
