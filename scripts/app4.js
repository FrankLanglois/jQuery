/**
 * Created by flangloi on 2016-04-28.
 */
$(function(){

    $("#btn1").click(function(){
        $("h3, h4, p").addClass("blue");
        $("div").addClass("important");
    });

    $("#btn2").click(function(){
        $("#p1").addClass("blue important");
    });

    $("#btn3").click(function(){
        $("h3, h4, p").removeClass("blue important");
        $("div").removeClass("important");
    });

    $("#btn4").click(function(){
        $("#p2").toggleClass("blue important");
    });

});