"use client";

import styled from "styled-components";

const Wrapper = styled.div<{
  size?: "default" | "large";
  color?: string;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightBlue};

  color: ${(props) => props.color || props.theme.colors.white};

  font-family: "Noto Sans KR";

  ${(props) => {
    switch (props.size) {
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
  size?: "default" | "large";
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
   * Chip click event handler
   */
  onClick?: () => void;
}

const Chip = (props: ChipProps) => {
  const { size, name, color, $backgroundColor, onClick } = props;
  return (
    <Wrapper
      size={size}
      color={color}
      backgroundColor={$backgroundColor}
      className="chip"
      onClick={onClick}
    >
      {name}
    </Wrapper>
  );
};

export default Chip;
