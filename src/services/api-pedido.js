import api from './api';

export function adicionarItemAoPedido(idUsuario, idProduto, quantidade){
    const itemPedido = { 
        idDoClienteLogado : parseInt(idUsuario, 10),
        idProduto : parseInt(idProduto, 10),
        quantidade : parseInt(quantidade, 10)
    }

    return new Promise((resolve, reject) => {
        return api.post('/pedido/detalhes', itemPedido)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export const obterCarrinhoCompras = (idPedido) => {
    return new Promise((resolve, reject) => {
        return api.get(`/pedido/${idPedido}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export const removerItemDoPedido = (idItem) => {
    return new Promise((resolve, reject) => {
        return api.delete(`/pedido/detalhes/${idItem}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}