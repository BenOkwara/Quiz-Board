$(document).ready(function) {

  $("form#fwaweru").submit(function(event){
  var 1 = $("input:checkbox[name=blockElements]:checked").val();
  var 2 = $("input:checkbox[name=block]:checked").val();
  var 3 = $("input:checkbox[name=inlineElements]:checked").val();
  var 4 = $("input:checkbox[name=inline]:checked").val();
  var 5 = $("input:checkbox[name=github]:checked").val();
  var 6 = $("input:checkbox[name=type]:checked").val();

  var youScore = parseIn(1)+parseIn(2)+parseIn(3)+parseIn(4)+parseIn(5)+parseIn(6);
  $("youScore").text("HI THERE! HERE'S WHAT YOU SCORED: " +youScore + "%");
}
