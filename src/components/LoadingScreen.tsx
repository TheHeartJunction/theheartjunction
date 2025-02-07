
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onLoadComplete();
    }, 3000); // 3 seconds total animation

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-32 h-32">
        {/* Left thread */}
        <div className="absolute w-1 h-20 left-8 top-0 origin-bottom animate-thread-left">
          <div className="w-full h-full bg-gradient-to-b from-heart-200 to-heart-300 rounded-full" />
        </div>
        
        {/* Right thread */}
        <div className="absolute w-1 h-20 right-8 top-0 origin-bottom animate-thread-right">
          <div className="w-full h-full bg-gradient-to-b from-heart-200 to-heart-300 rounded-full" />
        </div>
        
        {/* Heart container */}
        <div className="absolute inset-0 flex items-center justify-center animate-heart-appear">
          <div className="relative w-16 h-16 animate-heart-pulse">
            {/* Heart shape using pseudo-elements */}
            <div className="absolute w-8 h-12 bg-heart-300 rounded-t-full left-4" />
            <div className="absolute w-8 h-12 bg-heart-300 rounded-t-full right-4" />
            <div className="absolute w-16 h-8 bg-heart-300 bottom-0" />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-heart-300 filter blur-xl opacity-50 animate-glow" />
          </div>
        </div>
      </div>
    </div>
  );
};
