jQuery(() => {
    var productos = $(".container__favoritos-box");
        $(window).scroll(function() {
            if (productos) {
                productos = $(".container__favoritos-box");
            }
            var scroll = jQuery(window).scrollTop();
            for (let i = 0; i < productos.length; i++) {
                let alturaProducto = $(`#${i+1}`).offset().top;

                if((alturaProducto - 750) < scroll){
                    $(`#${i+1}`).animate({opacity: 1},2250);
                }
            }
        });

    $("#footer_variedades").on("click", function(){
        $("html, body").animate({
            scrollTop: $("#section_variedades").offset().top}, 500);
    });

    $("#footer_vegetarianos").on("click", function(){
        $("html, body").animate({
            scrollTop: $("#section_vegetarianos").offset().top}, 500);
    });

    $("#footer_veganos").on("click", function(){
        $("html, body").animate({
            scrollTop: $("#section_veganos").offset().top}, 500);
    });
});