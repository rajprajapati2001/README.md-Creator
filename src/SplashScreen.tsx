import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  baseLogo: string;
  revealLogo: string;
  duration?: number; // Total animation time before removal (default: 3000ms)
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Automatically unmount/hide after the duration finishes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Clean up timer if the component unmounts early
    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
<div className="splash-screen">
  <div className="logo-wrapper">
    <img alt="Base Logo" className="logo base-logo" />
    <img alt="Shadow Logo" className="logo reveal-logo" />
  </div>
</div>
  );
};