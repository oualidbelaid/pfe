
$(document).ready(function () {
  //function 



  /* start navbar */
  $("#show_event").click(function (e) {
    e.preventDefault();
    $(".nav_m").toggleClass("active_event");
  });
  // $(".event ul a").click(function (e) {  
  //   $(".nav_m").removeClass("active_event");
  // });
  /* end navbar */

  /* start  menu */
  $("#bars").click(function (e) {
    e.preventDefault();
    $(".menu").toggleClass("active_menu");
    $(".list_ctg").removeClass("active_ctg");
    $(this).toggleClass("active_bars");
  });
  $(".menu .list_menu").children().click(function (e) {
    $(".menu .list-group .list-group-item").removeClass("active_ele");
    $(this).addClass("active_ele");
  });
  $(".menu .list_menu").children("a").click(function (e) {
    $(".menu .list_ctg a").removeClass("active_list_ctg");
    $("#show_ctg i").removeClass("fa-angle-up");
    $(".list_ctg").removeClass("active_ctg");
  })
  $("#show_ctg").click(function (e) {
    e.preventDefault();
    $(".menu").removeClass("active_menu");
    $("#show_ctg i").toggleClass("fa-angle-up");
    $(".list_ctg").toggleClass("active_ctg");
    $("#bars").addClass("active_bars");
    $(".menu .list_ctg a").removeClass("active_list_ctg");
  });
  $(".menu .list_ctg a").click(function (e) {
    $(this).siblings().removeClass("active_list_ctg");
    $(this).addClass("active_list_ctg");
  });
  $(".info").click(function (e) {
    $(".nav_m").removeClass("active_event");
  });
  /* end menu */


});