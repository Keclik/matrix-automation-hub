
import { useEffect, useRef, useState } from "react";
import BookingButton from "./BookingButton";
import { Clock } from "lucide-react";
import { useLanguage } from "./ui/language-context";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { language } = useLanguage();

  useEffect(() => {
    // Set a deadline a few hours from now (6 hours)
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 6);
    
    const calculateTimeLeft = () => {
      const difference = deadline.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: 0, // Always set to 0 as per requirements
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

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

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-matrix-black border border-matrix-green text-matrix-green w-16 h-16 flex items-center justify-center rounded-lg font-mono text-2xl mb-2 matrix-glow">
        {value < 10 ? `0${value}` : value}
      </div>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );

  const translations = {
    en: {
      limitedTimeOffer: "LIMITED TIME OFFER",
      readyToTransform: "Ready to Elevate Your Business with AI?",
      highDemand: "Demand is high – we can only onboard a few new clients each week. Secure your spot with a free AI strategy call.",
      specialOffer: "Special offer expires in:",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      noObligation: "No risk, no obligation. Cancel anytime. Limited availability."
    },
    cs: {
      limitedTimeOffer: "ČASOVĚ OMEZENÁ NABÍDKA",
      readyToTransform: "Připraveni posunout své podnikání s AI?",
      highDemand: "Zájem je vysoký – každý týden přijímáme jen omezený počet nových klientů. Zajistěte si místo zdarma na strategickém AI hovoru.",
      specialOffer: "Speciální nabídka vyprší za:",
      days: "Dny",
      hours: "Hodiny",
      minutes: "Minuty",
      seconds: "Sekundy",
      noObligation: "Bez závazků, možnost zrušení kdykoli. Místa jsou omezená."
    }
  };

  const t = translations[language];

  return (
    <div className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-matrix-black to-matrix-dark-gray z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`max-w-4xl mx-auto glass-card p-8 sm:p-12 border-matrix-green/30 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono mb-4 glow-text">
              {t.limitedTimeOffer}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gradient glow-text">
              {t.readyToTransform}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto font-medium">
              {t.highDemand}
            </p>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-matrix-green" />
              <h3 className="text-white font-medium">
                {t.specialOffer}
              </h3>
            </div>
            
            <div className="flex justify-center gap-4">
              <TimeUnit value={timeLeft.hours} label={t.hours} />
              <TimeUnit value={timeLeft.minutes} label={t.minutes} />
              <TimeUnit value={timeLeft.seconds} label={t.seconds} />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <BookingButton 
              size="lg" 
              className="mb-4 hover:scale-105 transition-transform duration-300 matrix-glow animate-pulse-glow" 
            />
            <p className="text-gray-400 text-sm">
              {t.noObligation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
