$("#switchButton").change(function (evento) {

    var checkbox = evento.target;

    if (checkbox.checked) {
        $(".precoMes").show();
        $(".precoAno").hide();

    }else{
        $(".precoMes").hide();
        $(".precoAno").show();
    }
});