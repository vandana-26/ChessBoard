import "./styles.css";

const mainDiv = document.getElementById("app");

const chessTable = document.getElementById("chess-board");

createChess();

function createChess() {
  for (let i = 0; i < 8; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      let col = document.createElement("td");
      if ((i + j) % 2 == 0) {
        col.setAttribute("class", "whitecol");
        row.appendChild(col);
      } else {
        col.setAttribute("class", "blackcol");
        row.appendChild(col);
      }
    }
    chessTable.appendChild(row);
    chessTable.setAttribute("cellspacing", 0);
  }
  mainDiv.appendChild(chessTable);
}
