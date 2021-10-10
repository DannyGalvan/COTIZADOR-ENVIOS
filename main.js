$(function(){

    $("#inlineRadio1").change(function(){
        $("#contenedor2 div").fadeIn();
        $("#imagencaja").fadeIn();
    })

    $("#inlineRadio2").change(function(){
        $("#contenedor2 div").fadeOut();
        $("#imagencaja").fadeOut();
    })  
})
