import './BlockchainInfo.css';

export const BlockchainInfo = () => {
    return (
        <div className="blockchain-info">
            <h2>¿Qué es Blockchain?</h2>
            <div className="info-grid">
                <div className="info-card">
                    <h3>🔗 Cadena de Bloques</h3>
                    <p>
                        Una blockchain es una base de datos distribuida que mantiene una lista 
                        continuamente creciente de registros, llamados bloques, que están 
                        vinculados y asegurados usando criptografía.
                    </p>
                </div>
                <div className="info-card">
                    <h3>🔒 Seguridad</h3>
                    <p>
                        Cada bloque contiene un hash criptográfico del bloque anterior, 
                        una marca de tiempo y datos de transacciones, lo que hace que 
                        la información sea inmutable y segura.
                    </p>
                </div>
                <div className="info-card">
                    <h3>🌐 Descentralización</h3>
                    <p>
                        No hay una autoridad central que controle la blockchain. 
                        En su lugar, funciona como un libro mayor distribuido 
                        entre múltiples participantes de la red.
                    </p>
                </div>
                <div className="info-card">
                    <h3>✅ Transparencia</h3>
                    <p>
                        Todas las transacciones son visibles para todos los participantes 
                        de la red, proporcionando transparencia completa mientras 
                        mantiene la privacidad de los usuarios.
                    </p>
                </div>
            </div>
            <div className="applications">
                <h3>Aplicaciones Principales</h3>
                <div className="applications-list">
                    <div className="app-item">
                        <span className="app-icon">💰</span>
                        <span>Criptomonedas</span>
                    </div>
                    <div className="app-item">
                        <span className="app-icon">📜</span>
                        <span>Contratos Inteligentes</span>
                    </div>
                    <div className="app-item">
                        <span className="app-icon">🏥</span>
                        <span>Registros Médicos</span>
                    </div>
                    <div className="app-item">
                        <span className="app-icon">🗳️</span>
                        <span>Sistemas de Votación</span>
                    </div>
                    <div className="app-item">
                        <span className="app-icon">📦</span>
                        <span>Cadena de Suministro</span>
                    </div>
                    <div className="app-item">
                        <span className="app-icon">🎓</span>
                        <span>Certificados Digitales</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
