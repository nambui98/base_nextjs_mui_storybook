// import { StoryFn, Meta,StoryObj  } from '@storybook/react';
// import Button from './Button';
// import Button from './Button';

// export default {
//   component: Button,
// } as Meta <typeof Button>;

// const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// export const Default = Template.bind({});

// Default.args = {
//   label: 'Order Pizza',
// };
// import type { Meta, StoryObj } from '@storybook/react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// const meta: Meta<typeof Button> = { title: 'button', component: Button };
const meta: Meta<typeof Button> = {
  title: 'Example/Header',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { label: 'nam bui' } };
export const PrimaryOnDark: Story = {
  ...Primary,

  parameters: {},
};
