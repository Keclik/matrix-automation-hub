
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import GlitchText from "./GlitchText";
import BookingButton from "./BookingButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "./ui/language-context";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: 'en' | 'cs') => {
    setLanguage(lang);
  };

  // Upravené odkazy pro hlavní navigaci - "Služby" odkazuje na sekci služeb na hlavní stránce
  const navLinks = [
    { 
      name: language === 'en' ? "Services" : "Služby", 
      href: "#services",
      isDropdown: true,
      subItems: [
        { name: language === 'en' ? "AI Business Automation" : "AI Automatizace Byznysu", href: "/ai-automatizace" },
        { name: language === 'en' ? "AI Agents" : "AI Agenti", href: "/ai-agents" },
        { name: language === 'en' ? "AI Training" : "AI Školení", href: "/ai-training" },
      ]
    },
    { name: language === 'en' ? "Why Use AI?" : "Proč využít AI?", href: "#why-automate" },
    { name: language === 'en' ? "Process" : "Proces", href: "#how-it-works" },
    { name: language === 'en' ? "FAQ" : "Časté otázky", href: "#faq" },
    { name: language === 'en' ? "" : "Komunita", href: "#community" },
  ];

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle navigation to make sure we go to home page when clicking on anchor links from subpages
  const handleNavigation = (href: string) => {
    closeMenu();
    // Pokud odkaz začíná na # a nejsme na hlavní stránce, přesměrovat na hlavní stránku s kotevním odkazem
    if (location.pathname !== "/" && href.startsWith('/#')) {
      window.location.href = href;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-matrix-green/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GlitchText 
                text="EXPAND MATRIX" 
                className="text-matrix-green font-mono font-bold text-lg sm:text-xl" 
                glitchInterval={3000}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => 
              link.isDropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-white hover:text-matrix-green transition-colors duration-300 focus:outline-none">
                    <Link 
                      to={link.href} 
                      className="cursor-pointer"
                      onClick={(e) => {
                        if (link.href.startsWith('/#')) {
                          e.preventDefault();
                          handleNavigation(link.href);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.subItems?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          to={subItem.href} 
                          className="cursor-pointer w-full"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-matrix-green transition-colors duration-300"
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      handleNavigation(link.href);
                    }
                  }}
                >
                  {link.name}
                </a>
              )
            )}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-matrix-green transition-colors duration-300">
                <Globe className="h-5 w-5 mr-1" />
                <span>{language === 'en' ? 'EN' : 'CS'}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem 
                  onClick={() => changeLanguage('en')}
                  className={language === 'en' ? 'bg-matrix-green/20' : ''}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => changeLanguage('cs')}
                  className={language === 'cs' ? 'bg-matrix-green/20' : ''}
                >
                  Čeština
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Desktop booking button */}
            <BookingButton size="sm" className="animate-pulse-glow" />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-matrix-green hover:text-matrix-light-green"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - zjednoduším strukturu pro menu "Služby" */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 my-2 animate-fade-in-up">
          <div className="py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-center text-white hover:text-matrix-green hover:bg-matrix-green/10 transition-colors duration-300"
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavigation(link.href);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Selector in Mobile Menu */}
            <div className="px-4 py-3 flex justify-center">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 mx-1 rounded ${language === 'en' 
                  ? 'bg-matrix-green text-black' 
                  : 'text-white border border-matrix-green/30'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('cs')}
                className={`px-3 py-1 mx-1 rounded ${language === 'cs' 
                  ? 'bg-matrix-green text-black' 
                  : 'text-white border border-matrix-green/30'}`}
              >
                CS
              </button>
            </div>
            
            {/* Book Call Button in Mobile Menu */}
            <div className="px-4 py-3">
              <BookingButton 
                size="sm" 
                className="w-full animate-pulse-glow" 
                onClick={closeMenu}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
