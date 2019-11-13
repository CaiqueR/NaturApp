
const sugestoes = [
    '<a href="https://canalrural.uol.com.br/noticias/saiba-como-cultivar-uma-horta-organica-casa-53820/">Cultive uma Horta Orgânica<a>',
    '<a href="https://www.ecycle.com.br/component/content/article/44-guia-da-reciclagem/1741-guia-basico-da-reciclagem-saiba-como-reaproveitar-e-reciclar-uma-serie-de-itens-do-dia-a-dia.html">Recicle um lixo<a>',
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
    $('#btn-adicionar-tempo-livre').attr('hidden', false);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function gerarAgenda() {
    let temposLivres = getTemposLivres();
    if (temposLivres.length != 0) {
        let arr = shuffle([...sugestoes]);
        $('#label-tempo-livre').html('Sugestões');
        $('.botao-tempo-livre').each(function (index) {
            $(this).html(arr.pop());
        });
    }
}

// Adiciona um item na lista de tempos disponiveis
function addTempoLivre() {
    if (getTemposLivres().length >= 1) {
        $('#btn-adicionar-tempo-livre').attr('hidden', true);
    }
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

