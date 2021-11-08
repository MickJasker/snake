import Heading from '../../atoms/Heading/Heading';
import { StyledHome } from './Home.style';
import Board from '../../organisms/Board/Board';

export default function Home(): JSX.Element {
  return (
    <StyledHome>
      <Heading type="title">SNAKE</Heading>
      <Board size={32} />
    </StyledHome>
  );
}
