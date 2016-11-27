$(function () {
    $('*').on('click', function (e) {
        e.stopPropagation();
        new heartAni(e.pageY, e.pageX);
    });

    function heartAni(top, left, d) {
        var heart = $('<i class="fa fa-heart"></i>').css({
            "position": "absolute",
            "top": top - 20,
            "left": left - 8,
            "color": "#" + (~~(Math.random() * (1 << 24))).toString(16)
        });
        $('body').append(heart);
        heart.animate({top: top-60+"px"}, {duration: d || 500, easing: "linear", complete: function () {
            this.remove();
        }});
    }
});