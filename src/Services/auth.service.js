import API from "../http-common";

class AuthService {
    register  = (data) => {
        return API.post('/register', data);
    };
    login  = (data) => {
        return API.post('/login', data);
    };
    logout = () => {
        return API.post('/logout', {});
    };
}
export default new AuthService();


