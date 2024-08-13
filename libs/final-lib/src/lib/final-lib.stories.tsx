import type { Meta, StoryObj } from '@storybook/react';
import { FinalLib } from './final-lib';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FinalLib> = {
  component: FinalLib,
  title: 'FinalLib',
};
export default meta;
type Story = StoryObj<typeof FinalLib>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FinalLib!/gi)).toBeTruthy();
  },
};
