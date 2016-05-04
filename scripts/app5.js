/**
 * Created by flangloi on 2016-05-04.
 */
$(function(){

    // Returns the background-color value of the FIRST matched element
    $("#btn1").click(function(){
        alert("Background color = " + $("p").css("background-color"));
    });

    // Change one property.
    $("#btn2").click(function(){
        $("p").css("background-color", "yellow");
    });

    // Change multiple properties.
    $("#btn3").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });

    $("#btn4").click(function(){
        $("p").css("font-size", "100%");
        $("#p1").css("background-color", "#ff0000");
        $("#p2").css("background-color", "#00ff00");
        $("#p3").css("background-color", "#0000ff");
    });

});