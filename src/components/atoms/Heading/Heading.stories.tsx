import type { Meta } from '@storybook/react';

import Heading, { HeadingProps } from './Heading';
import { createTextTemplate } from '../../../helpers/storybook/stories';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['title', 'large', 'medium', 'small'] as Array<HeadingProps['type']>,
      },
    },
    text: { control: 'text' },
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
  },
} as Meta;

const Template = createTextTemplate(Heading);

export const Default = Template.bind({});
Default.args = { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' };
