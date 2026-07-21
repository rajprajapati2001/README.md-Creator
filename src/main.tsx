import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SplashScreen } from './SplashScreen.tsx';
const img1 = "/assets/img1.jpg";
const img2 = "/assets/img2.jpg";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SplashScreen baseLogo={img1} revealLogo={img2} duration={3000} />
    <App />
  </StrictMode>,
);
