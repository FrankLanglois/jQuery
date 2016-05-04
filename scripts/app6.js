/**
 * Created by flangloi on 2016-05-04.
 */

$(function(){

    // Height and Width
    $("#btn1").click(function(){
        var txt = "";
        txt += "Width: " + $("#div4").width() + "</br>";
        txt += "Height: " + $("#div4").height();
        $("#div4").html(txt);
    });

    // InnerHeight and InnerWidth
    $("#btn2").click(function(){
        var txt = "";
        txt += "Inner Width: " + $("#div4").innerWidth() + "</br>";
        txt += "Inner Height: " + $("#div4").innerHeight();
        txt += "</br></br></br>";
        txt += "Inner = width (or height) + (padding x2 )";
        $("#div4").html(txt);
    });

    // OuterHeight and OuterWidth
    $("#btn3").click(function(){
        var txt = "";
        txt += "Outer Width: " + $("#div4").outerWidth() + "</br>";
        txt += "Outer Height: " + $("#div4").outerHeight();
        txt += "</br></br></br>";
        txt += "Outer = width (or height) + (padding x2 ) + (border x2 )";
        $("#div4").html(txt);
    });

    // OuterHeight(true) and OuterWidth(true)
    $("#btn4").click(function(){
        var txt = "";
        txt += "Outer Width with true: " + $("#div4").outerWidth(true) + "</br>";
        txt += "Outer Height with true: " + $("#div4").outerHeight(true);
        txt += "</br></br></br>";
        txt += "Outer with true = width (or height) + (padding x2 ) + (border x2 ) + (margin x2)";
        $("#div4").html(txt);
    });

    // Document and Window Heights and Widths
    $("#btn5").click(function(){
        var txt = "";
        txt += "Document width/height: " + $(document).width();
        txt += "x" + $(document).height() + "\n";
        txt += "Window width/height: " + $(window).width();
        txt += "x" + $(window).height();
        alert(txt);
    });

    $("#btn6").click(function(){
        $("#div4").width(500).height(500);
    });

    $("#btn7").click(function(){
        $("#div4").width(400).height(150);
        $("#div4").html('');
    });
});