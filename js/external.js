$(document).ready(function(){
    $("#heading").click(function(){
        $(this).css("backgroundColor","blue");
    })
    $("#para").dblclick(function(){
        $(this).hide();

    })
})


$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("#div1").hide();
    });
});


Element Selector 

$(document).ready(function(){
    $("table *").css("backgroundColor","pink");
})

This Selector ="The query this Selector is used for selecting the current element"

$(document).ready(function(){
    $("button").click(function(){
        $(this).hide();
    });
});

ID SELECTOR

the jQuery #id selector use the id attribute of an html tag find the specific element. An id should be unique within a page so you should use of # id selector


$(document).ready(function(){
    $("#name").css("background-color","pink");
})

$(document).ready(function(){
    // $("p:last").css("backgroundColor","green");
    $("p:odd").css("backgroundColor","blue");
})
