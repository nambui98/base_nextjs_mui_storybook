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

import Button from './Button';

const meta: Meta<typeof Button> = { title: 'button', component: Button as any };
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { label: 'Nam bui' } };
