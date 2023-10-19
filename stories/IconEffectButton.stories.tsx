import IconEffectButton from "@/app/components/IconEffectButton";

import type { Meta, StoryObj } from "@storybook/react";

// import theme from "@/style/theme";
import theme from "../style/theme";
import { ThemeProvider } from "styled-components";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/IconEffectButton",
  component: IconEffectButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   $backgroundColor: { control: "color" },
  // },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof IconEffectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ReactLogo: Story = {
  args: {
    name: "React",
    $bgColor1: "#077EDA30",
    $bgColor2: "#08A3E620",
    icon: "http://localhost:3000/react_logo.svg",
    onClick: () => {},
  },
};

export const Javascript: Story = {
  args: {
    name: "Javascript",
    $bgColor1: "#d7da0750",
    $bgColor2: "#d0e60820",
    icon: "http://localhost:3000/js_logo.svg",
    onClick: () => {},
    $hasBackgroundImg: true,
  },
};

export const Typescript: Story = {
  args: {
    name: "Typescript",
    $bgColor1: "#0914e52f",
    $bgColor2: "#d0e60820",
    icon: "http://localhost:3000/ts_logo.svg",
    onClick: () => {},
    $hasBackgroundImg: true,
  },
};
