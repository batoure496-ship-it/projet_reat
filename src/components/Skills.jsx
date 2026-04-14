import React, { useEffect, useRef, useState } from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaJava,
  FaDatabase, FaGitAlt, FaDocker, FaAws,
  FaCss3Alt, FaHtml5, FaPhp, FaVuejs,
  FaAngular, FaFigma, FaJenkins, FaLinux
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb,
  SiPostgresql, SiTailwindcss, SiNextdotjs,
  SiExpress, SiRedux, SiGraphql, SiJest,
  SiCypress, SiKubernetes, SiTerraform
} from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      color: "#61DAFB",
      skills: [
        { name: "React", icon: <FaReact />, level: 90, experience: "4 ans", projects: 15 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 85, experience: "2 ans", projects: 8 },
        { name: "JavaScript", icon: <SiJavascript />, level: 90, experience: "5 ans", projects: 25 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80, experience: "2 ans", projects: 10 },
        { name: "Vue.js", icon: <FaVuejs />, level: 75, experience: "1.5 ans", projects: 5 },
        { name: "Redux", icon: <SiRedux />, level: 85, experience: "3 ans", projects: 12 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, experience: "3 ans", projects: 18 },
        { name: "HTML5/CSS3", icon: <FaHtml5 />, level: 95, experience: "5 ans", projects: 30 }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs />,
      color: "#68A063",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 88, experience: "4 ans", projects: 20 },
        { name: "Express.js", icon: <SiExpress />, level: 85, experience: "4 ans", projects: 18 },
        { name: "Python", icon: <FaPython />, level: 82, experience: "3 ans", projects: 12 },
        { name: "Java", icon: <FaJava />, level: 75, experience: "2 ans", projects: 8 },
        { name: "PHP", icon: <FaPhp />, level: 70, experience: "2 ans", projects: 6 },
        { name: "GraphQL", icon: <SiGraphql />, level: 75, experience: "1.5 ans", projects: 5 }
      ]
    },
    {
      title: "Base de données",
      icon: <FaDatabase />,
      color: "#47A248",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85, experience: "3 ans", projects: 15 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 82, experience: "3 ans", projects: 12 },
        { name: "MySQL", icon: <FaDatabase />, level: 80, experience: "4 ans", projects: 18 },
        { name: "Redis", icon: <FaDatabase />, level: 70, experience: "1.5 ans", projects: 6 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <FaDocker />,
      color: "#2496ED",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 92, experience: "5 ans", projects: 35 },
        { name: "Docker", icon: <FaDocker />, level: 75, experience: "2 ans", projects: 10 },
        { name: "AWS", icon: <FaAws />, level: 70, experience: "1.5 ans", projects: 7 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 65, experience: "1 an", projects: 4 },
        { name: "Jenkins", icon: <FaJenkins />, level: 68, experience: "1 an", projects: 5 },
        { name: "Linux", icon: <FaLinux />, level: 80, experience: "3 ans", projects: 20 }
      ]
    },
    {
      title: "Testing & Qualité",
      icon: <SiJest />,
      color: "#C21325",
      skills: [
        { name: "Jest", icon: <SiJest />, level: 80, experience: "2 ans", projects: 12 },
        { name: "Cypress", icon: <SiCypress />, level: 75, experience: "1.5 ans", projects: 8 },
        { name: "Unit Testing", icon: <SiJest />, level: 85, experience: "3 ans", projects: 20 }
      ]
    },
    {
      title: "Outils & Méthodologies",
      icon: <GiBrain />,
      color: "#FF6B6B",
      skills: [
        { name: "Agile/Scrum", icon: <GiBrain />, level: 88, experience: "4 ans", projects: 25 },
        { name: "Figma", icon: <FaFigma />, level: 75, experience: "2 ans", projects: 10 },
        { name: "JIRA", icon: <GiBrain />, level: 85, experience: "3 ans", projects: 20 },
        { name: "CI/CD", icon: <FaJenkins />, level: 75, experience: "2 ans", projects: 12 }
      ]
    }
  ];

  // Détecter quand la section est visible
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animer les barres de progression
  useEffect(() => {
    if (isVisible) {
      const timeouts = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          const timeout = setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [skill.name]: skill.level
            }));
          }, 300);
          timeouts[skill.name] = timeout;
        });
      });
      return () => {
        Object.values(timeouts).forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [isVisible, skillCategories]);

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const averageLevel = Math.round(
    skillCategories.reduce((acc, cat) => 
      acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-background">
        <div className="gradient-bg"></div>
        <div className="animated-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Expertise technique</div>
          <h2 className="section-title">
            Compétences & Technologies
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Un large éventail de technologies modernes pour créer des solutions innovantes
          </p>
        </div>

        {/* Statistiques globales */}
        <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-value">{totalSkills}+</div>
            <div className="stat-label">Technologies maîtrisées</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{averageLevel}%</div>
            <div className="stat-label">Niveau moyen</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">5+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-category"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-stats">
                  <span>{category.skills.length} technologies</span>
                </div>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: category.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-meta">
                          <span className="skill-experience">📅 {skill.experience}</span>
                          <span className="skill-projects">🚀 {skill.projects} projets</span>
                        </div>
                      </div>
                      <div className="skill-percentage">{skill.level}%</div>
                    </div>

                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{
                          width: isVisible ? `${animatedSkills[skill.name] || 0}%` : '0%',
                          backgroundColor: category.color
                        }}
                      >
                        <div className="skill-bar-glow"></div>
                      </div>
                    </div>

                    {skill.level >= 90 && (
                      <div className="skill-badge expert">Expert</div>
                    )}
                    {skill.level >= 80 && skill.level < 90 && (
                      <div className="skill-badge advanced">Avancé</div>
                    )}
                    {skill.level >= 70 && skill.level < 80 && (
                      <div className="skill-badge intermediate">Intermédiaire</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section des certifications */}
        <div className="certifications">
          <h3 className="certifications-title">
            <span>🏆</span> Certifications & Formations
          </h3>
          <div className="certifications-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <div className="cert-name">AWS Certified Developer</div>
              <div className="cert-date">2023</div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📜</div>
              <div className="cert-name">Meta Frontend Developer</div>
              <div className="cert-date">2022</div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🐳</div>
              <div className="cert-name">Docker Mastery</div>
              <div className="cert-date">2023</div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">⚛️</div>
              <div className="cert-name">React Advanced Patterns</div>
              <div className="cert-date">2023</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="skills-cta">
          <p>Vous avez besoin de compétences spécifiques pour votre projet ?</p>
          <button 
            className="cta-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discutons de vos besoins
          </button>
        </div>
      </div>

      <style jsx>{`
        .skills {
          position: relative;
          padding: 6rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          overflow: hidden;
        }

        /* Arrière-plan animé */
        .skills-background {
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

        .animated-circles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));
          animation: float 15s infinite ease-in-out;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -100px;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 50px;
          left: -50px;
          animation-delay: -5s;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 20%;
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
          margin-bottom: 3rem;
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

        /* Statistiques globales */
        .skills-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          min-width: 150px;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          color: #666;
          font-size: 0.85rem;
          margin-top: 0.5rem;
        }

        /* Catégories */
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skill-category {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .category-icon {
          font-size: 2rem;
        }

        .category-title {
          flex: 1;
          font-size: 1.3rem;
          color: #333;
          margin: 0;
        }

        .category-stats {
          font-size: 0.8rem;
          color: #999;
        }

        /* Grille des compétences */
        .skills-grid {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .skill-item {
          position: relative;
          padding: 0.8rem;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          transform: translateX(5px);
          background: #f0f0f0;
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.8rem;
        }

        .skill-icon {
          font-size: 1.5rem;
        }

        .skill-info {
          flex: 1;
        }

        .skill-name {
          font-weight: 600;
          color: #333;
          margin-bottom: 0.2rem;
        }

        .skill-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.7rem;
          color: #999;
        }

        .skill-percentage {
          font-weight: 700;
          color: #667eea;
        }

        .skill-bar-container {
          position: relative;
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-out;
          position: relative;
          overflow: hidden;
        }

        .skill-bar-glow {
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

        .skill-badge {
          position: absolute;
          right: 0.8rem;
          top: 0.8rem;
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
        }

        .skill-badge.expert {
          background: linear-gradient(135deg, #f093fb, #f5576c);
          color: white;
        }

        .skill-badge.advanced {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
        }

        .skill-badge.intermediate {
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          color: white;
        }

        /* Certifications */
        .certifications {
          margin: 3rem 0;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05));
          border-radius: 20px;
        }

        .certifications-title {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .cert-card {
          background: white;
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .cert-icon {
          font-size: 2rem;
        }

        .cert-name {
          flex: 1;
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        .cert-date {
          color: #667eea;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Call to Action */
        .skills-cta {
          text-align: center;
          padding: 2rem;
          background: white;
          border-radius: 20px;
          margin-top: 2rem;
        }

        .skills-cta p {
          font-size: 1.1rem;
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
        @media (max-width: 1024px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-card {
            min-width: auto;
          }

          .skill-meta {
            flex-direction: column;
            gap: 0.2rem;
          }

          .skill-badge {
            position: static;
            margin-top: 0.5rem;
            display: inline-block;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }

          .skill-header {
            flex-wrap: wrap;
          }

          .skill-percentage {
            margin-left: auto;
          }
        }

        /* Accessibilité */
        @media (prefers-reduced-motion: reduce) {
          .animated-circles,
          .skill-bar,
          .skill-category,
          .cert-card {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;