/**
 * Created by flangloi on 2016-04-28.
 */
$(function () {
    // DOM allows programs and scripts to dynamically access and update the content, structure, and style of a document.
    //
    // text() - Sets or returns the text content of selected elements
    // html() - Sets or returns the content of selected elements (including HTML markup)
    // val() - Sets or returns the value of form fields

    var input1 = $("#input1");

    // GET Section
    $("#btn1").click(function () {
        input1.val("Text: " + $("#test").text());
    });
    $("#btn2").click(function () {
        input1.val("HTML: " + $("#test").html());
    });

    $("#btn3").click(function () {
        input1.val("HTML: " + $("#test2").val());
    });

    $("#btn4").click(function () {
        input1.val($("#w3s").attr("href"));
    });

    // SET Section
    $("#btn5").click(function () {
        $("#test").text('Hello World');
    });

    $("#btn6").click(function () {
        $("#test3").html('Hello World again!');
    });

    $("#btn7").click(function () {
        $("#test2").val('Helloooo Worlddddd!!!');
    });

    var w3s =  $("#w3s");
    $("#btn8").click(function () {
        w3s.text('Google');
        w3s.attr("href", 'https://www.google.com');
    });

    // ADD Section

    var pTest4 = $("#test4");

    $("#btn10").click(function () {
        pTest4.append(' - Helloooo Worlddddd 1 !!!');
    });

    $("#btn11").click(function () {
        pTest4.prepend('Helloooo Worlddddd 2 !!! - ');
    });

    $("#btn12").click(function () {
        pTest4.after('Helloooo Worlddddd 3 !!!');
    });

    $("#btn13").click(function () {
        pTest4.before('Helloooo Worlddddd 4 !!!');
    });

    // REMOVE Section

    var pTest5 = $("#test5");

    $("#btn20").click(function () {
        pTest5.remove('');
    });

    $("#btn21").click(function () {
        pTest5.empty();
    });


    $("#btn22").click(function () {
        if ($("#test5").length == 0) {
            var div1 = document.createElement("div");
            div1.id = "test5";

            var p1 = document.createElement("p");
            p1.innerHTML = "Bla bla bla bla ";
            p1.id="p1";
            p1.className += "testA";

            var p2 = document.createElement("p");
            p2.innerHTML = "Too much talking! ";
            p2.id="p2";
            p2.className += "testB";

            $("#removeTitle").after(div1);
            $("#test5").append(p1, p2);

            // We need to reassign the ref to the new div.
            pTest5 = $("#test5");
        }
    });

    $("#btn23").click(function () {
        $("p").remove(".testA");
    });

    $("#btn24").click(function () {
        $("p").remove(".testA, .testB");
    });

});

function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Create text with DOM
    $("#test4").append(txt1, txt2, txt3);     // Append new elements
}