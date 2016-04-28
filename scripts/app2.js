/**
 * Created by flangloi on 2016-04-27.
 */
$(function () {
    var panel_1 = $("#panel");

    $("#flip1").click(function () {
        panel_1.slideDown("slow");
    });

    $("#flip2").click(function () {
        panel_1.slideUp();
    });

    $("#flip3").click(function () {
        //$("#panel").slideToggle();
        panel_1.slideToggle(3000);
    });

    $("#flip4").click(function () {
        panel_1.stop();
    });

    var div1 = $("#div1");

    // By default, all HTML elements have a static position, and cannot be moved.
    // To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!
    $("#btn1").click(function () {
        div1.animate({left: '250px'});
    });

    // With many params
    // All property names must be camel-cased when used with the animate() method:
    // You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on.
    $("#btn2").click(function () {
        div1.animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });

    // Using Relative Values
    $("#btn3").click(function () {
        div1.animate({
            left: '+=500px',
            height: '+=50px',
            width: '+=50px'
        });
    });

    // Using Pre-defined Values
    $("#btn4").click(function () {
        div1.animate({
            height: 'toggle'
        });
    });

    // Uses Queue Functionality
    $("#btn5").click(function () {
        div1.animate({height: '300px', opacity: '0.4'}, "slow");
        div1.animate({width: '300px', opacity: '0.8'}, "slow");
        div1.animate({height: '100px', opacity: '0.4'}, "slow");
        div1.animate({width: '100px', opacity: '0.8'}, "slow");
    });

    // Section and Text get bigger
    $("#btn6").click(function () {
        div1.animate({left: '150px', width: '200px'}, "slow");
        div1.animate({fontSize: '3em'}, "slow");
    });
    // Chaining different methods
    $("#btn7").click(function () {
        div1.css("color", "red").slideUp(3000).slideDown(3000);
    });
});