
import { useEffect, useRef, useState } from "react";
import { Calendar, FileText, Cpu, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/ui/language-context";

const StepItem = ({ 
  number, 
  title, 
  description, 
  icon: Icon, 
  isActive,
  delay 
}: { 
  number: number;
  title: string; 
  description: string; 
  icon: React.ElementType;
  isActive: boolean;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={stepRef}
      className={`relative flex transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Connection line */}
      {number < 4 && (
        <div className="absolute top-16 left-10 w-0.5 h-24 bg-matrix-green/30 z-0"></div>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-1000 ${
          isActive 
            ? "bg-matrix-green text-matrix-black animate-subtle-pulse-glow" 
            : "bg-matrix-dark-gray border border-matrix-green/30 text-matrix-green"
        }`}>
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        
        <div className="mt-3 flex items-center justify-center w-8 h-8 rounded-full bg-matrix-black border border-matrix-green text-matrix-green font-mono text-sm">
          {number}
        </div>
      </div>
      
      <div className="ml-6 md:ml-8 pb-12">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 max-w-sm">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Cycle through steps with slower transition (5 seconds per step)
          const interval = setInterval(() => {
            setActiveStep(prev => prev < 4 ? prev + 1 : 1);
          }, 5000);
          
          return () => clearInterval(interval);
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

  const steps = {
    en: [
      {
        number: 1,
        title: "Book a Strategy Call",
        description: "Meet with our AI experts to explore your business needs, goals, and automation opportunities.",
        icon: Calendar,
        delay: 0,
      },
      {
        number: 2,
        title: "Receive a Tailored AI Plan",
        description: "We will design a custom AI strategy aligned with your objectives, challenges, and industry.",
        icon: FileText,
        delay: 200,
      },
      {
        number: 3,
        title: "AI Solution Built & Launched",
        description: "Our team develops, tests, and deploys your AI solution for a seamless integration.",
        icon: Cpu,
        delay: 400,
      },
      {
        number: 4,
        title: "Accelerate & Scale Effortlessly",
        description: "Experience measurable improvements as your AI solution boosts efficiency, reduces costs, and drives growth.",
        icon: TrendingUp,
        delay: 600,
      },
    ],
    cs: [
      {
        number: 1,
        title: "Rezervujte si strategický hovor",
        description: "Naplánujte si strategický hovor s našimi AI experty a proberte své potřeby a výzvy.",
        icon: Calendar,
        delay: 0,
      },
      {
        number: 2,
        title: "Získejte přizpůsobený AI plán",
        description: "Navrhneme strategii umělé inteligence přizpůsobenou vašim cílům, výzvám i oboru.",
        icon: FileText,
        delay: 200,
      },
      {
        number: 3,
        title: "Vývoj a nasazení AI řešení",
        description: "Náš tým vyvine, otestuje a nasadí AI řešení tak, aby hladce zapadlo do vašich procesů.",
        icon: Cpu,
        delay: 400,
      },
      {
        number: 4,
        title: "Zrychlete růst a škálujte bez námahy",
        description: "Zažijte měřitelné zlepšení – vaše AI řešení zvýší efektivitu, sníží náklady a podpoří růst.",
        icon: TrendingUp,
        delay: 600,
      },
    ]
  };

  const currentSteps = steps[language];
  
  const translations = {
    en: {
      process: "THE PROCESS",
      title: "How It Works",
      description: "Our proven process ensures you get the right AI solution for your business – fast, seamless, and tailored."
    },
    cs: {
      process: "PROCES",
      title: "Jak to funguje",
      description: "Ověřený proces, který zajistí ideální AI řešení pro vaše podnikání – rychle, hladce a na míru."
    }
  };

  return (
    <div id="how-it-works" className="section-container bg-matrix-black" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono">
            {translations[language].process}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {translations[language].title}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
          {translations[language].description}
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto mt-20">
        {currentSteps.map((step) => (
          <StepItem
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
            isActive={activeStep === step.number}
            delay={step.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
