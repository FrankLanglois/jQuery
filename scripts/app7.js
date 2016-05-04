/**
 * Created by flangloi on 2016-05-04.
 */
$(function(){
   // Direct Parent
   $("#btn1").click(function(){
       $("#btn10").click();
       $("aside").parent().css({"color": "red", "border": "2px solid red"});
       changeInputText("Returns Direct Parent.");
       hideBorder();
   });

    // All ancestors right up to <html> element.
    $("#btn2").click(function(){
        $("#btn10").click();
        $("aside").parents().css({"color": "blue", "border": "2px solid blue"});
        changeInputText("Returns the direct parent element of each <aside> elements.")
        hideBorder();
    });

    // All ancestors of all <aside> elements that are <ul> elements.
    $("#btn3").click(function(){
        $("#btn10").click();
        $("aside").parents("ul").css({"color": "yellow", "border": "2px solid yellow"});
        changeInputText("Returns all ancestors of all <aside> elements that are <ul> elements.");
        hideBorder();
    });

    // All ancestor elements between a <aside> and a <div> element.
    $("#btn4").click(function(){
        $("#btn10").click();
        $("aside").parentsUntil("div").css({"color": "orange", "border": "2px solid orange"});
        changeInputText("Returns all ancestor elements between a <aside> and a <div> element.");
        hideBorder();
    });

    // All elements that are direct children of each <div> elements.
    $("#btn5").click(function(){
        $("#btn10").click();
        $("div").children().css({"color": "purple", "border": "2px solid purple"});
        changeInputText("Returns all elements that are direct children of each <div> elements.");
        hideBorder();
    });

    //  All <p> elements with the class name "first", that are direct children of <div>.
    $("#btn6").click(function(){
        $("#btn10").click();
        $("div").children("p.first").css({"color": "red", "border": "2px solid red"});
        changeInputText('Return all <p> elements with the class name "first", that are direct children of <div>.');
        hideBorder();
    });

    $("#btn10").click(function(){
        $("aside").parents().css({"color": "black", "border": "2px solid black"});
        $("div").children().css({"color": "black", "border": "2px solid black"});
        $(".ancestors").css("color", "black");
        changeInputText("");
        hideBorder();

    });

    var hideBorder = function(){
        $("body").css({"border": "hidden"});
        $("html").css({"border": "hidden"});
    };

    var changeInputText = function(text){
        $("#input1").css("color","black");
        $("#input1").val(text);
    };
});