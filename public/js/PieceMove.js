var whichPlayerMove = "white";

$(document).ready(function() {
  $("#pieceMoveSubmitButton").click(pieceMove);
  $("#playerMoveStatus").html(whichPlayerMove+" Player Move")
});

function pieceMove() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      console.log(arr);
      if (arr["moveStatus"] == "valid") {
        var sourceRow = $('#sourceRow');
        var sourceColumn = $('#sourceColumn');
        var data = `#${sourceRow.val()}${sourceColumn.val()}`;
        var sourcePieceData = $(data).html();
        $(data).html("");

        var destinationRow = $('#destinationRow');
        var destinationColumn = $('#destinationColumn');
        var data = `#${destinationRow.val()}${destinationColumn.val()}`;
        $(data).html(sourcePieceData);
        // alert("move is valid dude congo")
        if (whichPlayerMove == "white") {
          whichPlayerMove = "black";
        } else {
          whichPlayerMove = "white";
        }
        $("#playerMoveStatus").html(whichPlayerMove+" Player Move")

      } else {
        alert("move is not valid dude");
      }
      // loadStackArea(arr["stackData"]);
      loadChessBoard();
      $("#sourceRow").val("");
      $("#sourceColumn").val("");
      $("#destinationRow").val("");
      $("#destinationColumn").val("");



    }
  };
  var from = $("#sourceRow").val() + $("#sourceColumn").val();
  var to = $("#destinationRow").val() + $("#destinationColumn").val();
  xhttp.open("GET", "/chessBoard/move/" + from + "/" + to, true);
  xhttp.send();

  console.log("from in piece Move " + from);
  console.log("to in piece Move " + to);
}
