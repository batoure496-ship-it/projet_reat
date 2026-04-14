import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaSearch, 
  FaCode, 
  FaMobileAlt, 
  FaServer, 
  FaLaptopCode,
  FaHeart,
  FaStar,
  FaEye
} from 'react-icons/fa';

function Projects() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Application E-commerce",
      description: "Plateforme de vente en ligne complète avec panier, paiement sécurisé et dashboard admin. Intégration de Stripe pour les paiements et système de recommandation IA.",
      tech: ["React", "Node.js", "Mysql", "Stripe", "Redux", "Tailwind"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
      category: "fullstack",
      featured: true,
      stats: { stars: 45, views: 1200, likes: 89 },
      duration: "3 mois",
      team: "Solo"
    },
    {
      id: 2,
      title: "Dashboard Analytics Pro",
      description: "Tableau de bord interactif pour visualisation de données en temps réel. Graphiques dynamiques, export PDF et rapports personnalisables.",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL", "Socket.io"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      category: "frontend",
      featured: true,
      stats: { stars: 38, views: 980, likes: 67 },
      duration: "2 mois",
      team: "Équipe de 2"
    },
    {
      id: 3,
      title: "TaskFlow Mobile",
      description: "Application mobile de gestion de tâches avec synchronisation cloud, notifications push et collaboration en équipe.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      category: "mobile",
      featured: false,
      stats: { stars: 52, views: 1500, likes: 112 },
      duration: "4 mois",
      team: "Solo"
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "API RESTful robuste avec authentification JWT, rate limiting, documentation Swagger et tests unitaires complets.",
      tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Docker"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600",
      category: "backend",
      featured: true,
      stats: { stars: 63, views: 2100, likes: 145 },
      duration: "2.5 mois",
      team: "Équipe de 3"
    },
    {
      id: 5,
      title: "Portfolio 3D Interactive",
      description: "Portfolio immersif avec animations 3D, expérience utilisateur unique et performances optimisées.",
      tech: ["Three.js", "React", "GSAP", "WebGL"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600",
      category: "frontend",
      featured: false,
      stats: { stars: 41, views: 850, likes: 73 },
      duration: "1.5 mois",
      team: "Solo"
    },
    {
      id: 6,
      title: "ChatApp Real-time",
      description: "Application de chat en temps réel avec salons, messages privés, partage de fichiers et appels vidéo.",
      tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL", "WebRTC"],
      github: "https://github.com/",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      category: "fullstack",
      featured: false,
      stats: { stars: 57, views: 1750, likes: 98 },
      duration: "3 mois",
      team: "Équipe de 2"
    }
  ];

  // Animation d'apparition progressive
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filtrage des projets
  const filteredProjects = projects
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                 p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                 p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())));

  const categories = [
    { id: 'all', name: 'Tous', icon: <FaLaptopCode />, count: projects.length },
    { id: 'frontend', name: 'Frontend', icon: <FaCode />, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: <FaServer />, count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', icon: <FaLaptopCode />, count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt />, count: projects.filter(p => p.category === 'mobile').length }
  ];

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return <FaCode />;
      case 'backend': return <FaServer />;
      case 'fullstack': return <FaLaptopCode />;
      case 'mobile': return <FaMobileAlt />;
      default: return <FaCode />;
    }
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects-background">
        <div className="gradient-bg"></div>
        <div className="particles"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Mes créations</div>
          <h2 className="section-title">
            Projets récents
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Découvrez une sélection de mes projets les plus significatifs, 
            alliant innovation technique et design soigné
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="projects-controls">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher un projet, technologie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filters-container">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.icon}
                <span>{cat.name}</span>
                <span className="filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grille des projets */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${project.featured ? 'featured' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                    <div className="overlay-content">
                      <button className="view-btn">
                        <FaEye />
                        <span>Aperçu rapide</span>
                      </button>
                      <div className="project-stats-overlay">
                        <div className="stat">
                          <FaStar />
                          <span>{project.stats.stars}</span>
                        </div>
                        <div className="stat">
                          <FaHeart />
                          <span>{project.stats.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <FaStar />
                      <span>Projet vedette</span>
                    </div>
                  )}
                  <div className="category-badge">
                    {getCategoryIcon(project.category)}
                    <span>{categories.find(c => c.id === project.category)?.name}</span>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-label">Durée</span>
                      <span className="meta-value">{project.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Équipe</span>
                      <span className="meta-value">{project.team}</span>
                    </div>
                  </div>

                  <div className="tech-stack">
                    {project.tech.slice(0, 6).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="tech-tag more">+{project.tech.length - 6}</span>
                    )}
                  </div>
                  
                  <div className="project-stats">
                    <div className="stat-item">
                      <FaStar />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="stat-item">
                      <FaEye />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="stat-item">
                      <FaHeart />
                      <span>{project.stats.likes}</span>
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <FaGithub />
                      <span>Code source</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                      <FaExternalLinkAlt />
                      <span>Démo live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Aucun projet trouvé</h3>
            <p>Essayez avec d'autres termes de recherche ou catégories</p>
            <button onClick={() => { setFilter('all'); setSearchTerm(''); }} className="reset-btn">
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Call to action */}
        <div className="projects-cta">
          <p>Vous avez un projet en tête ?</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de votre projet
          </button>
        </div>
      </div>

      <style jsx>{`
        .projects {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        /* Arrière-plan animé */
        .projects-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.05) 0%, transparent 50%);
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(102, 126, 234, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: floatParticles 20s linear infinite;
        }

        @keyframes floatParticles {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
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

        /* Contrôles */
        .projects-controls {
          margin-bottom: 3rem;
        }

        .search-bar {
          position: relative;
          max-width: 400px;
          margin: 0 auto 2rem;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .search-input {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.5rem;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .filters-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: white;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn:hover {
          border-color: #667eea;
          color: #667eea;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-color: transparent;
          color: white;
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        .filter-count {
          background: rgba(0,0,0,0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
        }

        .filter-btn.active .filter-count {
          background: rgba(255,255,255,0.2);
        }

        /* Grille des projets */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .project-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.5s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .project-card.featured {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #667eea, #764ba2) border-box;
        }

        /* Image du projet */
        .project-image {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16/9;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-overlay.active {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
        }

        .view-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .view-btn:hover {
          transform: scale(1.05);
        }

        .project-stats-overlay {
          display: flex;
          justify-content: center;
          gap: 1rem;
          color: white;
        }

        .project-stats-overlay .stat {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .category-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        /* Informations du projet */
        .project-info {
          padding: 1.5rem;
        }

        .project-info h3 {
          font-size: 1.3rem;
          color: #333;
          margin-bottom: 0.8rem;
        }

        .project-info p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
          font-size: 0.9rem;
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .meta-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .meta-label {
          font-size: 0.7rem;
          color: #999;
          text-transform: uppercase;
        }

        .meta-value {
          font-size: 0.85rem;
          font-weight: 600;
          color: #667eea;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          color: #667eea;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .tech-tag.more {
          background: #f0f0f0;
          color: #666;
        }

        .project-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #666;
          font-size: 0.85rem;
        }

        .stat-item svg {
          color: #ffc107;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-links a {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .github-link {
          background: #333;
          color: white;
        }

        .github-link:hover {
          background: #24292e;
          transform: translateY(-2px);
        }

        .demo-link {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
        }

        .demo-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        /* Aucun résultat */
        .no-results {
          text-align: center;
          padding: 4rem;
          background: white;
          border-radius: 20px;
          margin-bottom: 3rem;
        }

        .no-results-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .no-results h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }

        .no-results p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .reset-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        }

        /* Call to Action */
        .projects-cta {
          text-align: center;
          padding: 3rem;
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          border-radius: 20px;
          margin-top: 2rem;
        }

        .projects-cta p {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 1rem;
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
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .projects {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .filters-container {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }

          .project-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .filter-btn span:not(.filter-count) {
            display: none;
          }

          .filter-btn {
            padding: 0.5rem;
          }

          .project-links {
            flex-direction: column;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .particles,
          .project-card,
          .project-image img,
          .filter-btn,
          .project-links a {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Projects;