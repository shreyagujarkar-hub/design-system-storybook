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

Small status indicator tag using semantic color tokens and rounded pill geometry.

### Token Bindings
| Variant | Background Token | Text Token | Border Token |
|---------|------------------|------------|--------------|
| Indigo | \`--uedp-indigo-50\` | \`--uedp-indigo-700\` | \`--uedp-indigo-200\` |
| Emerald | \`--uedp-emerald-50\` | \`--uedp-emerald-700\` | \`--uedp-emerald-200\` |
| Amber | \`--uedp-amber-50\` | \`--uedp-amber-700\` | \`--uedp-amber-200\` |
| Rose | \`--uedp-rose-50\` | \`--uedp-rose-700\` | \`--uedp-rose-200\` |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['indigo', 'emerald', 'amber', 'rose', 'slate', 'sky'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'indigo',
    children: 'Active Component',
    dot: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="indigo" dot>Indigo</Badge>
      <Badge variant="emerald" dot>Success</Badge>
      <Badge variant="amber" dot>Warning</Badge>
      <Badge variant="rose" dot>Critical</Badge>
      <Badge variant="sky" dot>Info</Badge>
      <Badge variant="slate" dot>Neutral</Badge>
    </div>
  ),
};
