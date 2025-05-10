
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Server, Brain, Code } from "lucide-react";
import BookingButton from "./BookingButton";
import { useLanguage } from "./ui/language-context";

const ServicesCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay,
  linkTo,
  language 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay: number;
  linkTo: string;
  language: string;
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`glass-card p-6 transition-all duration-500 ease-out card-hover-effect ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`h-full flex flex-col transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-95"
        }`}
      >
        <div className="mb-6">
          <div className={`p-3 bg-matrix-green/10 inline-block rounded-lg transition-all duration-300 ${
            isHovered ? "bg-matrix-green/20 matrix-glow" : ""
          }`}>
            <Icon className={`w-8 h-8 text-matrix-green transition-all duration-300 ${
              isHovered ? "scale-110" : ""
            }`} strokeWidth={1.5} />
          </div>
        </div>
        
        <h3 className={`text-xl font-bold mb-4 text-white transition-all duration-300 ${
          isHovered ? "text-gradient glow-text" : ""
        }`}>
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        
        <div className={`border-t border-matrix-green/20 pt-4 mt-auto transition-all duration-300 ${
          isHovered ? "opacity-100 border-matrix-green/50" : "opacity-0"
        }`}>
          <Link 
            to={linkTo} 
            className="text-matrix-green hover:text-matrix-light-green transition-colors duration-300 inline-flex items-center gap-2 glow-text"
          >
            {language === "cs" ? "Zjistit více" : "Learn more"}
            <svg 
              className={`w-5 h-5 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: language === 'cs' ? "AI Automatizace" : "AI Automation",
      description: language === 'cs' 
        ? "Zjednodušte své podnikání pomocí AI automatizace, která za vás převezme opakující se úkoly, procesy i rutiny. Šetřete čas, snižte náklady a soustřeďte se na to, co je pro vás nejdůležitější."
        : "Streamline your business operations with AI automation that takes over repetitive tasks, processes, and routines. Save time, reduce costs, and focus on what truly matters to you.",
      icon: Server,
      delay: 0,
      linkTo: "/ai-automatizace"
    },
    {
      title: language === 'cs' ? "AI Agenti" : "AI Agents",
      description: language === 'cs'
        ? "Objevte sílu inteligentních AI agentů, kteří se přizpůsobí potřebám vašeho byznysu. Efektivně rozhodují, jednají s minimálním dohledem a pomáhají vám škálovat bez nutnosti najímání dalších zaměstnanců."
        : "Discover the power of intelligent AI agents tailored to your business needs. They make smart decisions, operate with minimal supervision, and help you scale without the need for additional hires.",
      icon: Brain,
      delay: 200,
      linkTo: "/ai-agents"
    },
    {
      title: language === 'cs' ? "AI Školení" : "AI Training",
      description: language === 'cs'
        ? "Vzdělávejte sebe i svůj tým s našimi odbornými AI školeními. Získejte praktické znalosti, naučte se moderní AI nástroje a proměňte technologie v konkurenční výhodu."
        : "Empower yourself and your team with our expert AI training. Gain practical knowledge, master modern AI tools, and turn technology into your competitive advantage.",
      icon: Code,
      delay: 400,
      linkTo: "/ai-training"
    },
  ];

  return (
    <div id="services" className="section-container readable-section" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono glow-text">
            {language === 'cs' ? 'AI ŘEŠENÍ' : 'AI SOLUTIONS'}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {language === 'cs' ? 'Naše Služby' : 'Our Services'}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg font-medium drop-shadow-lg">
          {language === 'cs' 
            ? 'Expand Matrix nabízí nejmodernější AI řešení navržená tak, aby transformovala vaše podnikání a otevřela nové možnosti.' 
            : 'Expand Matrix offers state-of-the-art AI solutions designed to transform your business operations and unlock new possibilities.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={service.delay}
            linkTo={service.linkTo}
            language={language}
          />
        ))}
      </div>
      
      <div 
        className={`mt-16 text-center transition-all duration-700 delay-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-xl text-gray-300 mb-8 font-medium">
          {language === 'cs' 
            ? 'Jste připraveni revolucionalizovat své podnikání pomocí vlastních AI řešení?' 
            : 'Ready to revolutionize your business with custom AI solutions?'}
        </p>
        <BookingButton />
      </div>
    </div>
  );
};

export default Services;
