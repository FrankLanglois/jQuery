/**
 * Created by flangloi on 2016-04-27.
 */
$(function(){
   $("h2").text("jQuery Testsss!!!");

    $("p:first").text($("p:first").text() + " - Added Value!");

    $("#btn1").click(function(){
        $("ul li:first").hide();
    });

    $("#btn2").click(function(){
        $("ul li:first-child").hide();
    });

    $("#btn3").click(function(){
        $("[href]").hide();
    });
});