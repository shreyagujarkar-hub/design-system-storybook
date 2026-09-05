import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, MailIcon, LockIcon } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Input Component — UEDP Design System

Pill-shaped input fields matching the Figma Login design specification.
Demonstrated across the 3 sequential states:
1. **Default**: Empty input fields with Mail and Lock icons.
2. **Error**: Displays \`*Incorrect password or email\` validation alert.
3. **Filled**: Populated input with registered user email (\`sheyagujarkar@gmail.bleh\`).
        `,
      },
    },
    backgrounds: {
      default: 'figma-grey',
      values: [
        { name: 'figma-grey', value: '#B9BFC5' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    shape: {
      control: 'select',
      options: ['pill', 'rounded'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

interface LoginFormProps {
  error?: string;
  emailValue?: string;
  showEmailIcon?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  error,
  emailValue,
  showEmailIcon = true,
}) => (
  <div
    style={{
      backgroundColor: '#B9BFC5',
      padding: '48px 32px',
      fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '440px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Title */}
      <h1
        style={{
          color: '#FF6B00',
          fontSize: '38px',
          fontWeight: 800,
          margin: '0 0 24px 0',
          letterSpacing: '-0.02em',
          textAlign: 'center',
        }}
      >
        Login
      </h1>

      {/* Form Fields */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Error Alert */}
        {error && (
          <div
            style={{
              color: '#DC2626',
              fontSize: '14px',
              fontWeight: 600,
              paddingLeft: '12px',
              marginBottom: '-6px',
            }}
          >
            {error}
          </div>
        )}

        {/* Email Input */}
        <Input
          type="email"
          shape="pill"
          placeholder="email"
          defaultValue={emailValue}
          leftIcon={showEmailIcon ? <MailIcon /> : undefined}
          style={!showEmailIcon ? { paddingLeft: '24px', color: '#94A3B8' } : undefined}
        />

        {/* Password Input */}
        <Input
          type="password"
          shape="pill"
          placeholder="password"
          leftIcon={<LockIcon />}
        />
      </div>

      {/* Forgot Password Link */}
      <a
        href="#forgot-password"
        onClick={(e) => e.preventDefault()}
        style={{
          color: '#FF6B00',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'underline',
          marginTop: '16px',
          marginBottom: '20px',
        }}
      >
        forgot password
      </a>

      {/* Log In Button */}
      <button
        type="button"
        style={{
          width: '100%',
          height: '52px',
          backgroundColor: '#FF6B00',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(255, 107, 0, 0.2)',
          transition: 'all 0.2s ease',
        }}
      >
        log in
      </button>

      {/* Footer Sign In Text */}
      <div
        style={{
          color: '#FF6B00',
          fontSize: '14px',
          fontWeight: 500,
          marginTop: '20px',
          textAlign: 'center',
        }}
      >
        Don't have an account{' '}
        <a
          href="#sign-in"
          onClick={(e) => e.preventDefault()}
          style={{
            color: '#FF6B00',
            textDecoration: 'underline',
            fontWeight: 600,
          }}
        >
          Sign in
        </a>
      </div>
    </div>
  </div>
);

/**
 * 1. Default State (First reference image)
 */
export const Default: Story = {
  name: 'Default',
  render: () => <LoginForm />,
};

/**
 * 2. Error State (Second reference image with validation alert)
 */
export const Error: Story = {
  name: 'Error',
  render: () => <LoginForm error="*Incorrect password or email" />,
};

/**
 * 3. Filled State (Third reference image with populated email input)
 */
export const Filled: Story = {
  name: 'Filled',
  render: () => (
    <LoginForm
      emailValue="sheyagujarkar@gmail.bleh"
      showEmailIcon={false}
    />
  ),
};
