import axios from "axios";

import { getData } from '../storage';

const api = axios.create({
    baseURL: 'https://livrariahabitualapi.herokuapp.com'
})

function defineHeaderAuthorization() {
    async function recuperarToken() {
        const token = await getData('token');
        // const cadastro = await getData('isTelaCadastro');

        // console.log(cadastro)

        // if(cadastro == null) {
        api.defaults.headers.common['Authorization'] = token;
        // }
    }
    
    recuperarToken();
}

defineHeaderAuthorization();

export default api;
