console.log("in function");

function createInitialChessBoard() {
  function nextHeader(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
  }


  function populateInitialChessPieces() {
    function populateBlackInitialPieces() {
      // populating other pieces
      function populateOtherPieces() {
        document.getElementById('8a').innerHTML = "&#9820";
        document.getElementById('8b').innerHTML = "&#9822";
        document.getElementById('8c').innerHTML = "&#9821";
        document.getElementById('8d').innerHTML = "&#9819";
        document.getElementById('8e').innerHTML = "&#9818";
        document.getElementById('8f').innerHTML = "&#9821";
        document.getElementById('8g').innerHTML = "&#9822";
        document.getElementById('8h').innerHTML = "&#9820";
      }


      //populating black Pawn
      var row = document.getElementById('row7').getElementsByClassName('ChessPieces');
      for (v of row) {
        v.innerHTML = "&#9823";
      }
      populateOtherPieces();
    }

    function populateWhiteInitialPieces() {

      // populating other pieces
      function populateOtherPieces() {
        document.getElementById('1a').innerHTML = "&#9814";
        document.getElementById('1b').innerHTML = "&#9816";
        document.getElementById('1c').innerHTML = "&#9815";
        document.getElementById('1d').innerHTML = "&#9813";
        document.getElementById('1e').innerHTML = "&#9812";
        document.getElementById('1f').innerHTML = "&#9815";
        document.getElementById('1g').innerHTML = "&#9816";
        document.getElementById('1h').innerHTML = "&#9814";
      }

      //populating white Pawn
      var row = document.getElementById('row2').getElementsByClassName('ChessPieces');
      for (v of row) {
        v.innerHTML = "&#9817";
      }
      populateOtherPieces();
    }

    populateBlackInitialPieces();
    populateWhiteInitialPieces();
  }

  var body = document.getElementById('body');
  var table = document.createElement('table');
  table.id = "chessTable";

  // creating headers
  var temp = 'a';
  var thead = document.createElement('thead');
  for (var i = 0; i < 10; i++) {
    if (i == 0 || i == 9) {
      var header = document.createElement('th');
      header.innerHTML = " ";
      if (i == 0) {
        header.classList.add("leftNumber");
      } else if (i == 9) {
        header.classList.add("rightNumber");
      }
      thead.appendChild(header);
    } else {
      var header = document.createElement('th');
      header.innerHTML = temp;
      temp = nextHeader(temp);
      thead.appendChild(header);
    }
  }
  table.appendChild(thead);


  // creating main data
  var tbody = document.createElement('tbody');
  for (var i = 0; i < 8; i++) {
    var temp = 'a';
    var row = document.createElement('tr');
    row.id = "row" + (8 - i);
    for (var j = 0; j < 10; j++) {
      var data = document.createElement('td');
      if (j == 0 || j == 9) {
        data.innerHTML = 8 - i;
        if (j == 0) {
          data.classList.add('leftNumber');
        } else if (j == 9) {
          data.classList.add('rightNumber');
        }
      } else {
        data.id = "" + (8 - i) + temp;
        temp = nextHeader(temp);
        data.classList.add('ChessPieces');
        data.innerHTML = '';
      }

      row.appendChild(data);
    }

    tbody.appendChild(row);
  }
  table.appendChild(tbody);


  // creating footer
  var temp = 'a';
  var tfoot = document.createElement('tfoot');
  var footerRow = document.createElement('tr');
  for (var i = 0; i < 10; i++) {
    if (i == 0 || i == 9) {
      var foot = document.createElement('th');
      foot.innerHTML = " ";
      if (i == 0) {
        foot.classList.add("leftNumber");
      } else if (i == 9) {
        foot.classList.add("rightNumber");
      }
      footerRow.appendChild(foot);
    } else {
      var foot = document.createElement('th');
      foot.innerHTML = temp;
      temp = nextHeader(temp);
      footerRow.appendChild(foot);
    }
  }
  tfoot.appendChild(footerRow);
  table.appendChild(tfoot);


  body.appendChild(table);

  populateInitialChessPieces();
}

createInitialChessBoard();

$(document).ready(function() {
  $('#sourceRow').change({
    color: 'blue'
  }, changeColorOfSourcePiece);

  $('#sourceColumn').change({
    color: 'blue'
  }, changeColorOfSourcePiece);

  $('#destinationColumn').change({
    color: 'red'
  }, changeColorOfDestinationPiece);

  $('#destinationRow').change({
    color: 'red'
  }, changeColorOfDestinationPiece);

  $('#pieceMoveSubmitButton').click(movePiece);

});


function movePiece() {
  var sourceRow = $('#sourceRow');
  var sourceColumn = $('#sourceColumn');
  var data = `#${sourceRow.val()}${sourceColumn.val()}`;
  var sourcePieceData = $(data).html();
  $(data).html("").show("slow");

  var destinationRow = $('#destinationRow');
  var destinationColumn = $('#destinationColumn');
  var data = `#${destinationRow.val()}${destinationColumn.val()}`;
  $(data).html(sourcePieceData).show("slow");
  makeDefaultColor(event);
}

function makeDefaultColor(eventObject) {
  $(".ChessPieces").css("background-color", "rosybrown");
}

function changeColorOfSourcePiece(event) {
  var sourceRow = $('#sourceRow');
  var sourceColumn = $('#sourceColumn');
  var data = `#${sourceRow.val()}${sourceColumn.val()}`;
  // alert($(data).val());
  $(data).css("background-color", event.data.color);

  event.stopPropagation();
}

function changeColorOfDestinationPiece(event) {
  var destinationRow = $('#destinationRow');
  var destinationColumn = $('#destinationColumn');
  var data = `#${destinationRow.val()}${destinationColumn.val()}`;
  $(data).css("background-color", event.data.color);
  event.stopPropagation();
}
