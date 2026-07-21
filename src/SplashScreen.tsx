import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

// Import all 4 images so the bundler includes them in the build
const img1 = '../public/assets/img1.jpg';
const img2 = '../public/assets/img2.jpg';
const imgD1 = '../public/assets/img-d1.jpg';
const imgD2 = '../public/assets/img-d2.jpg';

interface SplashScreenProps {
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div
        className="logo-wrapper"
        style={{
          '--img1': `url(${img1})`,
          '--img2': `url(${img2})`,
          '--imgD1': `url(${imgD1})`,
          '--imgD2': `url(${imgD2})`,
        } as React.CSSProperties}
      >
        <img alt="Base Logo" className="logo base-logo" />
        <img alt="Shadow Logo" className="logo reveal-logo" />
      </div>
    </div>
  );
};