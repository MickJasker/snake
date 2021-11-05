import { forwardRef, PropsWithChildren, Ref } from 'react';
import { StyledSubtitle, StyledSubtitleProps } from './Subtitle.styles';

type SubtitleProps = StyledSubtitleProps;

function Subtitle(
  { ...props }: PropsWithChildren<SubtitleProps>,
  ref: Ref<HTMLParagraphElement>,
): JSX.Element {
  return <StyledSubtitle ref={ref} {...props} />;
}

export default forwardRef<HTMLHeadingElement, PropsWithChildren<StyledSubtitleProps>>(Subtitle);
