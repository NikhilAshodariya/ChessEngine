function loadChessBoard() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      // console.log(arr);
      var CB = arr["chessBoard"];
      // innerCreateInitialChessBoard(chessBoard);
      // createChessBoard(chessBoard);

      // console.log(CB);
      populateChessBoard(CB);
    }
  };

  xhttp.open("GET", "/chessBoard/getChessBoard", true);
  xhttp.send();
};

function nextHeader(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

function populateChessBoard(CB) {
  var i = 8;
  for (var i = 8; i > 0; i--) {
    var k = 0;
    for (var j = "a"; k < 8; k++) {
      var intermediateData = i + j;
      if (CB[intermediateData] != undefined) {
        $("#"+intermediateData).html(CB[intermediateData]);
      } else {
        $("#"+intermediateData).html("");
      }
      j = nextHeader(j);
    }
  }
}

/*
function createChessBoard(chessBoard) {
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
}
*/

/*
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
*/

/*
function innerCreateInitialChessBoard(chessBoard) {
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

function createInitialChessBoard() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XMLHttpRequest.DONE && xhttp.status === 200) {
      arr = JSON.parse(xhttp.responseText);
      console.log(arr);
      var chessBoard = arr["chessBoard"];
      innerCreateInitialChessBoard(chessBoard);
      // if (arr["moveStatus"] == "valid") {
      //   var sourceRow = $('#sourceRow');
      //   var sourceColumn = $('#sourceColumn');
      //   var data = `#${sourceRow.val()}${sourceColumn.val()}`;
      //   var sourcePieceData = $(data).html();
      //   $(data).html("");
      //
      //   var destinationRow = $('#destinationRow');
      //   var destinationColumn = $('#destinationColumn');
      //   var data = `#${destinationRow.val()}${destinationColumn.val()}`;
      //   $(data).html(sourcePieceData);
      //   // alert("move is valid dude congo")
      // } else {
      //   alert("move is not valid dude");
      // }
      // loadStackArea(arr["stackData"]);
    }
  };

  xhttp.open("GET", "/getChessBoard", true);
  xhttp.send();
}
*/
