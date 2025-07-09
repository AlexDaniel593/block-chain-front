import { useState } from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';
import './App.css';

export const App = () => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const handleLogin = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
        setCurrentPage('home');
    };

    const handleNavigation = (page) => {
        setCurrentPage(page);
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onLogin={handleLogin} isAuthenticated={isAuthenticated} />;
            case 'dashboard':
                return isAuthenticated ? <Dashboard user={user} /> : <HomePage onLogin={handleLogin} isAuthenticated={isAuthenticated} />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'privacy':
                return <LegalPage type="privacy" />;
            case 'terms':
                return <LegalPage type="terms" />;
            case 'cookies':
                return <LegalPage type="cookies" />;
            default:
                return <HomePage onLogin={handleLogin} isAuthenticated={isAuthenticated} />;
        }
    };

    return (
        <div className="app">
            <Header 
                user={user} 
                onLogout={handleLogout} 
                onNavigation={handleNavigation}
                currentPage={currentPage}
            />
            <MainContent>
                {renderContent()}
            </MainContent>
            <Footer onNavigation={handleNavigation} />
        </div>
    );
};
