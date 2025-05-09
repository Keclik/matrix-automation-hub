import Layout from "../components/Layout";
import { useLanguage } from "../components/ui/language-context";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Privacy Policy",
      content: "This is the English version of the privacy policy. Here you can explain how data is handled..."
    },
    cs: {
      title: "Zásady ochrany osobních údajů",
      content: "Toto je česká verze zásad ochrany osobních údajů. Zde vysvětlíte, jak nakládáte s údaji..."
    }
  };

  const t = translations[language];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 px-6 text-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-gradient glow-text">{t.title}</h1>
        <p>{t.content}</p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
