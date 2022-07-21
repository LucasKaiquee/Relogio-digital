setInterval(
    function relogio() {

    var agora = new Date();

    var mostrarData = document.getElementById('mostra');

    var mes = agora.getUTCMonth() + 1;

    switch(mes) {
        case 1: 
           var mesExtenso = ('Janeiro');
            break;
        case 2:
           var mesExtenso = ('Fevereiro');
            break;
        case 3: 
           var mesExtenso = ('Março');
            break;
        case 4: 
           var mesExtenso = ('Abril');
            break;
        case 5: 
           var mesExtenso = ('Maio');
            break;
        case 6: 
           var mesExtenso = ('Junho');
            break;
        case 7: 
           var mesExtenso = ('Julho');
            break;
        case 8: 
           var mesExtenso = ('Agosto');
            break;
        case 9: 
           var mesExtenso = ('Setembro');
            break;
        case 10: 
           var mesExtenso = ('Outubro');
            break;
        case 11: 
           var mesExtenso = ('Novembro');
            break;
        case 12: 
           var mesExtenso = ('Dezembro');
            break;
    }

    mostrarData.innerHTML = `${agora.getDate()} de ` + `${mesExtenso}/` + `${agora.getFullYear()}`;

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



