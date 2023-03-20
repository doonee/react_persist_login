import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/user/refreshToken', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log('prev => ', prev);
            console.log('response?.data?.result => ', response?.data?.result);
            return {
                ...prev,
                roles: response?.data?.roles,
                accessToken: response?.data?.result,
            }
        });
        return response?.data?.result;
    }
    return refresh;
};

export default useRefreshToken;
