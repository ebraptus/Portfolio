// Google Analytics
$(document).ready(function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-77147759-2');
})

(".progress .bar[data-percent]").each(function(){
  $(this).width($(this).attr("data-percent") + "%");
})

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

