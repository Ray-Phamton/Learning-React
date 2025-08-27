import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import {TURNS} from "./constants.js"
import {checkWinner,checkEndGame} from "./logic/board.js"
import {WinnerModal} from "./components/WinnerModal.jsx"
import { SaveGameStorage,resetGameStorage } from "./logic/Storage.js"

export function App() {
  
  const [board,setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const[turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const[winner,setWinner] = useState(null)
  
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index)=>{
    //will not update the position if it is ocuped
    if(board[index] || winner) return
    //update board
    const newBoard = [...board]
    newBoard[index]=turn
    setBoard(newBoard)
    ///change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    SaveGameStorage({
      newBoard: newBoard,
      newTurn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className="board">
      <h1>tic-tac-toe</h1>  
      <button onClick = {resetGame}>Reset</button>
      <section className="game">
        {
          board.map((square,index) => {
            return(
              <Square 
               key={index}
               index={index}
               updateBoard={updateBoard}
               >
                {square}

               </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}
