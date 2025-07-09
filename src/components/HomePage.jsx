import { Login } from './Login';
import { BlockchainInfo } from './BlockchainInfo';
import './HomePage.css';

export const HomePage = ({ onLogin, isAuthenticated, showOnlyInfo = false }) => {
    const showLogin = !isAuthenticated && !showOnlyInfo;

    return (
        <div className="homepage">
            <div className="hero-section">
                <h1 className="hero-title">
                    {showOnlyInfo ? 'Acerca de Blockchain' : 'Bienvenido a BlockChain App'}
                </h1>
                <p className="hero-subtitle">
                    {showOnlyInfo 
                        ? 'Conoce más sobre la tecnología blockchain y sus aplicaciones'
                        : 'Descubre el futuro de las transacciones digitales seguras'
                    }
                </p>
            </div>
            
            <div className={`content-section ${showLogin ? 'with-login' : 'info-only'}`}>
                {showLogin && (
                    <div className="login-section">
                        <Login onLogin={onLogin} />
                    </div>
                )}
                
                <div className="info-section">
                    <BlockchainInfo />
                </div>
            </div>
        </div>
    );
};
