
const board = [];

function play(clickedId) {
  const playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById(clickedId);


  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }
  console.log(board);

  const topLeft = board[0]
  const topCenter = board[1]
  const topRight = board[2]
  const middleLeft = board[3]
  const middleCenter = board[4]
  const middleRight = board[5]
  const BottomLeft = board[6]
  const BottomCenter = board[7]
  const BottomRight = board[8]


  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
  }

  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`)
    return;
  }

  if (BottomLeft !== undefined && BottomLeft === BottomCenter && BottomLeft === BottomRight) {
    alert(`${BottomLeft} is the winner`)
    return;
  }

  if (topLeft !== undefined && topLeft === middleLeft && topLeft === BottomLeft) {
    alert(`${topLeft} is the winner`)
    return;
  }

  if (topCenter !== undefined && topCenter === middleCenter && topCenter === BottomCenter) {
    alert(`${topCenter} is the winner`)
    return;
  }

  if (topRight !== undefined && topRight === middleRight && topRight === BottomRight) {
    alert(`${topRight} is the winner`)
    return;
  }

  if (topLeft !== undefined && topLeft === middleCenter && topLeft === BottomRight) {
    alert(`${topLeft} is the winner`)
    return;
  }

  if (BottomLeft !== undefined && BottomLeft === middleCenter && BottomLeft === topRight) {
    alert(`${BottomLeft} is the winner`)
    return;
  }


  const boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }

  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}


