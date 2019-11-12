

// Valida os inputs (Se o tempo A < B e se já não existe o horário informado)
function podeAdicionarHorarioDisponivel() {
    return true;
}

function removerHorarioDisponivel(itemId){
    $('#'+itemId).remove();
}

// Adiciona um item na lista de horarios disponiveis
function addHorarioDisponivel() {
    let item = {
        dia: $('#horario-livre-dia').children("option:selected").val(),
        de: $('#horario-livre-de').val(),
        as: $('#horario-livre-as').val(),
    };
    if (podeAdicionarHorarioDisponivel(item)) {
        let id = (new Date).getTime();
        $('#tabela-agenda').append('<tr id="'+id+'"><td>' + item.dia + '</td><td>' + item.de + '</td><td>'
            + item.as + '</td><td><button class="btn-danger" onclick="removerHorarioDisponivel('+id+')">Remover</button></td></tr>');
    }
}

