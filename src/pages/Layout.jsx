

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';

const languages = [
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'pl', name: 'Polski', flag: 'PL' },
  { code: 'it', name: 'Italiano', flag: 'IT' },
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'ru', name: 'Русский', flag: 'RU' },
  { code: 'ku', name: 'Kurdî', flag: 'KU' }
];

const translations = {
  en: {
    nav: { about: 'About', technology: 'Technology', projects: 'Projects', contact: 'Contact', home: 'Home' },
    hero: {
      title: 'Building Tomorrow, Today.',
      subtitle: 'Industrial & Residential Turnkey Projects',
      description: 'From initial design to final handover, we deliver excellence and precision in every project across Europe.',
      industrial: 'Industrial',
      residential: 'Residential',
      buildDream: 'Build Your Dream'
    },
    contact: {
      subtitle: "Let's Build Your Future Today",
      email: 'Email',
      phone: 'Phone',
      headquarters: 'Headquarters',
      location: 'Warsaw, Poland',
      operationsCenter: 'European Operations Center',
      officeHours: 'Monday - Friday: 8:00 AM - 6:00 PM',
      mondayFriday: 'Monday - Friday: 8:00 AM - 6:00 PM',
      saturday: 'Saturday: 9:00 AM - 2:00 PM',
      coverageAreas: 'Coverage Areas'
    },
    dreamhouse: {
      bannerDescription: '<strong>Every dream deserves a home that reflects it.</strong><br>With <em>Dreamhouse</em>, your vision becomes reality: spaces of elegance, culture and harmony. From the Mediterranean to the Bosphorus, we create luxury residences where design and beauty meet.',
      startTitle: 'Start the Dream',
      startDescription: 'From site checks to feasibility assessment and next steps, we structure your project to move from idea to action—smoothly, clearly and transparently.',
      startNote: 'We offer two packages tailored to your needs: Premium and Premium Plus.',
      premiumTitle: 'Premium',
      premiumPrice: '€4,000',
      premiumFeatures: ['Preliminary concept study (functional layout and architectural guidelines)', 'Preliminary cost estimate and realization timeline', 'Selection of suitable plots (2-3 options, if applicable)', 'Operational roadmap for next project steps'],
      premiumPlusTitle: 'Premium Package +',
      premiumPlusPrice: '€7,500',
      premiumPlusSubtitle: 'PREMIUM Package +',
      premiumPlusFeatures: ['RTK/LiDAR drone survey (where available)', 'Photogrammetric model and topographic terrain analysis', 'Early identification of critical issues or design deviations', 'Complete dataset for 4D project delivery'],
      contactUs: 'Contact Us',
      exploreTechnology: 'Explore Technology'
    },
    bim_monitoring: {
      title: "Drone-Based BIM Progress Monitoring",
      subtitle: "Measure construction progress in 4D (time + cost) with RTK LiDAR & photogrammetry - safer, faster, more precise.",
      badges: ["RTK + LiDAR + Photogrammetry", "4D BIM Integration (Navisworks/SYNCHRO)", "Client Report in 48h", "As-built vs. Design"],
      benefits: ["Reduce measurement time by up to 70%", "Early detection of clashes and deviations", "Better control over costs and schedule"]
    },
    about: {
      residential: {
        title: 'Living the dream, building quality.',
        description: 'Every residence is born from the fusion of design and engineering. From preliminary study to final delivery, we coordinate designers, craftsmen, and suppliers to ensure comfort, precision, and lasting value.',
        microclaim: 'Elegance, method, and attention in every detail.'
      },
      industrial: {
        title: 'General Contractor for projects built to last.',
        description: 'From design to delivery, we integrate planning, engineering, and site management with proven processes and international standards.',
        microclaim: 'Efficiency, control, and solidity in every phase of building.'
      },
      reach: 'European Reach',
      methods: 'Proven Methods',
      team: 'Expert Team',
      quality: 'Unmatched Quality'
    },
    process: {
      title: 'A Process You Can Trust',
      description: 'From land acquisition to final handover, we ensure every step is transparent and efficient.',
      steps: {
        land: { title: 'Land Plot Acquisition', desc: 'Secure the perfect location for your project.' },
        permits: { title: 'Permits & Planning', desc: 'Navigating bureaucracy to get full approval.' },
        design: { title: 'Design & Construction', desc: 'Crafting the blueprint and bringing it to life.' },
        supervision: { title: 'Investor Supervision', desc: 'Ensuring quality and budget adherence.' },
        handover: { title: 'Turnkey Handover', desc: 'Delivering the final, ready-to-use property.' }
      }
    },
    technology: {
      title: 'Technology',
      challenge_title: 'The Challenge',
      challenge_desc: 'Traditional construction monitoring relies on manual surveys and slow reporting, leading to cost overruns and delays.',
      solution_title: 'Our Solution',
      solution_desc: 'Integrated drone technology with 4D BIM creates a seamless digital twin for real-time tracking and predictive analytics.',
      eu_projects_delay_note: 'In the EU, over',
      eu_projects_delay_percentage: '70%',
      eu_projects_delay_context: 'of large projects face delays & budget overruns.',
      feature_4dbim_title: '4D BIM Integration',
      feature_4dbim_desc: 'Sync progress with design to control schedule and budget.',
      feature_quality_title: 'Digital Quality & Safety',
      feature_quality_desc: 'AI-powered safety compliance and quality assurance.',
      feature_future_title: 'Future-ready Tools',
      feature_future_desc: 'Predictive maintenance and smart resource allocation.',
      feature_savings_title: 'Cost & Time Savings',
      feature_savings_desc: 'Reduce measurement time by up to 70% and make proactive decisions.',
      roi_title: 'From Weeks to Hours: The ROI of Digital Monitoring',
      roi_traditional_title: 'Traditional Methods',
      roi_traditional_desc: 'Relies on manual surveys, leading to slow data collection and high potential for error.',
      roi_traditional_report_time: 'Reporting Time',
      roi_traditional_report_value: '2-4 Weeks',
      roi_traditional_decision: 'Decision-Making',
      roi_traditional_decision_value: 'Reactive',
      roi_aurum_title: 'AURUM: Drone + BIM',
      roi_aurum_desc: 'Automated drone data capture provides millions of data points for a real-time digital twin.',
      roi_aurum_report_value: '48 Hours',
      roi_aurum_decision_value: 'Proactive',
      how_it_works_title: 'How It Works',
      step1_title: 'Data Capture',
      step1_desc: 'RTK drone flights capture LiDAR and photogrammetry data',
      step2_title: 'Processing',
      step2_desc: 'AI algorithms process point clouds and create 3D models',
      step3_title: 'Analysis',
      step3_desc: 'Compare as-built vs design, track progress and costs',
      step4_title: 'Reporting',
      step4_desc: 'Deliver comprehensive reports within 48 hours',
      tech_specs_title: 'Technical Specifications',
      tech_specs_accuracy: 'Accuracy:',
      tech_specs_accuracy_value: '±2cm RTK precision',
      tech_specs_coverage: 'Coverage:',
      tech_specs_coverage_value: 'Up to 500 ha/day',
      tech_specs_point_density: 'Point Density:',
      tech_specs_point_density_value: '300-600 points/m²',
      tech_specs_report_delivery: 'Report Delivery:',
      tech_specs_report_delivery_value: '48 hours',
      deliverables_title: 'Deliverables',
      deliverables_item1: '3D Point Cloud Data',
      deliverables_item2: 'As-built vs Design Comparison',
      deliverables_item3: 'Progress Analytics Dashboard',
      deliverables_item4: 'Cost Variance & Safety Reports',
      cta: 'Explore Technology'
    },
    projects: {
      title: 'Our Portfolio',
      industrial: ['Logistics Center, Poland', 'Automotive Factory, Italy', 'Warehouse Complex, Spain'],
      residential: ['Modern Villa, Turkey', 'Luxury Apartments, Poland', 'Seaside Residence, Italy']
    },
    footer: { tagline: 'Supervision and turnkey realization across Europe.' }
  },
  pl: {
    nav: { about: 'O nas', technology: 'Technologia', projects: 'Projekty', contact: 'Kontakt', home: 'Strona główna' },
    hero: { title: 'Budujemy przyszłość, dzisiaj.', subtitle: 'Projekty pod klucz - przemysłowe i mieszkaniowe', description: 'Od początkowego projektu do finalnego przekazania, dostarczamy doskonałość i precyzję w każdym projekcie w całej Europie.', industrial: 'Przemysłowe', residential: 'Mieszkaniowe', buildDream: 'Zbuduj swoje marzenie' },
    contact: { subtitle: 'Zbudujmy Twoją przyszłość już dziś', email: 'E-mail', phone: 'Telefon', headquarters: 'Siedziba główna', location: 'Warszawa, Polska', operationsCenter: 'Centrum Operacyjne w Europie', officeHours: 'Poniedziałek - Piątek: 8:00 - 18:00', mondayFriday: 'Poniedziałek - Piątek: 8:00 - 18:00', saturday: 'Sobota: 9:00 - 14:00', coverageAreas: 'Obszary działania' },
    dreamhouse: { bannerDescription: '<strong>Każde marzenie zasługuje na dom, który je odzwierciedla.</strong><br>Z <em>Dreamhouse</em> Twoja wizja staje się rzeczywistością: przestrzenie pełne elegancji, kultury i harmonii.', startTitle: 'Rozpocznij Marzenie', startDescription: 'Od kontroli terenu po analizę wykonalności i kolejne kroki — strukturyzujemy Twój projekt, aby przejść od pomysłu do działania — gładko, jasno i przejrzyście.', startNote: 'Oferujemy dwa pakiety dostosowane do Twoich potrzeb: Premium i Premium Plus.', premiumTitle: 'Premium', premiumPrice: '€4.000', premiumFeatures: ['Wstępne studium koncepcyjne (układ funkcjonalny i wytyczne architektoniczne)', 'Wstępna kalkulacja kosztów i harmonogram realizacji', 'Selekcja odpowiednich działek (2-3 opcje, jeśli dotyczy)', 'Operacyjna mapa drogowa kolejnych kroków projektowych'], premiumPlusTitle: 'Pakiet Premium Plus', premiumPlusPrice: '€7.500', premiumPlusSubtitle: 'PAKIET PREMIUM +', premiumPlusFeatures: ['Pomiar dronem RTK/LiDAR (gdzie dostępne)', 'Model fotogrametryczny i analiza topograficzna terenu', 'Wczesna detekcja problemów krytycznych lub odchyleń projektowych', 'Kompletny zestaw danych do dostarczenia projektu 4D'], contactUs: 'Skontaktuj się z nami', exploreTechnology: 'Poznaj Technologię' },
    bim_monitoring: { title: "Monitorowanie Postępu BIM z wykorzystaniem Dronów", subtitle: "Mierz postęp budowy w 4D (czas + koszt) dzięki RTK LiDAR i fotogrametrii - bezpieczniej, szybciej, precyzyjniej.", badges: ["RTK + LiDAR + Fotogrammetria", "Integracja z 4D BIM (Navisworks/SYNCHRO)", "Raport dla Klienta w 48 godzin", "Stan rzeczywisty vs Projekt"], benefits: ["Redukcja czasu pomiarów nawet o 70%", "Wczesne wykrywanie kolizji i odchyleń", "Lepsza kontrola kosztów i harmonogramu"] },
    about: { residential: { title: 'Realizować marzenia, budować jakość.', description: 'Każda rezydencja rodzi się ze spotkania designu i inżynierii. Od wstępnego studium do finalnej dostawy koordynujemy projektantów, rzemieślników i dostawców, aby zapewnić komfort, precyzję i wartość w czasie.', microclaim: 'Elegancja, metoda i uwaga w każdym detalu.' }, industrial: { title: 'Generalny Wykonawca dla projektów trwających w czasie.', description: 'Od projektowania do dostawy integrujemy planowanie, inżynierię i zarządzanie placem budowy ze sprawdzonymi procesami i międzynarodowymi standardami.', microclaim: 'Efektywność, kontrola i solidność w każdej fazie budowania.' }, reach: 'Zasięg Europejski', methods: 'Sprawdzone Metody', team: 'Zespół Ekspertów', quality: 'Niezrównana Jakość' },
    process: { title: 'Proces, któremu możesz zaufać', description: 'Od nabycia gruntu po finalne przekazanie, zapewniamy, że każdy krok jest przejrzysty i wydajny.', steps: { land: { title: 'Nabycie działki', desc: 'Zabezpiecz idealną lokalizację dla swojego projektu.' }, permits: { title: 'Pozwolenia i Planowanie', desc: 'Sprawne poruszanie się po procedurach urzędowych w celu uzyskania pełnej zgody.' }, design: { title: 'Projekt i Budowa', desc: 'Tworzenie projektu i jego realizacja w terenie.' }, supervision: { title: 'Nadzór Inwestorski', desc: 'Zapewnienie jakości i zgodności z budżetem.' }, handover: { title: 'Przekazanie pod Klucz', desc: 'Dostarczenie gotowej do użycia nieruchomości.' } } },
    technology: { title: 'Technologia', challenge_title: 'Wyzwanie', challenge_desc: 'Tradycyjny monitoring budowy opiera się na ręcznych pomiarach i powolnym raportowaniu, co prowadzi do przekroczeń kosztów i opóźnień.', solution_title: 'Nasze Rozwiązanie', solution_desc: 'Zintegrowana technologia dronowa z 4D BIM tworzy płynnego cyfrowego bliźniaka do śledzenia postępu w czasie rzeczywistym i analiz predykcyjnych.', eu_projects_delay_note: 'W Unii Europejskiej, ponad', eu_projects_delay_percentage: '70%', eu_projects_delay_context: 'dużych projektów boryka się z opóźnieniami i przekroczeniami budżetu.', feature_4dbim_title: 'Integracja z 4D BIM', feature_4dbim_desc: 'Synchronizuj postęp z projektem, aby kontrolować harmonogram i budżet.', feature_quality_title: 'Cyfrowa Jakość i Bezpieczeństwo', feature_quality_desc: 'Zapewnienie bezpieczeństwa i jakości wspomagane sztuczną inteligencją.', feature_future_title: 'Narzędzia Przyszłości', feature_future_desc: 'Predykcyjne utrzymanie i inteligentne zarządzanie zasobami.', feature_savings_title: 'Oszczędność Kosztów i Czasu', feature_savings_desc: 'Skróć czas pomiarów nawet o 70% i podejmuj proaktywne decyzje.', roi_title: 'Od Tygodni do Godzin: Zwrot z Inwestycji w Cyfrowy Monitoring', roi_traditional_title: 'Tradycyjne Metody', roi_traditional_desc: 'Opierają się na ręcznych pomiarach, co prowadzi do powolnego zbierania danych i dużego potencjału błędów.', roi_traditional_report_time: 'Czas Raportowania', roi_traditional_report_value: '2-4 Tygodnie', roi_traditional_decision: 'Podejmowanie Decyzji', roi_traditional_decision_value: 'Reaktywne', roi_aurum_title: 'AURUM: Dron + BIM', roi_aurum_desc: 'Automatyczne zbieranie danych dronem dostarcza miliony punktów danych dla cyfrowego bliźniaka w czasie rzeczywistym.', roi_aurum_report_value: '48 Godzin', roi_aurum_decision_value: 'Proaktywne', how_it_works_title: 'Jak to Działa', step1_title: 'Zbieranie Danych', step1_desc: 'Loty dronów RTK zbierają dane LiDAR i fotogrametryczne', step2_title: 'Przetwarzanie', step2_desc: 'Algorytmy AI przetwarzają chmury punktów i tworzą modele 3D', step3_title: 'Analiza', step3_desc: 'Porównaj stan rzeczywisty z projektem, śledź postęp i koszty', step4_title: 'Raportowanie', step4_desc: 'Dostarczaj kompleksowe raporty w ciągu 48 godzin', tech_specs_title: 'Specyfikacje Techniczne', tech_specs_accuracy: 'Dokładność:', tech_specs_accuracy_value: 'Precyzja RTK ±2cm', tech_specs_coverage: 'Zasięg:', tech_specs_coverage_value: 'Do 500 ha/dzień', tech_specs_point_density: 'Gęstość Punktów:', tech_specs_point_density_value: '300-600 punktów/m²', tech_specs_report_delivery: 'Dostarczenie Raportu:', tech_specs_report_delivery_value: '48 godzin', deliverables_title: 'Wyniki', deliverables_item1: 'Dane Chmury Punktów 3D', deliverables_item2: 'Porównanie Stan Rzeczywisty vs Projekt', deliverables_item3: 'Panel Analityczny Postępu', deliverables_item4: 'Raporty Zmienności Kosztów i Bezpieczeństwa', cta: 'Poznaj Technologię' },
    projects: { title: 'Nasze Portfolio', industrial: ['Centrum Logistyczne, Polska', 'Fabryka Motoryzacyjna, Włochy', 'Kompleks Magazynowy, Hiszpania'], residential: ['Nowoczesna Willa, Turcja', 'Luksusowe Apartamenty, Polska', 'Nadmorska Rezydencja, Włochy'] },
    footer: { tagline: 'Nadzór i realizacja pod klucz w całej Europie.' }
  },
  it: {
    nav: { about: 'Chi siamo', technology: 'Tecnologia', projects: 'Progetti', contact: 'Contatti', home: 'Home' },
    hero: { title: 'Costruiamo il domani, oggi.', subtitle: 'Progetti Chiavi in Mano Industriali e Residenziali', description: 'Dal concept alla consegna finale, offriamo eccellenza e precisione in ogni progetto in tutta Europa.', industrial: 'Industriale', residential: 'Residenziale', buildDream: 'Realizza il tuo sogno' },
    contact: { subtitle: 'Costruiamo insieme il tuo futuro oggi', email: 'Email', phone: 'Telefono', headquarters: 'Sede centrale', location: 'Varsavia, Polonia', operationsCenter: 'Centro Operativo Europeo', officeHours: 'Lunedì - Venerdì: 8:00 - 18:00', mondayFriday: 'Lunedì - Venerdì: 8:00 - 18:00', saturday: 'Sabato: 9:00 - 14:00', coverageAreas: 'Aree di copertura' },
    dreamhouse: { bannerDescription: '<strong>Ogni sogno merita una casa che lo rispecchi.</strong><br>Con <em>Dreamhouse</em>, la tua visione diventa realtà: spazi di eleganza, cultura e armonia.', startTitle: 'Inizia il Sogno', startDescription: 'Dai controlli del terreno alla verifica di fattibilità e ai prossimi passi, strutturiamo il tuo progetto per accompagnarti dall\'idea all\'azione in modo chiaro, fluido e trasparente.', startNote: 'Offriamo due pacchetti su misura per le tue esigenze: Premium e Premium Plus.', premiumTitle: 'Premium', premiumPrice: '€4.000', premiumFeatures: ['Studio di concept preliminare (layout funzionale e linee architettoniche guida)', 'Stima preliminare di costi e tempistiche di realizzazione', 'Selezione di terreni idonei (2–3 opzioni, se applicabile)', 'Roadmap operativa dei prossimi passi progettuali'], premiumPlusTitle: 'Pacchetto Premium Plus', premiumPlusPrice: '€7.500', premiumPlusSubtitle: 'PACCHETTO PREMIUM +', premiumPlusFeatures: ['Rilievo con drone RTK/LiDAR (dove disponibile)', 'Modello fotogrammetrico e analisi topografica del terreno', 'Identificazione precoce di criticità o deviazioni progettuali', 'Dataset completo per la consegna 4D del progetto'], contactUs: 'Contattaci', exploreTechnology: 'Esplora la Tecnologia' },
    bim_monitoring: { title: "Monitoraggio Avanzamento Lavori con BIM e Droni", subtitle: "Misura l'avanzamento dei lavori in 4D (tempi + costi) con LiDAR RTK e fotogrammetria: più sicuro, più veloce, più preciso.", badges: ["RTK + LiDAR + Fotogrammetria", "Integrazione 4D BIM (Navisworks/SYNCHRO)", "Report per il Cliente in 48 ore", "Confronto Stato Reale vs Progetto"], benefits: ["Riduci i tempi di misurazione fino al 70%", "Rilevamento precoce di interferenze e deviazioni", "Miglior controllo su costi e tempistiche"] },
    about: { residential: { title: 'Abitare il sogno, costruire la qualità.', description: 'Ogni residenza nasce dall\'incontro tra design e ingegneria. Dallo studio preliminare alla consegna finale, coordiniamo progettisti, artigiani e fornitori per garantire comfort, precisione e valore nel tempo.', microclaim: 'Eleganza, metodo e attenzione in ogni dettaglio.' }, industrial: { title: 'General Contractor per progetti che durano nel tempo.', description: 'Dalla progettazione alla consegna, integriamo pianificazione, ingegneria e gestione di cantiere con processi collaudati e standard internazionali.', microclaim: 'Efficienza, controllo e solidità in ogni fase del costruire.' }, reach: 'Portata Europea', methods: 'Metodi Comprovati', team: 'Team di Esperti', quality: 'Qualità Ineguagliabile' },
    process: { title: 'Un Processo di Cui Puoi Fidarti', description: "Dall'acquisizione del terreno alla consegna finale, garantiamo che ogni passo sia trasparente ed efficiente.", steps: { land: { title: 'Acquisizione Terreno', desc: 'Assicurati la location perfetta per il tuo progetto.' }, permits: { title: 'Permessi e Pianificazione', desc: 'Gestiamo la burocrazia per ottenere tutte le approvazioni necessarie.' }, design: { title: 'Progettazione e Costruzione', desc: 'Creiamo il progetto e lo trasformiamo in realtà.' }, supervision: { title: 'Supervisione Investitore', desc: "Garantiamo qualità e rispetto del budget." }, handover: { title: 'Consegna Chiavi in Mano', desc: "Consegniamo l'immobile finito e pronto all'uso." } } },
    technology: { title: 'Tecnologia', challenge_title: 'La Sfida', challenge_desc: 'Il monitoraggio tradizionale delle costruzioni si basa su rilievi manuali e cicli di reporting lenti, il che porta a ritardi e superamenti dei costi.', solution_title: 'La Nostra Soluzione', solution_desc: 'La tecnologia drone integrata con il BIM 4D crea un gemello digitale continuo per il monitoraggio in tempo reale dei progressi e l\'analisi predittiva.', eu_projects_delay_note: 'Nell\'Unione Europea, oltre il', eu_projects_delay_percentage: '70%', eu_projects_delay_context: 'dei grandi progetti affronta ritardi e superamenti di budget.', feature_4dbim_title: 'Integrazione BIM 4D', feature_4dbim_desc: 'Sincronizza il progresso con il progetto per controllare i tempi e il budget.', feature_quality_title: 'Qualità e Sicurezza Digitale', feature_quality_desc: 'Conformità alla sicurezza e garanzia di qualità basate sull\'IA.', feature_future_title: 'Strumenti Pronti per il Futuro', feature_future_desc: 'Manutenzione predittiva e allocazione intelligente delle risorse.', feature_savings_title: 'Risparmio di Costi e Tempo', feature_savings_desc: 'Riduci i tempi di misurazione fino al 70% e prendi decisioni proattive.', roi_title: 'Da Settimane a Ore: Il ROI del Monitoraggio Digitale', roi_traditional_title: 'Metodi Tradizionali', roi_traditional_desc: 'Si basa su rilievi manuali, che portano a una lenta raccolta dei dati e un alto potenziale di errore.', roi_traditional_report_time: 'Tempo di Report', roi_traditional_report_value: '2-4 Settimane', roi_traditional_decision: 'Processo Decisionale', roi_traditional_decision_value: 'Reattivo', roi_aurum_title: 'AURUM: Drone + BIM', roi_aurum_desc: 'L\'acquisizione automatizzata di dati tramite drone fornisce milioni di punti dati per un gemello digitale in tempo reale.', roi_aurum_report_value: '48 Ore', roi_aurum_decision_value: 'Proattivo', how_it_works_title: 'Come Funziona', step1_title: 'Acquisizione Dati', step1_desc: 'I voli dei droni RTK acquisiscono dati LiDAR e fotogrammetrici', step2_title: 'Elaborazione', step2_desc: 'Gli algoritmi AI elaborano le nuvole di punti e creano modelli 3D', step3_title: 'Analisi', step3_desc: 'Confronta lo stato reale con il progetto, traccia progressi e costi', step4_title: 'Reporting', step4_desc: 'Fornisci report completi entro 48 ore', tech_specs_title: 'Specifiche Tecniche', tech_specs_accuracy: 'Accuratezza:', tech_specs_accuracy_value: 'Precisione RTK ±2cm', tech_specs_coverage: 'Copertura:', tech_specs_coverage_value: 'Fino a 500 ettari al giorno', tech_specs_point_density: 'Densità Punti:', tech_specs_point_density_value: '300-600 punti per metro quadro', tech_specs_report_delivery: 'Consegna Report:', tech_specs_report_delivery_value: '48 ore', deliverables_title: 'Risultati', deliverables_item1: 'Dati Nuvola di Punti 3D', deliverables_item2: 'Confronto Stato Reale vs Progetto', deliverables_item3: 'Dashboard Analisi Progressi', deliverables_item4: 'Report Variazioni Costo e Sicurezza', cta: 'Esplora la Tecnologia' },
    projects: { title: 'Il Nostro Portfolio', industrial: ['Centro Logistico, Polonia', 'Fabbrica Automobilistica, Italia', 'Complesso di Magazzini, Spagna'], residential: ['Villa Moderna, Turchia', 'Appartamenti di Lusso, Polonia', 'Residenza sul Mare, Italia'] },
    footer: { tagline: 'Supervisione e realizzazione chiavi in mano in tutta Europa.' }
  },
  es: {
    nav: { about: 'Nosotros', technology: 'Tecnología', projects: 'Proyectos', contact: 'Contacto', home: 'Inicio' },
    hero: { title: 'Construyendo el mañana, hoy.', subtitle: 'Proyectos Llave en Mano Industriales y Residenciales', description: 'Desde el diseño inicial hasta la entrega final, ofrecemos excelencia y precisión en cada proyecto en toda Europa.', industrial: 'Industrial', residential: 'Residencial', buildDream: 'Construye tu Sueño' },
    contact: { subtitle: 'Construyamos tu futuro hoy', email: 'Correo electrónico', phone: 'Teléfono', headquarters: 'Sede central', location: 'Varsovia, Polonia', operationsCenter: 'Centro de Operaciones Europeo', officeHours: 'Lunes - Viernes: 8:00 - 18:00', mondayFriday: 'Lunes - Viernes: 8:00 - 18:00', saturday: 'Sábado: 9:00 - 14:00', coverageAreas: 'Áreas de cobertura' },
    dreamhouse: { bannerDescription: '<strong>Cada sueño merece un hogar que lo refleje.</strong><br>Con <em>Dreamhouse</em>, tu visión se convierte en realidad: espacios de elegancia, cultura y armonía.', startTitle: 'Comienza el Sueño', startDescription: 'Desde controles del sitio hasta evaluación de viabilidad y próximos pasos, estructuramos tu proyecto para pasar de la idea a la acción—de manera fluida, clara y transparente.', startNote: 'Ofrecemos dos paquetes adaptados a tus necesidades: Premium y Premium Plus.', premiumTitle: 'Premium', premiumPrice: '€4.000', premiumFeatures: ['Estudio conceptual preliminar (distribución funcional y directrices arquitectónicas)', 'Estimación preliminar de costos y cronograma de realización', 'Selección de terrenos adecuados (2-3 opciones, si aplica)', 'Hoja de ruta operativa para los próximos pasos del proyecto'], premiumPlusTitle: 'Paquete Premium Plus', premiumPlusPrice: '€7.500', premiumPlusSubtitle: 'PAQUETE PREMIUM +', premiumPlusFeatures: ['Levantamiento con dron RTK/LiDAR (donde disponible)', 'Modelo fotogramétrico y análisis topográfico del terreno', 'Identificación temprana de problemas críticos o desviaciones de diseño', 'Conjunto completo de datos para entrega del proyecto 4D'], contactUs: 'Contáctanos', exploreTechnology: 'Explora la Tecnología' },
    bim_monitoring: { title: "Seguimiento de Progreso de Obra con BIM y Drones", subtitle: "Mide el progreso de la construcción en 4D (tiempo + coste) con LiDAR RTK y fotogrametría: más seguro, más rápido y más preciso.", badges: ["RTK + LiDAR + Fotogrametría", "Integración 4D BIM (Navisworks/SYNCHRO)", "Informe al Cliente en 48 horas", "Estado Real vs Diseño"], benefits: ["Reduce el tiempo de medición hasta en un 70%", "Detección temprana de conflictos y desviaciones", "Mejor control sobre costes y plazos"] },
    about: { residential: { title: 'Vivir el sueño, construir calidad.', description: 'Cada residencia nace del encuentro entre diseño e ingeniería. Desde el estudio preliminar hasta la entrega final, coordinamos diseñadores, artesanos y proveedores para garantizar confort, precisión y valor duradero.', microclaim: 'Elegancia, método y atención en cada detalle.' }, industrial: { title: 'General Contractor para proyectos que perduran.', description: 'Desde el diseño hasta la entrega, integramos planificación, ingeniería y gestión de obra con procesos probados y estándares internacionales.', microclaim: 'Eficiencia, control y solidez en cada fase de la construcción.' }, reach: 'Alcance Europeo', methods: 'Métodos Probados', team: 'Equipo Experto', quality: 'Calidad Inigualable' },
    process: { title: 'Un Proceso en el que Puedes Confiar', description: 'Desde la adquisición del terreno hasta la entrega final, nos aseguramos de que cada paso sea transparente y eficiente.', steps: { land: { title: 'Adquisición de Terreno', desc: 'Asegura la ubicación perfecta para tu proyecto.' }, permits: { title: 'Permisos y Planificación', desc: 'Navegamos la burocracia para obtener la aprobación total.' }, design: { title: 'Diseño y Construcción', desc: 'Elaboramos el plano y lo damos vida.' }, supervision: { title: 'Supervisión del Inversor', desc: 'Garantizamos la calidad y el cumplimiento del presupuesto.' }, handover: { title: 'Entrega Llave en Mano', desc: 'Entregamos la propiedad final, lista para usar.' } } },
    technology: { title: 'Tecnología', challenge_title: 'El Desafío', challenge_desc: 'El monitoreo tradicional de la construcción se basa en levantamientos manuales e informes lentos, lo que provoca retrasos y sobrecostos.', solution_title: 'Nuestra Solución', solution_desc: 'La tecnología de drones integrada con BIM 4D crea un gemelo digital continuo para el seguimiento del progreso en tiempo real y el análisis predictivo.', eu_projects_delay_note: 'En la Unión Europea, más del', eu_projects_delay_percentage: '70%', eu_projects_delay_context: 'de los grandes proyectos sufren retrasos y sobrecostos.', feature_4dbim_title: 'Integración BIM 4D', feature_4dbim_desc: 'Sincroniza el progreso con el diseño para controlar el cronograma y el presupuesto.', feature_quality_title: 'Calidad y Seguridad Digital', feature_quality_desc: 'Cumplimiento de seguridad y garantía de calidad impulsados por IA.', feature_future_title: 'Herramientas Preparadas para el Futuro', feature_future_desc: 'Mantenimiento predictivo y asignación inteligente de recursos.', feature_savings_title: 'Ahorro de Costos y Tiempo', feature_savings_desc: 'Reduce el tiempo de medición hasta en un 70% y toma decisiones proactivas.', roi_title: 'De Semanas a Horas: El ROI del Monitoreo Digital', roi_traditional_title: 'Metodos Tradicionales', roi_traditional_desc: 'Se basa en levantamientos manuales, lo que lleva a una recopilación lenta de datos y un alto potencial de error.', roi_traditional_report_time: 'Tiempo de Informe', roi_traditional_report_value: '2-4 Semanas', roi_traditional_decision: 'Toma de Decisiones', roi_traditional_decision_value: 'Reactiva', roi_aurum_title: 'AURUM: Dron + BIM', roi_aurum_desc: 'La captura automatizada de datos por drones proporciona millones de puntos de datos para un gemelo digital en tiempo real.', roi_aurum_report_value: '48 Horas', roi_aurum_decision_value: 'Proactiva', how_it_works_title: 'Cómo Funciona', step1_title: 'Captura de Datos', step1_desc: 'Los vuelos de drones RTK capturan datos LiDAR y fotogramétricos', step2_title: 'Procesamiento', step2_desc: 'Los algoritmos de IA procesan nubes de puntos y crean modelos 3D', step3_title: 'Análisis', step3_desc: 'Compara el estado real con el diseño, rastrea el progreso y los costos', step4_title: 'Informes', step4_desc: 'Entrega informes completos en 48 horas', tech_specs_title: 'Especificaciones Técnicas', tech_specs_accuracy: 'Precisión:', tech_specs_accuracy_value: 'Precisión RTK de ±2cm', tech_specs_coverage: 'Cobertura:', tech_specs_coverage_value: 'Hasta 500 hectáreas por día', tech_specs_point_density: 'Densidad de Puntos:', tech_specs_point_density_value: '300-600 puntos por metro cuadrado', tech_specs_report_delivery: 'Entrega de Informes:', tech_specs_report_delivery_value: '48 horas', deliverables_title: 'Entregables', deliverables_item1: 'Datos de Nube de Puntos 3D', deliverables_item2: 'Comparación Estado Real vs Diseño', deliverables_item3: 'Panel de Análisis de Progreso', deliverables_item4: 'Informes de Variación de Costos y Seguridad', cta: 'Explora la Tecnología' },
    projects: { title: 'Nuestro Portafolio', industrial: ['Centro Logístico, Polonia', 'Fábrica de Automóviles, Italia', 'Complejo de Almacenes, España'], residential: ['Chalet Moderno, Turquía', 'Apartamentos de Lujo, Polonia', 'Residencia junto al Mar, Italia'] },
    footer: { tagline: 'Supervisión y realización llave en mano en toda Europa.' }
  },
  ru: {
    nav: { about: 'О нас', technology: 'Технологии', projects: 'Проекты', contact: 'Контакты', home: 'Главная' },
    hero: { title: 'Строим будущее сегодня.', subtitle: 'Промышленные и жилые проекты под ключ', description: 'От первоначального проектирования до окончательной сдачи, мы обеспечиваем превосходство и точность в каждом проекте по всей Европе.', industrial: 'Промышленное', residential: 'Жилое', buildDream: 'Постройте свою мечту' },
    contact: { subtitle: 'Построим ваше будущее сегодня', email: 'Электронная почта', phone: 'Телефон', headquarters: 'Штаб-квартира', location: 'Варшава, Польша', operationsCenter: 'Европейский операционный центр', officeHours: 'Понедельник - Пятница: 8:00 - 18:00', mondayFriday: 'Понедельник - Пятница: 8:00 - 18:00', saturday: 'Суббота: 9:00 - 14:00', coverageAreas: 'Регионы работы' },
    dreamhouse: { bannerDescription: '<strong>Каждая мечта заслуживает дома, который её отражает.</strong><br>С <em>Dreamhouse</em> ваше видение становится реальностью: пространства элегантности, культуры и гармонии.', startTitle: 'Начните Мечту', startDescription: 'От проверки участка до оценки осуществимости и следующих шагов — мы структурируем ваш проект для перехода от идеи к действию — плавно, ясно и прозрачно.', startNote: 'Мы предлагаем два пакета, адаптированные к вашим потребностям: Premium и Premium Plus.', premiumTitle: 'Премиум', premiumPrice: '€4.000', premiumFeatures: ['Предварительное концептуальное исследование (функциональная планировка и архитектурные рекомендации)', 'Предварительная оценка стоимости и сроков реализации', 'Подбор подходящих участков (2-3 варианта, если применимо)', 'Операционная дорожная карта следующих этапов проекта'], premiumPlusTitle: 'Пакет Премиум Плюс', premiumPlusPrice: '€7.500', premiumPlusSubtitle: 'ПАКЕТ ПРЕМИУМ +', premiumPlusFeatures: ['Съёмка дроном RTK/LiDAR (где доступно)', 'Фотограмметрическая модель и топографический анализ местности', 'Раннее выявление критических проблем или отклонений от проекта', 'Полный набор данных для 4D-доставки проекта'], contactUs: 'Связаться с нами', exploreTechnology: 'Изучите Технологии' },
    bim_monitoring: { title: "BIM-мониторинг прогресса строительства с помощью дронов", subtitle: "Измеряйте прогресс строительства в 4D (время + стоимость) с помощью RTK LiDAR и фотограмметрии — безопаснее, быстрее, точнее.", badges: ["RTK + LiDAR + Фотограмметрия", "Интеграция с 4D BIM (Navisworks/SYNCHRO)", "Отчет для клиента за 48 часов", "Исполнительная модель vs. Проект"], benefits: ["Сокращение времени измерений до 70%", "Раннее обнаружение коллизий и отклонений", "Лучший контроль над затратами и графиком"] },
    about: { residential: { title: 'Воплощать мечту, строить качество.', description: 'Каждая резиденция рождается из встречи дизайна и инженерии. От предварительного изучения до финальной сдачи мы координируем проектировщиков, мастеров и поставщиков, чтобы гарантировать комфорт, точность и долговременную ценность.', microclaim: 'Элегантность, метод и внимание к каждой детали.' }, industrial: { title: 'Генеральный Подрядчик для проектов, рассчитанных на долгий срок.', description: 'От проектирования до сдачи мы интегрируем планирование, инженерию и управление стройкой с проверенными процессами и международными стандартами.', microclaim: 'Эффективность, контроль и надёжность на каждом этапе строительства.' }, reach: 'Охват по Европе', methods: 'Проверенные методы', team: 'Команда экспертов', quality: 'Непревзойденное качество' },
    process: { title: 'Процесс, которому можно доверять', description: 'От приобретения земли до окончательной передачи, мы гарантируем, что каждый шаг прозрачен и эффективен.', steps: { land: { title: 'Приобретение участка', desc: 'Найдите идеальное место для вашего проекта.' }, permits: { title: 'Разрешения и планирование', desc: 'Прохождение бюрократических процедур для получения полного одобрения.' }, design: { title: 'Проектирование и строительство', desc: 'Разработка чертежей и их воплощение в жизнь.' }, supervision: { title: 'Инвесторский надзор', desc: 'Обеспечение качества и соблюдения бюджета.' }, handover: { title: 'Сдача «под ключ»', desc: 'Передача готового к использованию объекта.' } } },
    technology: { title: 'Технологии', challenge_title: 'Вызов', challenge_desc: 'Традиционный мониторинг строительства основан на ручных измерениях и медленных циклах отчетности, что приводит к задержкам и перерасходу средств.', solution_title: 'Наше Решение', solution_desc: 'Интегрированная технология дронов с 4D BIM создает бесшовный цифровой двойник для отслеживания прогресса в реальном времени и прогностического анализа.', eu_projects_delay_note: 'В Европейском Союзе более', eu_projects_delay_percentage: '70%', eu_projects_delay_context: 'крупных проектов сталкиваются с задержками и перерасходом бюджета.', feature_4dbim_title: 'Интеграция 4D BIM', feature_4dbim_desc: 'Синхронизируйте прогресс с проектом для контроля графика и бюджета.', feature_quality_title: 'Цифровое Качество и Безопасность', feature_quality_desc: 'Обеспечение соответствия безопасности и качества на основе ИИ.', feature_future_title: 'Инструменты Будущего', feature_future_desc: 'Прогнозное обслуживание и интеллектуальное распределение ресурсов.', feature_savings_title: 'Экономия Затрат и Времени', feature_savings_desc: 'Сократите время измерений до 70% и принимайте проактивные решения.', roi_title: 'От Недель до Часов: Рентабельность Цифрового Мониторинга', roi_traditional_title: 'Традиционные Методы', roi_traditional_desc: 'Основаны на ручных измерениях, что приводит к медленному сбору данных и высокому потенциалу ошибок.', roi_traditional_report_time: 'Время Отчета', roi_traditional_report_value: '2-4 Недели', roi_traditional_decision: 'Принятие Решений', roi_traditional_decision_value: 'Реактивное', roi_aurum_title: 'AURUM: Дрон + BIM', roi_aurum_desc: 'Автоматизированный сбор данных дронами предоставляет миллионы точек данных для цифрового двойника в реальном времени.', roi_aurum_report_value: '48 Часов', roi_aurum_decision_value: 'Проактивное', how_it_works_title: 'Как это Работает', step1_title: 'Сбор Данных', step1_desc: 'Полеты дронов RTK собирают данные LiDAR и фотограмметрии', step2_title: 'Обработка', step2_desc: 'Алгоритмы ИИ обрабатывают облака точек и создают 3D-модели', step3_title: 'Анализ', step3_desc: 'Сравните текущее состояние с проектом, отслеживайте прогресс и затраты', step4_title: 'Отчетность', step4_desc: 'Предоставляйте исчерпывающие отчеты в течение 48 часов', tech_specs_title: 'Технические Характеристики', tech_specs_accuracy: 'Точность:', tech_specs_accuracy_value: 'Точность RTK ±2см', tech_specs_coverage: 'Покрытие:', tech_specs_coverage_value: 'До 500 гектаров в день', tech_specs_point_density: 'Плотность Точек:', tech_specs_point_density_value: '300-600 точек на квадратный метр', tech_specs_report_delivery: 'Срок Отчета:', tech_specs_report_delivery_value: '48 часов', deliverables_title: 'Результаты', deliverables_item1: 'Данные 3D-облака точек', deliverables_item2: 'Сравнение текущего состояния с проектом', deliverables_item3: 'Панель аналитики прогресса', deliverables_item4: 'Отчеты об изменении затрат и безопасности', cta: 'Изучите Технологии' },
    projects: { title: 'Наше Портфолио', industrial: ['Логистический центр, Польша', 'Автомобильный завод, Италия', 'Складской комплекс, Испания'], residential: ['Современная вилла, Турция', 'Элитные апартаменты, Польша', 'Резиденция на берегу моря, Италия'] },
    footer: { tagline: 'Надзор и реализация под ключ по всей Европе.' }
  },
  ku: {
    nav: { about: 'Der barê me de', technology: 'Teknoloji', projects: 'Projeyên me', contact: 'Têkilî', home: 'Sereke' },
    hero: { title: 'Avakirina sibê, îro.', subtitle: 'Projeyên Pîşesazî û Niştecîh bi Kilît', description: 'Ji sêwirana destpêkê heya radestkirina dawîn, em di her projeyê de li seranserê Ewropayê jêhatîbûn û rastbûnê peyda dikin.', industrial: 'Pîşesazî', residential: 'Niştecîh', buildDream: 'Xewna xwe çêbikin' },
    contact: { subtitle: 'Ba pêkve pêşerojê çêbikin', email: 'E-mail', phone: 'Têlefon', headquarters: 'Navenda Sereke', location: 'Warşova, Polonya', operationsCenter: 'Navenda Karûbarên Ewropî', officeHours: 'Duşem - În: 8:00 - 18:00', mondayFriday: 'Duşem - În: 8:00 - 18:00', saturday: 'Şemî: 9:00 - 14:00', coverageAreas: 'Herêmên Xizmetê' },
    dreamhouse: { bannerDescription: '<strong>Her xewneke maleke wê ku wê nîşan dide şayî ye.</strong><br>Bi <em>Dreamhouse</em>, dîtina we dibe rastî: cîhên elegansiyê, çandê û ahengiyê.', startTitle: 'Xewnê Dest Pê Bikin', startDescription: 'Ji kontrolên cîhê heya nirxandina pêkaniyê û gavên pêş — em projeya we sazî dikin ku ji ramanê ber bi karê ve here — nerm, zelal û şefaf.', startNote: 'Em du pakêt pêşkêş dikin ku li gorî pêdiviyên we hatine saz kirin: Premium û Premium Plus.', premiumTitle: 'Premium', premiumPrice: '€4.000', premiumFeatures: ['Lêkolîna konseptê ya destpêkî (plana fonksiyonel û rêberiyên mîmariyê)', 'Texmînkirina destpêkî ya lêçûnan û demjimêra pêkaniyê', 'Hilbijartina erdên guncan (2-3 vebijark, heke bicih be)', 'Nexşeya operasyonel a gavên pêş ên projeyê'], premiumPlusTitle: 'Pakêta Premium Plus', premiumPlusPrice: '€7.500', premiumPlusSubtitle: 'PAKÊTA PREMIUM +', premiumPlusFeatures: ['Lêkolîna dronê RTK/LiDAR (li ku heye)', 'Modela fotogrammetrî û analîza topografîk a axê', 'Naskirina zû ya pirsgirêkên girîng an veqetandinên sêwiranê', 'Danegira tevahî ji bo radestkirina projeya 4D'], contactUs: 'Têkilî daynin', exploreTechnology: 'Keşif Teknolojî' },
    bim_monitoring: { title: "Çavdêriya Pêşveçûna Avakirinê ya BIM-ê bi Drone", subtitle: "Pêşveçûna avakirinê di 4D de (dem + lêçûn) bi RTK LiDAR & fotogrammetrî bipîvin - ewletir, zûtir, rasttir.", badges: ["RTK + LiDAR + Fotogrammetrî", "Yekbûna 4D BIM (Navisworks/SYNCHRO)", "Raporta Mişterî di 48 saetan de", "Avakirî li hember Sêwiranê"], benefits: ["Dema pîvandinê heya 70% kêm bikin", "Destnîşankirina zû ya pevçûn û veqetandinan", "Kontrola çêtir li ser lêçûn û bernameyê"] },
    about: { residential: { title: 'Xewn jiyîn kirin, kalîte çêkirin.', description: 'Her niştecîhek ji hevdîtina sêwiran û endezyariyê tê çêkirin. Ji lêkolîna destpêkê heya radestkirina dawî, em sêwirkar, pispor û dabînker hevdeng dikin da ku rehetî, rastbûn û nirxa dirêj misoger bikin.', microclaim: 'Elegansî, rêbaz û baldarî di her hûrgiliyê de.' }, industrial: { title: 'Karfermaya Giştî ji bo projeyên dirêj.', description: 'Ji sêwiranê heya radestkirinê, em plansazî, endezyarî û rêveberiya şantiyeyê bi pêvajoyan ên pejirandî û standardên navneteweyî hevdeng dikin.', microclaim: 'Bikêrî, kontrol û hêza bingeh di her qonaxek ê avakirinê de.' }, reach: 'Gihîştina Ewropî', methods: 'Rêbazên Pejirandî', team: 'Tîma Pispor', quality: 'Kalîteya Bêhempa' },
    process: { title: 'Pêvajoyek ku Hûn Dikarin Pê Bawer Bikin', description: 'Ji stendina axê heya radestkirina dawîn, em piştrast dikin ku her gav zelal û bikêr e.', steps: { land: { title: 'Bidestxistina Zeviyê', desc: 'Cihê bêkêmasî ji bo projeya xwe ewle bikin.' }, permits: { title: 'Destûr û Plansazkirin', desc: 'Navîgasyona burokrasiyê ji bo erêkirina tevahî.' }, design: { title: 'Sêwiran û Avakirin', desc: 'Çêkirina nexşeyê û anîna jiyanê.' }, supervision: { title: 'Çavdêriya Veberhêner', desc: 'Pabendbûna bi kalîte û budceyê misoger dike.' }, handover: { title: 'Radestkirina Kilît-dest', desc: 'Radestkirina milkê dawîn, amade-bikaranîna.' } } },
    technology: { title: 'Teknoloji', challenge_title: 'Pirsgirêk', challenge_desc: 'Çavdêriya avakirinê ya kevneşopî li ser lêkolînên destan û çerxên raporkirinê yên hêdî disekine, ku dibe sedema derengî û zêdebûna lêçûnan.', solution_title: 'Çareseriya Me', solution_desc: 'Teknolojiya dronê ya yekbûyî bi 4D BIM re cêwîyek dîjîtal a bêkêmasî diafirîne ji bo şopandina pêşkeftinê ya rast-dem û analîzên pêşbînîker.', eu_projects_delay_note: 'Di Yekîtiya Ewropayê de, zêdetirî', eu_projects_delay_percentage: '70%', eu_projects_delay_context: 'projeyên mezin bi derengî û lêçûnên zêde re rû bi rû ne.', feature_4dbim_title: 'Yekbûna 4D BIM', feature_4dbim_desc: 'Pêşkeftinê bi sêwiranê re hevdeng bikin da ku demjimêr û budçeyê kontrol bikin.', feature_quality_title: 'Kalîteya Dîjîtal û Ewlehiyê', feature_quality_desc: 'Lihevhatina ewlehiyê û piştrastkirina kalîteyê ya bi AI-ê ve hatî çalak kirin.', feature_future_title: 'Amûrên Amade-Pêşerojê', feature_future_desc: 'Lênêrîna pêşbînîker û veqetandina çavkaniyên jîr.', feature_savings_title: 'Teserûfa Lêçûn û Demê', feature_savings_desc: 'Dema pîvandinê heya 70% kêm bikin û biryarên proaktîf bidin.', roi_title: 'Ji Hefteyan heya Saetan: ROI ya Çavdêriya Dîjîtal', roi_traditional_title: 'Rêbazên Kevneşopî', roi_traditional_desc: 'Li ser lêkolînên destan disekine, ku dibe sedema berhevkirina daneyan a hêdî û potansiyela bilind a xeletiyan.', roi_traditional_report_time: 'Dema Raporkirinê', roi_traditional_report_value: '2-4 Hefte', roi_traditional_decision: 'Biryardanîn', roi_traditional_decision_value: 'Reaktîf', roi_aurum_title: 'AURUM: Drone + BIM', roi_aurum_desc: 'Girtina daneya dronê ya otomatîkî bi mîlyonan xalên daneyê ji bo cêwîyek dîjîtal a rast-dem peyda dike.', roi_aurum_report_value: '48 Saet', roi_aurum_decision_value: 'Proaktîf', how_it_works_title: 'Çawa Dixebite', step1_title: 'Girtina Daneyan', step1_desc: 'Firînên dronê yên RTK daneyên LiDAR û fotogrammetrî digirin', step2_title: 'Pêvajoya', step2_desc: 'Algorîtmayên AI ewrên xalan pêvajoy dikin û modelên 3D diafirînin', step3_title: 'Analîz', step3_desc: 'Avakirî li hember sêwiranê berhev bikin, pêşkeftin û lêçûnan bişopînin', step4_title: 'Raporkirin', step4_desc: 'Raporên berfireh di nav 48 demjimêran de radest bikin', tech_specs_title: 'Taybetmendiyên Teknîkî', tech_specs_accuracy: 'Rastbûn:', tech_specs_accuracy_value: 'Rastbûna RTK ±2cm', tech_specs_coverage: 'Vegirtin:', tech_specs_coverage_value: 'Heta 500 hektar di rojê de', tech_specs_point_density: 'Dendika Xalê:', tech_specs_point_density_value: '300-600 xal ji bo metreya çargoşe', tech_specs_report_delivery: 'Radestkirina Raporê:', tech_specs_report_delivery_value: '48 saet', deliverables_title: 'Radestkirin', deliverables_item1: 'Daneyên Ewrê Xalê 3D', deliverables_item2: 'Berawirdkirina Avakirî li hember Sêwiranê', deliverables_item3: 'Dashboarda Analîzên Pêşketinê', deliverables_item4: 'Raporên Guhertina Lêçûn û Ewlehiyê', cta: 'Keşif Teknolojî' },
    projects: { title: 'Portfolioya Me', industrial: ['Navenda Lojîstîkê, Polonya', 'Fabrîkaya Otomotîvê, Îtalya', 'Kompleksa Embarê, Spanya'], residential: ['Vîlaya Nûjen, Tirkiye', 'Apartmanên Luks, Polonya', 'Rûniştina Deryayê, Îtalya'] },
    footer: { tagline: 'Çavdêrî û pêkanîna bi kilît li seranserê Ewropayê.' }
  }
};

