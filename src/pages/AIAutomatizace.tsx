
import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import BookingButton from "../components/BookingButton";
import CTASection from "../components/CTASection";
import { useLanguage } from "../components/ui/language-context";
import { ArrowRight, Server, Bot, Users, Clock, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const AIAutomatizace = () => {
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
      title: "AI Business Automation",
      subtitle: "Streamline your operations with custom AI automation that handles repetitive tasks and workflows, freeing your team to focus on what matters most.",
      benefitsTitle: "Key Benefits of AI Automation",
      benefitsSubtitle: "Our AI solutions transform how businesses operate by automating routine processes",
      benefits: [
        {
          title: "Automation & Efficiency",
          description: "Our AI solutions automate orders, reservations, and answer questions, saving time for both customers and employees. Increase your team's productivity and efficiency.",
          icon: Clock
        },
        {
          title: "Personalized Support",
          description: "Provide personalized 24/7 consultations. Quick responses to questions and problems improve customer experience and increase satisfaction, leading to higher loyalty and sales.",
          icon: MessageCircle
        },
        {
          title: "Flexibility & Growth",
          description: "AI solutions easily integrate into various industries. They adapt to your needs and support business growth, whether you're a small or large company, keeping you a step ahead of competition.",
          icon: ArrowRight
        }
      ],
      examplesTitle: "How AI Automation Works For You",
      examples: [
        {
          title: "Customer Support",
          description: "AI solutions improve customer support by immediately answering frequently asked questions, providing detailed information about products and services, solving common problems, and transferring customers to live operators when needed."
        },
        {
          title: "Product Selection Assistance",
          description: "In online stores, AI assists with product selection, recommends items based on customer preferences, and simplifies the entire shopping process, increasing conversion rates."
        },
        {
          title: "Lead Generation",
          description: "AI effectively obtains contacts of potential customers who show interest in your products or services, significantly increasing chances of closing deals and growing your business."
        },
        {
          title: "Ordering & Reservations",
          description: "AI automates the ordering and reservation process for services such as dentists, hair salons, restaurants, real estate agencies, hotels, and travel agencies, saving businesses a lot of time."
        }
      ],
      ctaTitle: "Let's discuss your automation needs",
      ctaSubtitle: "We're ready to help. Contact us with your requirements and we'll show you how we can elevate your business to the next level.",
      bookCall: "Schedule a call",
      sendMessage: "Send a message"
    },
    cs: {
      title: "AI Automatizace Byznysu",
      subtitle: "Zjednodušte své podnikání pomocí vlastní AI automatizace, která zvládá opakující se úkoly a pracovní postupy, což vašemu týmu umožní soustředit se na to nejdůležitější.",
      benefitsTitle: "Hlavní benefity AI automatizace",
      benefitsSubtitle: "Naše AI řešení transformují způsob fungování firem automatizací rutinních procesů",
      benefits: [
        {
          title: "Automatizace a efektivita",
          description: "Naši AI chatboti automatizují objednávky, rezervace a odpovědí na dotazy, čímž šetří čas zákazníkům i zaměstnancům. Zvyšte tak produktivitu a efektivitu vašeho týmu.",
          icon: Clock
        },
        {
          title: "Personalizovaná podpora",
          description: "Poskytujte personalizované poradenství 24/7. Rychlá reakce na dotazy a problémy zlepšuje zákaznickou zkušenost a zvyšuje spokojenost, což vede k vyšší loajalitě a prodeji.",
          icon: MessageCircle
        },
        {
          title: "Flexibilita a růst",
          description: "AI chatboti se snadno integrují do různých odvětví. Přizpůsobí se vašim potřebám a podpoří růst firmy, ať už jste malá nebo velká firma, což vás udrží o krok před konkurencí.",
          icon: ArrowRight
        }
      ],
      examplesTitle: "Jak pro vás AI automatizace funguje",
      examples: [
        {
          title: "Zákaznická podpora",
          description: "AI chatboti zlepšují zákaznickou podporu tím, že okamžitě odpovídají na často kladené otázky, poskytují podrobné informace o produktech a službách, řeší běžné problémy a v případě potřeby přesměrovávají zákazníky na živého operátora."
        },
        {
          title: "Pomoc s výběrem produktů",
          description: "V online obchodech asistují AI chatboti při výběru produktů, doporučují zboží na základě zákaznických preferencí a zjednodušují celý nákupní proces, čímž zvyšují konverzní poměr."
        },
        {
          title: "Generování leadů",
          description: "AI chatboti efektivně získávají kontakty potenciálních zákazníků, kteří projevují zájem o vaše produkty nebo služby, čímž podstatně zvyšují šance na uzavření obchodů a růst vašeho podnikání."
        },
        {
          title: "Objednávání a rezervace",
          description: "Chatboti automatizují proces objednávání a rezervací pro služby jako zubaři, kadeřníci, restaurace, realitní kanceláře, hotely a cestovní kanceláře, čímž firmám ušetří mnoho času."
        }
      ],
      ctaTitle: "Pojďme to spolu probrat",
      ctaSubtitle: "Jsme připraveni vám pomoci. Kontaktujte nás s vašimi požadavky a my vám ukážeme, jak můžeme vaši firmu posunout na vyšší úroveň.",
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
              {language === 'cs' ? 'VÝHODY AI AUTOMATIZACE' : 'BENEFITS OF AI AUTOMATION'}
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

export default AIAutomatizace;
