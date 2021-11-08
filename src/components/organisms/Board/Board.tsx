import { StyledBoard, StyledCell } from './Board.style';

export type BoardProps = {
  size: number;
};

export default function Board({ size }: BoardProps): JSX.Element {
  const cellAmount = size * size;
  const cellArray = Array.from(new Array(cellAmount).keys());
  return (
    <StyledBoard width={size}>
      {cellArray.map((item) => {
        const row = Math.ceil((item + 1) / size);
        const column = Math.round(((item + 1) / size + 1 - row) * size);
        return <StyledCell data-pos={`${row}/${column}`} data-item={item + 1} key={item} />;
      })}
    </StyledBoard>
  );
}
