let contador1;
let contador2;
let contador;
let escolhaVip;
let escolhaPagamento;
let precoVip;


function selecionarVip(valor){
    const escolhido1 = document.querySelector(".selected1");
    if(escolhido1 !== null){
        escolhido1.classList.remove('selected1');
    }
    const seletor = "." + valor;
    const botao = document.querySelector(seletor);
    botao.classList.add('selected1');
    if(contador1 == undefined){
        contador1 = 1;
    }

    const itemVip = document.querySelector(".vip .selected1 .opção .bonus");
    escolhaVip = itemVip.innerHTML;
    const valorVip = document.querySelector(".vip .selected1 .opção .price");
    precoVip = valorVip.innerHTML;
}


function selecionarPagamento(liquido){
    const escolhido2 = document.querySelector(".selected2");
    if(escolhido2 !== null){
        escolhido2.classList.remove('selected2');
    }
    const seletor = "." + liquido;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected2');
    if(contador2 == undefined){
        contador2 = 1;
    }

    const itemPagamento = document.querySelector(".pagamento .selected2 .opção .pagamento");
    escolhaPagamento = itemPagamento.innerHTML;
}


function final(){
    contador = contador1 + contador2;
    const finalizar = document.querySelector(".botãoinferior");
    const verde = document.querySelector(".botãoverde");
    if(contador == 2 && finalizar !== null && verde !== null){
        finalizar.classList.add('esconder');
        verde.classList.remove('esconder');       
    }
}

function acabou(){
    const nomeCliente = prompt("Escreva seu usuário:");
    precoVip = precoVip.replace("R$ ","");
    precoVip = precoVip.replace(",",".");
    precoVip = parseFloat(precoVip);
    let mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Vip: ${escolhaVip}
    - Pagamento: ${escolhaPagamento}
    Total: R$ ${precoVip}
    
    Usuário: ${nomeCliente}`;
    const textoconvertido = encodeURI(mensagem);
    const link = `https://wa.me/5524999510289?text=${textoconvertido}`;
    window.location.href = link; 
}