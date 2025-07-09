import { useState } from 'react';
import { users } from '../data/user.js';
import './login.css';

export const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // Simular una pequeña demora para el login
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Buscar usuario en los datos
            const user = users.find(u => 
                u.email === formData.email && u.password === formData.password
            );

            if (user) {
                // Llamar a la función onLogin pasada como prop
                onLogin(user);
            } else {
                setMessage('Credenciales incorrectas. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            setMessage('Error al iniciar sesión. Por favor, intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Iniciar Sesión</h1>
            <p className="login-description">Introduzca sus credenciales para iniciar sesión.</p>
            
            {message && (
                <div className="message error">
                    {message}
                </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Correo:</label>
                    <input 
                        className="form-input"
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="password">Contraseña:</label>
                    <input 
                        className="form-input"
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button 
                    className="login-button"
                    type="submit" 
                    disabled={isLoading}
                >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </button>
            </form>

        </div>
    );
};
