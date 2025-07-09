import { useState } from 'react';
import './ContactPage.css';

export const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            // Simular envío de formulario
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSubmitMessage('¡Mensaje enviado exitosamente! Te responderemos pronto.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="hero-section">
                <h1 className="hero-title">Contacto</h1>
                <p className="hero-subtitle">
                    ¿Tienes preguntas? Nos encantaría escucharte
                </p>
            </div>
            
            <div className="contact-content">
                <div className="contact-info">
                    <h2>Información de Contacto</h2>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email</h3>
                            <p>info@blockchainapp.com</p>
                            <p>soporte@blockchainapp.com</p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">📱</div>
                            <h3>Teléfono</h3>
                            <p>+593 99 123 4567</p>
                            <p>+593 99 765 4321</p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">🏢</div>
                            <h3>Oficina</h3>
                            <p>Av. Universitaria 123</p>
                            <p>Quito, Ecuador</p>
                        </div>
                        
                        <div className="contact-card">
                            <div className="contact-icon">🕒</div>
                            <h3>Horario</h3>
                            <p>Lunes - Viernes: 8:00 - 18:00</p>
                            <p>Sábados: 9:00 - 14:00</p>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-section">
                    <h2>Envíanos un Mensaje</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {submitMessage && (
                            <div className={`form-message ${submitMessage.includes('exitosamente') ? 'success' : 'error'}`}>
                                {submitMessage}
                            </div>
                        )}
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre completo *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tu nombre completo"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Asunto *</label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona un asunto</option>
                                <option value="soporte">Soporte técnico</option>
                                <option value="consulta">Consulta general</option>
                                <option value="partnership">Asociación comercial</option>
                                <option value="feedback">Feedback</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Mensaje *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                placeholder="Escribe tu mensaje aquí..."
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>
                </div>
                
                <div className="faq-section">
                    <h2>Preguntas Frecuentes</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>¿Qué es BlockChain App?</h3>
                            <p>
                                BlockChain App es una plataforma segura y fácil de usar para gestionar 
                                criptomonedas, explorar blockchain y crear contratos inteligentes.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>¿Es seguro usar la plataforma?</h3>
                            <p>
                                Sí, utilizamos las mejores prácticas de seguridad incluyendo encriptación 
                                de extremo a extremo y autenticación de dos factores.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>¿Cómo puedo empezar?</h3>
                            <p>
                                Simplemente regístrate con tu email, verifica tu cuenta y comienza a 
                                explorar nuestras funcionalidades.
                            </p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>¿Ofrecen soporte 24/7?</h3>
                            <p>
                                Sí, nuestro equipo de soporte está disponible 24/7 para ayudarte con 
                                cualquier pregunta o problema.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
