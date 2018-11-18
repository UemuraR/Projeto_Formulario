function ValidaCampos() {
    $("#vazio, #vazio1, #vazio2, #vazio3, #vazio4, #vazio5, #vazio6").empty();

    $("#vazio, #vazio1, #vazio2, #vazio3, #vazio4, #vazio5, #vazio6").removeClass("alerta");

    if ($("#nome").val() == "") {
        $("#vazio").addClass("alerta");
        $("#vazio").html(" Preencha os dados do cliente corretamente: ");
        $("#nome").focus();
        return false;

    } if ($("#telefone").val() == "") {
        $("#vazio1").addClass("alerta");
        $("#vazio1").html("Preencha os dados do cliente corretamente: ");
        $("#telefone").focus();
        return false;

    } if ($("#end").val() == "") {
        $("#vazio2").addClass("alerta");
        $("#vazio2").html(" Preencha os dados do cliente corretamente: ");
        $("#end").focus();
        return false;

    } if ($("#tamanho").is(":checked") || $("#tamanho1").is(":checked") || $("#tamanho2").is(":checked")) {

    } else {
        $("#vazio3").addClass("alerta");
        $("#vazio3").html("Escolha o tamanho da Pizza! ");
        $("#tamanho").focus();
        return false;

    } if ($("#sabores").val() == "") {
        $("#vazio4").addClass("alerta");
        $("#vazio4").html(" Escolha pelo menos um sabor: ");
        $("#parcial").focus();
        return false;

    } if ($("#ingredienteE").val() == "") {
        $("#vazio5").addClass("alerta");
        $("#vazio5").html(" Não gostaria de acrescentar um Ingrediente Extra? ");
        $("#ingredienteE").focus();
        return false;

    } if ($("#pagamento").val() == "") {
        $("#vazio6").addClass("alerta");
        $("#vazio6").html(" Informar forma de Pagamento! ");
        $("#pagamento").focus();
        return false;

    } return true;
}

function calcPizza() {
    var tamanhoPizza;

    var brotinho = $("#tamanho").val();
    var media = $("#tamanho1").val();
    var grande = $("#tamanho2").val();

    if ($("#tamanho").is(":checked")) {
        tamanhoPizza = brotinho;
    } else if ($("#tamanho1").is(":checked")) {
        tamanhoPizza = media;
    } else if ($("#tamanho2").is(":checked")) {
        tamanhoPizza = grande;
    }

    return tamanhoPizza;
}

function ingredientePizza() {
    var ingrediente = $("#ingredienteE").val();

    if (ingrediente === "Cebola" || ingrediente === "Milho" || ingrediente === "Tomate") {
        return 7.50;
    } else if (ingrediente === "Não") {
        return 0;
    } else {
        return 11.50;
    }

}

function getIngrediente() {
    var ingrediente = $("#ingredienteE").val();

    if (ingrediente === "Não") {
        return "Sem ingrediente";
    } else {
        return ingrediente;
    }
}

function juntaIngredienteTamanho() {
    return parseFloat(calcPizza()) + ingredientePizza();
}

function getSabor() {
    return $("#sabores option:selected").val();
}

function getNome() {
    return $("#nome").val();
}

function getTelefone() {
    return $("#telefone").val();
}

function getEndereco() {
    return $("#end").val();
}

function getFormaPagamento() {
    return $("#pagamento option:selected").val();
}

function inserirDadosDiv() {
    $("#dadosPedido").append("Cliente: " + getNome() + "</br>");
    $("#dadosPedido").append("Endereço: " + getEndereco() + "</br>");
    $("#dadosPedido").append("Telefone: " + getTelefone() + "</br>");
    $("#dadosPedido").append("Sabor: " + getSabor() + "</br>");
    $("#dadosPedido").append("Ingrediente Extra: " + getIngrediente() + "</br>");
    $("#dadosPedido").append("Valor a Pagar: " + juntaIngredienteTamanho() + "</br>");
    $("#dadosPedido").append("Forma de Pagamento: " + getFormaPagamento() + "</br>");
}

function limpaCampos() {
    $("#dadosPedido").remove();
}

function inserirColorBackground() {
    var total = juntaIngredienteTamanho();
    if (total < 30) {
        $("#dadosPedido").addClass("backBlue");
    } else if (total < 40) {
        $("#dadosPedido").addClass("backRed");
    } else if (total > 40) {
        $("#dadosPedido").addClass("backGreen");
    }
}

function desabilitarBotaoEHabilitarBotaoNovoPedido() {
    $("#calc").prop("disabled", true);
    $("#novoPedido").prop("disabled", false);
}


function desabilitarBotaoNovoPedido() {
    $("#novoPedido").prop("disabled", true);
}

function atualizarPage() {
    $('#novoPedido').click(function () {
        alert("Recarregando para Novo Pedido");
        location.reload();
    });
}


$(function () {
    desabilitarBotaoNovoPedido();
    $("#calc").click(function () {
        if (ValidaCampos()) {
            inserirDadosDiv();
            inserirColorBackground();
            desabilitarBotaoEHabilitarBotaoNovoPedido();
            atualizarPage();
        }
    });
});
