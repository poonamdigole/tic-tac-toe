import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  });
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    const symbol = player === 1 ? "❌" : "⭕";

    if (board[1] === symbol && board[2] === symbol && board[3] === symbol) {
      setWinner(player);
    }

    else if (board[4] === symbol && board[5] === symbol && board[6] === symbol) {
      setWinner(player);
    }

    else if (board[7] === symbol && board[8] === symbol && board[9] === symbol) {
      setWinner(player);
    }

    else if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {
      setWinner(player);
    }

    else if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {
      setWinner(player);
    }

    else if (board[3] === symbol && board[6] === symbol && board[9] === symbol) {
      setWinner(player);
    }

    else if (board[1] === symbol && board[5] === symbol && board[9] === symbol) {
      setWinner(player);
    }

    else if (board[3] === symbol && board[5] === symbol && board[7] === symbol) {
      setWinner(player);
    }

    setPlayer(player === 1 ? 2 : 1)

  }


  const play = (boxNo) => {
    if (board[boxNo] !== "" || winner !== null) {
      return;
    }

    if (player === 1) {
      setBoard({ ...board, [boxNo]: "❌" })
    }
    else {
      setBoard({ ...board, [boxNo]: "⭕" })
    }

  }

  useEffect(() => {
    checkWinner();
  }, [board]);

  const reset = () => {
    setPlayer(1);
    setWinner(null);
    setBoard(
      {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: ""
      }
    );

  }

  return (
    <div className="App">
      <h1 className='text-center'>Tic-Tac-Toe</h1>

      <div className='player-container'>
        <h2>Player 1 : ❌</h2>
        <h2>Player 2 : ⭕</h2>
      </div>

      <h2 className='text-center'>Current Player: {player === 1 ? "❌" : "⭕"}</h2>
      {
        winner ? (
          <h1 className=' winner-text'>🥳 Winner is  {winner === 1 ? "Player 1 : ❌" : "Player 2 : ⭕"}</h1>
        ) : null
      }

      <div className='board'>

        <div className='row'>
          <div className='box' onClick={() => { play(1) }}>
            {board[1]} </div>
          <div className='box' onClick={() => { play(2) }}>
            {board[2]} </div>
          <div className='box' onClick={() => { play(3) }}>
            {board[3]}  </div>
        </div>

        <div className='row'>
          <div className='box' onClick={() => { play(4) }}>
            {board[4]} </div>
          <div className='box' onClick={() => { play(5) }}>
            {board[5]}  </div>
          <div className='box' onClick={() => { play(6) }}>
            {board[6]}  </div>
        </div>

        <div className='row'>
          <div className='box' onClick={() => { play(7) }}>
            {board[7]} </div>
          <div className='box' onClick={() => { play(8) }}>
            {board[8]}  </div>
          <div className='box' onClick={() => { play(9) }}>
            {board[9]} </div>
        </div>
      </div>

      <button type='button'
       onClick={reset}
       className='reset-btn'>
       Reset</button>

    </div>
  );
}



export default App;
