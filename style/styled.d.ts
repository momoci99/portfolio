import "styled-components";
import {
  ColorsTypes,
  DesktopFontSizeTypes,
  MobileFontSizeTypes,
  FontWeightsTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    desktopFontSizes: DesktopFontSizeTypes;
    mobileFontSizes: MobileFontSizeTypes;
    fontWeights: FontWeightsTypes;
  }
}
