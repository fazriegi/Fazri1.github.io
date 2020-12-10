let isLightMode = true;
$(".input").click(function () {
    if (isLightMode) {
      $("html, body").css("backgroundColor", "#2b0b0b");
      for (let i = 0; $(".card")[i]; i++) {
        $(".card").css("backgroundColor", "#2b0b0b");
        $(".layer-product").css("backgroundColor", "#48120e");
      }
      $("html, body").css("color", "#ecf0f1");
      for (let i = 0; $('.card')[i]; i++) {
        $(".card, .layer-product").css("color", "#ecf0f1");
      }
      isLightMode = false;
    } else {
      $("html, body").css("backgroundColor", "#ecf0f1");
      for (let i = 0; $(".card")[i]; i++) {
        $(".card, .layer-product").css("backgroundColor", "#ecf0f1");
      }
      $("html, body").css("color", "#2c3e50");
      for (let i = 0; $(".card")[i]; i++) {
        $(".card, .layer-product").css("color", "#2c3e50");
      }
      isLightMode = true;
    }
});

$('.nav-link').click(function(e){
    let tujuan = $(e.target).attr('href');

    $('html, body').animate({
        scrollTop: $(tujuan).offset().top - 50
    }, 650, 'easeInOutExpo');

    e.preventDefault();
})
