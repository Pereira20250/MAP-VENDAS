let carrinho = [];
let total = 0;

/* ADICIONAR */
function addCarrinho(botao) {
  const card = botao.parentElement;
  const nome = card.querySelector("h4").innerText;
  const preco = parseFloat(
    card.querySelector(".preco").innerText.replace(",", ".")
  );

  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

/* REMOVER */
function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

/* ATUALIZAR INFO */
function atualizarCarrinho() {
  total = 0;
  carrinho.forEach(item => total += item.preco);

  document.getElementById("contador").innerText =
    carrinho.length + " itens";

  document.getElementById("total").innerText =
    "R$ " + total.toFixed(2).replace(".", ",");
}

/* FINALIZAR */
function finalizar() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio");
    return;
  }

  let mensagem = "Olá, quero comprar:%0A%0A";

  carrinho.forEach((item, i) => {
    mensagem += `${i + 1}. ${item.nome} - R$ ${item.preco
      .toFixed(2)
      .replace(".", ",")}%0A`;
  });

  mensagem += `%0A_TOTAL: R$ ${total
    .toFixed(2)
    .replace(".", ",")}_`;

  const numero = "5511913274243"; // 🔴 TROQUE

  window.open(
    `https://wa.me/${numero}?text=${mensagem}`,
    "_blank"
  );
}

/* MODAL */
function abrirModal(src) {
  document.getElementById("modalImg").style.display = "flex";
  document.getElementById("modalConteudo").src = src;
}

function fecharModal() {
  document.getElementById("modalImg").style.display = "none";
}
