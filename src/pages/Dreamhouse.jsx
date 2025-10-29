import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { createPageUrl } from '@/utils';

export default function Dreamhouse({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0E14] text-[#F1F5F9]">
      <div style={{ 
        paddingTop: 'calc(var(--header-h-current, 64px) + clamp(16px, 3vh, 32px))',
        paddingBottom: 'clamp(24px, 5vh, 48px)',
        minHeight: '100vh'
      }} className="flex items-center">
        <main className="pb-8 w-full">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-4 drop-shadow-lg" style={{ color: '#D9B566', textShadow: '0 2px 12px rgba(217,181,102,0.22)' }}>Dreamhouse</h1>

            <div style={{ backgroundColor: '#0A1F35' }} className="border-2 border-[#1E4A6B] rounded-xl px-6 py-5 text-center shadow-2xl backdrop-blur-sm mx-auto max-w-4xl">
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-white leading-tight">{t.dreamhouse.bannerTitle}</h2>
              <p className="text-white max-w-3xl mx-auto leading-relaxed text-sm">
                {t.dreamhouse.bannerDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <Card style={{ backgroundColor: '#0C0E14', borderColor: '#A3D977' }} className="border-2 rounded-2xl shadow-lg">
                <CardContent className="p-5">
                  <h3 className="text-base font-bold mb-2 text-[#E8F1FF]">{t.dreamhouse.startTitle}</h3>
                  <p className="text-[#E8F1FF] mb-3 leading-relaxed text-sm">
                    {t.dreamhouse.startDescription}
                  </p>
                  <p className="text-[#E8F1FF] text-xs italic opacity-80">
                    {t.dreamhouse.startNote}
                  </p>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#111827', borderColor: '#FFB100' }} className="border-2 rounded-2xl shadow-lg h-full flex flex-col">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg text-[#F1F5F9] font-bold">{t.dreamhouse.premiumTitle}</CardTitle>
                  <div className="text-2xl font-bold tracking-tight text-[#FFB100]">{t.dreamhouse.premiumPrice}</div>
                  <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide opacity-0">&nbsp;</p>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-1.5 text-sm text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                    {t.dreamhouse.premiumFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-[#FFB100] mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Button asChild style={{ backgroundColor: '#FFB100' }} className="hover:bg-[#E69F00] text-white w-full text-sm py-2 font-semibold rounded-2xl">
                      <Link to={createPageUrl('contact')}>
                        {t.dreamhouse.contactUs}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card style={{ backgroundColor: '#111827', borderColor: '#FFB100' }} className="border-2 rounded-2xl shadow-lg h-full flex flex-col">
                <CardHeader className="p-5 pb-3">
                  <CardTitle className="text-lg text-[#F1F5F9] font-bold">{t.dreamhouse.premiumPlusTitle}</CardTitle>
                  <div className="text-2xl font-bold tracking-tight text-[#FFB100]">{t.dreamhouse.premiumPlusPrice}</div>
                  <p className="text-[#F1F5F9] text-sm font-semibold tracking-wide">{t.dreamhouse.premiumPlusSubtitle}</p>
                </CardHeader>
                <CardContent className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                  <ul className="space-y-1.5 text-sm text-[#F1F5F9] mb-4" style={{ minHeight: '200px' }}>
                    {t.dreamhouse.premiumPlusFeatures.map((feature, index) => (
                      <li key={index} className="flex gap-2">
                        {index === 0 ? (
                          <Sparkles className="w-4 h-4 mr-2 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-[#FFB100] mt-0.5 flex-shrink-0" />
                        )}
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button asChild style={{ backgroundColor: '#FFB100' }} className="hover:bg-[#E69F00] text-white w-full text-sm py-2 font-semibold rounded-2xl">
                      <Link to={createPageUrl('contact')}>
                        {t.dreamhouse.contactUs}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" style={{ borderColor: '#A78BFA', color: '#F1F5F9' }} className="bg-transparent hover:bg-[#A78BFA]/20 w-full text-sm py-2 font-semibold rounded-2xl border-2">
                      <Link to={createPageUrl('Technology')} className="flex items-center justify-center gap-2">
                        {t.dreamhouse.exploreTechnology} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            <div style={{ backgroundColor: '#A3D977' }} className="rounded-2xl py-6 px-6 text-center shadow-lg max-w-4xl mx-auto">
              <p className="font-bold text-[#0C0E14] mb-2 text-base">{t.dreamhouse.collaborationTitle}</p>
              <p className="font-medium text-[#111827] text-sm leading-tight">{t.dreamhouse.collaborationDescription}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}