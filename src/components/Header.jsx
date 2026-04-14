import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Accueil', id: 'accueil', icon: '🏠' },
    { name: 'À propos', id: 'about', icon: '👤' },
    { name: 'Projets', id: 'projects', icon: '💼' },
    { name: 'Compétences', id: 'skills', icon: '⚡' },
    { name: 'Contact', id: 'contact', icon: '📧' }
  ];

  // Détecter le défilement pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      // Changer le style de la navbar après 50px de défilement
      setScrolled(window.scrollY > 50);
      
      // Détecter la section active pendant le défilement
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Bloquer le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo avec animation */}
          <div className="logo" onClick={() => scrollToSection('accueil')}>
            <div className="logo-icon">
              <FaLaptopCode />
            </div>
            <div className="logo-text">
              <span className="logo-first">Mon</span>
              <span className="logo-second">Portfolio</span>
            </div>
          </div>
          
          {/* Menu Desktop */}
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-name">{item.name}</span>
                {hoveredItem === item.id && <span className="nav-hover-effect"></span>}
              </a>
            ))}
          </div>
          
          {/* Bouton Menu Mobile */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* Overlay pour mobile */}
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,250,0.98) 100%);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .navbar.scrolled {
          background: rgba(255,255,255,0.98);
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          backdrop-filter: blur(15px);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo Styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .logo-icon {
          font-size: 1.8rem;
          color: #667eea;
          transition: all 0.3s ease;
        }

        .logo:hover .logo-icon {
          transform: rotate(5deg);
          color: #764ba2;
        }

        .logo-text {
          display: flex;
          gap: 0.2rem;
          font-size: 1.4rem;
          font-weight: 700;
        }

        .logo-first {
          color: #333;
          transition: color 0.3s ease;
        }

        .logo-second {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo:hover .logo-first {
          color: #667eea;
        }

        /* Desktop Menu */
        .nav-menu {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .nav-link {
          position: relative;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-weight: 500;
          color: #555;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .nav-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .nav-name {
          font-size: 0.95rem;
        }

        .nav-link:hover {
          color: #667eea;
          background: rgba(102, 126, 234, 0.1);
        }

        .nav-link.active {
          color: #667eea;
          background: linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%);
          font-weight: 600;
        }

        .nav-link.active .nav-icon {
          transform: scale(1.1);
        }

        .nav-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        /* Hamburger Menu */
        .hamburger {
          display: none;
          cursor: pointer;
          font-size: 1.5rem;
          color: #667eea;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .hamburger:hover {
          transform: rotate(90deg);
          color: #764ba2;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0.8rem 1.5rem;
          }

          .hamburger {
            display: block;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 320px;
            height: 100vh;
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -5px 0 30px rgba(0,0,0,0.1);
            z-index: 1000;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            width: 80%;
            justify-content: center;
            padding: 1rem;
            font-size: 1.1rem;
            animation: slideInFromRight 0.3s ease-out forwards;
            opacity: 0;
            transform: translateX(20px);
          }

          @keyframes slideInFromRight {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .nav-icon {
            font-size: 1.2rem;
          }

          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(3px);
            z-index: 999;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }

        /* Desktop hover effects */
        @media (min-width: 769px) {
          .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }

          .nav-link:hover::before {
            width: 80%;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .logo-text {
            font-size: 1.1rem;
          }
          
          .logo-icon {
            font-size: 1.4rem;
          }
          
          .nav-container {
            padding: 0.6rem 1rem;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .navbar,
          .nav-menu,
          .nav-link,
          .hamburger,
          .logo {
            transition: none;
          }
          
          .nav-menu.active {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}

export default Header;