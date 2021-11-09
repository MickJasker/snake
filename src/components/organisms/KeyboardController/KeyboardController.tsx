import { useCallback, useEffect, useState } from 'react';
import { StyledKey, StyledKeyboardController } from './KeyboardController.style';
import Direction from '../../../data/Direction';

export type KeyboardControllerProps = {
  onKeyboardControl?: (direction: Direction | null) => void;
};

export default function KeyboardController({
  onKeyboardControl,
}: KeyboardControllerProps): JSX.Element {
  const [pressedDirection, setPressedDirection] = useState<Direction | null>(null);

  const changeDirection = useCallback(
    (direction: Direction | null) => {
      setPressedDirection(direction);

      if (onKeyboardControl) onKeyboardControl(direction);
    },
    [onKeyboardControl, setPressedDirection],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'w' || event.key === 'ArrowUp') {
        changeDirection(Direction.Up);
      }

      if (event.key === 'd' || event.key === 'ArrowRight') {
        changeDirection(Direction.Right);
      }

      if (event.key === 's' || event.key === 'ArrowDown') {
        changeDirection(Direction.Down);
      }

      if (event.key === 'a' || event.key === 'ArrowLeft') {
        changeDirection(Direction.Left);
      }
    },
    [changeDirection],
  );

  const onKeyUp = useCallback(() => {
    changeDirection(null);
  }, [changeDirection]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);

  return (
    <StyledKeyboardController>
      <StyledKey active={pressedDirection === Direction.Up}>⬆️</StyledKey>
      <StyledKey active={pressedDirection === Direction.Left}>⬅️</StyledKey>
      <StyledKey active={pressedDirection === Direction.Down}>⬇️</StyledKey>
      <StyledKey active={pressedDirection === Direction.Right}>➡️</StyledKey>
    </StyledKeyboardController>
  );
}
