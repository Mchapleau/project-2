

$(document).ready(function(){
  var x = 16;
  var grid = 0;


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
    grid = (x * x - 1) ;
    for (var i=0; i<grid; i++) {
      tile.clone().insertAfter(tile);
    };
};

     $('.btn1').click(function(){
       x = prompt("Choose a grid size between 1 and 64");
       makesize();
   });
 });
