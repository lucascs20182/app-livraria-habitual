import api from './api';

export const cadastrar = (email, username, senha, nome, cpf, cep, numero, complemento) => {
    const usuario = {
        email, username, senha, nome, cpf, 
        
        enderecosDoCliente: [{
            cep, numero: parseInt(numero), complemento
        }]
    }

    console.log(usuario);

    return new Promise((resolve, reject) => {
        return api.post('/create', usuario)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export const logar = (username, senha) => {
    return new Promise((resolve, reject) => {
        return api.post('/login', { username, senha })
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export const obterDadosDoCliente = (idCliente) => {
    return new Promise((resolve, reject) => {
        return api.get(`/cliente/${idCliente}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
