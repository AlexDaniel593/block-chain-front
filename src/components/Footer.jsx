import './Footer.css';

export const Footer = ({ onNavigation }) => {
    const handleNavClick = (e, page) => {
        e.preventDefault();
        if (onNavigation) {
            onNavigation(page);
        }
        // Scroll to top when navigating
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">BlockChain App</h3>
                        <p className="footer-description">
                            Plataforma segura y moderna para explorar el mundo de blockchain
                            y las criptomonedas.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Enlaces</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a href="#blockchain" onClick={(e) => handleNavClick(e, 'dashboard')}>
                                    Blockchain
                                </a>
                            </li>
                            <li>
                                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                                    Acerca de
                                </a>
                            </li>
                            <li>
                                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Recursos</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="#documentation" onClick={(e) => handleNavClick(e, 'about')}>
                                    Documentación
                                </a>
                            </li>
                            <li>
                                <a href="#support" onClick={(e) => handleNavClick(e, 'contact')}>
                                    Soporte
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Conecta con nosotros</h4>
                        <div className="social-links">
                            <a href="mailto:info@blockchainapp.com" className="social-link">
                                <span className="social-icon">📧</span>
                                Email
                            </a>
                            <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">🐦</span>
                                Twitter
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">💼</span>
                                LinkedIn
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">📱</span>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-bottom-content">
                        <p>&copy; 2025 BlockChain App. Todos los derechos reservados.</p>
                        <div className="footer-bottom-links">
                            <a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')}>
                                Privacidad
                            </a>
                            <a href="#terms" onClick={(e) => handleNavClick(e, 'terms')}>
                                Términos
                            </a>
                            <a href="#cookies" onClick={(e) => handleNavClick(e, 'cookies')}>
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
