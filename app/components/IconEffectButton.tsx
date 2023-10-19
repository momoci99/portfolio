import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div<{
  $bgColor1: string;
  $bgColor2: string;
  $hasBackgroundImg?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .button {
    background: ${(props) => props.theme.colors.white};

    ${(props) => {
      if (!props.$hasBackgroundImg) {
        return `padding: 5px;`;
      }
    }}

    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;

    filter: drop-shadow(0px 9px 9px ${(props) => props.$bgColor1})
      drop-shadow(0px 9px 9px ${(props) => props.$bgColor2});
    border-radius: 22px;

    > img {
      ${(props) => {
        if (props.$hasBackgroundImg) {
          return `border-radius: 22px;`;
        }
      }}
    }
  }

  .name {
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.medium};

    padding-top: 12px;
    display: block;
    text-align: center;

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.md};
    }
  }
`;
interface IconEffectButtonProps {
  name: string;

  /**
   * Button background color 1
   */
  $bgColor1: string;

  /**
   * Button background color 2
   */
  $bgColor2: string;

  /**
   * Button icon url
   */
  icon: string;

  /**
   *
   * Button click event handler
   */
  onClick?: () => void;

  /**
   * if true, icon has background image
   */
  $hasBackgroundImg?: boolean;
}

const IconEffectButton = (props: IconEffectButtonProps) => {
  const { name, $bgColor1, $bgColor2, icon, onClick, $hasBackgroundImg } =
    props;

  return (
    <Wrapper
      $bgColor1={$bgColor1}
      $bgColor2={$bgColor2}
      $hasBackgroundImg={$hasBackgroundImg}
    >
      <button className="button" onClick={onClick}>
        <img src={icon} alt={name} />
      </button>
      <span className="name">{name}</span>
    </Wrapper>
  );
};

export default IconEffectButton;
