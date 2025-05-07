
import { useEffect, useRef, useState } from "react";
import GlitchText from "./GlitchText";
import BookingButton from "./BookingButton";
import { useLanguage } from "./ui/language-context";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [textState, setTextState] = useState(0);
  const { language } = useLanguage();
  
  const heroTexts = {
    en: [
      "> WELCOME TO EXPAND MATRIX_",
      "> AI AUTOMATION BEYOND LIMITS_",
      "> YOUR FUTURE IS WAITING_"
    ],
    cs: [
      "> VÍTEJTE V EXPAND MATRIX_",
      "> AI AUTOMATIZACE BEZ LIMITŮ_",
      "> VAŠE BUDOUCNOST ČEKÁ_"
    ]
  };

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const currentTexts = heroTexts[language];
  
  const translations = {
    en: {
      title: "Unleash the Power of AI",
      subtitle: "Custom AI automation and intelligent agents tailored to your needs. Transform your business with cutting-edge AI solutions.",
      discoverMore: "Discover More"
    },
    cs: {
      title: "Objevte sílu umělé inteligence",
      subtitle: "Vlastní AI automatizace a inteligentní agenti přizpůsobení vašim potřebám. Transformujte své podnikání pomocí špičkových AI řešení.",
      discoverMore: "Objevte více"
    }
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32 overflow-hidden"
    >
      {/* Background overlay - improved opacity for better readability */}
      <div className="absolute inset-0 bg-matrix-dark-gray bg-opacity-70 z-0"></div>
      
      <div 
        className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="terminal-container glass-card p-8 mb-12 mx-auto max-w-3xl">
          <div className="terminal-header flex items-center mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-sm text-gray-400 font-mono">expand-matrix-terminal</div>
          </div>
          
          <div className="terminal-content text-left">
            {textState >= 0 && (
              <div className="mb-4">
                <GlitchText
                  text={currentTexts[0]}
                  className="terminal-text text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  typewriter={true}
                  typewriterSpeed={80} // Slowed down for better readability
                  onComplete={() => setTimeout(() => setTextState(1), 1000)} // Increased delay
                />
              </div>
            )}
            
            {textState >= 1 && (
              <div className="mb-4">
                <GlitchText
                  text={currentTexts[1]}
                  className="terminal-text text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  typewriter={true}
                  typewriterSpeed={80} // Slowed down for better readability
                  onComplete={() => setTimeout(() => setTextState(2), 1000)} // Increased delay
                />
              </div>
            )}
            
            {textState >= 2 && (
              <div className="mb-4">
                <GlitchText
                  text={currentTexts[2]}
                  className="terminal-text text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  typewriter={true}
                  typewriterSpeed={80} // Slowed down for better readability
                />
              </div>
            )}
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-gradient glow-text">{translations[language].title}</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto drop-shadow-lg font-medium">
          {translations[language].subtitle}
        </p>
        
        <div className="flex justify-center">
          <BookingButton 
            size="lg" 
            className="matrix-glow animate-pulse-glow scale-110 hover:scale-125 transition-transform duration-300" 
          />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#why-automate" 
          className="flex flex-col items-center text-white hover:text-matrix-green transition-colors duration-300"
        >
          <span className="mb-2 text-sm font-medium text-matrix-green glow-text">{translations[language].discoverMore}</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
