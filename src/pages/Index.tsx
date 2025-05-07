
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyAutomate from "../components/WhyAutomate";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Community from "../components/Community";
import CTASection from "../components/CTASection";
import NotificationPopup from "../components/NotificationPopup";
import { useLanguage } from "../components/ui/language-context";

const Index = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const { language } = useLanguage();
  
  // Add section visibility states
  const [showTestimonials, setShowTestimonials] = useState(true);
  
  useEffect(() => {
    // Show random notifications with significantly longer intervals
    const names = {
      en: ["John", "Lisa", "Robert", "Emma", "David", "Sophia", "Michael", "Sarah"],
      cs: ["Jan", "Lucie", "Tomáš", "Eva", "Petr", "Karolína", "Jiří", "Marie"]
    };
    
    const cities = {
      en: ["New York", "San Francisco", "Chicago", "Miami", "Seattle", "Austin", "Denver", "Boston"],
      cs: ["Prahy", "Brna", "Ostravy", "Plzně", "Olomouce", "Liberce", "Českých Budějovic", "Hradce Králové"]
    };
    
    const actions = {
      en: [
        "just booked a call",
        "saved 20 hours per week with our AI automation",
        "increased sales by 230% using our AI agents",
        "eliminated manual data entry with our solutions",
        "automated their customer support with AI"
      ],
      cs: [
        "právě si rezervoval/a hovor",
        "ušetřil/a 20 hodin týdně pomocí naší AI automatizace",
        "zvýšil/a prodeje o 230% díky našim AI agentům",
        "eliminoval/a ruční zadávání dat díky našim řešením",
        "automatizoval/a zákaznickou podporu s AI"
      ]
    };
    
    const showRandomNotification = () => {
      // Choose names and cities based on current language
      const currentNames = names[language];
      const currentCities = cities[language];
      const currentActions = actions[language];
      
      const name = currentNames[Math.floor(Math.random() * currentNames.length)];
      const city = currentCities[Math.floor(Math.random() * currentCities.length)];
      const action = currentActions[Math.floor(Math.random() * currentActions.length)];
      
      const message = language === 'en' 
        ? `${name} from ${city} ${action}`
        : `${name} z ${city} ${action}`;
      
      setNotification(message);
      
      // Significantly increased interval between notifications (2-3 minutes)
      setTimeout(() => {
        setNotification(null);
        const nextDelay = 120000 + Math.random() * 60000; // 2-3 minutes
        setTimeout(showRandomNotification, nextDelay);
      }, 5000); // Show notification for 5 seconds
    };
    
    // Initial delay before showing first notification (60 seconds)
    const initialTimer = setTimeout(showRandomNotification, 60000);
    
    return () => clearTimeout(initialTimer);
  }, [language]);
  
  return (
    <Layout>
      <Hero />
      <WhyAutomate />
      <Services />
      <HowItWorks />
      {/*showTestimonials && <Testimonials />*/}
      <FAQ />
      <Community />
      <CTASection />
      
      {notification && (
        <NotificationPopup 
          message={notification}
          duration={5000}
          onClose={() => setNotification(null)}
        />
      )}
    </Layout>
  );
};

export default Index;
