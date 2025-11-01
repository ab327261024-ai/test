import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // ここでログイン処理を行う
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">ユーザー名</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">パスワード</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">ログイン</button>
        </form>
    );
};

export default LoginForm;