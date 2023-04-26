import { StoryFn, Meta  } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from '@mui/material';

export default {
  component: Button,
} as Meta <typeof Button>;

const Template: StoryFn<typeof Button> = (args:ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Order Pizza',
};