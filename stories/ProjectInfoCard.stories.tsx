import ProjectInfoCard from "../app/components/ProjectInfoCard";

import type { Meta, StoryObj } from "@storybook/react";

// import theme from "@/style/theme";
import theme from "../style/theme";
import { ThemeProvider } from "styled-components";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/ProjectInfoCard",
  component: ProjectInfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   title: { control: "color" },
  // },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ProjectInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightBlue: Story = {
  args: {
    title: "Project Title",
    description:
      "Project Description asdfasdfasdf hjklnasdfjhkawfeuhfe huifewahiuaewffuhiea",
    cardImage:
      "https://fastly.picsum.photos/id/743/200/300.jpg?hmac=91tyi5dvhytFbbvSaBbLapYXGFpcd4Ww71bXMIjNzgo",
    projectColor: theme.colors.lightBlue,
    skills: [
      {
        name: "React",
        color: theme.colors.white,
        // backgroundColor: theme.colors.lightBlue,
      },
      {
        name: "TypeScript",
        color: theme.colors.white,
        // backgroundColor: theme.colors.lightBlue,
      },
    ],

    projectLink: "",
  },
};
