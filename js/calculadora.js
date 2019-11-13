
// Calcula a quantidade (em Litros) de água
function calcularGasto() {

    if (!isEmpty($("#minutos-banho")[0].value) && !isEmpty($("#minutos-pia")[0].value)) {
        let consumobanho = $("#minutos-banho")[0].value * 12;
        let consumopia = $("#minutos-pia")[0].value * 6;
        $('#litros-gastos').html(`${consumobanho + consumopia} litros`);
        $('#mensagem-gastos').html('Parabéns, vc consome água pa caraio');
    }
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}