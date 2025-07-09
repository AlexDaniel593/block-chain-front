import './LegalPage.css';

export const LegalPage = ({ type = 'privacy' }) => {
    const getContent = () => {
        switch (type) {
            case 'privacy':
                return {
                    title: 'Política de Privacidad',
                    sections: [
                        {
                            title: 'Información que recopilamos',
                            content: 'Recopilamos información que nos proporcionas directamente, como cuando creas una cuenta, realizas transacciones o te comunicas con nosotros.'
                        },
                        {
                            title: 'Cómo usamos tu información',
                            content: 'Utilizamos la información para operar, mantener y mejorar nuestros servicios, procesar transacciones y comunicarnos contigo.'
                        },
                        {
                            title: 'Compartir información',
                            content: 'No vendemos, comercializamos ni transferimos tu información personal a terceros sin tu consentimiento, excepto en los casos descritos en esta política.'
                        },
                        {
                            title: 'Seguridad',
                            content: 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal.'
                        }
                    ]
                };
            case 'terms':
                return {
                    title: 'Términos y Condiciones',
                    sections: [
                        {
                            title: 'Aceptación de términos',
                            content: 'Al acceder y usar BlockChain App, aceptas cumplir con estos términos y condiciones.'
                        },
                        {
                            title: 'Uso del servicio',
                            content: 'Puedes usar nuestro servicio para fines legales únicamente. No puedes usar el servicio para actividades fraudulentas o ilegales.'
                        },
                        {
                            title: 'Cuenta de usuario',
                            content: 'Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de todas las actividades que ocurran en tu cuenta.'
                        },
                        {
                            title: 'Limitación de responsabilidad',
                            content: 'BlockChain App no será responsable de daños indirectos, incidentales, especiales o consecuentes.'
                        }
                    ]
                };
            case 'cookies':
                return {
                    title: 'Política de Cookies',
                    sections: [
                        {
                            title: '¿Qué son las cookies?',
                            content: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.'
                        },
                        {
                            title: 'Cómo usamos las cookies',
                            content: 'Utilizamos cookies para mejorar tu experiencia, recordar tus preferencias y analizar el uso de nuestro sitio.'
                        },
                        {
                            title: 'Tipos de cookies',
                            content: 'Usamos cookies esenciales, de rendimiento, funcionales y de marketing para diferentes propósitos.'
                        },
                        {
                            title: 'Control de cookies',
                            content: 'Puedes controlar y eliminar las cookies a través de la configuración de tu navegador.'
                        }
                    ]
                };
            default:
                return {
                    title: 'Información Legal',
                    sections: [
                        {
                            title: 'Información general',
                            content: 'Esta página contiene información legal importante sobre el uso de BlockChain App.'
                        }
                    ]
                };
        }
    };

    const content = getContent();

    return (
        <div className="legal-page">
            <div className="hero-section">
                <h1 className="hero-title">{content.title}</h1>
                <p className="hero-subtitle">
                    Última actualización: 8 de julio de 2025
                </p>
            </div>
            
            <div className="legal-content">
                <div className="legal-sections">
                    {content.sections.map((section, index) => (
                        <div key={index} className="legal-section">
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </div>
                    ))}
                    
                    <div className="contact-info">
                        <h2>Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política, por favor contáctanos en:
                        </p>
                        <ul>
                            <li>Email: legal@blockchainapp.com</li>
                            <li>Teléfono: +593 99 123 4567</li>
                            <li>Dirección: Av. Universitaria 123, Quito, Ecuador</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
