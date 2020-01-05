//when button clicked fade out divs:

$("button").on("click", function(){
  $("div").fadeIn(1000, function(){
    alert("fade in completed - click me three times");
  });
});
