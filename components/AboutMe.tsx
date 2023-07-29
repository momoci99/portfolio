"use client";
import styled from "styled-components";

import Image from "next/image";

import {
  Noto_Sans_KR_700,
  Noto_Sans_KR_300,
  Noto_Sans_KR_400,
  Noto_Sans_KR_500,
  Roboto_500,
  Roboto_400,
  Roboto_300,
} from "@/app/fonts";

import CommonButton from "@/components/CommonButton";

const AboutMeWrapper = styled.section`
  h2 {
    padding-bottom: 18px;
  }

  h3 {
    padding-bottom: 10px;
  }

  height: 500px;

  background-color: rgb(7, 7, 7);
  border-radius: 12px;

  padding: 40px 30px 20px 30px;

  p {
    font-size: 18px;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .description-container {
    width: 90%;
  }

  .profile {
    border-radius: 54% 46% 53% 47% / 47% 56% 44% 53%;
    background-color: rgb(24, 24, 24);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 473px;
    height: 473px;

    > img {
      clip-path: circle(58%);
    }
  }

  .description {
    word-break: keep-all;
  }

  .main {
    font-size: 18px;
    /* line-height: 36px; */
  }

  .sub {
    font-size: 18px;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <div className="profile-container">
        <div className="profile">
          <Image
            alt="my_profile"
            src="/me.png"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
      <div className="description-container">
        <h2 className={Roboto_400.className}>About Me</h2>

        <p className={Noto_Sans_KR_300.className + " description main"}>
          안녕하세요 프론트엔드 개발자 모영권입니다. 현재 용산에서 저의 열정을
          펼치고 있으며 주로 React, Typescript를 통해 웹 어플리케이션 개발을
          하고 있습니다.
        </p>
        <br></br>
        <p className={Noto_Sans_KR_300.className + " description sub"}>
          브라우저 api를 활용한 웹 어플리케이션 개발을 능숙하게 수행할 수
          있습니다. 요구사항 파악 및 필요한 기술을 이해하고 다른사람과 협업을
          통해 개발합니다.
        </p>
        <br></br>
        <p className={Noto_Sans_KR_300.className + " description sub"}>
          웹 브라우저로 해낼 수 있는 여러가지 일들에 많은 관심을 가지고
          있습니다. 이를 통해 사용자의 문제를 해결하고 있습니다.
        </p>
        <br></br>

        <CommonButton color="rgb(0, 0, 0)" bgcolor="rgb(255, 255, 255)">
          More About me
        </CommonButton>
      </div>
    </AboutMeWrapper>
  );
};

export default AboutMe;
