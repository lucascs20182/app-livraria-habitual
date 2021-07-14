import api from './api';

export function adicionarItemAoPedido(idUsuario, idProduto, quantidade){
    const itemPedido = { 
        idDoClienteLogado : parseInt(idUsuario, 10),
        idProduto : parseInt(idProduto, 10),
        quantidade : parseInt(quantidade, 10)
    }

    // console.log(itemPedido)

    return new Promise((resolve, reject) => {
        return api.post('/pedido/detalhes', itemPedido)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}
