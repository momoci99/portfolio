import styled from "styled-components";

import IconEffectButton from "@/app/components/IconEffectButton";

const Wrapper = styled.section`
  .section-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 48px;

    padding-bottom: 80px;

    @media screen and (max-width: 980px) {
      display: flex;
      flex-direction: column;
    }
  }

  .section-header {
    padding-bottom: 40px;
    font-size: ${(props) => props.theme.desktopFontSizes.title};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.medium};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.title};
    }
  }

  .quote {
    grid-area: 1 / 1 / 2 / 2;

    border-left: 5px solid ${(props) => props.theme.colors.black900};
    padding-left: 20px;

    color: ${(props) => props.theme.colors.black900};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.normal};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.md};
    }
  }

  .skill-container {
    grid-area: 2 / 1 / 3 / 2;
  }

  .skill-header {
    padding-bottom: 32px;
    color: ${(props) => props.theme.colors.black900};
    font-size: ${(props) => props.theme.desktopFontSizes.xxl};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  .skill-list {
    display: flex;

    gap: 40px;

    @media screen and (max-width: 376px) {
      justify-content: space-between;
      gap: 20px;
    }
  }

  .profile-img-container {
    display: flex;
    justify-content: center;

    grid-area: 1 / 2 / 3 / 3;
    > img {
      min-width: 100px;
      min-height: 100px;

      max-width: 480px;
      max-height: 480px;

      object-fit: contain;
    }
  }
`;

const skills = [
  {
    name: "React",
    bgColor1: "#077EDA30",
    bgColor2: "#08A3E620",
    icon: "/react_logo.svg",
    onClick: () => {},
  },
  {
    name: "Typescript",
    bgColor1: "#0914e52f",
    bgColor2: "#d0e60820",
    icon: "/ts_logo.svg",
    hasBackgroundImg: true,
    onClick: () => {},
  },
  {
    name: "Javascript",
    bgColor1: "#d7da0750",
    bgColor2: "#d0e60820",
    icon: "/js_logo.svg",
    hasBackgroundImg: true,
    onClick: () => {},
  },
];

const AboutMeSection = () => {
  return (
    <Wrapper>
      <p className="section-header">About Me</p>

      <div className="section-container">
        <blockquote className="quote">
          <p>
            안녕하세요! 프론트엔드 개발자 모영권입니다. 새로운 기술과 도전을
            좋아하며, 동료들과 함께 성장하는 것을 즐깁니다. 주로 React,
            Typescript를 사용하고 있으며 WebRTC, three.js 관련 프로덕트 개발
            경험이 있습니다.
            <br />
            <br />
            프론트엔드나 개발 관련으로 이야기 나누고 싶으신 분은 연락주세요!
          </p>
        </blockquote>

        <section className="skill-container">
          <p className="skill-header">Skills</p>
          <div className="skill-list">
            {skills.map((skill) => {
              return (
                <IconEffectButton
                  key={skill.name}
                  name={skill.name}
                  $bgColor1={skill.bgColor1}
                  $bgColor2={skill.bgColor2}
                  icon={skill.icon}
                  $hasBackgroundImg={skill.hasBackgroundImg}
                  onClick={skill.onClick}
                ></IconEffectButton>
              );
            })}
          </div>
        </section>

        <div className="profile-img-container">
          <img src="/me.png" alt="me"></img>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutMeSection;
