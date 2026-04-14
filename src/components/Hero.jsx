import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import heroImage from '../assets/hero.png';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const roles = ['Développeur Full Stack', 'Créateur d\'expériences web', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  // Effet de texte animé
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      const timeout = setTimeout(() => {
        setIsTypingComplete(false);
        setTypedText('');
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Implémentez le téléchargement du CV ici
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Chemin vers votre CV
    link.download = 'Mon_CV.pdf';
    link.click();
  };

  return (
    <section id="accueil" className="hero">
      <div className="hero-background">
        <div className="gradient-bg"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting-badge">
              <span className="wave-emoji">👋</span>
              <span>Bienvenue sur mon portfolio</span>
            </div>
            
            <h1 className="hero-title">
              <span className="greeting">Bonjour, je suis</span>
              <span className="name-highlight">BOUBACAR BATOURE HACHIMOU</span>
            </h1>
            
            <div className="typing-container">
              <span className="typing-prefix">👨‍💻 </span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">{isTypingComplete ? ' ' : '|'}</span>
            </div>
            
            <p className="hero-description">
              Je transforme les idées en applications web innovantes et application mobile, 
              performantes et intuitives. Avec une passion pour le code propre 
              et les designs élégants.
            </p>
            
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">UDO</div>
                <div className="stat-label">licence en genie logiciel</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">3 ANS</div>
                <div className="stat-label">D'etudes</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">227</div>
                <div className="stat-label">Universite Technologique de Dosso(Niger)</div>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                <span>Me contacter</span>
                <FaArrowRight className="btn-icon" />
              </button>
              <button className="btn-secondary" onClick={scrollToProjects}>
                Voir mes projets
              </button>
              <button className="btn-outline" onClick={downloadResume}>
                <FaDownload />
                <span>Télécharger CV</span>
              </button>
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link github"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link twitter"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="batoure496@gmail.com"
                className="social-link email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="image-border"></div>
              <img src={heroImage} alt="John Doe - Développeur Full Stack" />
              <div className="image-overlay">
                <div className="tech-stack">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Python</span>
                </div>
              </div>
            </div>
            <div className="floating-card experience-card">
              <div className="card-icon">⭐</div>
              <div className="card-content">
                <div className="card-value">12</div>
                <div className="card-label">Note moyenne</div>
              </div>
            </div>
            <div className="floating-card projects-card">
              <div className="card-icon">🚀</div>
              <div className="card-content">
                <div className="card-value">2+</div>
                <div className="card-label">Projets</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        /* Arrière-plan animé */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
        }

        .animated-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          right: -50px;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 20%;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .hero-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Texte */
        .hero-text {
          animation: fadeInUp 0.8s ease-out;
        }

        .greeting-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(102, 126, 234, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          color: #667eea;
          font-weight: 500;
        }

        .wave-emoji {
          animation: wave 2s infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        .hero-title {
          margin-bottom: 1rem;
        }

        .greeting {
          display: block;
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .name-highlight {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .typing-container {
          font-size: 1.8rem;
          font-weight: 600;
          color: #333;
          margin: 1rem 0;
          min-height: 3.5rem;
        }

        .typed-text {
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1.8rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          margin-left: 4px;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
          margin: 1.5rem 0;
          max-width: 500px;
        }

        /* Statistiques */
        .stats-container {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 2rem 0;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 20px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: #667eea;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #666;
          margin-top: 0.3rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, #ddd, transparent);
        }

        /* Boutons */
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary, .btn-outline {
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          font-size: 0.95rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
        }

        .btn-outline {
          background: transparent;
          color: #666;
          border: 2px solid #ddd;
        }

        .btn-outline:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        /* Réseaux sociaux */
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #667eea;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .social-link:hover {
          transform: translateY(-3px);
          color: white;
        }

        .social-link.github:hover { background: #333; }
        .social-link.linkedin:hover { background: #0077b5; }
        .social-link.twitter:hover { background: #1da1f2; }
        .social-link.email:hover { background: #ea4335; }

        /* Image */
        .hero-image {
          position: relative;
          animation: fadeInRight 0.8s ease-out;
        }

        .image-wrapper {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .image-border {
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 33px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-wrapper:hover .image-border {
          opacity: 1;
        }

        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 30px;
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .image-wrapper:hover .image-overlay {
          transform: translateY(0);
        }

        .tech-stack {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .tech-stack span {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(5px);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
        }

        /* Cartes flottantes */
        .floating-card {
          position: absolute;
          background: white;
          padding: 0.8rem 1.2rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: float 3s infinite ease-in-out;
        }

        .experience-card {
          top: 20%;
          right: -20px;
          animation-delay: 0s;
        }

        .projects-card {
          bottom: 10%;
          left: -20px;
          animation-delay: -1.5s;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .card-value {
          font-size: 1.2rem;
          font-weight: 800;
          color: #667eea;
        }

        .card-label {
          font-size: 0.7rem;
          color: #666;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-text {
            order: 1;
          }

          .hero-image {
            order: 0;
            max-width: 500px;
            margin: 0 auto;
          }

          .name-highlight {
            font-size: 2.5rem;
          }

          .typing-container {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 4rem 1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .btn-primary, .btn-secondary, .btn-outline {
            justify-content: center;
          }

          .stats-container {
            gap: 1rem;
          }

          .stat-number {
            font-size: 1.3rem;
          }

          .floating-card {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .greeting {
            font-size: 1rem;
          }

          .name-highlight {
            font-size: 1.8rem;
          }

          .typing-container {
            font-size: 1rem;
          }

          .hero-description {
            font-size: 0.9rem;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;