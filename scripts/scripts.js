setInterval(
    function relogio() {

    var agora = new Date();
    var mostrarData = document.getElementById('mostra');
    var listaMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var mes = listaMeses[agora.getUTCMonth()];

    mostrarData.innerHTML = `${agora.getDate()} de ` + `${mes}/` + `${agora.getFullYear()}`;

    var boasVindas = document.getElementById('texto');

    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundos = agora.getSeconds();

    var hor = document.getElementById('hora');
    var min = document.getElementById('minuto');
    var sec = document.getElementById('segundo');

    hor.innerHTML = hora + ' h'
    min.innerHTML = minuto + ' m'
    sec.innerHTML = segundos + ' S'

    if(hora >= 5 && hora < 12){
        boasVindas.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora <= 18){
        boasVindas.innerHTML = 'Boa tarde'
    } else if (hora > 18 && hora <= 23 || hora === 00){
        boasVindas.innerHTML = 'Boa noite'
    } else {
        boasVindas.innerHTML = 'Boa madrugada'
    }
}
)



