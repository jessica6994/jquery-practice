var text = $("input").text();

$("input").on("keypress", function(event){
  if(event.which === 13){
    $("li").html(text);
  };
});
