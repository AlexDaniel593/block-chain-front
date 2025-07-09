import { BlockchainInfo } from './BlockchainInfo';
import './AboutPage.css';

export const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="hero-section">
                <h1 className="hero-title">Acerca de BlockChain App</h1>
                <p className="hero-subtitle">
                    Conoce más sobre nuestra plataforma y la tecnología blockchain
                </p>
            </div>
            
            <div className="about-content">
                <div className="company-info">
                    <h2>Nuestra Misión</h2>
                    <p>
                        En BlockChain App, nos dedicamos a democratizar el acceso a la tecnología blockchain, 
                        proporcionando herramientas seguras, intuitivas y potentes para que cualquier persona 
                        pueda participar en el ecosistema de las criptomonedas y contratos inteligentes.
                    </p>
                    
                    <h2>¿Por qué elegir BlockChain App?</h2>

                    <ul className="features-list">
                        <li>Interfaz amigable y fácil de usar</li>
                        <li>Seguridad avanzada con cifrado de datos</li>
                        <li>Soporte para múltiples criptomonedas</li>
                        <li>Acceso a contratos inteligentes y DApps</li>
                        <li>Comunidad activa y soporte técnico</li>
                    </ul>

                </div>
                
                <div className="help-section">
                    <h2>Ayuda y Documentación</h2>
                    <p>
                        Te ayudamos a aprovechar al máximo BlockChain App. Aquí encontrarás todo lo que necesitas 
                        para comenzar y convertirte en un experto.
                    </p>
                    
                    <div className="help-grid">
                        <div className="help-card">
                            <div className="help-icon">🚀</div>
                            <h3>Cómo empezar</h3>
                            <p>
                                Crea tu cuenta, configura tu wallet y realiza tu primera transacción en minutos. 
                                Nuestra guía paso a paso te acompañará en todo el proceso.
                            </p>
                        </div>
                        
                        <div className="help-card">
                            <div className="help-icon">💰</div>
                            <h3>Gestión de Wallet</h3>
                            <p>
                                Aprende a administrar tus criptomonedas, ver tu portfolio, subir nuevas cadenas 
                                y configurar los niveles de seguridad según tus necesidades.
                            </p>
                        </div>
                        
                        <div className="help-card">
                            <div className="help-icon">🔐</div>
                            <h3>Seguridad</h3>
                            <p>
                                Configura los niveles de hash (1-3 ceros), entiende la importancia de la 
                                seguridad blockchain y protege tus activos digitales.
                            </p>
                        </div>
                        
                        <div className="help-card">
                            <div className="help-icon">📊</div>
                            <h3>Dashboard</h3>
                            <p>
                                Navega por tu panel de control, accede a tu perfil, gestiona tu wallet 
                                y personaliza la configuración de la aplicación.
                            </p>
                        </div>
                        
                        <div className="help-card">
                            <div className="help-icon">📁</div>
                            <h3>Subir Criptomonedas</h3>
                            <p>
                                Utiliza archivos JSON para agregar nuevas criptomonedas a tu wallet. 
                                Formato: {`{"name": "Bitcoin", "chain": "hash_value"}`}.
                            </p>
                        </div>
                        
                        <div className="help-card">
                            <div className="help-icon">🔗</div>
                            <h3>Blockchain Info</h3>
                            <p>
                                Explora información detallada sobre blockchain, cadenas de bloques, 
                                seguridad, descentralización y transparencia.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="team-section">
                    <h2>Nuestro Equipo</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src="/daniel.jpg" alt="Daniel Guaman" />
                            </div>
                            <h3>Daniel Guamán</h3>
                            <p className="member-role">Desarrollador Full Stack</p>
                            <p className="member-description">
                                Especialista en desarrollo web con experiencia en React y tecnologías blockchain.
                            </p>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src="/anabel.jpg" alt="Anabel Dávila" />
                            </div>
                            <h3>Anabel Dávila</h3>
                            <p className="member-role">Arquitecta de Soluciones</p>
                            <p className="member-description">
                                Experta en arquitectura de sistemas distribuidos y contratos inteligentes.
                            </p>
                        </div>
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src="/kevin.jpg" alt="Kevin Amaguaña" />
                            </div>
                            <h3>Kevin Amaguaña</h3>
                            <p className="member-role">Especialista en Seguridad Blockchain</p>
                            <p className="member-description">
                                Experto en criptografía y seguridad de redes blockchain, con enfoque en protocolos de consenso y validación de transacciones.
                            </p>
                        </div>
                        
                        <div className="team-member">
                            <div className="member-avatar">
                                <img src="/jairo.jpg" alt="Jairo Bonilla" />
                            </div>
                            <h3>Jairo Bonilla</h3>
                            <p className="member-role">Ingeniero de Infraestructura</p>
                            <p className="member-description">
                                Especialista en infraestructura de redes descentralizadas y optimización de sistemas blockchain para alto rendimiento.
                            </p>
                        </div>

                    </div>
                </div>
                
                <div className="mascot-section">
                    <h2>Conoce a Nuestra Mascota</h2>
                    <div className="mascot-container">
                        <div className="mascot-image">
                            <img src="/mascota.jpeg" alt="Mascota BlockChain App" />
                        </div>
                        <div className="mascot-content">
                            <h3>🚀 CryptoEspe</h3>
                            <p>
                                ¡Hola! Soy CryptoEspe, tu compañero digital en el mundo de las criptomonedas. 
                                Estoy aquí para guiarte en tu viaje por el ecosistema blockchain y ayudarte 
                                a descubrir todas las funcionalidades de nuestra aplicación.
                            </p>
                            <p>
                                Mi misión es hacer que la tecnología blockchain sea accesible y divertida 
                                para todos. Juntos exploraremos el fascinante mundo de las criptomonedas, 
                                la seguridad digital y las infinitas posibilidades que ofrece la descentralización.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
