setInterval(
    function relogio() {

    var agora = new Date();
    
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundos = agora.getSeconds();

    var hor = document.getElementById('hora');
    var min = document.getElementById('minuto');
    var sec = document.getElementById('segundo');

    hor.innerHTML = hora + ' h'
    min.innerHTML = minuto + ' m'
    sec.innerHTML = segundos + ' S'
}
)