const isHomePath = (p) => {
  const norm = (p || '/').replace(/\/+$/, '').toLowerCase();
  return norm === '' || norm === '/' || norm === '/home';
};

const SECTION_IDS = ['home', 'about', 'technology', 'projects'];

export default function Layout({ children }) {
  const [currentLang, setCurrentLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aurum-language') || 'en';
    }
    return 'en';
  });
  
  const [division, setDivision] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('aurum-theme') || 'industrial';
    }
    return 'industrial';
  });
  
  const [currentSection, setCurrentSection] = useState('home');
  const location = useLocation();
  const { pathname } = location;

  const isHomePage = isHomePath(pathname);
  const isDreamhousePage = pathname.includes(createPageUrl('dreamhouse'));
  const isContactPage = pathname.includes(createPageUrl('contact'));

  const t = translations[currentLang] || translations.en;
  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aurum-language', currentLang);
    }
  }, [currentLang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aurum-theme', division);
    }
  }, [division]);

  useEffect(() => {
    if (isDreamhousePage && division !== 'residential') {
      setDivision('residential');
    } else if (!isDreamhousePage && !isHomePage && !isContactPage && localStorage.getItem('aurum-theme') === 'residential' && division === 'residential') {
      if (division !== 'industrial') {
        setDivision('industrial');
      }
    }
  }, [isDreamhousePage, isHomePage, isContactPage, division]);

  const handleSectionClick = (sectionId) => {
    if (isDreamhousePage && sectionId === 'home') {
      setDivision('residential');
    }
    if (isHomePage) {
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        const scrolledHeaderHeight = 64;
        const top = sectionEl.getBoundingClientRect().top + window.scrollY;
        const scrollTop = Math.max(0, top - scrolledHeaderHeight - 12);
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        const url = new URL(window.location.href);
        url.hash = `#${sectionId}`;
        window.history.replaceState(null, '', url.toString());
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    if (isHomePage) {
      let timeoutId = null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            const visibleEntries = entries.filter((e) => e.isIntersecting && e.intersectionRatio > 0.3);

            if (visibleEntries.length > 0) {
              const sorted = visibleEntries.sort((a, b) => {
                return b.intersectionRatio - a.intersectionRatio;
              });
              const mostVisible = sorted[0];
              setCurrentSection(mostVisible.target.id);
            }
          }, 100);
        },
        {
          threshold: [0, 0.3, 0.5, 0.7, 1],
          rootMargin: '-100px 0px -30% 0px'
        }
      );

      SECTION_IDS.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      });

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, [isHomePage]);

  const pageTheme = isDreamhousePage ? 'residential' : (isHomePage || isContactPage ? division : 'industrial');
  const isIndustrial = pageTheme === 'industrial';

  useEffect(() => {
    document.body.style.backgroundColor = isIndustrial ? '#0C0E14' : '#F5F3F0';
    document.body.style.transition = 'background-color 0.6s ease';
    document.documentElement.style.backgroundColor = isIndustrial ? '#0C0E14' : '#F5F3F0';
    document.documentElement.style.transition = 'background-color 0.6s ease';
  }, [isIndustrial]);

  // Safety check - only render if translations are loaded
  if (!t || !t.nav || !t.hero || !t.footer) {
    return (
      <div style={{ backgroundColor: '#0C0E14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#FFB833', fontSize: '1.5rem' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --bg-color: ${isIndustrial ? '#0C0E14' : '#F5F3F0'};
          --text-color: ${isIndustrial ? '#e5e7eb' : '#292524'};
          --primary-color: ${isIndustrial ? '#fbbf24' : '#d97706'};
          --card-bg: ${isIndustrial ? '#1f2937' : '#ffffff'};
          --border-color: ${isIndustrial ? '#374151' : '#e7e5e4'};
          --header-h-current: 64px;
        }
        
        html, body {
          background-color: var(--bg-color) !important;
          transition: background-color 0.6s ease !important;
          min-height: 100vh;
        }

        #root {
          background-color: var(--bg-color);
          transition: background-color 0.6s ease;
          min-height: 100vh;
        }
        
        body,
        nav,
        main,
        footer,
        header,
        section,
        div,
        .card,
        button {
          transition: background-color 0.6s ease, color 0.6s ease, border-color 0.6s ease;
        }
        
        body { 
          color: var(--text-color);
        }
        
        .section-divider { 
          height: 1px; 
          background: linear-gradient(90deg, transparent, var(--border-color), transparent); 
        }

        *:focus-visible {
          outline: 3px solid ${isIndustrial ? '#FFB833' : '#D9B566'};
          outline-offset: 2px;
          border-radius: 4px;
        }

        button:focus-visible,
        a:focus-visible,
        [role="button"]:focus-visible {
          outline: 3px solid ${isIndustrial ? '#FFB833' : '#D9B566'};
          outline-offset: 3px;
          box-shadow: 0 0 0 4px ${isIndustrial ? 'rgba(255, 184, 51, 0.2)' : 'rgba(217, 181, 102, 0.2)'};
        }
      `}</style>

      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: isIndustrial ? '#0C0E14' : '#F5F3F0',
          transition: 'background-color 0.6s ease',
          zIndex: -1
        }}
      />

      <Header
        t={t}
        languages={languages}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        currentLanguage={currentLanguage}
        handleSectionClick={handleSectionClick}
        SECTION_IDS={SECTION_IDS}
        division={pageTheme}
        setDivision={setDivision}
        currentSection={currentSection}
      />

      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0 }}
          style={{ 
            width: '100%',
            minHeight: '100vh',
            position: 'relative',
            zIndex: 1
          }}
        >
          {React.cloneElement(children, {
            t,
            languages,
            currentLang,
            setCurrentLang,
            handleSectionClick,
            SECTION_IDS,
            division: pageTheme,
            setDivision
          })}
        </motion.div>
      </AnimatePresence>

      <footer className="py-12 transition-colors duration-600" style={{ 
        backgroundColor: isIndustrial ? '#0C0E14' : '#F5F3F0',
        borderTop: `1px solid ${isIndustrial ? 'rgba(255,255,255,0.08)' : 'rgba(36,50,75,0.10)'}`,
        position: 'relative',
        zIndex: 1
      }}>
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span style={{ color: isIndustrial ? '#FFB833' : '#D9B566' }}>AURUM</span>
                <span style={{ color: isIndustrial ? '#F1F5F9' : '#24324B' }}>Build</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ 
                color: isIndustrial ? '#C9D1D9' : '#4A5568',
                opacity: 0.85 
              }}>
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-base" style={{ 
                color: isIndustrial ? '#FFB833' : '#D9B566' 
              }}>Quick Links</h4>
              <div className="space-y-2 text-sm">
                 <button 
                   key="footer-home"
                   type="button" 
                   onClick={() => handleSectionClick('home')} 
                   className="block transition-all duration-200 hover:translate-x-1" 
                   style={{ 
                     color: isIndustrial ? '#E2E8F0' : '#24324B',
                     opacity: 0.75 
                   }} 
                   onMouseEnter={(e) => { 
                     e.currentTarget.style.opacity = '1'; 
                     e.currentTarget.style.color = isIndustrial ? '#FFB833' : '#D9B566'; 
                   }} 
                   onMouseLeave={(e) => { 
                     e.currentTarget.style.opacity = '0.75'; 
                     e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#24324B'; 
                   }}
                 >
                  {t.nav.home}
                </button>
                {SECTION_IDS.filter((id) => id !== 'home').map((id) =>
                  <button 
                    key={`footer-${id}`}
                    type="button" 
                    onClick={() => handleSectionClick(id)} 
                    className="block transition-all duration-200 hover:translate-x-1" 
                    style={{ 
                      color: isIndustrial ? '#E2E8F0' : '#24324B',
                      opacity: 0.75 
                    }} 
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.opacity = '1'; 
                      e.currentTarget.style.color = isIndustrial ? '#FFB833' : '#D9B566'; 
                    }} 
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.opacity = '0.75'; 
                      e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#24324B'; 
                    }}
                  >
                    {t.nav[id]}
                  </button>
                )}
                <Link 
                  key="footer-dreamhouse"
                  to={createPageUrl('dreamhouse')} 
                  className="block transition-all duration-200 hover:translate-x-1" 
                  style={{ 
                    color: isIndustrial ? '#E2E8F0' : '#24324B',
                    opacity: 0.75 
                  }} 
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.opacity = '1'; 
                    e.currentTarget.style.color = isIndustrial ? '#8B5CF6' : '#8B5CF6'; 
                  }} 
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.opacity = '0.75'; 
                    e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#24324B'; 
                  }}
                >
                  DH — Dreamhouse
                </Link>
                <Link 
                  key="footer-contact"
                  to={createPageUrl('contact')} 
                  className="block transition-all duration-200 hover:translate-x-1" 
                  style={{ 
                    color: isIndustrial ? '#E2E8F0' : '#24324B',
                    opacity: 0.75 
                  }} 
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.opacity = '1'; 
                    e.currentTarget.style.color = isIndustrial ? '#FFB833' : '#D9B566'; 
                  }} 
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.opacity = '0.75'; 
                    e.currentTarget.style.color = isIndustrial ? '#E2E8F0' : '#24324B'; 
                  }}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-base" style={{ 
                color: isIndustrial ? '#FFB833' : '#D9B566' 
              }}>{t.contact.coverageAreas}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm" style={{ 
                color: isIndustrial ? '#C9D1D9' : '#4A5568',
                opacity: 0.8 
              }}>
                {['Italy', 'Poland', 'Spain', 'Turkey'].map((country) => 
                  <span key={country} className="transition-opacity duration-200 hover:opacity-100">{country}</span>
                )}
              </div>
            </div>
          </div>

          <div className="text-center pt-8" style={{ 
            borderTop: `1px solid ${isIndustrial ? 'rgba(255,255,255,0.08)' : 'rgba(36,50,75,0.10)'}` 
          }}>
            <p className="text-sm" style={{ 
              color: isIndustrial ? '#94A3B8' : '#6B7280',
              opacity: 0.7 
            }}>© 2025 AURUM Build sp z o. o. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

