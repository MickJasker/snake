import styled, { css } from 'styled-components';

export const StyledBoard = styled.div<{
  width: number;
}>`
  display: grid;
  grid-template-columns: repeat(${({ width }) => width}, 1fr);
  background: #555;
  gap: 1px;
  border: solid 1px #555;
`;

export const StyledCell = styled.div<{ active: boolean; objective: boolean }>`
  background: #000;
  width: 20px;
  height: 20px;

  ${({ objective }) =>
    objective &&
    css`
      background: blue;
    `}

  ${({ active }) =>
    active &&
    css`
      background: red;
    `}
`;
