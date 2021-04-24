import axios from 'axios';

const api = axios.create({
    baseURL: '', /* Procure o IP da sua máquina e coloque: 
        http://(IP da máquina)
     */

});

export default api;