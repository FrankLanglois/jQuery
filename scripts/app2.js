/**
 * Created by flangloi on 2016-04-27.
 */
$(function(){
    $("#flip1").click(function(){
        $("#panel").slideDown("slow");
    });

    $("#flip2").click(function(){
        $("#panel").slideUp();
    });

    $("#flip3").click(function(){
        //$("#panel").slideToggle();
        $("#panel").slideToggle(1000);
    });

});