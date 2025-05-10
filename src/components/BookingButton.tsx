
import { Zap } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./ui/language-context";

interface BookingButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const BookingButton = ({ 
  className = "", 
  size = "md",
  onClick
}: BookingButtonProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const { language } = useLanguage();
  
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8"
  };

  const buttonText = {
    en: "BOOK YOUR FREE AI STRATEGY CALL NOW",
    cs: "REZERVUJTE SI AI STRATEGICKÝ HOVOR ZDARMA"
  };

  const handleClick = () => {
    // Open booking link or modal
    window.open("https://calendly.com/expandmatrix/45min", "_blank");
    if (onClick) onClick();
  };

  return (
    <button
      className={`matrix-button group relative overflow-hidden ${sizeClasses[size]} ${className} transition-all duration-700 animate-pulse-glow`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleClick}
    >
      <span className="flex items-center justify-center gap-2 relative z-10">
        {buttonText[language]} 
        <Zap 
          className={`w-5 h-5 transition-all duration-300 ${isHovering ? 'scale-125 text-white' : ''}`} 
          strokeWidth={2.5} 
        />
      </span>
      {isHovering && (
        <span className="absolute inset-0 bg-gradient-to-r from-matrix-green to-matrix-light-green opacity-90 transition-opacity duration-300"></span>
      )}
    </button>
  );
};

export default BookingButton;
