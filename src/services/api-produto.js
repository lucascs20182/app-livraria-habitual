import api from './api';

export const obterTodos = () => {
    return new Promise((resolve, reject) => {
        return api.get('/produto')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export const obterProdutosPorCategoria = (idCategoria) => {
    return new Promise((resolve, reject) => {
        return api.get(`/categoria/${idCategoria}/produtos`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
