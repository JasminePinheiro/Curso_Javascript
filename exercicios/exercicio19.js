/* 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function cardapio(codItemPedido, qtd) {
    switch (codItemPedido) {
        case 100:
            return 3 * qtd
        case 200:
            return 4 * qtd
        case 300:
            return 5.5 * qtd
        case 400:
            return 7.5 * qtd
        case 500:
            return 3.5 * qtd
        case 600:
            return 2.8 * qtd
        default:
            return 'Produto não existe'
    }
}

console.log(cardapio(100, 3))
console.log(cardapio(200, 3))
console.log(cardapio(300, 7))
console.log(cardapio(400, 8))
console.log(cardapio(500, 10))
console.log(cardapio(600, 3).toFixed(2))