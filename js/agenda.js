

// Valida os inputs (Se o tempo A < B, e se já não existe o horário informado)
function validarTempoLivre(item) {

    if (item && item.dia && item.de && item.as) {
        return true;
    }
    return false;
}

// Obtem a lista de tempos livres
function getTemposLivres() {
    return $('#tabela-tempo-livre tr');
}

// Remove um horário disponível
function removerTempoLivre(itemId) {
    $('#' + itemId).remove();
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
            + item.as + '</td><td><button class="btn-danger" onclick="removerTempoLivre(' + id + ')">Remover</button></td></tr>');
        if ($('#div-tabela-tempo-livre').attr('hidden')) {
            $('#div-tabela-tempo-livre').attr('hidden', false);
        }
    }
}

