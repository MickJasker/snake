import type { Meta } from '@storybook/react';

import Subtitle from './Subtitle';
import { createTextTemplate } from '../../../helpers/storybook/stories';

export default {
  title: 'Subtitle',
  component: Subtitle,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

const Template = createTextTemplate(Subtitle);

export const Default = Template.bind({});
