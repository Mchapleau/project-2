$(document).ready(function(){
  var x = 16;
  var grid = 0;
  var resetcolor = "blue";
  var currentcolor = "blue";

  var makesize = function() {
    if (x < 1 || x > 64 || isNaN(x) == true) {
      alert("Please choose a number between 1 and 64.");
    } else {
     var width = 650 / x;
     $(".box").css('width',width).css('height',width);
     multiplyboxes ();
   };
};
var tile = $(".box")
var multiplyboxes = function(){
  $(".box").not(':first').remove();
    grid = (x * x) - 2;
    for (var i=0; i<grid; i++) {
      tile.clone().insertAfter(tile);
        console.log(grid);
    };
};

     $('.btn-primary').click(function(){
       x = prompt("Choose a grid size between 1 and 64");
       makesize();
   });
});
