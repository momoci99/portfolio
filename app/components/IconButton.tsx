import styled from "styled-components";

const Wrapper = styled.button<{
  $bgColor: string;
}>`
  border-radius: 8px;

  background-color: ${(props) => props.$bgColor};

  width: 64px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 376px) {
    width: 48px;
    height: 48px;
  }
`;

interface IconButtonProps {
  /**
   * Button icon
   */
  icon: string;

  /**
   * Button background color
   */
  $bgColor: string;

  /**
   * Button onClick event
   */
  onClick?: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const { icon, $bgColor, onClick } = props;
  return (
    <Wrapper $bgColor={$bgColor} onClick={onClick}>
      <img src={icon} alt="icon" />
    </Wrapper>
  );
};

export default IconButton;
