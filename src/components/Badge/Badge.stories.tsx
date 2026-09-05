import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Badge Component — UEDP Design System

Pill badge matching the Figma Design System specification.
Default state features the rounded pill geometry, "more info" label, and the integrated circular orange info icon.

### Token Bindings
| Property | Token Variable | Value |
|----------|---------------|-------|
| Background | \`--uedp-base-white\` | \`#FFFFFF\` |
| Text Color | Charcoal | \`#2D1E12\` |
| Info Icon Fill | \`--uedp-orange-500\` | \`#F97316\` |
| Border Radius | \`--uedp-rounded-full\` | \`9999px\` (Pill) |
| Border Color | \`--uedp-slate-200\` | \`#E2E8F0\` |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'indigo', 'emerald', 'amber', 'rose', 'slate', 'sky'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset (Small, Medium, Large)',
      table: { defaultValue: { summary: 'md' } },
    },
    showInfoIcon: {
      control: 'boolean',
      description: 'Show circular orange info icon on the right',
      table: { defaultValue: { summary: 'true' } },
    },
    dot: {
      control: 'boolean',
      description: 'Show status dot indicator on the left',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Badge text label',
      table: { defaultValue: { summary: 'more info' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Small: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Medium: Story = {
  args: {
    variant: 'default',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Large: Story = {
  args: {
    variant: 'default',
    size: 'lg',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="default" size="md">more info</Badge>
      <Badge variant="indigo" dot>Indigo</Badge>
      <Badge variant="emerald" dot>Success</Badge>
      <Badge variant="amber" dot>Warning</Badge>
      <Badge variant="rose" dot>Critical</Badge>
      <Badge variant="sky" dot>Info</Badge>
      <Badge variant="slate" dot>Neutral</Badge>
    </div>
  ),
};
