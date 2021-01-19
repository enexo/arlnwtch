import axios from 'axios';

let api = axios.create({
    timeout: 100000,
});

export default api;