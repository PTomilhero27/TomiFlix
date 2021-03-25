var filme = document.getElementById('filmes');


var filmes = document.getElementById('filme');
var jogo = document.getElementById('jogo');
var livro = document.getElementById('livro');




var peguei = document.getElementById('tePeguei');
var compadecida = document.getElementById('compadecida')
var estagiario = document.getElementById('estagiario')
var aladdin = document.getElementById('aladdin')
var potter = document.getElementById('potter')
var wars = document.getElementById('wars')
var vingadores = document.getElementById('vingadores')
var wanda = document.getElementById('wanda')



function erro() {
    alert('essa pagina está em construção')
}


var body = document.querySelector('body')

function Aparecer() {
    filme.style.display = "block"

    livro.style.display = "none";
    filmes.style.display = "none";
    jogo.style.display = "none";

}

function home() {
    filme.style.display = "none"

    livro.style.display = "block";
    filmes.style.display = "block";
    jogo.style.display = "block";
}

function sumir() {

    filme.style.display = "none"
}

function tePeguei() {
    sumir();
    peguei.style.display = 'block'
    body.style.backgroundImage = "url(https://image.tmdb.org/t/p/w1280/1NFRyjidhjROBxcgmCTgB2Yfl85.jpg)"

}

function Compadecida() {
    sumir();
    compadecida.style.display = 'block'
    body.style.backgroundImage = "url(https://imagens.ne10.uol.com.br/img/imagens/2020/09/23/7b73dc06b4_auto-da-compadecida.jpg)"

}

function Estagiario() {
    sumir();
    estagiario.style.display = 'block'
    body.style.backgroundImage = "url(https://i0.wp.com/hackersec.com/wp-content/uploads/2016/02/os-estagiario-filme.jpg?resize=400%2C267&ssl=1)"

}

function Aladdin() {
    sumir();
    aladdin.style.display = 'block'
    body.style.backgroundImage = "url(https://deythere.com/wp-content/uploads/2019/05/aladdin.jpg)"

}

function Potter() {
    sumir();
    potter.style.display = 'block'
    body.style.backgroundImage = "url(https://wallpapercave.com/wp/wp4543123.jpg)"

}

function Wars() {
    sumir();
    vingadores.style.display = 'block'
    body.style.backgroundImage = "url(https://i.pinimg.com/originals/3c/4f/25/3c4f256490040cf57126753d369bdc1c.jpg)"

}

function Vingadores() {
    sumir();
    vingadores.style.display = 'block'
    body.style.backgroundImage = "url(https://images4.alphacoders.com/913/913715.jpg)"

}

function Wanda() {
    sumir();
    wanda.style.display = 'block';
    body.style.backgroundImage = "url(https://www.hdwallpapers.in/download/wanda_vision_2021_keyart_4k_hd_wanda_vision-1600x900.jpg)";

}


function voltar() {
    filme.style.display = "block";
    peguei.style.display = 'none';
    compadecida.style.display = 'none';
    estagiario.style.display = 'none';
    aladdin.style.display = 'none';
    potter.style.display = 'none';
    wars.style.display = 'none';
    vingadores.style.display = 'none';
    wanda.style.display = 'none';



    body.style.backgroundImage = "none";
}