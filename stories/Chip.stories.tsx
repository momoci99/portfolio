import Chip from "../app/components/Chip";

import type { Meta, StoryObj } from "@storybook/react";

// import theme from "@/style/theme";
import theme from "../style/theme";
import { ThemeProvider } from "styled-components";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Chip",
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightBlue: Story = {
  args: {
    size: "default",
    name: "Chip",
    color: theme.colors.white,
    backgroundColor: theme.colors.lightBlue,
  },
};

export const Rose: Story = {
  args: {
    size: "large",
    name: "Chip",
    color: theme.colors.white,
    backgroundColor: theme.colors.rose,
  },
};
