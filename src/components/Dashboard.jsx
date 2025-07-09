import { useState } from 'react';
import { Wallet } from './Wallet';
import './Dashboard.css';

export const Dashboard = ({ user }) => {
    const [showWallet, setShowWallet] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [securityLevel, setSecurityLevel] = useState(1);

    const handleToggleWallet = () => {
        setShowWallet(!showWallet);
    };

    const handleToggleSettings = () => {
        setShowSettings(!showSettings);
    };

    const handleSecurityLevelChange = (level) => {
        setSecurityLevel(level);
    };

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Panel de Control</h2>
                <p>Gestiona tu experiencia blockchain</p>
            </div>
            
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="card-icon">👤</div>
                    <h3>Perfil de Usuario</h3>
                    <p><strong>Nombre:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>ID:</strong> {user.id}</p>
                    <button className="card-button">Editar Perfil</button>
                </div>
                                
                <div className="dashboard-card">
                    <div className="card-icon">💰</div>
                    <h3>Wallet</h3>
                    <p>Administra tus criptomonedas</p>
                    <button className="card-button" onClick={handleToggleWallet}>
                        {showWallet ? 'Ocultar Wallet' : 'Abrir Wallet'}
                    </button>
                </div>
                                              
                <div className="dashboard-card">
                    <div className="card-icon">⚙️</div>
                    <h3>Configuración</h3>
                    <p>Ajustes de la aplicación</p>
                    <button className="card-button" onClick={handleToggleSettings}>
                        {showSettings ? 'Ocultar Configuración' : 'Abrir Configuración'}
                    </button>
                </div>
            </div>

            {showWallet && (
                <Wallet user={user} />
            )}

            {showSettings && (
                <div className="settings-panel">
                    <div className="settings-header">
                        <h3>Configuración de Seguridad</h3>
                        <p>Selecciona el nivel de seguridad para el hash blockchain</p>
                    </div>
                    
                    <div className="security-levels">
                        <div className="current-level">
                            <h4>Nivel Actual: {securityLevel}</h4>
                            <p className="level-description">
                                {securityLevel === 1 && "Nivel 1: Hash con 1 cero al inicio (menos seguro, más rápido)"}
                                {securityLevel === 2 && "Nivel 2: Hash con 2 ceros al inicio (seguridad media)"}
                                {securityLevel === 3 && "Nivel 3: Hash con 3 ceros al inicio (más seguro, más lento)"}
                            </p>
                        </div>
                        
                        <div className="level-buttons">
                            <button 
                                className={`level-button ${securityLevel === 1 ? 'active' : ''}`}
                                onClick={() => handleSecurityLevelChange(1)}
                            >
                                Nivel 1
                                <span className="level-subtitle">1 cero inicial</span>
                            </button>
                            <button 
                                className={`level-button ${securityLevel === 2 ? 'active' : ''}`}
                                onClick={() => handleSecurityLevelChange(2)}
                            >
                                Nivel 2
                                <span className="level-subtitle">2 ceros iniciales</span>
                            </button>
                            <button 
                                className={`level-button ${securityLevel === 3 ? 'active' : ''}`}
                                onClick={() => handleSecurityLevelChange(3)}
                            >
                                Nivel 3
                                <span className="level-subtitle">3 ceros iniciales</span>
                            </button>
                        </div>
                        
                        <div className="info-section">
                            <h4>ℹ️ Información</h4>
                            <p>
                                El nivel de seguridad determina la dificultad del hash blockchain. 
                                Más ceros al inicio del hash significan mayor seguridad pero también 
                                mayor tiempo de procesamiento para generar nuevos bloques.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
