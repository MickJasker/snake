import styled, { CSSObject } from 'styled-components';

// casting the object as `CSSObject` for correctness and auto-completion
const config = {
  title: { fontSize: 96, fontWeight: 750 } as CSSObject,
  large: { fontSize: 32 } as CSSObject,
  medium: { fontSize: 24 } as CSSObject,
  small: { fontSize: 18 } as CSSObject,
} as const;

/**
 * Used to define the custom configuration for the headings.
 */
export type HeadingType = keyof typeof config;

/**
 * These types are available for the heading component. Keep in mind that by default the type also
 * defines the tag that is used to render out the component. So if you choose to use the type `h2`
 * it will also render out a `<h2>` tag.
 */
export type StyledHeadingProps = {
  type: HeadingType;
};

export const StyledHeading = styled.h1<StyledHeadingProps>`
  ${(p) => config[p.type]};

  line-height: 1em;
  margin: 0;
`;
