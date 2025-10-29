
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';

export default function Dreamhouse({ t, setDivision }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (setDivision) {
      setDivision('residential');
    }
  }, [setDivision]);

  return (
    <div className="min-h-screen text-[#F7F6F2] relative overflow-hidden" style={{ backgroundColor: '#0C0E14' }}>
      {/* Subtle animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(217,181,102,0.03), transparent 70%)'
        }}
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(217,181,102,0.03), transparent 70%)',
            'radial-gradient(circle at 60% 40%, rgba(91,175,163,0.02), transparent 70%)',
            'radial-gradient(circle at 40% 60%, rgba(217,181,102,0.03), transparent 70%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div style={{
        paddingTop: 'calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))',
        paddingBottom: 'clamp(24px, 5vh, 48px)',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1
      }} className="flex items-center">
        <main className="pb-8 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-5">
            <motion.h1
              className="font-bold tracking-tight text-center mb-4 drop-shadow-lg"
              style={{
                fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                fontWeight: 700,
                color: '#D9B566',
                lineHeight: 1.2,
                textShadow: '0 2px 12px rgba(217,181,102,0.5), 0 1px 3px rgba(0,0,0,0.3)'
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Dreamhouse
            </motion.h1>

            <motion.div
              style={{
                backgroundColor: '#0E1A26',
                borderColor: 'rgba(217,181,102,0.25)',
                maxWidth: '850px'
              }}
              className="border-2 rounded-xl px-5 py-4 text-center shadow-2xl backdrop-blur-sm mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              <motion.p
                style={{
                  fontWeight: 400,
                  color: '#DAD8D2',
                  lineHeight: '1.4',
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  marginBottom: '0'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                dangerouslySetInnerHTML={{ __html: t.dreamhouse.bannerDescription }}
              />

              <motion.div
                style={{
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(217,181,102,0.0), rgba(217,181,102,0.4), rgba(217,181,102,0.0))',
                  marginTop: '1rem'
                }}
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-full"
            >
              <Card style={{
                backgroundColor: '#0E1A26',
                borderColor: 'rgba(217,181,102,0.25)'
              }} className="border-2 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-[rgba(217,181,102,0.35)]">
                <CardContent className="p-5">
                  <h3 className="text-base font-bold mb-2" style={{ color: '#F7F6F2' }}>{t.dreamhouse.startTitle}</h3>
                  <p className="mb-3 leading-relaxed text-sm" style={{ color: '#DAD8D2' }}>
                    {t.dreamhouse.startDescription}
                  </p>
                  <p className="text-xs italic opacity-80" style={{ color: '#DAD8D2' }}>
                    {t.dreamhouse.startNote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0 }}
              >
                <Card
                  style={{ backgroundColor: '#111827', borderColor: '#D9B566', transition: 'box-shadow 0.3s ease' }}
                  className="border-2 rounded-2xl shadow-lg h-full flex flex-col"
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(217,181,102,0.8)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'; }}
                >
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-lg text-[#F1F5F9] font-bold">{t.dreamhouse.premiumTitle}</CardTitle>
                    <div className="text-2xl font-bold tracking-tight text-[#D9B566]">{t.dreamhouse.premiumPrice}</div>
                    <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide opacity-0">&nbsp;</p>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                    <ul className="space-y-1.5 text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                      {t.dreamhouse.premiumFeatures.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.2 + index * 0.1, type: 'spring', stiffness: 200 }}
                          >
                            <CheckCircle className="w-4 h-4 text-[#D9B566] mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button asChild style={{ backgroundColor: '#D9B566', boxShadow: '0 4px 14px rgba(217,181,102,0.35)' }} className="hover:bg-[#C49D4E] text-white w-full text-sm py-2 font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_6px_20px_rgba(217,181,102,0.5)]">
                        <Link to={createPageUrl('contact')}>
                          {t.dreamhouse.contactUs}
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.4 }}
              >
                <Card
                  style={{ backgroundColor: '#111827', borderColor: '#D9B566', transition: 'box-shadow 0.3s ease' }}
                  className="border-2 rounded-2xl shadow-lg h-full flex flex-col"
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(217,181,102,0.8)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'; }}
                >
                  <CardHeader className="p-5 pb-3">
                    <CardTitle className="text-lg text-[#F1F5F9] font-bold">{t.dreamhouse.premiumPlusTitle}</CardTitle>
                    <div className="text-2xl font-bold tracking-tight text-[#D9B566]">{t.dreamhouse.premiumPlusPrice}</div>
                    <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide">{t.dreamhouse.premiumPlusSubtitle}</p>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                    <ul className="space-y-1.5 text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                      {t.dreamhouse.premiumPlusFeatures.map((feature, index) => (
                        <motion.li
                          key={index}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                          >
                            {index === 0 ? (
                              <Sparkles className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-[#D9B566] mt-0.5 flex-shrink-0" />
                            )}
                          </motion.div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <motion.div
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button asChild style={{ backgroundColor: '#D9B566', boxShadow: '0 4px 14px rgba(217,181,102,0.35)' }} className="hover:bg-[#C49D4E] text-white w-full text-sm py-2 font-semibold rounded-2xl transition-all duration-300 hover:shadow-[0_6px_20px_rgba(217,181,102,0.5)]">
                          <Link to={createPageUrl('contact')}>
                            {t.dreamhouse.contactUs}
                          </Link>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button asChild variant="outline" style={{ borderColor: '#A78BFA', color: '#F1F5F9', boxShadow: '0 2px 8px rgba(167,139,250,0.2)' }} className="bg-transparent hover:bg-[#A78BFA]/20 w-full text-sm py-2 font-semibold rounded-2xl border-2 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(167,139,250,0.35)]">
                          <Link to={createPageUrl('Technology')} className="flex items-center justify-center gap-2">
                            {t.dreamhouse.exploreTechnology} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
