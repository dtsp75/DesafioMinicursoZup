const botao = document.querySelector('button');

// Esta função gera um valor aleatório de 0 a 671.
gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    // Este bloco de código pega da API do Rick e Morty quatro personagens aleatórios.
    return fetch(`https://rickandmortyapi.com/api/character/${gerarValorAleatorio()},${gerarValorAleatorio()},${gerarValorAleatorio()},${gerarValorAleatorio()},`, {
        method:'GET', 
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        // Data é um array de personagens (objetos) que está vindo da API do Rick e Morty.

        // listaDeCardsDoHTML é um array de objetos HTML com todos as TAGs que tenham a classe .card
       const listaDeCardsDoHTML =  document.querySelectorAll('.card');


       // Esse laço for está populando o HTML com os dados que estão vindo da API.
        var i;
        for (i = 0; i < data.length; i++){
            listaDeCardsDoHTML[i].innerHTML = `
                <div class="img-card" style="background-image: url(${data[i].image});"></div>
                <div class="content-card">
                    <h2${data[i].name}</h2>
                    <h3>Espécie: ${data[i].species}</h3>
                    <p class="label">Localização:</p>
                    <p class="value">${data[i].location.name}</p>
                    <p class="label">Status: </p>
                    <p class="value">${data[i].status}</p>
                </div>
            `;
        }
    });
}

// Criei esta função para que no início do carregamento da página já apareçam os personagens nos cards.
pegarPersonagem();

// Chama a função pegarPersonagem quando se clica no botão atualizar.
botao.onclick = pegarPersonagem;
