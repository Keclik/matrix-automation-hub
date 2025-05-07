
import { useEffect, useState } from "react";
import { User, X } from "lucide-react";

interface NotificationPopupProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const NotificationPopup = ({ 
  message, 
  duration = 3000, 
  onClose 
}: NotificationPopupProps) => {
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      
      // Wait for exit animation to complete
      setTimeout(() => {
        onClose();
      }, 500);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`fixed bottom-4 right-4 max-w-xs w-full glass-card p-4 z-50 border-l-4 border-matrix-green shadow-lg ${
      isExiting ? "notification-fade-out" : "notification-fade-in"
    }`}>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full bg-matrix-green/10 flex items-center justify-center matrix-glow">
            <User className="w-5 h-5 text-matrix-green" />
          </div>
        </div>
        <div className="flex-1 pr-6">
          <p className="text-gray-300 text-sm">
            {message}
          </p>
        </div>
        <button 
          onClick={() => {
            setIsExiting(true);
            setTimeout(onClose, 500);
          }}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
