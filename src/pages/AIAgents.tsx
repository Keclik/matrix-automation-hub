
import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import BookingButton from "../components/BookingButton";
import CTASection from "../components/CTASection";
import { useLanguage } from "../components/ui/language-context";
import { Brain, Bot, Cpu, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";

const AIAgents = () => {
  const { language } = useLanguage();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [areBenefitsVisible, setAreBenefitsVisible] = useState(false);
  const [areExamplesVisible, setAreExamplesVisible] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsHeroVisible(true);
      },
      { threshold: 0.1 }
    );
    
    const benefitsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAreBenefitsVisible(true);
      },
      { threshold: 0.1 }
    );
    
    const examplesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAreExamplesVisible(true);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (benefitsRef.current) benefitsObserver.observe(benefitsRef.current);
    if (examplesRef.current) examplesObserver.observe(examplesRef.current);

    return () => {
      if (heroRef.current) heroObserver.unobserve(heroRef.current);
      if (benefitsRef.current) benefitsObserver.unobserve(benefitsRef.current);
      if (examplesRef.current) examplesObserver.unobserve(examplesRef.current);
    };
  }, []);

  const translations = {
    en: {
      title: "AI Agents",
      subtitle: "Deploy intelligent AI agents tailored to your business—empowering decision-making and action with minimal human oversight.",
      benefitsTitle: "Why use AI Agents",
      benefitsSubtitle: "Our AI agents transform business operations by automating complex decision-making processes.",
      benefits: [
        {
          title: "Autonomous Decision-Making",
          description: "AI agents analyze data, understand context, and make smart decisions—freeing human teams for higher-value work.",
          icon: Brain
        },
        {
          title: "24/7 Availability",
          description: "AI agents work nonstop, providing uninterrupted service for customers and operations—without breaks or downtime.",
          icon: Cpu
        },
        {
          title: "Scalable Performance",
          description: "AI agents instantly scale to handle thousands of interactions—without the limits of human staffing.",
          icon: BarChart3
        }
      ],
      examplesTitle: "How AI Agents Work For You",
      examples: [
        {
          title: "Intelligent Task Routing",
          description: "AI agents evaluate incoming tasks and automatically route them to the right team or system—improving efficiency and response times."
        },
        {
          title: "Personalized Customer Engagement",
          description: "AI agents monitor customer behavior and automatically trigger personalized messages or offers at the right time—boosting loyalty and retention."
        },
        {
          title: "Database Management and Reporting",
          description: "Our AI agents continuously monitor business metrics, generate insights and automated reports, notify the team of anomalies or opportunities, and automatically search and update data in the database as needed."
        },
        {
          title: "Real-Time Monitoring & Alerts",
          description: "AI agents monitor business systems in real-time and send alerts or take predefined actions when anomalies occur—preventing bigger issues."
        }
      ],
      ctaTitle: "Let's discuss your AI agent needs",
      ctaSubtitle: "We're ready to help. Contact us with your requirements and we'll show you how we can elevate your business to the next level with custom AI agents.",
      bookCall: "Schedule a call",
      sendMessage: "Send a message"
    },
    cs: {
      title: "AI Agenti",
      subtitle: "Nasaďte inteligentní AI agenty vyškolené speciálně pro potřeby vašeho podnikání, schopné rozhodovat a jednat s minimálním lidským dohledem.",
      benefitsTitle: "Hlavní benefity AI agentů",
      benefitsSubtitle: "Naši AI agenti transformují způsob fungování firem automatizací složitých rozhodovacích procesů",
      benefits: [
        {
          title: "Autonomní rozhodování",
          description: "AI agenti analyzují data, chápou souvislosti a dělají chytrá rozhodnutí – uvolní tým pro důležitější úkoly",
          icon: Brain
        },
        {
          title: "Dostupnost 24/7",
          description: "AI agenti pracují nepřetržitě bez přestávek – zajistí stálou podporu zákazníkům i provozu.",
          icon: Cpu
        },
        {
          title: "Škálovatelný výkon",
          description: "AI agenti zvládnou tisíce interakcí najednou – škálují okamžitě bez omezení lidských kapacit.",
          icon: BarChart3
        }
      ],
      examplesTitle: "Jak pro vás AI agenti pracují",
      examples: [
        {
          title: "Inteligentní směrování úkolů",
          description: "AI agenti vyhodnocují příchozí úkoly a automaticky je přesměrovávají na správný tým nebo systém – zvyšují efektivitu a rychlost reakce."
        },
        {
          title: "Personalizovaná komunikace se zákazníky",
          description: "AI agenti sledují chování zákazníků a automaticky spouštějí personalizované zprávy nebo nabídky ve správný moment – posilují loajalitu a udržení zákazníků."
        },
        {
          title: "Správa dat a reportování",
          description: "Naši AI agenti neustále monitorují obchodní metriky, vytvářejí přehledy a automatizované reporty, upozorňují na anomálie nebo nové příležitosti a zároveň dokáží automaticky vyhledávat a aktualizovat data v databázi podle aktuálních potřeb."
        },
        {
          title: "Monitorování a upozornění v reálném čase",
          description: "AI agenti v reálném čase monitorují firemní systémy a při zjištění odchylek posílají upozornění nebo provádějí předem nastavené akce – předcházejí větším problémům."
        }
      ],
      ctaTitle: "Pojďme projednat vaše potřeby v oblasti AI agentů",
      ctaSubtitle: "Jsme připraveni vám pomoci. Kontaktujte nás s vašimi požadavky a my vám ukážeme, jak můžeme vaše podnikání posunout na vyšší úroveň pomocí vlastních AI agentů.",
      bookCall: "Naplánovat hovor",
      sendMessage: "Napsat zprávu"
    }
  };

  const t = translations[language];

  return (
    <Layout>
      {/* Hero Section */}
      <div ref={heroRef} className="section-container readable-section">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text pb-[10px]">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsRef} className="section-container readable-section">
        <div className={`mb-12 transition-all duration-700 ease-out ${
          areBenefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="flex justify-center mb-2">
            <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono glow-text">
              {language === 'cs' ? 'VÝHODY AI AGENTŮ' : 'BENEFITS OF AI AGENTS'}
            </span>
          </div>
          <h2 className="section-title text-gradient">
            {t.benefitsTitle}
          </h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg font-medium mb-12">
            {t.benefitsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className={`glass-card p-6 transition-all duration-500 ease-out card-hover-effect ${
                  areBenefitsVisible ? 
                    `opacity-100 translate-y-0 delay-[${index * 200}ms]` : 
                    "opacity-0 translate-y-12"
                }`}
              >
                <div className="mb-6">
                  <div className="p-3 bg-matrix-green/10 inline-block rounded-lg">
                    <Icon className="w-8 h-8 text-matrix-green" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Examples Section */}
      <div ref={examplesRef} className="section-container readable-section">
        <div className={`mb-12 transition-all duration-700 ease-out ${
          areExamplesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="flex justify-center mb-2">
            <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono glow-text">
              {language === 'cs' ? 'UKÁZKY POUŽITÍ' : 'USE CASES'}
            </span>
          </div>
          <h2 className="section-title text-gradient">
            {t.examplesTitle}
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {t.examples.map((example, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 transition-all duration-500 ease-out ${
                areExamplesVisible ? 
                  `opacity-100 translate-y-0 delay-[${index * 200}ms]` : 
                  "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-xl font-bold mb-3 text-white text-gradient">
                {example.title}
              </h3>
              <p className="text-gray-300">
                {example.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <CTASection /> 
    </Layout>
  );
};

export default AIAgents;
