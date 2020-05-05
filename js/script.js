$(function () {
  objectFitImages();

  // ハンバーガーボタン
  $("#js-hamburgerButton").click(function () {
    $("body").toggleClass("is-navActive");
    if ("false" == $(this).attr("aria-expanded")) {
      $(this).attr("aria-expanded", true);
    } else {
      $(this).attr("aria-expanded", false);
    }
  });

  // members_listをslick化
  $(".js-members_list").slick({
    prevArrow: "<div class='members_prevArrow'></div>",
    nextArrow: "<div class='members_nextArrow'></div>",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
