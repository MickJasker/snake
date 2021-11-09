import { useState } from 'react';
import { StyledHome } from './Home.style';
import Board from '../../organisms/Board/Board';
import KeyboardController from '../../organisms/KeyboardController/KeyboardController';
import type Direction from '../../../data/Direction';

export default function Home(): JSX.Element {
  const [keyboardDirection, setKeyboardDirection] = useState<Direction | null>(null);
  const [score, setScore] = useState(0);

  function onScoreIncrease(): void {
    setScore(score + 1);
  }

  function onGameOver(): void {
    setScore(0);
    alert(`GAME OVER - Score: ${score}`);
  }

  return (
    <StyledHome>
      <h1>SNAKE</h1>
      <h4>
        Score: {score} {score === 1 ? <>point</> : <>points</>}
      </h4>
      <Board
        size={32}
        onGameOver={onGameOver}
        onScoreIncrease={onScoreIncrease}
        keyboardDirection={keyboardDirection}
      />
      <KeyboardController onKeyboardControl={(direction) => setKeyboardDirection(direction)} />
    </StyledHome>
  );
}
