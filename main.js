$(function(){

    $("#inlineRadio2").change(function(){
        var hola =  $("#inlineRadio2").attr("value");
        alert("usted ha seleccionado" + " " + hola);
        console.log(hola);
    })

    $("#agregando").click(function(){
        $("#agregando").after("<button>hola</button>");
        $("button").addClass("btn btn-forza");
    })

   
})

var j = document.getElementById("inlineRadio2");
j.addEventListener("change",saludo);

function saludo() 
{
    alert("hola " + j.value)
}