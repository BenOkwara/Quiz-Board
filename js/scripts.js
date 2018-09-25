/*  ====================Business logic=====================*/

$(document).ready(function() {

  $("form#fwaweru").submit(function(event){
  var Qn1 = $("input:radio[name=blockElements]:checked").val();
  var Qn2 = $("input:radio[name=block]:checked").val();
  var Qn3 = $("input:radio[name=inlineElements]:checked").val();
  var Qn4 = $("input:radio[name=inline]:checked").val();
  var Qn5 = $("input:radio[name=github]:checked").val();
  var Qn6 = $("input:radio[name=type]:checked").val();

  var youScore = parseInt(Qn1)+parseInt(Qn2)+parseInt(Qn3)+parseInt(Qn4)+parseInt(Qn5)+parseInt(Qn6);
  $("#youScore").text("HI THERE! HERE'S WHAT YOU SCORED: " +youScore + "%");

      //==== user Interface ====//

  $("form#fwaweru").hide();
  $("#youScore").show();
  $("#myemail").show();
    event.preventDefault();
   });

});
