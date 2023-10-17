"use client";
import styled from "styled-components";
import Chip from "@/app/components/Chip";
import theme from "@/style/theme";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.gradient1};
  border-radius: 44px;
  padding: 38px 10%;

  @media screen and (max-width: 376px) {
    padding: 20px 20px;
  }

  height: 620px;

  @media screen and (max-width: 376px) {
    height: fit-content;
  }

  .scroll-box {
    &::-webkit-scrollbar {
      width: 0px;
    }

    height: 300px;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
    scroll-behavior: smooth;

    section {
      min-height: 300px;

      scroll-snap-align: start;

      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;

      @media screen and (max-width: 376px) {
        padding-bottom: 0px;
      }
    }
  }

  .description {
    text-align: center;

    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.lightBold};
    font-size: ${(props) => props.theme.desktopFontSizes.xl};
    color: ${(props) => props.theme.colors.black900};

    /* white-space: break-spaces; */
    word-wrap: break-word;

    line-height: 100px;
    word-break: keep-all;

    @media screen and (max-width: 376px) {
      line-height: 50px;
      font-size: ${(props) => props.theme.mobileFontSizes.lg};
    }
  }

  .contact-container {
    display: flex;
    gap: 16px;
    align-items: center;

    padding-top: 42px;

    font-size: ${(props) => props.theme.desktopFontSizes.xxs};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="scroll-box">
        <section>
          <p className="description">
            안녕하세요 👋 <br></br> 프론트엔드 개발자<br></br> 🧑🏻‍💻 모영권 입니다.
          </p>
        </section>

        <section>
          <p className="description">
            저는 협업을 중요하게 여기고 <br /> 사용자에게 좋은 UX를 제공하기
            위해 노력합니다.
          </p>
        </section>

        <section>
          <p className="description">
            혹시 저에 대해 궁금하시면 스크롤을 더 내려주세요!
          </p>
        </section>
      </div>

      <div className="contact-container">
        <Chip
          size="large"
          name="Contact"
          color={theme.colors.white}
          $backgroundColor={theme.colors.black900}
          onClick={() => {
            window.open("mailto:momoci99@gmail.com");
          }}
        ></Chip>

        <a
          className="moveto-resume"
          href="https://icy-bougon-118.notion.site/Front-End-e527f8ff7c694ee6bf3940cfe58676ea?pvs=4"
          target="_blank"
        >
          Resume 보러가기
        </a>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
