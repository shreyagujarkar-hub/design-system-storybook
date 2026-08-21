import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Input Component — UEDP Design System

Form text field component bound to tokens for focus state rings, borders, labels, and error typography.

### Token Bindings
| Property | Token Variable |
|----------|---------------|
| Border Normal | \`--uedp-slate-300\` |
| Border Focus | \`--uedp-indigo-500\` |
| Border Error | \`--uedp-red-500\` |
| Label Color | \`--uedp-slate-700\` |
| Border Radius | \`--uedp-rounded-lg\` |
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'alex@example.com',
    helperText: 'We will never share your email with third parties.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Username',
    placeholder: 'enter username',
    error: 'Username is already taken. Please try another.',
    defaultValue: 'shreya',
  },
};

export const Disabled: Story = {
  args: {
    label: 'API Key',
    value: 'sk_live_9948201948102',
    disabled: true,
    helperText: 'Contact admin to rotate credentials.',
  },
};
