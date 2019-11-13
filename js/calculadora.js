
// Calcula a quantidade (em Litros) de água
function calcularGasto() {

    if (!isEmpty($("#minutos-banho")[0].value) && !isEmpty($("#minutos-pia")[0].value)) {
        const consumobanho = $("#minutos-banho")[0].value * 12;
        const consumopia = $("#minutos-pia")[0].value * 6;
        const consumototal = consumobanho + consumopia;
        $('#litros-gastos').html(`${consumototal} litros`);
        if (consumototal <= 36) {
            $('#mensagem-gastos').html('Incrível, você está colaborando para o meio ambiente!');
        }
        else if (consumototal > 36 && consumototal <= 50) {
            $('#mensagem-gastos').html('Ótimo, seu consumo está na média.');
        }
        else if (consumototal > 50 && consumototal <= 70) {
            $('#mensagem-gastos').html('Opa, seu consumo está um pouco alto, acho que poderia economizar um pouco.');
        }
        else if (consumototal > 70 && consumototal <= 100) {
            $('#mensagem-gastos').html('Consumo exagerado, seu consumo está um muito alto, você poderia economizar mais água.');
        }
    }
}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}