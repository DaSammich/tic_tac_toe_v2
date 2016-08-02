function compMove() {
  var x = Math.floor((Math.random() * 10));
}

function checkWin() {

  // horizontals
  if (board[0] != '&nbsp;' && board[0] == board[1] && board[0] == board[2]) {
    return [0, 1, 2, board[0]];  
  }
  if (board[3] != '&nbsp;' && board[3] == board[4] && board[3] == board[5]) {
    return [3, 4, 5, board[3]];  
  }
  if (board[6] != '&nbsp;' && board[6] == board[7] && board[6] == board[8]) {
    return [6, 7, 8, board[6]];  
  }

  // verticals
  if (board[0] != '&nbsp;' && board[0] == board[3] && board[0] == board[6]) {
    return [0, 3, 6, board[0]];  
  }
  if (board[1] != '&nbsp;' && board[1] == board[4] && board[1] == board[7]) {
    return [1, 4, 7, board[1]];  
  }
  if (board[2] != '&nbsp;' && board[2] == board[5] && board[2] == board[8]) {
    return [2, 5, 8, board[2]];  
  }

  // diagonals
  if (board[0] != '&nbsp;' && board[0] == board[4] && board[0] == board[8]) {
    return [0, 4, 8, board[0]];  
  }
  if (board[2] != '&nbsp;' && board[2] == board[4] && board[2] == board[6]) {
    return [2, 4, 6, board[2]];  
  }

  // draw
  if (board.indexOf("&nbsp;") == -1) {
    return "nobody";
  }
} 
