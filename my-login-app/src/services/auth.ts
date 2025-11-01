import axios from 'axios';

const API_URL = 'https://your-api-url.com'; // APIのURLを指定

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        return response.data; // レスポンスデータを返す
    } catch (error) {
        throw new Error('ログインに失敗しました'); // エラーハンドリング
    }
};

export const logout = async () => {
    try {
        await axios.post(`${API_URL}/logout`);
    } catch (error) {
        throw new Error('ログアウトに失敗しました'); // エラーハンドリング
    }
};