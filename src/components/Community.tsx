
import { useState, useRef, useEffect } from "react";
import { Users, CircleCheck } from "lucide-react";
import { useLanguage } from "./ui/language-context";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const Community = () => {
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

  const translations = {
    en: {
      title: "AI DISCORD COMMUNITY",
      heading: "Expand Matrix Academy",
      description: "Join our AI community to access educational resources, premium AI tools, and connect with like-minded individuals passionate about leveraging AI technology.",
      freePlan: {
        title: "EM Academy",
        subtitle: "Free option",
        benefits: [
          "Supportive AI community",
          "Free introductory AI Masterclass",
          "Basic templates ready to use",
          "Examples of AI agent construction",
          "AI news, articles, and recommendations"
        ],
        buttonText: "Join Free"
      },
      premiumPlan: {
        title: "EM Premium Academy",
        subtitle: "Paid option",
        benefits: [
          "+100 premium AI templates",
          "Individual access",
          "Weekly live calls and recordings",
          "Exclusive tips on AI tools and integrations",
          "Make.com free access"
        ],
        buttonText: "Learn More"
      }
    },
    cs: {
      title: "AI DISCORD KOMUNITA",
      heading: "Expand Matrix Academy",
      description: "Připojte se k naší AI komunitě a získejte přístup ke vzdělávacím materiálům, prémiovým AI nástrojům a spojte se s lidmi, kteří sdílejí vaši vášeň pro využívání AI technologií.",
      freePlan: {
        title: "EM Academy",
        subtitle: "Zdarma",
        benefits: [
          "Podporující AI komunita",
          "Úvodní AI Masterclass zdarma",
          "Základní šablony připravené k použití",
          "Ukázky stavby AI agentů",
          "AI novinky, články a doporučení"
        ],
        buttonText: "Připojit se zdarma"
      },
      premiumPlan: {
        title: "EM Premium Academy",
        subtitle: "Placená část",
        benefits: [
          "+100 prémiových AI šablon",
          "Individuální přístup",
          "Týdenní live hovory a záznamy",
          "Exkluzivní tipy na AI nástroje a integrace",
          "Make.com zdarma"
        ],
        buttonText: "Zjistit více"
      }
    }
  };

  const t = translations[language];

  return (
    <div id="community" className="section-container" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono glow-text">
            {t.title}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {t.heading}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg font-medium drop-shadow-lg mb-12">
          {t.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="glass-card border border-[#9b87f5]/20 card-hover-effect overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-transparent opacity-20"></div>
          <CardHeader className="border-b border-[#9b87f5]/20">
            <CardTitle className="text-2xl font-bold text-white">{t.freePlan.title}</CardTitle>
            <p className="text-gray-300">{t.freePlan.subtitle}</p>
          </CardHeader>
          <CardContent className="pt-6 min-h-64">
            <ul className="space-y-4">
              {t.freePlan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-[#9b87f5] mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <a
              href="https://whop.com/expandmatrix-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-[#9b87f5] hover:bg-[#7E69AB] text-black font-medium text-center"
              >
                {t.freePlan.buttonText}
            </a>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="glass-card border border-matrix-green/20 card-hover-effect overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-matrix-green/10 to-transparent opacity-20"></div>
          <CardHeader className="border-b border-matrix-green/20">
            <CardTitle className="text-2xl font-bold text-white">{t.premiumPlan.title}</CardTitle>
            <p className="text-gray-300">{t.premiumPlan.subtitle}</p>
          </CardHeader>
          <CardContent className="pt-6 min-h-64">
            <ul className="space-y-4">
              {t.premiumPlan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CircleCheck className="h-5 w-5 text-matrix-green mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <a
              href="https://whop.com/em-premium-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-matrix-green hover:!bg-[#9b87f5] text-black font-medium text-center"
              >
              {t.premiumPlan.buttonText}
            </a>  
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Community;
