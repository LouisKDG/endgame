var navLinks = $(".first__navbar__list");
var hamburger = $(".first__navbar__image");
var $window = $(window);

//Toggles the .open class with every click on the hamburger menu
hamburger.click(function () {
    navLinks.toggleClass('open');
    $('.signup').removeClass('hidden');
})

//Deletes the .open when the hamburger menu is not necessary
$window.resize(function(){

    if( $window.width() > 1060) $(".first__navbar__list").removeClass('open');
    if( $window.width() > 1060) $(".signup").addClass('hidden');
})

$window.scroll(function() {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 0) {
        //clearHeader, not clearheader - caps H
        $(".first__navbar__list").removeClass("open");
    }
}); //missing );