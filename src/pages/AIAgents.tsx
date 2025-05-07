
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
      subtitle: "Deploy intelligent AI agents trained specifically for your business needs, capable of making decisions and taking actions with minimal human oversight.",
      benefitsTitle: "Key Benefits of AI Agents",
      benefitsSubtitle: "Our AI agents transform how businesses operate by automating complex decision-making processes",
      benefits: [
        {
          title: "Autonomous Decision Making",
          description: "Our AI agents can analyze data, understand context, and make decisions based on predefined parameters, freeing up human resources for more creative tasks.",
          icon: Brain
        },
        {
          title: "24/7 Availability",
          description: "Unlike human employees, AI agents can work round the clock without breaks, ensuring constant service availability for your customers and operational needs.",
          icon: Cpu
        },
        {
          title: "Scalable Performance",
          description: "AI agents can handle thousands of interactions simultaneously, scaling instantly with your business needs without the traditional constraints of human staffing.",
          icon: BarChart3
        }
      ],
      examplesTitle: "How AI Agents Work For You",
      examples: [
        {
          title: "Sales Representatives",
          description: "AI agents function as virtual sales representatives, qualifying leads, answering product questions, showcasing features, and guiding customers through the purchasing process without human intervention."
        },
        {
          title: "Data Analysis & Reporting",
          description: "Our agents continuously monitor business metrics, generate insights, create automated reports, and can even alert human team members when anomalies or opportunities are detected."
        },
        {
          title: "Customer Relationship Management",
          description: "AI agents can track customer interactions across channels, personalize communication based on history and preferences, and proactively engage with customers at optimal times."
        },
        {
          title: "Operations Management",
          description: "From inventory management to supply chain optimization, AI agents can monitor systems, predict needs, and even place orders automatically based on customized business rules."
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
          description: "Naši AI agenti dokáží analyzovat data, porozumět kontextu a činit rozhodnutí na základě předdefinovaných parametrů, čímž uvolňují lidské zdroje pro kreativnější úkoly.",
          icon: Brain
        },
        {
          title: "Dostupnost 24/7",
          description: "Na rozdíl od lidských zaměstnanců mohou AI agenti pracovat nepřetržitě bez přestávek, což zajišťuje nepřetržitou dostupnost služeb pro vaše zákazníky a provozní potřeby.",
          icon: Cpu
        },
        {
          title: "Škálovatelný výkon",
          description: "AI agenti zvládnou tisíce interakcí současně a okamžitě se přizpůsobí potřebám vašeho podnikání bez tradičních omezení spojených s lidskými zdroji.",
          icon: BarChart3
        }
      ],
      examplesTitle: "Jak pro vás AI agenti fungují",
      examples: [
        {
          title: "Obchodní zástupci",
          description: "AI agenti fungují jako virtuální obchodní zástupci, kvalifikují potenciální zákazníky, odpovídají na otázky o produktech, prezentují funkce a provázejí zákazníky procesem nákupu bez nutnosti lidského zásahu."
        },
        {
          title: "Analýza dat a reporting",
          description: "Naši agenti průběžně sledují obchodní metriky, generují postřehy, vytvářejí automatizované zprávy a dokonce mohou upozornit lidské členy týmu, když jsou zjištěny anomálie nebo příležitosti."
        },
        {
          title: "Řízení vztahů se zákazníky",
          description: "AI agenti mohou sledovat interakce zákazníků napříč kanály, personalizovat komunikaci na základě historie a preferencí a aktivně komunikovat se zákazníky v optimálních časech."
        },
        {
          title: "Řízení provozu",
          description: "Od řízení inventáře po optimalizaci dodavatelského řetězce mohou AI agenti monitorovat systémy, předvídat potřeby a dokonce automaticky zadávat objednávky na základě přizpůsobených obchodních pravidel."
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
      <div ref={heroRef} className="section-container pt-32 pb-16">
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
      <div ref={benefitsRef} className="section-container bg-matrix-black/30">
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
