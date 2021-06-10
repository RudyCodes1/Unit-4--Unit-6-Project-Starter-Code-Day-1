$(".first-pic").dblclick(function() {
    $(".first-pic").css("color", "orange");
});

$(".second-pic").dblclick(function() {
    $(".second-pic").css("color", "orange");
});

$(".yuna").dblclick(function() {
    $(".yuna").css("color", "orange");
});

$(".shimura").dblclick(function() {
    $(".shimura").css("color", "orange");
});

$(".aboutme").click(function() {
    $(".aboutmeinfo").toggle();
    $(".aboutme").css("color", "red");

});

$("h1").click(function() {
    $(".jins-face").slideToggle();
    $("h1").css("color", "red");
});

$(".updates").click(function() {
    $(".update_info").toggle();
    $(".updates").css("color", "red");

});

$(".fri-fam").click(function() {
    $(".fri-fam-info").toggle();
    $(".fri-fam").css("color", "red");
});

$("html").hover(function() {
    $("html").fadeIn();
});