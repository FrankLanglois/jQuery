/**
 * Created by flangloi on 2016-05-04.
 */
$(function(){
   // Direct Parent
   $("#btn1").click(function(){
       $("#btn10").click();
       $("aside").parent().css({"color": "red", "border": "2px dotted red"});
       changeInputText("Direct Parent of the Asside.");
       hideBorder();
   });

    // All ancestors right up to <html> element.
    $("#btn2").click(function(){
        $("#btn10").click();
        $("aside").parents().css({"color": "blue", "border": "2px dotted blue"});
        changeInputText("Direct parent element of each <aside> elements.")
        hideBorder();
    });

    // All ancestors of all <aside> elements that are <ul> elements.
    $("#btn3").click(function(){
        $("#btn10").click();
        $("aside").parents("ul").css({"color": "yellow", "border": "2px dotted yellow"});
        changeInputText("All ancestors of all <aside> elements that are <ul> elements.");
        hideBorder();
    });

    // All ancestor elements between a <aside> and a <div> element.
    $("#btn4").click(function(){
        $("#btn10").click();
        $("aside").parentsUntil("div").css({"color": "orange", "border": "2px dotted orange"});
        changeInputText("All ancestor elements between a <aside> and a <div> element.");
        hideBorder();
    });

    // All elements that are direct children of each <div> elements.  Traverse a single level down the DOM tree
    $("#btn5").click(function(){
        $("#btn10").click();
        $("div").children().css({"color": "purple", "border": "2px dotted purple"});
        changeInputText("All elements that are direct children of each <div> elements.  Traverse a single level down the DOM tree");
        hideBorder();
    });

    //  All <p> elements with the class name "first", that are direct children of <div>.
    $("#btn6").click(function(){
        $("#btn10").click();
        $("div").children("p.first").css({"color": "red", "border": "2px dotted red"});
        changeInputText('All <p> elements with the class name "first", that are direct children of <div>.');
        hideBorder();
    });

    // All <aside> elements that are descendants of <div>.
    $("#btn7").click(function(){
        $("#btn10").click();
        $("div").find("aside").css({"color": "blue", "border": "2px dotted blue"});
        changeInputText('All <aside> elements that are descendants of <div>.');
        hideBorder();
    });

    // All elements that are descendants of <ul>.
    $("#btn8").click(function(){
        $("#btn10").click();
        $("ul").find("*").css({"color": "brown", "border": "2px dotted brown"});
        changeInputText('All elements that are descendants of <ul>.');
        hideBorder();
    });

    // Reset all elements to black and solid.
    $("#btn10").click(function(){
        $("aside").parents().css({"color": "black", "border": "2px solid black"});
        $("div").find("*").css({"color": "black", "border": "2px solid black"});
        $(".ancestors").css("color", "black");
        changeInputText("");
        hideBorder();

    });

    // All element that are siblings of <aside>.
    $("#btn11").click(function(){
        $("#btn10").click();
        $("aside").siblings().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('All elements that are siblings of <aside>.');
        hideBorder();
    });

    // All aside elements that are siblings of <p>.
    $("#btn12").click(function(){
        $("#btn10").click();
        $("p").siblings("aside").css({"color": "green", "border": "2px dotted green"});
        changeInputText('All aside elements that are siblings of <p>.');
        hideBorder();
    });

    // Next sibling of <p>.
    $("#btn13").click(function(){
        $("#btn10").click();
        $("p").next().css({"color": "blue", "border": "2px dotted blue"});
        changeInputText('Next sibling of <p>.');
        hideBorder();
    });

    // All next siblings of <p>.
    $("#btn14").click(function(){
        $("#btn10").click();
        $("p").nextAll().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('All next siblings of <p>.');
        hideBorder();
    });

    // All next sibling elements between a <p> and another <p> element.
    $("#btn15").click(function(){
        $("#btn10").click();
        $("p").nextUntil("p").css({"color": "yellow", "border": "2px dotted yellow"});
        changeInputText('All next sibling elements between a <p> and another <p> element.');
        hideBorder();
    });

    // Prev sibling of <p>.
    $("#btn16").click(function(){
        $("#btn10").click();
        $("p").prev().css({"color": "blue", "border": "2px dotted blue"});
        changeInputText('Prev sibling of <p>.');
        hideBorder();
    });

    // All prev siblings of <p>.
    $("#btn17").click(function(){
        $("#btn10").click();
        $("p").prevAll().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('All prev siblings of <p>.');
        hideBorder();
    });

    // All prev sibling elements between a <p> and another <p> element.
    $("#btn18").click(function(){
        $("#btn10").click();
        $("p").prevUntil("p").css({"color": "yellow", "border": "2px dotted yellow"});
        changeInputText('All prev sibling elements between a <p> and another <p> element.');
        hideBorder();
    });

    // All prev siblings of <p>.
    $("#btn17").click(function(){
        $("#btn10").click();
        $("p").prevAll().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('All prev siblings of <p>.');
        hideBorder();
    });

    // Selects the first <label> element inside the first <div> element.
    $("#btn20").click(function(){
        $("#btn10").click();
        $("div label").first().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('selects the first <p> element inside the first <div> element.');
        hideBorder();
    });

    // Selects the last <label> element inside the last <div> element.
    $("#btn21").click(function(){
        $("#btn10").click();
        $("div label").last().css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('Selects the last <p> element inside the last <div> element.');
        hideBorder();
    });

    // Selects the second <p> element (index number 1).
    $("#btn22").click(function(){
        $("#btn10").click();
        $("div").eq(1).css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('Selects the second <p> element (index number 1).');
        hideBorder();
    });

    // Returns all <label> elements with class name "intro".
    $("#btn23").click(function(){
        $("#btn10").click();
        $("label").filter(".intro").css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('Returns all <label> elements with class name "intro".');
        hideBorder();
    });

    // Returns all <p> elements that do not have class name "intro".
    $("#btn24").click(function(){
        $("#btn10").click();
        $("label").not(".intro").css({"color": "orange", "border": "2px dotted orange"});
        changeInputText('Returns all <p> elements that do not have class name "intro".');
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