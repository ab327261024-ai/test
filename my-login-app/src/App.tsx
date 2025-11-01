import React from 'react';
import LoginForm from './components/LoginForm';
import Logo from './components/Logo';
import './styles/Login.module.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Logo />
            <h1>ログイン</h1>
            <LoginForm />
        </div>
    );
};

export default App;