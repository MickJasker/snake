import { useState } from 'react';
import Heading from '../../atoms/Heading/Heading';
import { StyledHome } from './Home.style';
import Board from '../../organisms/Board/Board';
import KeyboardController from '../../organisms/KeyboardController/KeyboardController';
import type Direction from '../../../data/Direction';

export default function Home(): JSX.Element {
  const [keyboardDirection, setKeyboardDirection] = useState<Direction | null>(null);

  return (
    <StyledHome>
      <Heading type="title">SNAKE</Heading>
      <Board
        size={32}
        onGameOver={() => alert('game over')}
        keyboardDirection={keyboardDirection}
      />
      <KeyboardController onKeyboardControl={(direction) => setKeyboardDirection(direction)} />
    </StyledHome>
  );
}
