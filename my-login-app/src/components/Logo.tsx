import React from 'react';
import logo from '../../assets/logo.png'; // ロゴ画像のパスを指定

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src={logo} alt="アプリケーションのロゴ" />
        </div>
    );
};

export default Logo;