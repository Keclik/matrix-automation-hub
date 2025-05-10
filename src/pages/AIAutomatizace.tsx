
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
          description: "Enhance your customer service with AI-powered chatbots and voice agents that handle FAQs, solve issues, and seamlessly transfer complex cases to human agents—providing 24/7 support and reducing workload."
        },
        {
          title: "Social Media Automation",
          description: "Leverage AI to automatically generate, schedule, and optimize engaging social media posts, captions, and hashtags—saving time, staying consistent, and boosting your online presence."
        },
        {
          title: "Lead Generation & Qualification",
          description: "AI identifies, qualifies, and nurtures leads automatically—saving your sales team time and increasing opportunities to close deals."
        },
        {
          title: "Appointment Scheduling & Client Bookings",
          description: "AI automates appointment scheduling and client bookings for industries like healthcare, beauty, fitness, real estate, and consulting—reducing no-shows and streamlining operations."
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
          description: "Zvyšte úroveň zákaznického servisu díky AI chatbotům a hlasovým agentům, kteří odpovídají na časté dotazy, řeší problémy a plynule předávají složitější případy živým operátorům – poskytujte podporu 24/7 a snižte zatížení týmu."
        },
        {
          title: "Automatizace sociálních sítí",
          description: "Využijte AI k automatickému vytváření, plánování a optimalizaci poutavých příspěvků, popisků a hashtagů – šetřete čas, udržujte konzistenci a posilujte svou online přítomnost."
        },
        {
          title: "Generování a kvalifikace leadů",
          description: "AI automaticky identifikuje, kvalifikuje a pečuje o potenciální zákazníky – ušetříte čas obchodnímu týmu a zvýšíte šance na uzavření obchodu."
        },
        {
          title: "Rezervace a plánování schůzek",
          description: "AI automatizuje rezervace a plánování schůzek pro odvětví jako zdravotnictví, kosmetika, fitness, reality, poradenství a další – snižte počet nedostavených klientů a zefektivněte provoz."
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
