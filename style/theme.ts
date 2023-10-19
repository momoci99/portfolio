import { DefaultTheme } from "styled-components";

const colors = {
  pageBackground: "#FBFEFD",
  lightBlue: "#38BDF8",
  emerald: "#34D399",
  yellow: "#F59E0B",
  rose: "#F43F5E",
  black900: "#111827",
  white: "#FFFFFF",
  grey900: "#E1E1E6",
  grey600: "#C4C4CC",
  grey700: "#8D8D99",
  gradient1: "linear-gradient(90deg, #FBED96 0%, #ABECD6 100%)",
  gradient2: "linear-gradient(90deg, #FFF278 0%, #F28D2F 100%)",
  gradient3: "linear-gradient(90deg, #40C4FF 0%, #189FFF 100%)",
  gradientAnimation:
    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);",
};

const desktopFontSizes = {
  title: "92px",
  subtitle: "44px",
  header: "60px",

  xxl: "52px",
  xl: "44px",
  lg: "38px",
  md: "28px",
  sm: "24px",
  xs: "16px",
  xxs: "14px",
};

const mobileFontSizes = {
  subtitle: "32px",
  title: "56px",

  xxl: "36px",
  xl: "32px",
  lg: "20px",
  md: "16px",
  sm: "14px",
};

const fontWeights = {
  bold: 700,
  lightBold: 600,
  medium: 500,
  normal: 400,
  light: 300,
};

export type ColorsTypes = typeof colors;
export type DesktopFontSizeTypes = typeof desktopFontSizes;
export type MobileFontSizeTypes = typeof mobileFontSizes;
export type FontWeightsTypes = typeof fontWeights;

const theme: DefaultTheme = {
  colors,
  desktopFontSizes,
  mobileFontSizes,
  fontWeights,
};
export default theme;
