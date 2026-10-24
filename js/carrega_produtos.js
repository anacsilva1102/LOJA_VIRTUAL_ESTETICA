
//IMPORTANDO OS PRODUTOS
import { produtos } from './produtos.js';

//DEFININDO O LOCAL DOS CARDS
const cards = document.getElementById('cards');

//CARREGANDO OS PRODUTOS
function carrega_produtos(lista_produtos){

    cards.innerHTML = '';

    lista_produtos.forEach(produto => {

        cards.innerHTML += `
            <div class="card">
                <img src="${produto.caminho_da_imagem}" alt="${produto.descricao_produto}">

                <h2>${produto.descricao_produto}</h2>

                <h3>R$ ${produto.valor_unitario.toFixed(2).replace('.', ',')}</h3>

                <button onclick="adicionar_carrinho(${produto.id_produto})">
                    Adicionar ao carrinho
                </button>
            </div>
        `;

    });

}

//EXIBINDO TODOS OS PRODUTOS
carrega_produtos(produtos);
