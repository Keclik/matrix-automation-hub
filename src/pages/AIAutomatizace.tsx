
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
      title: "AI Automation",
      subtitle: "Automate repetitive tasks and free your team’s capacity to focus on what truly matters – growth, innovation, and strategy.",
      benefitsTitle: "Why use AI Automation",
      benefitsSubtitle: "Our AI solutions transform the way your business works – by automating routine tasks, freeing time, and boosting efficiency.",
      benefits: [
        {
          title: "Automation & Efficiency",
          description: "AI automation accelerates processes, eliminates repetitive tasks, and frees up your team’s capacity for strategic work. Boost your overall business productivity and efficiency.",
          icon: Clock
        },
        {
          title: "Personalized Support",
          description: "Provide customers with personalized 24/7 support, enhance customer experience, and strengthen trust and loyalty.",
          icon: MessageCircle
        },
        {
          title: "Flexibility & Growth",
          description: "AI solutions adapt to the specific needs of your industry, enabling you to scale your business without unnecessary costs. Stay flexible and one step ahead.",
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
      title: "AI Automatizace",
      subtitle: "Automatizujte opakující se úkoly a uvolněte kapacity vašeho týmu pro to, co je opravdu důležité – růst, inovace a strategie.",
      benefitsTitle: "Proč využít AI automatizaci",
      benefitsSubtitle: "Naše AI řešení transformují způsob fungování firem automatizací rutinních procesů",
      benefits: [
        {
          title: "Automatizace a efektivita",
          description: "AI automatizace zrychluje procesy, eliminuje rutinní úkoly a uvolňuje kapacity týmu pro strategickou práci. Zvýšíte tak celkovou efektivitu a produktivitu podniku.",
          icon: Clock
        },
        {
          title: "Personalizovaná podpora",
          description: "Díky AI můžete nabídnout individuální přístup zákazníkům 24/7, zlepšit zákaznickou zkušenost a posílit důvěru i loajalitu.",
          icon: MessageCircle
        },
        {
          title: "Flexibilita a růst",
          description: "AI řešení se přizpůsobí specifickým potřebám vašeho odvětví a umožní škálovat podnikání bez zbytečných nákladů. Zůstaňte flexibilní a o krok napřed.",
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
