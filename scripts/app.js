/**
 * Created by flangloi on 2016-04-27.
 */
$(function(){
   $("h2").text("jQuery Testsss!!!");

    $("p:first").text($("p:first").text() + " - Added Value!");

    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });

    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });


    $("#btn1").click(function(){
        //$("ul li:first").hide();
        //$("ul li:first").hide(1000);  // milliseconds
        //$("ul li:first").hide("slow");
        $("ul li:first").hide("fast");
    });

    $("#btn2").click(function(){
        $("ul li:first-child").hide();
    });

    $("#btn3").click(function(){
        $("[href]").hide();
    });

    $("#btn4").click(function(){
        $("#list2").toggle();
    });

    $("#btn5").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(2000);
    });

    $("#btn6").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(2000);
    });

    $("#btn7").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(2000);
    });

    $("#btn8").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });


    $("#btn1").hover(function(){
        $("#divMessage").text("You entered btn2 Arial space!");
    },
        function(){
            $("#divMessage").text("");
        });

    $("#btn2").mouseenter(function(){
        $("#divMessage").text("You entered btn2 Arial space!");
    });

    $("#btn2").mouseleave(function(){
        $("#divMessage").text("");
    });

    $("#btn3").mouseover(function(){
        //alert("You entered btn3 Arial space!");
    });


});