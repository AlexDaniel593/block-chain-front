import './MainContent.css';

export const MainContent = ({ children }) => {
    return (
        <main className="main-content">
            <div className="content-container">
                {children}
            </div>
        </main>
    );
};
