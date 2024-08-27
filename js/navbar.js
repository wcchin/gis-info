$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
      //$("#nav-burger-menu").addClass("typcn-th-small");
      //$("#nav-burger-menu").removeClass("typcn-th-menu");
      $("#nav-burger-menu").toggleClass("typcn-th-small");
      $("#nav-burger-menu").toggleClass("typcn-th-menu");


  });
});
