function updateHeader() {
    var margin = document.getElementById("header").scrollHeight;

    if (window.pageYOffset >= margin) {
        $("body").addClass("sticky");
    } else {
        $("body").removeClass("sticky");
    }
}
updateHeader();

$(window).scroll(function () {
    updateHeader();
});

$("#mobileNavToggle").click(function (event) {
    event.preventDefault();

    $("body").toggleClass("showMobileNav");
});

$("nav.mobile").bind('touchmove', function (e) {
    e.preventDefault();
})

$("#mobileNavToggle").bind('touchmove', function (e) {
    e.preventDefault();
})

$('body,html').click(function (e) {
    var menu = $("nav.mobile");
    var toggle = $("#mobileNavToggle");

    if (!menu.is(e.target) && !toggle.is(e.target) && menu.has(e.target).length === 0 && toggle.has(e.target).length === 0) {
        $("body").removeClass('showMobileNav');
    }
});

$('body,html').bind("touchmove", function (e) {
    var menu = $("nav.mobile");
    var toggle = $("#mobileNavToggle");

    if (!menu.is(e.target) && !toggle.is(e.target) && menu.has(e.target).length === 0 && toggle.has(e.target).length === 0) {
        $("body").removeClass('showMobileNav');
    }
});

$("#contactForm").submit(function(event) {
    event.preventDefault();

    $.post("/contact/", $("#contactForm").serialize(), function (data) {
        var iReturn = parseInt(data);
        if (iReturn == 0){
            swal("Success", "Message sent successfully", "success");
            $("#contactForm").trigger("reset");
        } else {
            swal("Failure", "Failed to send message, check your input an try again", "error")
        }
    })
})
