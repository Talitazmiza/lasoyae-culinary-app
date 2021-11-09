import API from "../http-common";
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).access_token}`;
//     }
//     return req;
// });
class ProductsService {
    getAllProducts = () => {
        return API.get('/products');
    };
}
export default new ProductsService();


