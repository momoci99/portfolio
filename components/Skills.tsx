"use client";

import React from "react";

import {
  Noto_Sans_KR_700,
  Noto_Sans_KR_300,
  Noto_Sans_KR_400,
  Noto_Sans_KR_500,
} from "@/app/fonts";
import styled from "styled-components";

import { Element } from "react-scroll";

import Image from "next/image";

const SkillsWrapper = styled.section`
  height: 1000px;
  /* margin: 0 60px; */

  padding: 40px 60px;

  h2 {
    padding-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: rgb(155, 155, 155);
  }

  background-color: rgb(17, 17, 17);

  .skill-panels-container {
    display: grid;
    grid-template-rows: repeat(4, 0.3fr);
    /* grid-column: auto; */

    grid-gap: 20px;
  }
`;

const SkillsPanelWrapper = styled.article`
  background-color: rgb(7, 7, 7);
  border-radius: 12px;

  padding: 40px 30px 20px 30px;

  h3 {
    padding-bottom: 10px;
  }

  p {
    font-size: 18px;
  }

  display: flex;
  gap: 20px;
  align-items: start;
`;

const SkillsPanel = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <SkillsPanelWrapper>
      <Image src={icon} width={60} height={60} alt="alt"></Image>

      <div>
        <h3 className={Noto_Sans_KR_400.className}>{title}</h3>
        <p className={Noto_Sans_KR_300.className}>{description}</p>
      </div>
    </SkillsPanelWrapper>
  );
};

const Skills = () => {
  return (
    <Element name="Skills">
      <SkillsWrapper className="grid grid-cols-2 gap-20">
        <div>
          <h2 className={Noto_Sans_KR_500.className}>
            다음과 같은 기술을 활용하여 멋진 웹 어플리케이션을 개발할 수
            있습니다. Typescript와 React를 주력으로 사용하고 있습니다.{" "}
          </h2>
          <p className={Noto_Sans_KR_300.className}>
            Typescript와 javascript로 웹 어플리케이션을 개발할 수 있으며 주로
            PC와 모바일 디바이스를 대상으로 하는 서비스 개발을 할 수 있는 기술이
            있습니다. 자주 사용하는 라이브러리는 React, Zustand이며, 추가로
            webrtc와 threejs 라이브러리를 활용하여 실제 서비스를 개발한 경험이
            있습니다.
          </p>
        </div>
        <div className="skill-panels-container">
          <SkillsPanel
            icon="/skill_collabo.svg"
            title="협업"
            description="GitHub 사용하여 코드 버전 관리 및 협업에 능숙합니다. PR을 기반으로 개발자간 의견을 공유하는것을 선호합니다. 또한, Jira & notion을 주로 활용하여 다른사람들과 협업할 수 있습니다."
          ></SkillsPanel>
          <SkillsPanel
            icon="/skill_ui.svg"
            title="UI & UX 구현"
            description="React와 TypeScript를 사용하여 사용자 인터페이스를 개발할 수 있습니다. React로 재사용 가능한 UI 컴포넌트를 작성하고, TypeScript로 안정성 있는 웹 서비스를 개발합니다."
          ></SkillsPanel>
          <SkillsPanel
            icon="/skill_service.svg"
            title="서비스 개발"
            description="기획자와 디자이너의 의도를 파악하고 실제 웹 서비스를 개발할 수 있습니다. 다른 사람들과 협업하며 사용자가 필요로 하는 기능을 개발하고, 사용성을 개선하는 작업을 수행합니다."
          ></SkillsPanel>
          <SkillsPanel
            icon="/skill_etc.svg"
            title="기타"
            description="WebRTC를 활용하여 원격 협업 서비스를 개발한 경험이 있으며, Three.js를 기반으로 3D 저작 툴 서비스를 개발한 경험이 있습니다. 또한, 웹 기반의 화상통신 기술과 3D 도구를 활용하여 다양한 프로젝트에 참여하였습니다."
          ></SkillsPanel>
        </div>
      </SkillsWrapper>
    </Element>
  );
};

export default Skills;
