import { useState, useEffect, useReducer } from 'react';
import { getCripto } from '../services/getCripto.js';
import { getChains } from '../services/getChains.js';
import { criptoReducers, addCripto, initCryptos } from '../reducers/criptoReducers.js';
import './Wallet.css';

export const Wallet = ({ user }) => {
    const [userCryptos, setUserCryptos] = useState([]);
    const [userChainsInfo, setUserChainsInfo] = useState([]);
    const [activeTab, setActiveTab] = useState('cryptos');
    const [uploadMessage, setUploadMessage] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [lastGeneratedId, setLastGeneratedId] = useState(0);
    
    // Usar el reducer para manejar el estado de las criptomonedas
    const [cryptoState, dispatch] = useReducer(criptoReducers, { cryptos: [] });

    useEffect(() => {
        // Obtener datos usando los servicios
        const criptoData = Object.values(getCripto());
        const chainsData = Object.values(getChains());
        
        // Inicializar el último ID generado basado en los datos existentes
        const existingIds = criptoData.map(crypto => crypto.id);
        if (existingIds.length > 0) {
            setLastGeneratedId(Math.max(...existingIds));
        }
        
        // Filtrar criptos del usuario actual
        const filteredCryptos = criptoData.filter(crypto => crypto.userid === user.id);
        
        // Obtener información completa de las criptos con precios
        const cryptosWithInfo = filteredCryptos.map(crypto => {
            const chainInfo = chainsData.find(chain => chain.name === crypto.name);
            return {
                ...crypto,
                symbol: chainInfo?.symbol || 'N/A',
                price: chainInfo?.price || 0,
                value: chainInfo?.price || 0
            };
        });
        
        setUserCryptos(cryptosWithInfo);
        
        // Información de cadenas para la segunda tabla
        const chainsInfo = filteredCryptos.map(crypto => ({
            id: crypto.id,
            name: crypto.name,
            chain: crypto.chain,
            date: crypto.date
        }));
        
        setUserChainsInfo(chainsInfo);
    }, [user.id]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getTotalValue = () => {
        return userCryptos.reduce((total, crypto) => total + crypto.value, 0);
    };

    const getCryptoCount = (cryptoName) => {
        return userCryptos.filter(crypto => crypto.name === cryptoName).length;
    };

    const getUniqueCryptos = () => {
        const unique = [];
        const seen = new Set();
        
        userCryptos.forEach(crypto => {
            if (!seen.has(crypto.name)) {
                seen.add(crypto.name);
                unique.push({
                    ...crypto,
                    count: getCryptoCount(crypto.name),
                    totalValue: getCryptoCount(crypto.name) * crypto.price
                });
            }
        });
        
        return unique;
    };

    const validateCryptoJSON = (jsonData) => {
        // Validar que tenga las propiedades requeridas
        if (!jsonData.name || !jsonData.chain) {
            return false;
        }
        
        // Validar que el nombre sea una criptomoneda válida
        const validCryptos = ['Bitcoin', 'Ethereum', 'Solana'];
        if (!validCryptos.includes(jsonData.name)) {
            return false;
        }
        
        // Validar que la cadena tenga el formato correcto (hash con al menos 5 caracteres)
        if (typeof jsonData.chain !== 'string' || jsonData.chain.length < 5) {
            return false;
        }
        
        return true;
    };

    const generateNewId = () => {
        const allCryptos = getCripto();
        const staticIds = Object.values(allCryptos).map(crypto => crypto.id);
        const stateIds = cryptoState.cryptos.map(crypto => crypto.id);
        const userIds = userCryptos.map(crypto => crypto.id);
        
        // Combinar todos los IDs existentes
        const allIds = [...staticIds, ...stateIds, ...userIds];
        
        // Si no hay IDs, empezar desde 1
        if (allIds.length === 0) {
            return 1;
        }
        
        // Encontrar el siguiente ID disponible usando un enfoque más seguro
        let newId = Math.max(...allIds, lastGeneratedId) + 1;
        
        // Verificar que el ID no esté ya en uso (por si acaso)
        while (allIds.includes(newId)) {
            newId++;
        }
        
        // Actualizar el último ID generado
        setLastGeneratedId(newId);
        
        return newId;
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);
        setUploadMessage('');

        try {
            const text = await file.text();
            const jsonData = JSON.parse(text);
            
            if (validateCryptoJSON(jsonData)) {
                // Crear nueva criptomoneda
                const newId = generateNewId();
                console.log('Generated new ID:', newId); // Debug log
                
                const newCrypto = {
                    id: newId,
                    userid: user.id,
                    name: jsonData.name,
                    chain: jsonData.chain,
                    date: new Date().toISOString().split('T')[0]
                };
                
                console.log('New crypto created:', newCrypto); // Debug log
                
                // Usar el reducer para agregar la nueva criptomoneda
                dispatch(addCripto(newCrypto));
                
                // Actualizar el estado local también
                const chainsData = Object.values(getChains());
                const chainInfo = chainsData.find(chain => chain.name === newCrypto.name);
                
                const newCryptoWithInfo = {
                    ...newCrypto,
                    symbol: chainInfo?.symbol || 'N/A',
                    price: chainInfo?.price || 0,
                    value: chainInfo?.price || 0
                };
                
                setUserCryptos(prevCryptos => [...prevCryptos, newCryptoWithInfo]);
                setUserChainsInfo(prevChains => [...prevChains, {
                    id: newCrypto.id,
                    name: newCrypto.name,
                    chain: newCrypto.chain,
                    date: newCrypto.date
                }]);
                
                setUploadMessage('✅ Criptomoneda agregada exitosamente');
                
                // Limpiar el mensaje después de 5 segundos
                setTimeout(() => setUploadMessage(''), 5000);
            } else {
                setUploadMessage('❌ JSON inválido. Debe contener "name" y "chain" válidos');
            }
        } catch (error) {
            setUploadMessage('❌ Error al procesar el archivo. Verifique que sea un JSON válido');
        } finally {
            setIsUploading(false);
            // Limpiar el input file
            event.target.value = '';
        }
    };

    return (
        <div className="wallet-container">
            <div className="wallet-header">
                <h2>Mi Wallet</h2>
            </div>
            
            <div className="wallet-summary">
                <div className="summary-card">
                    <h3>Valor Total del Portfolio</h3>
                    <div className="total-value">{formatPrice(getTotalValue())}</div>
                </div>
                <div className="summary-card">
                    <h3>Total de Criptomonedas</h3>
                    <div className="total-count">{userCryptos.length}</div>
                </div>
                <div className="summary-card">
                    <h3>Tipos Diferentes</h3>
                    <div className="unique-count">{getUniqueCryptos().length}</div>
                </div>
            </div>

            <div className="wallet-tabs">
                <button 
                    className={`tab-button ${activeTab === 'cryptos' ? 'active' : ''}`}
                    onClick={() => setActiveTab('cryptos')}
                >
                    Mi Portfolio
                </button>
                <button 
                    className={`tab-button ${activeTab === 'chains' ? 'active' : ''}`}
                    onClick={() => setActiveTab('chains')}
                >
                    Información de Cadenas
                </button>
                <button 
                    className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
                    onClick={() => setActiveTab('upload')}
                >
                    Subir Cripto
                </button>
            </div>

            <div className="wallet-content">
                    {activeTab === 'cryptos' && (
                        <div className="cryptos-table">
                            <h3>Portfolio de Criptomonedas</h3>
                            {getUniqueCryptos().length > 0 ? (
                                <table className="wallet-table">
                                    <thead>
                                        <tr>
                                            <th>Criptomoneda</th>
                                            <th>Símbolo</th>
                                            <th>Cantidad</th>
                                            <th>Precio Unitario</th>
                                            <th>Valor Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getUniqueCryptos().map((crypto, index) => (
                                            <tr key={index}>
                                                <td className="crypto-name">
                                                    <div className="crypto-icon">
                                                        {crypto.name === 'Bitcoin' && '₿'}
                                                        {crypto.name === 'Ethereum' && 'Ξ'}
                                                        {crypto.name === 'Solana' && '◎'}
                                                    </div>
                                                    {crypto.name}
                                                </td>
                                                <td className="crypto-symbol">{crypto.symbol}</td>
                                                <td className="crypto-count">{crypto.count}</td>
                                                <td className="crypto-price">{formatPrice(crypto.price)}</td>
                                                <td className="crypto-total">{formatPrice(crypto.totalValue)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="empty-state">
                                    <p>No tienes criptomonedas en tu wallet</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'chains' && (
                        <div className="chains-table">
                            <h3>Información de Cadenas de Bloques</h3>
                            {userChainsInfo.length > 0 ? (
                                <table className="wallet-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Criptomoneda</th>
                                            <th>Hash de Cadena</th>
                                            <th>Fecha</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userChainsInfo.map((chain) => (
                                            <tr key={chain.id}>
                                                <td className="chain-id">{chain.id}</td>
                                                <td className="chain-name">
                                                    <div className="crypto-icon">
                                                        {chain.name === 'Bitcoin' && '₿'}
                                                        {chain.name === 'Ethereum' && 'Ξ'}
                                                        {chain.name === 'Solana' && '◎'}
                                                    </div>
                                                    {chain.name}
                                                </td>
                                                <td className="chain-hash">
                                                    <code>{chain.chain}</code>
                                                </td>
                                                <td className="chain-date">{formatDate(chain.date)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="empty-state">
                                    <p>No hay información de cadenas disponible</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'upload' && (
                        <div className="upload-section">
                            <h3>Subir Nueva Criptomoneda</h3>
                            <div className="upload-container">
                                <div className="upload-instructions">
                                    <h4>Instrucciones:</h4>
                                    <ul>
                                        <li>Selecciona un archivo .txt o .json</li>
                                        <li>El archivo debe contener un JSON válido con la estructura:</li>
                                        <pre className="json-example">
{`{
  "name": "Bitcoin",
  "chain": "00001fxdlknsDDaone@345no$%642konepPancXpsncaip@%32"
}`}
                                        </pre>
                                        <li>Criptomonedas válidas: Bitcoin, Ethereum, Solana</li>
                                        <li>La cadena debe tener al menos 5 caracteres</li>
                                    </ul>
                                </div>
                                
                                <div className="upload-area">
                                    <input
                                        type="file"
                                        id="crypto-file"
                                        accept=".txt,.json"
                                        onChange={handleFileUpload}
                                        disabled={isUploading}
                                        className="file-input"
                                    />
                                    <label htmlFor="crypto-file" className="file-label">
                                        {isUploading ? '📤 Procesando...' : '📁 Seleccionar Archivo'}
                                    </label>
                                </div>
                                
                                {uploadMessage && (
                                    <div className={`upload-message ${uploadMessage.includes('✅') ? 'success' : 'error'}`}>
                                        {uploadMessage}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
    );
};
