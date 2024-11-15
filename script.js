// Variáveis do carrinho
let carrinho = [];
let total = 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    carrinho.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Atualizar o total
    document.getElementById('total-price').textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para finalizar a compra
function finalizarCompra() {
    alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}
