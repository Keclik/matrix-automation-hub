
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "./ui/language-context";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen, delay }: FAQItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

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

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`mb-4 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <button
        className="w-full text-left p-4 flex justify-between items-center glass-card hover:border-matrix-green/40 transition-colors duration-300"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-matrix-green w-5 h-5" />
        ) : (
          <ChevronDown className="text-matrix-green w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-black bg-opacity-70 border border-matrix-green/20 mt-1 rounded-lg animate-accordion-down">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const translations = {
    en: {
      questionsAnswers: "QUESTIONS & ANSWERS",
      faqHeading: "Frequently Asked Questions",
      getAnswers: "Find answers to common questions about our AI solutions and implementation process.",
      moreQuestions: "Have more questions? We're here to help.",
      contactSupport: "Contact our support team"
    },
    cs: {
      questionsAnswers: "OTÁZKY & ODPOVĚDI",
      faqHeading: "Často kladené otázky",
      getAnswers: "Získejte odpovědi na nejčastější dotazy o našich AI řešeních a implementaci.",
      moreQuestions: "Máte další otázky? Jsme tu, abychom vám pomohli.",
      contactSupport: "Kontaktujte náš tým podpory"
    }
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

  const faqItems = [
    {
      question: language === 'en' ? "What types of businesses can benefit from your AI automation?" : 
                                   "Jaké typy podniků mohou těžit z vaší AI automatizace?",
      answer: language === 'en' ? 
        "Our AI solutions support e-commerce companies, SaaS platforms, healthcare providers, financial services, manufacturers, and more. We tailor each solution to your unique needs and challenges." : 
        "Naše AI řešení pomáhají e-commerce firmám, SaaS platformám, poskytovatelům zdravotní péče, finančním službám, výrobním podnikům a mnoha dalším. Přizpůsobujeme je vašim jedinečným potřebám a výzvám."
    },
    {
      question: language === 'en' ? "How long does it take to implement an AI solution?" : 
                                   "Jak dlouho trvá implementace AI řešení?",
      answer: language === 'en' ? 
        "Implementation time depends on complexity. Simple automations can be deployed in 2–4 weeks, while advanced AI agents may take 6–12 weeks. We provide a detailed timeline after your initial consultation." : 
        "Doba implementace závisí na složitosti. Jednoduché automatizace nasazujeme za 2–4 týdny, pokročilejší AI agenti vyžadují 6–12 týdnů. Přesný harmonogram vám poskytneme po úvodní konzultaci."
    },
    {
      question: language === 'en' ? "Do I need technical expertise to use your AI solutions?" : 
                                   "Potřebuji technické znalosti k používání vašich AI řešení?",
      answer: language === 'en' ? 
        "No. Our solutions are designed to be user-friendly and intuitive. Our team handles all technical aspects. We provide training and support so your team can effectively use the AI tools we build." : 
        "Ne. Naše řešení jsou navržena uživatelsky přívětivě a intuitivně. Technické aspekty zajistí náš tým. Poskytujeme školení a podporu, aby vaše firma mohla AI snadno využívat."
    },
    {
      question: language === 'en' ? "What systems and tools do you use?" : 
                                   "Jaké systémy a nástroje používáte?",
      answer: language === 'en' ? 
        "We work with trusted platforms like n8n, Make.com, Zapier, and others. We select the best tools based on your needs to ensure efficient integration and automation." : 
        "Pracujeme s osvědčenými platformami jako n8n, Make.com, Zapier a dalšími. Vybíráme nástroje na základě vašich potřeb, aby integrace a automatizace byla co nejefektivnější."
    },
    {
      question: language === 'en' ? "How do you ensure the security and privacy of our data?" : 
                                   "Jak zajišťujete bezpečnost a soukromí našich dat?",
      answer: language === 'en' ? 
        "Security is a top priority. We follow best practices in data encryption, access control, and comply with regulations like GDPR and CCPA. Our solutions are built with privacy protection from the ground up." : 
        "Bezpečnost je pro nás prioritou. Dodržujeme standardy šifrování dat, přístupu a předpisy jako GDPR a CCPA. Naše řešení jsou od začátku navržena s důrazem na ochranu soukromí."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const t = translations[language];

  return (
    <div id="faq" className="section-container" ref={sectionRef}>
      <div 
        className={`mb-12 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="flex justify-center mb-2">
          <span className="px-4 py-1 bg-matrix-green/10 rounded-full text-matrix-green text-sm font-mono">
            {t.questionsAnswers}
          </span>
        </div>
        <h2 className="section-title text-gradient">
          {t.faqHeading}
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto text-lg">
          {t.getAnswers}
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggleOpen={() => toggleFAQ(index)}
            delay={index * 100}
          />
        ))}
      </div>
      
      <div 
        className={`mt-12 text-center transition-all duration-700 ease-out delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <p className="text-gray-300 mb-6">
          {t.moreQuestions}
        </p>
        <a 
          href="mailto:info@expandmatrix.com" 
          className="inline-flex items-center text-matrix-green hover:text-matrix-light-green transition-colors duration-300"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {t.contactSupport}
        </a>
      </div>
    </div>
  );
};

export default FAQ;
