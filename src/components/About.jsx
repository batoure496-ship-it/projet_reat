import React, { useEffect, useRef, useState } from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaUsers, 
  FaLaptopCode, 
  FaHeart, 
  FaGraduationCap,
  FaTrophy,
  FaGlobe
} from 'react-icons/fa';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);

  // Détecter quand la section est visible pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation des statistiques
  useEffect(() => {
    if (isVisible && statsRef.current) {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            stat.textContent = Math.ceil(current);
            setTimeout(updateCounter, 20);
          } else {
            stat.textContent = target;
          }
        };
        updateCounter();
      });
    }
  }, [isVisible]);

  const skills = [
    { name: 'React/Next.js', level: 90, icon: <FaCode /> },
    { name: 'Node.js/Python', level: 85, icon: <FaLaptopCode /> },
    { name: 'UI/UX Design', level: 80, icon: <FaMobileAlt /> },
    { name: 'Cloud (AWS/Azure)', level: 75, icon: <FaCloud /> }
  ];

  const experiences = [
    {
      year: '2023 - Présent',
      title: 'Lead Développeur Full Stack',
      company: 'Tech Innovators',
      description: 'Direction technique de projets web, mentorat d\'équipe, architecture de solutions complexes.'
    },
    {
      year: '2021 - 2023',
      title: 'Développeur Full Stack Senior',
      company: 'Digital Solutions',
      description: 'Développement d\'applications web scalables, optimisation des performances, intégration API.'
    },
    {
      year: '2019 - 2021',
      title: 'Développeur Frontend',
      company: 'Creative Agency',
      description: 'Création d\'interfaces utilisateur responsives, collaboration avec les designers, tests unitaires.'
    }
  ];

  const passions = [
    { icon: <FaHeart />, text: 'Innovation technologique' },
    { icon: <FaUsers />, text: 'Travail collaboratif' },
    { icon: <FaGraduationCap />, text: 'Apprentissage continu' },
    { icon: <FaTrophy />, text: 'Défis techniques' }
  ];

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-background">
        <div className="gradient-circle circle-1"></div>
        <div className="gradient-circle circle-2"></div>
        <div className="gradient-circle circle-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Qui suis-je ?</div>
          <h2 className="section-title">
            À propos de moi
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Découvrez mon parcours, mes compétences et ma passion pour le développement web
          </p>
        </div>

        <div className="about-content">
          {/* Introduction */}
          <div className="about-intro">
            <div className="intro-card">
              <div className="intro-text">
                <p className="intro-paragraph">
                  Passionné par le développement web depuis plus de <strong>2 ans</strong>, 
                  je transforme les idées en applications modernes, performantes et intuitives.
                </p>
                <p className="intro-paragraph">
                  Mon approche combine <strong>créativité</strong> et <strong>rigueur technique</strong> 
                  pour livrer des solutions qui répondent parfaitement aux besoins des utilisateurs 
                  et aux objectifs business.
                </p>
                <div className="passions-grid">
                  {passions.map((passion, index) => (
                    <div key={index} className="passion-item">
                      <div className="passion-icon">{passion.icon}</div>
                      <span>{passion.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="intro-quote">
                <div className="quote-icon">"</div>
                <p>Le code est un art, et chaque projet est une nouvelle toile à créer.</p>
                <div className="quote-author">- Batoure_dev</div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="stats-grid" ref={statsRef}>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number" data-target="2">0</div>
              <div className="stat-label">Projets réalisés</div>
              <div className="stat-trend">cette année</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💻</div>
              <div className="stat-number" data-target="2"></div>
              <div className="stat-label">Années d'expérience</div>
              <div className="stat-trend">Expertise confirmée</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">😊</div>
              <div className="stat-number" data-target="">0</div>
              <div className="stat-label">Clients satisfaits</div>
              <div className="stat-trend">recommandation</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number" data-target="15">0</div>
              <div className="stat-label">Pays couverts</div>
              <div className="stat-trend">Projets internationaux</div>
            </div>
          </div>

          {/* Compétences */}
          <div className="skills-section">
            <h3 className="section-subtitle-comp">Compétences techniques</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: `width 1s ease ${index * 0.1}s`
                      }}
                    >
                      <div className="skill-glow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expérience */}
          <div className="experience-section">
            <h3 className="section-subtitle-comp">
              <FaGlobe className="subtitle-icon" />
              Parcours professionnel
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-badge">
                    <div className="timeline-year">{exp.year}</div>
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-company">{exp.company}</div>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="about-cta">
            <p>Intéressé par une collaboration ?</p>
            <button 
              className="cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Travaillons ensemble
              <span className="cta-arrow">→</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        /* Arrière-plan animé */
        .about-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-circle {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          animation: float 20s infinite ease-in-out;
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: -100px;
          right: -100px;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          bottom: -50px;
          left: -50px;
          animation-delay: -5s;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          top: 50%;
          left: 30%;
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* En-tête */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .title-underline {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 3px;
        }

        .section-subtitle {
          color: #666;
          font-size: 1rem;
          max-width: 600px;
          margin: 1.5rem auto 0;
        }

        /* Introduction */
        .about-intro {
          margin-bottom: 4rem;
        }

        .intro-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .intro-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .intro-paragraph {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .intro-paragraph strong {
          color: #667eea;
        }

        .passions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }

        .passion-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem;
          background: linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05));
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .passion-item:hover {
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          transform: translateX(5px);
        }

        .passion-icon {
          font-size: 1.3rem;
          color: #667eea;
        }

        .intro-quote {
          margin-top: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 15px;
          position: relative;
          color: white;
        }

        .quote-icon {
          font-size: 3rem;
          position: absolute;
          top: 10px;
          left: 20px;
          opacity: 0.2;
          font-family: serif;
        }

        .intro-quote p {
          font-size: 1.1rem;
          font-style: italic;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .quote-author {
          font-size: 0.9rem;
          opacity: 0.9;
          text-align: right;
        }

        /* Statistiques */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #667eea;
          line-height: 1;
          margin: 0.5rem 0;
        }

        .stat-label {
          color: #666;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .stat-trend {
          font-size: 0.8rem;
          color: #4caf50;
          background: rgba(76, 175, 80, 0.1);
          display: inline-block;
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
        }

        /* Compétences */
        .skills-section, .experience-section {
          margin-bottom: 4rem;
        }

        .section-subtitle-comp {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .subtitle-icon {
          color: #667eea;
        }

        .skills-container {
          display: grid;
          gap: 1.5rem;
        }

        .skill-item {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .skill-icon {
          font-size: 1.2rem;
          color: #667eea;
        }

        .skill-name {
          flex: 1;
          font-weight: 500;
          color: #555;
        }

        .skill-percentage {
          color: #667eea;
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea, #764ba2);
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }

        .skill-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Timeline */
        .timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #667eea, #764ba2);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
        }

        .timeline-badge {
          position: absolute;
          left: -2rem;
          top: 0;
          transform: translateX(-50%);
        }

        .timeline-year {
          background: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #667eea;
          border: 2px solid #667eea;
          white-space: nowrap;
        }

        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          margin-left: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .timeline-content:hover {
          transform: translateX(5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .timeline-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.3rem;
        }

        .timeline-company {
          color: #667eea;
          font-weight: 500;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .timeline-description {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Call to Action */
        .about-cta {
          text-align: center;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          border-radius: 20px;
        }

        .about-cta p {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .cta-button {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102,126,234,0.4);
        }

        .cta-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(5px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .timeline {
            padding-left: 1rem;
          }

          .timeline-year {
            font-size: 0.7rem;
            padding: 0.2rem 0.6rem;
          }

          .about-cta {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .passions-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;