/**
 * Created by flangloi on 2016-05-05.
 */
$(function(){
    // Ajax load syntax:  $(selector).load(URL,data,callback);
    //      The required URL parameter specifies the URL you wish to load.
    //      The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
    //      The optional callback parameter is the name of a function to be executed after the load() method is completed.

    // Loads the content of the file "demo_test.txt" into a specific <div> element.
    $("#btn1").click(function(){
        $("#div1").load("Files/demo_test.txt");
    });

    //Loads the content of the element with id="p1", inside the file "demo_test.txt", into a specific <div> element
    $("#btn2").click(function(){
        $("#div1").load("Files/demo_test.txt #p1");
    });

    $("#btn3").click(function(){
        $("#div1").load("Files/demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            if(statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });

    // Get 	$.get(URL,callback);
    $("#btn4").click(function(){
        $.get("Files/demo_test.asp", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });

    // Post  	$.post(URL,data,callback);
    $("#btn5").click(function(){
        $.post("Files/demo_test_post.asp",
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
    });

});