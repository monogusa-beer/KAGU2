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
});
