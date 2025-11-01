import { useState } from 'react';
import { login } from '../services/auth';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginUser = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await login(username, password);
            if (response.success) {
                setIsAuthenticated(true);
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = () => {
        setIsAuthenticated(false);
    };

    return {
        isAuthenticated,
        loading,
        error,
        loginUser,
        logoutUser,
    };
};

export default useAuth;