let nomeAmigosListados = [];

function adicionar(){
    let nomeDigitado = document.getElementById('nome-amigo').value;
    
    if (nomeDigitado === ''){
        alert('Digite um nome para continuar!');
        return;
    }

    if (nomeAmigosListados.includes(nomeDigitado)){
        alert('Nome já adicionado à lista!');
        limparNome();
        return;
    }

nomeAmigosListados.push(nomeDigitado);


    let listaAmigos = document.getElementById('lista-amigos');
    let listaAmigosAdd = nomeAmigosListados.join(', ');
    
    listaAmigos.textContent = listaAmigosAdd;

    limparNome();
    
}

function sortear() {
    if (nomeAmigosListados.length < 4) {
        alert('Adicione pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    let amigosEmbaralhados = [...nomeAmigosListados];

    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        // Troca de lugares
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }
    
    // Neste ponto, a lista 'amigosEmbaralhados' está em uma ordem aleatória!
    // O próximo passo seria montar os pares e mostrar na tela.
    
    // Pega o elemento na tela
    let listaSorteio = document.getElementById('lista-sorteio');

    // Importante: limpa a lista de sorteios anteriores antes de preencher de novo!
    listaSorteio.innerHTML = ''; 

    for (let i = 0; i < nomeAmigosListados.length; i++) {
        // Pega o par da rodada 'i'
        let parSorteado = `${nomeAmigosListados[i]} -> ${amigosEmbaralhados[i]}`;
        
        // Adiciona o par na tela com uma quebra de linha em HTML
        listaSorteio.innerHTML += `${parSorteado}<br>`;
    }
}

function reiniciar() {
    // 1. Como você esvazia o array 'nomeAmigosListados'?
    nomeAmigosListados = [];
    // 2. Como você apaga o texto do elemento com id 'lista-amigos'?
    document.getElementById('lista-amigos').textContent = '';
    // 3. Como você apaga o texto do elemento com id 'lista-sorteio'?
    document.getElementById('lista-sorteio').textContent = '';
}


function limparNome(){
    document.getElementById('nome-amigo').value= '';

}