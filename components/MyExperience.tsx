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

const MyExperienceWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;

  height: 500px;

  background-color: rgb(7, 7, 7);
  border-radius: 12px;

  padding: 40px 60px;

  h2 {
    font-size: 38px;
    padding-bottom: 18px;
  }

  h3 {
    font-size: 28px;
    padding-bottom: 10px;
  }

  h4 {
    font-size: 28px;
    padding-bottom: 10px;
  }

  p {
    font-size: 18px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .move-more-about-me {
    margin-top: 26px;

    background-color: rgb(255, 255, 255);
    padding: 16px 32px;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    display: inline-block;
  }
`;

const MyExperienceArticle = styled.article`
  display: grid;
  gap: 10px;
  grid-template-columns: 0.9fr 0.1fr 3fr;

  .date {
    color: rgb(173, 173, 173);
    white-space: nowrap;
  }

  .node {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* height: 100%; */

    padding-top: 8px;
    .dot {
      min-width: 13px;
      min-height: 13px;
      border-radius: 50%;
      background-color: white;
    }

    .line {
      width: 1px;
      margin-top: 10px;
      height: 100%;
      background-color: white;
    }
  }

  .title {
    font-size: 18px;
    padding-bottom: 16px;
  }

  .description {
    color: rgb(155, 155, 155);
    margin-bottom: 20px;
  }
`;

const MyExperienceContent = ({
  date,
  title,
  description,
  hideLine,
}: {
  date: string;
  title: string;
  description: string;
  hideLine?: boolean;
}) => {
  return (
    <MyExperienceArticle>
      <p className={Roboto_400.className + " date"}>{date}</p>

      <div className="node">
        <div className="dot"></div>

        {!hideLine && <div className="line"></div>}
      </div>

      <div>
        <h3 className={Noto_Sans_KR_400.className + " title"}>{title}</h3>
        <p className={Noto_Sans_KR_300.className + " description"}>
          {description}
        </p>
      </div>
    </MyExperienceArticle>
  );
};

const MyExperience = () => {
  return (
    <MyExperienceWrapper>
      <div>
        <h2>지금까지의 경험들</h2>
        <p>
          Web 브라우저의 확장성과 최신기술에 관심이 많습니다. 이를 위해 플랫폼의
          제한사항을 파악하고 대응할 수 있는 역량을 쌓고자 노력하고 있습니다.
          문제를 해결하기 위해 다양한 직무의 구성원과 커뮤니케이션을 바탕으로
          협업하고 있습니다.
        </p>
        <a className={Roboto_400.className + " move-more-about-me"}>
          이력서 다운로드
        </a>
      </div>
      <div className="content">
        <MyExperienceContent
          date="2022.06 - 2023.07 (1년 1개월)"
          title="프론트엔드 개발자 (SQUARS) in VIRNECT"
          description="threejs를 바탕으로 3d 컨텐츠를 생성하고 모바일 기기로 증강할 수 있는 WebAR 플랫폼 입니다. UI 및 로직 구현, 공통 UI 컴포넌트 개발, 사내 SDK 기반 컨텐츠 증강용 웹 뷰어 개발을 담당하였습니다. 컨텐츠 저장 및 로딩 관련 최적화를 진행하였습니다."
        ></MyExperienceContent>
        <MyExperienceContent
          date="2020.03 - 2022.06 (2년 3개월)"
          title="프론트엔드 개발자 (Remote 2.0~2.7) in VIRNECT"
          description="WebRTC를 활용하여 여러명이 동시에 영상을 공유할 수 있는 웹 기반 솔루션 입니다. 주로 UI 및 로직 구현, 영상 녹화, 통신 최적화 부분을 담당하였습니다. 또한 솔루션 특성상 요구되는 타 플랫폼 개발자간 원활한 의사소통을 수행하여 성공적인 솔루션 출시에 성공하였습니다. 출시 이후 2.7 버전까지 기능 개발과 최적화 및 버그 픽스를 담당하였으며 해당 솔루션이 회사 주요 매출 기반이 되는데 기여하였습니다."
        ></MyExperienceContent>
        <MyExperienceContent
          date="2017.03 - 2019.08 (2년 5개월)"
          title="웹 개발자 in NSE"
          description="가동원전 형상관리 시스템 구축 SAP기반 원자력 형상관리 시스템을 웹 기반으로 전환하는 신규 개발 업무 수행"
          hideLine
        ></MyExperienceContent>
      </div>
    </MyExperienceWrapper>
  );
};

export default MyExperience;
