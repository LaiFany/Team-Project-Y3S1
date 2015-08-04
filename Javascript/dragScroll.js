var clicked = false, clickY;
$(document).on({
    'mousemove': function (e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function (e) {
        clicked = true;
        clickY = e.pageY;
        $('html').addClass('blockSelection').css('cursor', 'move');
    },
    'mouseup': function () {
        clicked = false;
        $('html').removeClass('blockSelection').css('cursor', 'auto');
    }
});

var updateScrollPos = function (e) {
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}