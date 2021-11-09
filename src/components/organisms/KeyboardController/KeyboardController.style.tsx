import styled, { css } from 'styled-components';

export const StyledKeyboardController = styled.div`
  margin: 15px;
  gap: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const StyledKey = styled.div<{ active: boolean }>`
  line-height: 1em;
  padding: 10px 8px 8px;
  border: solid 1px #555;
  border-radius: 5px;

  &:nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  &:nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  &:nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  &:nth-child(4) {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }

  ${({ active }) =>
    active &&
    css`
      border-color: red;
    `}
`;
