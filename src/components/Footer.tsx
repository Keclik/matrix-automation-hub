
import { useState } from "react";
import GlitchText from "./GlitchText";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "./ui/language-context";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      companyDescription: "Transforming businesses through cutting-edge AI automation and intelligent agents.",
      solutions: "Solutions",
      solutionsList: [
        "AI Automation",
        "AI Agents",
        "AI Training",
      ],
      company: "Company",
      companyLinks: [
        "Careers",
        "Contact"
      ],
      subscribe: "Subscribe",
      subscribeText: "Get the latest AI news and updates directly to your inbox.",
      emailPlaceholder: "Your email",
      subscribeButton: "Subscribe",
      subscribing: "...",
      privacyNote: "We respect your privacy. Unsubscribe at any time.",
      rightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy"
    },
    cs: {
      companyDescription: "Transformujeme podniky pomocí špičkové AI automatizace a inteligentních agentů.",
      solutions: "Řešení",
      solutionsList: [
        "AI Automatizace",
        "AI Agenti",
        "AI Školení",
      ],
      company: "Společnost",
      companyLinks: [
        "Kariéra",
        "Kontakt"
      ],
      subscribe: "Odběr novinek",
      subscribeText: "Získejte nejnovější AI zprávy a aktualizace přímo do vaší schránky.",
      emailPlaceholder: "Váš email",
      subscribeButton: "Odebírat",
      subscribing: "...",
      privacyNote: "Respektujeme vaše soukromí. Odběr můžete kdykoli zrušit.",
      rightsReserved: "Všechna práva vyhrazena.",
      privacyPolicy: "Zásady ochrany osobních údajů",
      termsOfService: "Obchodní podmínky",
      cookiePolicy: "Zásady používání cookies"
    }
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success(language === 'en' ? "Thank you for subscribing!" : "Děkujeme za přihlášení k odběru!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-matrix-dark-gray/90 border-t border-matrix-green/30 pt-16 pb-8 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <GlitchText 
              text="EXPAND MATRIX" 
              className="text-matrix-green font-mono font-bold text-xl mb-4 glow-text" 
              glitchInterval={3000}
            />
            <p className="text-gray-200 mb-6">
              {t.companyDescription}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@MatejVenclikAI" 
                className="text-gray-300 hover:text-matrix-green transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mat%C4%9Bj-vencl%C3%ADk/" 
                className="text-gray-300 hover:text-matrix-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/mvenclik.ai/" 
                className="text-gray-300 hover:text-matrix-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info@expandmatrix.com" 
                className="text-gray-300 hover:text-matrix-green transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg glow-text">{t.solutions}</h3>
            <ul className="space-y-2">
              {t.solutionsList.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-matrix-green hover:text-matrix-light-green transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg glow-text">{t.company}</h3>
            <ul className="space-y-2">
              {t.companyLinks.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-matrix-green hover:text-matrix-light-green transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg glow-text">{t.subscribe}</h3>
            <p className="text-matrix-green mb-4">
              {t.subscribeText}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                  className="bg-matrix-dark-gray border border-matrix-green/30 text-matrix-green px-3 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-matrix-green"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-matrix-green text-matrix-black px-4 py-2 rounded-r-md font-medium hover:bg-matrix-light-green transition-colors duration-300 animate-pulse-glow"
                >
                  {isSubmitting ? t.subscribing : t.subscribeButton}
                </button>
              </div>
              <p className="text-gray-400 text-xs">
                {t.privacyNote}
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-matrix-green/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-matrix-green text-sm mb-4 md:mb-0">
              &copy; {currentYear} Expand Matrix. {t.rightsReserved}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-matrix-green hover:text-matrix-light-green text-sm transition-colors duration-300">{t.privacyPolicy}</a>
              <a href="#" className="text-matrix-green hover:text-matrix-light-green text-sm transition-colors duration-300">{t.termsOfService}</a>
              <a href="#" className="text-matrix-green hover:text-matrix-light-green text-sm transition-colors duration-300">{t.cookiePolicy}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
