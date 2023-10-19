import type { Preview } from "@storybook/react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles: GlobalStyle,
    }),
  ],
};

export default preview;
