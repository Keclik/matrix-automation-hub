
import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  onComplete?: () => void;
  typewriter?: boolean;
  typewriterSpeed?: number;
}

const GlitchText = ({
  text,
  className = "",
  glitchInterval = 100,
  onComplete,
  typewriter = false,
  typewriterSpeed = 100,
}: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(typewriter ? "" : text);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!typewriter) return;

    if (displayIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[displayIndex]);
        setDisplayIndex(prev => prev + 1);
      }, typewriterSpeed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      // Add a small delay before calling onComplete to let the user read the text
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(completeTimer);
    }
  }, [displayIndex, text, typewriter, typewriterSpeed, onComplete]);

  useEffect(() => {
    if (typewriter) return;
    
    // Reduce glitch frequency for better readability
    const glitchTimer = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, glitchInterval * 2); // Double the interval to reduce frequency

    return () => clearInterval(glitchTimer);
  }, [glitchInterval, typewriter]);

  return (
    <span className={`relative inline-block ${className}`}>
      {displayText}
      {isGlitching && !typewriter && (
        <span className="absolute top-0 left-0 w-full text-matrix-green mix-blend-difference animate-text-glitch">
          {text}
        </span>
      )}
      {typewriter && displayIndex < text.length && (
        <span className="inline-block w-1 h-5 ml-1 bg-matrix-green animate-terminal-cursor"></span>
      )}
    </span>
  );
};

export default GlitchText;
