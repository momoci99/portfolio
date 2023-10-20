"use client";

import styled from "styled-components";

const Wrapper = styled.div<{
  size?: "small" | "default" | "large";
  color?: string;
  $backgroundColor?: string;
  borderColor?: string;
}>`
  background-color: ${(props) => props.$backgroundColor || "transparent"};

  ${(props) => {
    if (props.borderColor) return `border: 1px solid ${props.borderColor};`;
  }};

  color: ${(props) => props.color || "transparent"};

  font-family: Noto Sans KR, Arial, Helvetica, sans-serif;

  ${(props) => {
    switch (props.size) {
      case "small":
        return `
        padding : 4px 8px;
          font-size: ${props.theme.desktopFontSizes.xxs};
        `;

      case "default":
        return `
          font-weight: ${props.theme.fontWeights.normal};
          padding : 8px 16px;
        `;
      case "large":
        return `
          font-weight: ${props.theme.fontWeights.medium};
          padding : 8px 32px;
        `;
      default:
        return `
          font-weight: ${props.theme.fontWeights.normal};
          padding : 8px 16px;
        `;
    }
  }};

  border-radius: 32px;

  &:hover {
    cursor: pointer;
  }
`;

interface ChipProps {
  size?: "small" | "default" | "large";
  /**
   * Chip name
   */
  name: string;

  /**
   * Chip color
   */
  color?: string;

  /**
   * Chip background color
   */
  $backgroundColor?: string;

  /**
   * Chip border color
   */
  borderColor?: string;

  /**
   * Chip click event handler
   */
  onClick?: () => void;
}

const Chip = (props: ChipProps) => {
  const { size, name, color, $backgroundColor, borderColor, onClick } = props;
  return (
    <Wrapper
      size={size}
      color={color}
      $backgroundColor={$backgroundColor}
      className="chip"
      borderColor={borderColor}
      onClick={onClick}
    >
      {name}
    </Wrapper>
  );
};

export default Chip;
