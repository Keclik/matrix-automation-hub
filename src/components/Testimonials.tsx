
import { useEffect, useRef, useState } from "react";
import { Clock, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import BookingButton from "./BookingButton";
import { useLanguage } from "./ui/language-context";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: {
    en: string;
    cs: string;
  };
  image: string;
  result: {
    en: string;
    cs: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechGrowth Inc.",
    quote: {
      en: "Expand Matrix transformed our customer service with their AI agents. We're handling 3x the inquiries with half the staff, and customer satisfaction is up 42%.",
      cs: "Expand Matrix transformoval naši zákaznickou podporu pomocí AI agentů. Zvládáme 3x více dotazů s polovičním personálem a spokojenost zákazníků vzrostla o 42%."
    },
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    result: {
      en: "Customer service efficiency increased by 300%",
      cs: "Efektivita zákaznického servisu vzrostla o 300%"
    }
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Quantum Solutions",
    quote: {
      en: "The custom AI automation suite they built for our data processing has cut our analysis time from days to minutes. It's like having a superpower.",
      cs: "AI automatizační systém, který vytvořili pro naše zpracování dat, zkrátil čas analýzy z dnů na minuty. Je to jako mít superschopnost."
    },
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    result: {
      en: "Data processing time reduced by 98%",
      cs: "Doba zpracování dat zkrácena o 98%"
    }
  },
  {
    name: "Jessica Rodriguez",
    position: "Marketing Director",
    company: "GrowthLabs",
    quote: {
      en: "Their AI predictive analytics integration has revolutionized our marketing strategy. We can now anticipate trends and customer needs with uncanny accuracy.",
      cs: "Jejich integrace AI prediktivní analytiky zrevolučnila naši marketingovou strategii. Nyní můžeme předvídat trendy a potřeby zákazníků s neuvěřitelnou přesností."
    },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    result: {
      en: "Marketing ROI increased by 215%",
      cs: "ROI marketingu vzrostlo o 215%"
    }
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const showNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const showPrevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      showNextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const translations = {
    en: {
      successStories: "SUCCESS STORIES",
      realResults: "Real Results from Real Clients",
      seeHow: "See how businesses like yours have transformed with our AI solutions.",
      limitedAvailability: "Limited Availability This Week",
      highDemand: "Due to high demand, we only have a few strategy call slots remaining this week."
    },
    cs: {
      successStories: "PŘÍBĚHY ÚSPĚCHU",
      realResults: "Skutečné výsledky od skutečných klientů",
      seeHow: "Podívejte se, jak se podniky jako ten váš transformovaly díky našim AI řešením.",
      limitedAvailability: "Omezená dostupnost tento týden",
      highDemand: "Vzhledem k vysoké poptávce, tento týden máme k dispozici již jen několik termínů pro strategické hovory."
    }
  };

  const t = translations[language];

  return (
    <div id="testimonials" className="section-container relative" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono">
            {t.successStories}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {t.realResults}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
          {t.seeHow}
        </p>
      </div>
      
      <div 
        className={`max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="relative">
          <div className="glass-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-matrix-green">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="mb-6">
                  <svg 
                    className="w-10 h-10 text-matrix-green/30" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonials[currentIndex].quote[language]}"
                </p>
                
                <div className="bg-matrix-green/10 p-3 rounded-lg inline-flex items-center">
                  <div className="w-8 h-8 rounded-full bg-matrix-green/20 flex items-center justify-center mr-3">
                    <TrendingUp className="w-4 h-4 text-matrix-green" />
                  </div>
                  <span className="text-matrix-green font-medium">
                    {testimonials[currentIndex].result[language]}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={showPrevTestimonial}
              className="w-10 h-10 rounded-full border border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-matrix-black transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? "bg-matrix-green w-6" 
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={showNextTestimonial}
              className="w-10 h-10 rounded-full border border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-matrix-black transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`max-w-lg mx-auto mt-20 glass-card p-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <Clock className="w-5 h-5 text-matrix-green" />
          <h3 className="text-lg font-bold text-white">{t.limitedAvailability}</h3>
        </div>
        
        <p className="text-center text-gray-300 mb-6">
          {t.highDemand}
        </p>
        
        <div className="flex justify-center">
          <BookingButton />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
