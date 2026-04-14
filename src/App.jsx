import React, { useState, useEffect, Suspense, lazy } from 'react';
import './App.css'; // Importez les styles CSS depuis un fichier séparé

// Import lazy pour optimiser les performances (code splitting)
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Composant de chargement personnalisé
const LoadingSpinner = () => (
  <div className="loader-container">
    <div className="loader-wrapper">
      <div className="loader-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loader-logo">
        <div className="logo-animation">
          <span className="logo-icon">⚛️</span>
          <span className="logo-icon">💻</span>
          <span className="logo-icon">🚀</span>
        </div>
      </div>
      <div className="loader-text">
        <h2 className="loader-title">
          Mon<span className="highlight">Portfolio</span>
        </h2>
        <p className="loader-subtitle">Chargement des composants...</p>
      </div>
      <div className="loader-progress-container">
        <div className="loader-progress-bar">
          <div className="loader-progress-fill" style={{ width: '60%' }}>
            <div className="progress-glow"></div>
          </div>
        </div>
        <div className="loader-percentage">60%</div>
      </div>
      <div className="loader-tips">
        <div className="tip-icon">💡</div>
        <div className="tip-text">
          Ce portfolio est construit avec React et les technologies modernes !
        </div>
      </div>
    </div>
  </div>
);

// Composant d'erreur
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (error) => {
      console.error('Erreur capturée:', error);
      setHasError(true);
      setError(error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="error-container">
        <div className="error-content">
          <div className="error-icon">⚠️</div>
          <h1 className="error-title">Une erreur est survenue</h1>
          <p className="error-message">
            Nous rencontrons des difficultés techniques. Veuillez rafraîchir la page.
          </p>
          <button 
            className="error-button"
            onClick={() => window.location.reload()}
          >
            Rafraîchir la page
          </button>
        </div>
      </div>
    );
  }

  return children;
};

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // Animation de chargement progressive
  useEffect(() => {
    let interval;
    let timeout;

    if (loading) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 10;
        });
      }, 100);

      timeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setTimeout(() => {
            setShowLoader(false);
          }, 500);
        }, 500);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [loading]);

  // Préchargement des images critiques
  useEffect(() => {
    const preloadImages = [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Sauvegarder la position de scroll
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  if (showLoader && loading) {
    return (
      <div className="loader-container">
        <div className="loader-wrapper">
          <div className="loader-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
          <div className="loader-logo">
            <div className="logo-animation">
              <span className="logo-icon">⚛️</span>
              <span className="logo-icon">💻</span>
              <span className="logo-icon">🚀</span>
            </div>
          </div>
          
          <div className="loader-text">
            <h2 className="loader-title">
              Mon<span className="highlight">Portfolio</span>
            </h2>
            <p className="loader-subtitle">
              {progress < 30 && "Initialisation..."}
              {progress >= 30 && progress < 60 && "Chargement des composants..."}
              {progress >= 60 && progress < 90 && "Préparation de l'interface..."}
              {progress >= 90 && "Presque prêt..."}
            </p>
          </div>
          
          <div className="loader-progress-container">
            <div className="loader-progress-bar">
              <div 
                className="loader-progress-fill" 
                style={{ width: `${progress}%` }}
              >
                <div className="progress-glow"></div>
              </div>
            </div>
            <div className="loader-percentage">{Math.floor(progress)}%</div>
          </div>
          
          <div className="loader-tips">
            <div className="tip-icon">💡</div>
            <div className="tip-text">
              {progress < 30 && "Saviez-vous que ce portfolio est construit avec React ?"}
              {progress >= 30 && progress < 60 && "Chaque projet est unique et responsive !"}
              {progress >= 60 && progress < 90 && "N'hésitez pas à me contacter pour vos projets"}
              {progress >= 90 && "Préparez-vous à découvrir mon univers !"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="App">
          <a href="#main-content" className="skip-to-content">
            Passer au contenu principal
          </a>
          
          <Header />
          
          <main id="main-content">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          
          <Footer />
          
          <button 
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Retour en haut"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;