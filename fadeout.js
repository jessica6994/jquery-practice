//fadeOut will take element from full/set opacity to transparent
//can set slow/fast/number in miliseconds can also leave blank and default will run
//$("div").fadeOut();

//when button clicked fade out divs:

$("button").on("click", function(){
  $("div").fadeOut(1000);  //takes 1 second
})
//doesn't delete or reomve divs from the page - display is now set to none - therefore hidden
