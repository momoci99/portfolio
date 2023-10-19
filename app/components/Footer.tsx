import styled from "styled-components";

import IconButton from "@/app/components/IconButton";
import theme from "@/style/theme";

const Wrapper = styled.footer`
  padding: 80px 12% 28px 12%;
  border-radius: 48px 48px 0px 0px;

  position: absolute;
  width: 100%;
  left: 0px;

  @media screen and (max-width: 376px) {
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 80px 24px 28px 24px;
    border-radius: 0px 0px 0px 0px;
  }

  background: ${(props) => props.theme.colors.black900};

  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.04),
    0px 20px 25px -5px rgba(0, 0, 0, 0.1);

  display: flex;
  gap: 64px;
  justify-content: space-between;

  .title {
    color: ${(props) => props.theme.colors.white};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.header};

    padding-bottom: 8px;

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.title};
    }

    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  .sub-title {
    color: ${(props) => props.theme.colors.white};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.md};

    padding-bottom: 32px;

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.lg};
    }
  }

  .email {
    color: ${(props) => props.theme.colors.white};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.md};

    border-bottom: 2px solid ${(props) => props.theme.colors.white};
    padding-bottom: 8px;

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.lg};
    }
  }

  .buttons-container {
    padding-top: 32px;
    display: flex;
    gap: 15px;
  }

  .image-container {
    @media screen and (max-width: 376px) {
      display: none;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="contact-container">
        <p className="title">
          혹시 연락이
          <br />
          필요하신가요?
        </p>

        <p className="sub-title">아래의 링크를 참고해주세요!</p>

        <a className="email" href="mailto:mooci99@gmail.com" target="_blank">
          momoci99@gmail.com
        </a>

        <div className="buttons-container">
          <IconButton
            icon="/github_icon.svg"
            $bgColor={theme.colors.white}
            onClick={() => window.open("https://github.com/momoci99")}
          ></IconButton>

          <IconButton
            icon="/linkedin_icon.svg"
            $bgColor={theme.colors.lightBlue}
            onClick={() =>
              window.open("https://www.linkedin.com/in/yeong-kwon-mo-222a27b1/")
            }
          ></IconButton>
        </div>
      </div>

      <div className="image-container">
        <img src="/footer_bg.svg"></img>
      </div>
    </Wrapper>
  );
};

export default Footer;
