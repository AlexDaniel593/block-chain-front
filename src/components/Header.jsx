import './Header.css';

export const Header = ({ user, onLogout, onNavigation, currentPage }) => {
    const handleNavClick = (e, page) => {
        e.preventDefault();
        onNavigation(page);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>BlockChain App</h1>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li>
                            <a 
                                href="#home" 
                                onClick={(e) => handleNavClick(e, 'home')}
                                className={currentPage === 'home' ? 'active' : ''}
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#blockchain" 
                                onClick={(e) => handleNavClick(e, 'dashboard')}
                                className={currentPage === 'dashboard' ? 'active' : ''}
                            >
                                Blockchain
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                onClick={(e) => handleNavClick(e, 'about')}
                                className={currentPage === 'about' ? 'active' : ''}
                            >
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={(e) => handleNavClick(e, 'contact')}
                                className={currentPage === 'contact' ? 'active' : ''}
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="user-section">
                    {user ? (
                        <div className="user-info">
                            <span className="welcome-message">¡Bienvenido, {user.name}!</span>
                            <button 
                                className="logout-btn" 
                                onClick={onLogout}
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="login-prompt">
                            <span>Inicia sesión para acceder</span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
