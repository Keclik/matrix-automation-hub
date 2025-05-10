
import { useState, useEffect, useRef } from "react";
import { TrendingUp, Clock, Users } from "lucide-react";
import { useLanguage } from "./ui/language-context";

const BenefitCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay: number; 
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
        
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyAutomate = () => {
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

  const benefits = language === 'cs' ? [
    {
      title: "Zvýšení příjmů",
      description: "Oslovte více zákazníků, personalizujte komunikaci a proměňte více leadů v platící klienty – a to bez potřeby rozšiřování týmu.",
      icon: TrendingUp,
      delay: 0,
    },
    {
      title: "Zvýšení efektivity",
      description: "Ušetřete až 90 % času stráveného zákaznickou péčí a snižte náklady. Ušetřený čas i peníze investujte do růstu svého podnikání.",
      icon: Clock,
      delay: 200,
    },
    {
      title: "Vyšší Spokojenost zákazníků",
      description: "Poskytněte zákazníkům okamžité odpovědi 24/7 napříč platformami. Díky rychlé a dostupné podpoře se budou cítit ocenění.",
      icon: Users,
      delay: 400,
    },
  ] : [
    {
      title: "Increased Revenue",
      description: "Reach more customers, personalize communication, and convert more leads into paying clients – all without needing a bigger team.",
      icon: TrendingUp,
      delay: 0,
    },
    {
      title: "Improved Efficiency",
      description: "Automation saves up to 80% of time spent on customer service and reduces costs. Invest the saved time and money into growing your business.",
      icon: Clock,
      delay: 200,
    },
    {
      title: "Customer Satisfaction",
      description: "Provide customers with immediate responses 24/7 across platforms. Customers will feel valued thanks to fast and accessible support.",
      icon: Users,
      delay: 400,
    },
  ];

  return (
    <div id="why-automate" className="section-container readable-section" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono glow-text">
            {language === 'cs' ? 'PROČ AUTOMATIZOVAT' : 'WHY AUTOMATE'}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {language === 'cs' ? 'Proč využít AI ve vašem podnikání' : 'Why Use AI in Your Business'}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg font-medium drop-shadow-lg">
          {language === 'cs' 
            ? 'Umělá inteligence může zásadně změnit způsob, jakým podnikáte a komunikujete se zákazníky.'
            : 'AI automation can dramatically transform the way you operate and communicate with customers.'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            delay={benefit.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyAutomate;
