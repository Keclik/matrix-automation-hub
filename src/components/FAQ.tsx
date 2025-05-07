
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
      getAnswers: "Get answers to common questions about our AI solutions and implementation process.",
      moreQuestions: "Have more questions? We're here to help.",
      contactSupport: "Contact our support team"
    },
    cs: {
      questionsAnswers: "OTÁZKY & ODPOVĚDI",
      faqHeading: "Často kladené otázky",
      getAnswers: "Získejte odpovědi na běžné otázky o našich AI řešeních a procesu implementace.",
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
        "Virtually any business can benefit from our AI solutions. We've worked with e-commerce companies, SaaS platforms, healthcare providers, financial services, manufacturing firms, and many others. Our approach is to understand your specific challenges and build custom AI solutions that address your unique needs." : 
        "Prakticky jakýkoliv podnik může těžit z našich AI řešení. Spolupracovali jsme s e-commerce společnostmi, SaaS platformami, poskytovateli zdravotní péče, finančními službami, výrobními firmami a mnoha dalšími. Náš přístup spočívá v pochopení vašich specifických výzev a vytvoření vlastních AI řešení, která řeší vaše jedinečné potřeby."
    },
    {
      question: language === 'en' ? "How long does it take to implement an AI solution?" : 
                                   "Jak dlouho trvá implementace AI řešení?",
      answer: language === 'en' ? 
        "Implementation timelines vary based on the complexity of your requirements. Simple automations can be deployed in as little as 2-4 weeks, while more complex AI agents might take 6-12 weeks. During our initial strategy call, we'll provide a clearer timeline based on your specific project scope." : 
        "Časové rámce implementace se liší v závislosti na složitosti vašich požadavků. Jednoduché automatizace lze nasadit již za 2-4 týdny, zatímco složitější AI agenti mohou trvat 6-12 týdnů. Během našeho úvodního strategického hovoru vám poskytneme jasnější časový harmonogram na základě konkrétního rozsahu vašeho projektu."
    },
    {
      question: language === 'en' ? "Do I need technical expertise to use your AI solutions?" : 
                                   "Potřebuji technické znalosti k používání vašich AI řešení?",
      answer: language === 'en' ? 
        "Not at all. We design our AI solutions to be user-friendly and intuitive. Our team handles all the technical aspects of development and implementation. We'll provide training and support to ensure your team can effectively utilize the AI tools we build, regardless of their technical background." : 
        "Vůbec ne. Naše AI řešení navrhujeme tak, aby byla uživatelsky přívětivá a intuitivní. Náš tým se stará o všechny technické aspekty vývoje a implementace. Poskytneme školení a podporu, abychom zajistili, že váš tým může efektivně využívat AI nástroje, které vytvoříme, bez ohledu na jejich technické zázemí."
    },
    {
      question: language === 'en' ? "What kind of ROI can I expect from implementing AI automation?" : 
                                   "Jaký ROI mohu očekávat od implementace AI automatizace?",
      answer: language === 'en' ? 
        "Our clients typically see ROI in three key areas: time savings (automating tasks that previously took hours), cost reduction (lowering operational expenses), and revenue growth (improving customer experience and enabling scaling). Many clients report 300%+ ROI within the first year, with some achieving payback periods as short as 2-3 months." : 
        "Naši klienti obvykle vidí ROI ve třech klíčových oblastech: úspora času (automatizace úkolů, které dříve trvaly hodiny), snížení nákladů (snížení provozních výdajů) a růst příjmů (zlepšení zákaznické zkušenosti a umožnění škálování). Mnoho klientů hlásí 300%+ ROI během prvního roku, přičemž někteří dosahují návratnosti investic již za 2-3 měsíce."
    },
    {
      question: language === 'en' ? "How do you ensure the security and privacy of our data?" : 
                                   "Jak zajišťujete bezpečnost a soukromí našich dat?",
      answer: language === 'en' ? 
        "Security is paramount in our implementation process. We follow industry best practices for data encryption, access controls, and compliance with regulations like GDPR and CCPA. All AI solutions are built with privacy by design principles, and we can work within your existing security infrastructure." : 
        "Bezpečnost je prvořadá v našem implementačním procesu. Dodržujeme osvědčené postupy v oblasti šifrování dat, kontroly přístupu a dodržování předpisů jako GDPR a CCPA. Všechna AI řešení jsou vytvořena s principy ochrany soukromí již od návrhu a můžeme pracovat v rámci vaší stávající bezpečnostní infrastruktury."
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
