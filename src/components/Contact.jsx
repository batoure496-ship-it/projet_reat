import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
  FaWhatsapp,
  FaTelegram
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false, message: '' });

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false, message: '' }));
        }, 5000);
      } else {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: 'Veuillez remplir tous les champs obligatoires.'
        });
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '+227 88 71 86 13',
      link: 'https://wa.me/22788718613',
      color: '#25D366',
      bgColor: 'rgba(37, 211, 102, 0.1)'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'contact@example.com',
      link: 'mailto:contact@example.com',
      color: '#EA4335',
      bgColor: 'rgba(234, 67, 53, 0.1)'
    },
    {
      icon: <FaTelegram />,
      title: 'Telegram',
      value: '@votre_username',
      link: 'https://t.me/votre_username',
      color: '#0088cc',
      bgColor: 'rgba(0, 136, 204, 0.1)'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      value: 'Niamey, Niger',
      link: null,
      color: '#667eea',
      bgColor: 'rgba(102, 126, 234, 0.1)'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub', color: '#333' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter', color: '#1da1f2' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-background">
        <div className="gradient-bg"></div>
        <div className="pattern-dots"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Me contacter</div>
          <h2 className="section-title">
            Restons en contact
            <div className="title-underline"></div>
          </h2>
          <p className="section-subtitle">
            Une question ? Un projet ? N'hésitez pas à me contacter, je serai ravi d'échanger avec vous !
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Informations de contact */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Informations de contact</h3>
              <p className="info-description">
                Je suis disponible pour des collaborations, des projets freelances ou simplement pour discuter de technologies.
              </p>
              
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon" style={{ background: info.bgColor, color: info.color }}>
                      {info.icon}
                    </div>
                    <div className="method-details">
                      <div className="method-title">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="method-value" target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <div className="method-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="availability">
                <div className="availability-header">
                  <FaClock className="availability-icon" />
                  <span>Disponibilité</span>
                </div>
                <div className="availability-hours">
                  <div>Lundi - Vendredi: 9h - 18h</div>
                  <div>Samedi: 10h - 14h</div>
                  <div className="response-time">⏱️ Délai de réponse: &lt; 24h</div>
                </div>
              </div>

              <div className="social-section">
                <div className="social-title">Retrouvez-moi sur</div>
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

          {/* Formulaire de contact */}
          <div className="contact-form-wrapper">
            <div className="form-card">
              <h3 className="form-title">Envoyez-moi un message</h3>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    Nom complet <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande de devis, collaboration, ..."
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message ici..."
                    rows="5"
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                {formStatus.message && (
                  <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                    {formStatus.submitted && <FaCheckCircle className="message-icon" />}
                    {formStatus.error && <span className="message-icon">⚠️</span>}
                    <span>{formStatus.message}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <FaSpinner className="spinner" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>

              <div className="form-footer">
                <p>* Champs obligatoires</p>
                <p>Je m'engage à répondre dans les 24 heures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;