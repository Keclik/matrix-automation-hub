
import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import BookingButton from "../components/BookingButton";
import CTASection from "../components/CTASection";
import { useLanguage } from "../components/ui/language-context";
import { Code, GraduationCap, Users, Zap, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";

const AITraining = () => {
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
      title: "AI Training",
      subtitle: "Educate your team on using modern AI technologies and tools to streamline work and strengthen competitive advantage.",
      benefitsTitle: "Key Benefits of AI Training",
      benefitsSubtitle: "Our AI training programs empower your team with the knowledge and skills needed to leverage AI effectively",
      benefits: [
        {
          title: "Increased Productivity",
          description: "Equip your employees with AI skills to automate routine tasks, analyze data more efficiently, and focus on high-value activities that drive business growth.",
          icon: Zap
        },
        {
          title: "Future-Proof Skills",
          description: "Stay ahead of the curve by preparing your team with the skills needed for the AI-driven future of business, ensuring long-term competitiveness.",
          icon: GraduationCap
        },
        {
          title: "Improved Collaboration",
          description: "Foster an environment where teams collaborate with AI tools, enhancing creativity, problem-solving, and innovation across departments.",
          icon: Users
        }
      ],
      examplesTitle: "Our AI Training Programs",
      examples: [
        {
          title: "AI Fundamentals Workshop",
          description: "A comprehensive introduction to AI concepts, technologies, and applications for businesses. Perfect for teams new to AI who need to understand the basics and potential use cases."
        },
        {
          title: "Practical AI Tools Training",
          description: "Hands-on training with today's most powerful AI tools and platforms. Learn how to integrate these tools into daily workflows for immediate productivity gains."
        },
        {
          title: "AI Strategy for Management",
          description: "Specialized training for executives and managers on developing and implementing AI strategies, measuring ROI, and leading AI-enhanced teams."
        },
        {
          title: "Custom AI Application Development",
          description: "Advanced training for technical teams on building, deploying, and managing custom AI solutions tailored to your specific business needs."
        }
      ],
      ctaTitle: "Empower your team with AI knowledge",
      ctaSubtitle: "Ready to transform your workforce into AI-powered innovators? Contact us today to discuss custom training programs for your organization.",
      bookCall: "Schedule a call",
      sendMessage: "Send a message"
    },
    cs: {
      title: "AI Školení",
      subtitle: "Vzdělávejte svůj tým v oblasti využívání moderních AI technologií a nástrojů pro zefektivnění práce a posílení konkurenční výhody.",
      benefitsTitle: "Hlavní přínosy AI školení",
      benefitsSubtitle: "Naše vzdělávací programy v oblasti AI poskytují vašemu týmu znalosti a dovednosti potřebné k efektivnímu využívání umělé inteligence",
      benefits: [
        {
          title: "Zvýšená produktivita",
          description: "Vybavte své zaměstnance dovednostmi v oblasti AI, aby mohli automatizovat rutinní úkoly, efektivněji analyzovat data a soustředit se na aktivity s vysokou hodnotou, které podporují růst podnikání.",
          icon: Zap
        },
        {
          title: "Dovednosti pro budoucnost",
          description: "Získejte náskok přípravou vašeho týmu na dovednosti potřebné pro budoucnost podnikání řízenou umělou inteligencí, což zajistí dlouhodobou konkurenceschopnost.",
          icon: GraduationCap
        },
        {
          title: "Lepší spolupráce",
          description: "Vytvořte prostředí, kde týmy spolupracují s nástroji umělé inteligence, což posiluje kreativitu, řešení problémů a inovace napříč odděleními.",
          icon: Users
        }
      ],
      examplesTitle: "Naše vzdělávací programy v oblasti AI",
      examples: [
        {
          title: "Workshop o základech umělé inteligence",
          description: "Komplexní úvod do konceptů, technologií a aplikací umělé inteligence pro podniky. Ideální pro týmy nové v oblasti AI, které potřebují pochopit základy a potenciální případy použití."
        },
        {
          title: "Školení praktických nástrojů AI",
          description: "Praktické školení s dnešními nejsilnějšími nástroji a platformami umělé inteligence. Naučte se, jak integrovat tyto nástroje do každodenních pracovních postupů pro okamžité zvýšení produktivity."
        },
        {
          title: "Strategie AI pro management",
          description: "Specializované školení pro vedoucí pracovníky a manažery o vývoji a implementaci strategií AI, měření návratnosti investic a vedení týmů posílených umělou inteligencí."
        },
        {
          title: "Vývoj vlastních AI aplikací",
          description: "Pokročilé školení pro technické týmy o vytváření, nasazování a správě vlastních řešení AI přizpůsobených vašim specifickým obchodním potřebám."
        }
      ],
      ctaTitle: "Posílte svůj tým znalostmi v oblasti AI",
      ctaSubtitle: "Jste připraveni přeměnit svou pracovní sílu na inovátory využívající AI? Kontaktujte nás ještě dnes a prodiskutujeme vzdělávací programy na míru pro vaši organizaci.",
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text pt-[10px]">
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
              {language === 'cs' ? 'VÝHODY AI ŠKOLENÍ' : 'BENEFITS OF AI TRAINING'}
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
              {language === 'cs' ? 'NAŠE PROGRAMY' : 'OUR PROGRAMS'}
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

export default AITraining;
