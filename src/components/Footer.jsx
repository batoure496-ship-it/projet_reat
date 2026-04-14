import React from 'react';
import { 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaArrowUp,
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaRegCopyright
} from 'react-icons/fa';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', id: 'accueil' },
    { name: 'À propos', id: 'about' },
    { name: 'Projets', id: 'projects' },
    { name: 'Compétences', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    { name: 'Développement Web', icon: <FaCode /> },
    { name: 'Applications Mobiles', icon: <FaMobileAlt /> },
    { name: 'Consultation Technique', icon: <FaShieldAlt /> }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub', color: '#333' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter', color: '#1da1f2' },
    { icon: <FaEnvelope />, url: 'mailto:contact@example.com', label: 'Email', color: '#ea4335' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="gradient-wave"></div>
        <div className="animated-dots"></div>
      </div>

      <div className="footer-container">
        {/* Bouton retour haut de page */}
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Retour en haut">
          <FaArrowUp />
          <span className="tooltip">Haut de page</span>
        </button>

        <div className="footer-content">
          {/* Colonne 1 - Branding */}
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon">
                <FaCode />
              </div>
              <div className="logo-text">
                <span>Mon</span>
                <span className="logo-highlight">Portfolio</span>
              </div>
            </div>
            <p className="footer-description">
              Créateur d'expériences web modernes et  Mobile innovantes. 
              Je transforme vos idées en solutions digitales performantes.
            </p>
            <div className="footer-tagline">
              <FaHeart className="heart-icon" />
              <span>Innovation & Créativité</span>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="footer-col">
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div className="footer-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-services">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Newsletter & Contact */}
          <div className="footer-col">
            <h3 className="footer-title">Restons connectés</h3>
            <p className="newsletter-text">
              Recevez mes actualités et projets
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Votre email" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                S'abonner
              </button>
            </form>
            
            <div className="social-section">
              <div className="social-title">Suivez-moi</div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="social-tooltip">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <FaRegCopyright className="copyright-icon" />
            <span>{currentYear} Mon Portfolio. Tous droits réservés.</span>
          </div>
          
          <div className="footer-legal">
            <a href="#" className="legal-link">Mentions légales</a>
            <span className="separator">|</span>
            <a href="#" className="legal-link">Politique de confidentialité</a>
            <span className="separator">|</span>
            <a href="#" className="legal-link">CGU</a>
          </div>
          
          <div className="footer-credit">
            Fait avec <FaHeart className="credit-heart" /> au Niger
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #ffffff;
          padding: 4rem 0 2rem;
          overflow: hidden;
        }

        /* Arrière-plan animé */
        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
        }

        .animated-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: moveDots 20s linear infinite;
        }

        @keyframes moveDots {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }

        .footer-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Bouton retour haut */
        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          z-index: 1000;
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
        }

        .tooltip {
          position: absolute;
          right: 60px;
          background: #333;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 5px;
          font-size: 0.8rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .scroll-to-top:hover .tooltip {
          opacity: 1;
        }

        /* Footer Content */
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* Logo */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          font-size: 2rem;
          color: #667eea;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .logo-highlight {
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .footer-tagline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.85rem;
        }

        .heart-icon {
          color: #ff6b6b;
          animation: heartbeat 1.5s ease infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        /* Footer Titles */
        .footer-title {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 3px;
        }

        /* Footer Links */
        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          padding: 0;
        }

        .footer-link:hover {
          color: #667eea;
          transform: translateX(5px);
        }

        /* Services */
        .footer-services {
          list-style: none;
          padding: 0;
        }

        .footer-services li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .footer-services li:hover {
          transform: translateX(5px);
          color: #667eea;
        }

        .service-icon {
          font-size: 1.1rem;
          color: #667eea;
        }

        /* Newsletter */
        .newsletter-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 0.7rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #667eea;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .newsletter-button {
          padding: 0.7rem 1.2rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .newsletter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Social Section */
        .social-section {
          margin-top: 1rem;
        }

        .social-title {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          margin-bottom: 0.8rem;
        }

        .social-links {
          display: flex;
          gap: 0.8rem;
        }

        .social-link {
          position: relative;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: var(--social-color);
          transform: translateY(-3px);
        }

        .social-tooltip {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #333;
          color: white;
          padding: 0.3rem 0.6rem;
          border-radius: 5px;
          font-size: 0.7rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .social-link:hover .social-tooltip {
          opacity: 1;
        }

        /* Footer Bottom */
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
        }

        .copyright {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .copyright-icon {
          font-size: 0.8rem;
        }

        .footer-legal {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .legal-link:hover {
          color: #667eea;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        .footer-credit {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .credit-heart {
          color: #ff6b6b;
          animation: heartbeat 1.5s ease infinite;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .footer-container {
            padding: 0 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            flex-wrap: wrap;
            justify-content: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-button {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 0 1rem;
          }

          .footer-legal {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }

          .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 40px;
            height: 40px;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .animated-dots,
          .scroll-to-top,
          .footer-link,
          .footer-services li,
          .social-link,
          .newsletter-button {
            animation: none;
            transition: none;
          }

          .heart-icon,
          .credit-heart {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;