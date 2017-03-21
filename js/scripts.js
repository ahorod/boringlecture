$(document).ready(function() {
  $(".p1").click(function(){
    $("p").removeClass("highlight highlightB");
    $(".p1").addClass("highlight");
  });

  $(".p2").click(function(){
    $("p").removeClass("highlight highlightB");
    $(".p2").addClass("highlight");
});
  $(".pIntro").click(function(){
    $("p").removeClass("highlight");
    $(".pIntro").addClass("highlightB");
  });
});
