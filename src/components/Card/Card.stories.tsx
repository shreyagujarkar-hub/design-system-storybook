import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Card Component — UEDP Design System

Flexible container component for grouping related content and actions.

### Token Bindings
| Property | Token Variable |
|----------|---------------|
| Background | \`--uedp-base-white\` / \`--uedp-slate-50\` |
| Border Radius | \`--uedp-rounded-xl\` |
| Max Width | \`--uedp-max-w-sm\` |
| Title Color | \`--uedp-slate-900\` |
| Subtitle Color | \`--uedp-slate-500\` |
| Border Color | \`--uedp-slate-100\` / \`--uedp-slate-200\` |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'flat'],
    },
    padding: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Design System Card',
    subtitle: 'Figma to React Token Integration',
    children: 'This card component dynamically applies geometry, elevation, typography, and color tokens from the UEDP system.',
    variant: 'elevated',
    padding: 'md',
  },
};

export const WithImageAndFooter: Story = {
  args: {
    headerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    title: 'Generative Design System',
    subtitle: 'Automated token parsing & React output',
    children: 'Discover how bound variables and base palette JSON configurations synthesize clean React components.',
    footer: (
      <>
        <Button variant="ghost" size="sm">Dismiss</Button>
        <Button variant="primary" size="sm">Explore</Button>
      </>
    ),
    variant: 'elevated',
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Variant',
    subtitle: 'Clean border delineation',
    children: 'Uses --uedp-slate-200 for crisp visual boundary without heavy drop shadows.',
    variant: 'outlined',
  },
};

export const Flat: Story = {
  args: {
    title: 'Flat Variant',
    subtitle: 'Subtle background fill',
    children: 'Blends seamlessly into card grids with soft --uedp-slate-50 background fill.',
    variant: 'flat',
  },
};
