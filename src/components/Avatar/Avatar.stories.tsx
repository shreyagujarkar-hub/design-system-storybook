import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Avatar Component — UEDP Design System

User profile avatar with image support, fallback initials, and status indicators.

### Token Bindings
| Property | Token Variable |
|----------|---------------|
| Fallback BG | \`--uedp-indigo-100\` |
| Fallback Text | \`--uedp-indigo-700\` |
| Online Badge | \`--uedp-emerald-500\` |
| Busy Badge | \`--uedp-rose-500\` |
| Border Radius | \`--uedp-rounded-full\` |
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    src: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy', 'away'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const ImageAvatar: Story = {
  args: {
    name: 'Shreya Gujarkar',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
    size: 'lg',
    status: 'online',
  },
};

export const InitialsFallback: Story = {
  args: {
    name: 'Shreya Gujarkar',
    size: 'lg',
    status: 'online',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar name="Shreya G" size="sm" status="online" />
      <Avatar name="Shreya G" size="md" status="busy" />
      <Avatar name="Shreya G" size="lg" status="away" />
      <Avatar name="Shreya G" size="xl" status="offline" />
    </div>
  ),
};
