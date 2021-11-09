import { useEffect, useState } from 'react';
import { StyledBoard, StyledCell } from './Board.style';
import useTick from '../../../hooks/useTick';
import Direction from '../../../data/Direction';

export type BoardProps = {
  size: number;
  keyboardDirection: Direction | null;
  onGameOver?: () => void;
};

interface Position {
  row: number;
  column: number;
}

export default function Board({ size, onGameOver, keyboardDirection }: BoardProps): JSX.Element {
  const cellAmount = size * size;
  const cellArray = Array.from(new Array(cellAmount).keys());

  const [activeCell, setActiveCell] = useState({
    row: 2,
    column: 2,
  });

  const [bodyLength] = useState(12);

  const [visitedTiles, setVisitedTiles] = useState<ReadonlyArray<Position>>([]);

  const [isGameOver, setIsGameOver] = useState(false);

  const [direction, setDirection] = useState<Direction>(Direction.Right);

  useEffect(() => {
    if (keyboardDirection === null) return;
    if (keyboardDirection === direction) return;
    if (keyboardDirection === Direction.Up && direction === Direction.Down) return;
    if (keyboardDirection === Direction.Left && direction === Direction.Right) return;
    if (keyboardDirection === Direction.Down && direction === Direction.Up) return;
    if (keyboardDirection === Direction.Right && direction === Direction.Left) return;
    setDirection(keyboardDirection);
  }, [keyboardDirection, setDirection, direction]);

  function checkGameOverState(): boolean {
    if (activeCell.row > size || activeCell.column > size) return true;

    if (activeCell.row <= 0 || activeCell.column <= 0) return true;

    if (isTilePartOfBody(activeCell)) return true;

    return false;
  }

  useTick(() => {
    if (isGameOver) return;

    if (direction === Direction.Up) {
      setActiveCell({
        row: activeCell.row - 1,
        column: activeCell.column,
      });
    }
    if (direction === Direction.Down) {
      setActiveCell({
        row: activeCell.row + 1,
        column: activeCell.column,
      });
    }
    if (direction === Direction.Right) {
      setActiveCell({
        row: activeCell.row,
        column: activeCell.column + 1,
      });
    }
    if (direction === Direction.Left) {
      setActiveCell({
        row: activeCell.row,
        column: activeCell.column - 1,
      });
    }

    setVisitedTiles([...visitedTiles, activeCell]);

    if (checkGameOverState()) {
      setIsGameOver(true);

      if (onGameOver) onGameOver();
    }
  }, 100);

  function isTilePartOfBody(position: Position): boolean {
    if (bodyLength <= 1) return false;
    return (
      visitedTiles
        .slice(bodyLength * -1)
        .filter((element) => element.row === position.row && element.column === position.column)
        .length > 0
    );
  }

  return (
    <StyledBoard width={size}>
      {cellArray.map((item) => {
        const row = Math.ceil((item + 1) / size);
        const column = Math.round(((item + 1) / size + 1 - row) * size);
        const position: Position = { row, column };
        return (
          <StyledCell
            active={
              (activeCell.row === position.row && activeCell.column === position.column) ||
              isTilePartOfBody(position)
            }
            data-pos={`${position.row}/${position.column}`}
            data-item={item + 1}
            key={item}
          />
        );
      })}
    </StyledBoard>
  );
}
