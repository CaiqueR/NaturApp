
const sugestoes = [
    '<a href="">Cultive uma Horta Orgânica<a>',
];


// Valida os inputs (Se o tempo A < B, e se já não existe o horário informado)
function validarTempoLivre(item) {

    if (item && item.dia && item.de && item.as) {
        return true;
    }
    return false;
}

// Obtem a lista de tempos livres
function getTemposLivres() {
    return $('#tabela-tempo-livre tr').splice(1);
}

// Remove um horário disponível
function removerTempoLivre(itemId) {
    $('#' + itemId).remove();
    let temposLivres = getTemposLivres();
    if (temposLivres.length == 0) {
        $('#div-tabela-tempo-livre').attr('hidden', true);
    }
}

function gerarAgenda() {
    let temposLivres = getTemposLivres();
    if (temposLivres.length != 0) {
        $('#label-tempo-livre').html('Sugestões');
        $('.botao-tempo-livre').each(function (index) {
            $(this).html('teste123');
        });
    }
}

// Adiciona um item na lista de tempos disponiveis
function addTempoLivre() {
    let item = {
        dia: $('#tempo-livre-dia').children("option:selected").val(),
        de: $('#tempo-livre-de').val(),
        as: $('#tempo-livre-as').val(),
    };
    if (validarTempoLivre(item)) {
        let id = (new Date).getTime();
        $('#tabela-tempo-livre').append('<tr id="' + id + '"><td>' + item.dia + '</td><td>' + item.de + '</td><td>'
            + item.as + '</td><td class="botao-tempo-livre"><button class="btn-danger" onclick="removerTempoLivre(' + id + ')">Remover</button></td></tr>');
        if ($('#div-tabela-tempo-livre').attr('hidden')) {
            $('#div-tabela-tempo-livre').attr('hidden', false);
        }
    }
}

