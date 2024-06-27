let Amigos = document.getElementById('lista-amigos');
let listaAmigos = [];
let listaSorteio = document.getElementById('lista-sorteio');
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (nomeAmigo == ''){
        alert('Informe o nome da pessoa!');
        return;
    }
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Essa pessoa já foi inserida na lista!');
        return;
    }
    listaAmigos.push(nomeAmigo);
    if (Amigos.textContent == '') {
    Amigos.textContent = nomeAmigo;
    } else {
        Amigos.textContent = Amigos.textContent + `, ${nomeAmigo}`;
    }
    document.getElementById('nome-amigo').value = '';
}
function shuffle() {if (listaAmigos.length % 2 == 1) {
    alert('Algum amigo vai ficar sem par :(');
} else {
    for (let i = listaAmigos.length; i; i--) {
        let randomIndice = Math.floor(Math.random() * i);
        let temporario = listaAmigos[i - 1];
        listaAmigos[i - 1] = listaAmigos[randomIndice];
        listaAmigos[randomIndice] = temporario;
    }
}
console.log(listaAmigos)
}
function sortear() {
    shuffle()
    if (listaAmigos.length % 2 == 0) {
        for (let i = 0; i < listaAmigos.length; i++){
            if (i == listaAmigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' → ' + listaAmigos[0] + '<br>';
            } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaAmigos[i] + ' → ' + listaAmigos[i + 1] + '<br>';
        }
        }
    }
}
function reiniciar () {
    listaSorteio.innerHTML = '';
    listaAmigos = [];
    Amigos.innerHTML = '';
}