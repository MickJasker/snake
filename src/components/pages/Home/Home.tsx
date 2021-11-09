import { useState } from 'react';
import { StyledHome } from './Home.style';
import Board from '../../organisms/Board/Board';
import KeyboardController from '../../organisms/KeyboardController/KeyboardController';
import type Direction from '../../../data/Direction';
import useMount from '../../../hooks/useMount';

export default function Home(): JSX.Element {
  const [keyboardDirection, setKeyboardDirection] = useState<Direction | null>(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function onScoreIncrease(): void {
    setScore(score + 1);
  }

  function getHighScore(): number {
    const storedScore = localStorage.getItem('high-score');

    if (!storedScore) return 0;

    return Number(storedScore);
  }

  function saveHighScore(newScore: number): void {
    localStorage.setItem('high-score', newScore.toString());
    setHighScore(score);
  }

  useMount(() => setHighScore(getHighScore()));

  function onGameOver(): void {
    if (highScore < score) {
      saveHighScore(score);
      setScore(0);
      alert(`GAME OVER - NEW HIGH SCORE: ${score}`);
    } else {
      setScore(0);
      alert(`GAME OVER - Score: ${score}`);
    }
  }

  return (
    <StyledHome>
      <h1>SNAKE</h1>
      <h4>
        Score: {score} {score === 1 ? <>point</> : <>points</>}
        {highScore >= 1 && (
          <>
            <br />
            High score: {highScore} {highScore === 1 ? <>point</> : <>points</>}
          </>
        )}
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
