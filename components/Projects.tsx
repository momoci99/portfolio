"use client";

import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import {
  Noto_Sans_KR_700,
  Noto_Sans_KR_300,
  Noto_Sans_KR_400,
  Noto_Sans_KR_500,
  Roboto_500,
} from "@/app/fonts";

const ProjectsWrapper = styled.section`
  background-color: rgb(17, 17, 17);

  height: 1300px;

  padding: 40px 60px;

  h2 {
    font-size: 38px;
    padding-bottom: 50px;
  }

  h3 {
    font-size: 28px;
    padding-bottom: 10px;
  }

  .project-panels-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  .project-panel {
    background-color: rgb(7, 7, 7);

    display: flex;

    gap: 40px;

    padding: 40px 60px 40px 60px;

    border-radius: 24px;
    z-index: 2;
    overflow: hidden;
    height: 500px;
  }

  .contents-text {
    padding-top: 36px;
  }

  .contents-image {
    padding-left: 60px;
    padding-right: 40px;

    > img {
      transform: rotate(-3deg) scale(1.1);
      z-index: 1;
      width: 95%;
    }
  }
  .project-type {
    padding-bottom: 18px;

    &.squars-blue {
      color: rgb(0, 157, 255);
    }

    &.remote-green {
      color: rgb(25, 163, 115);
    }
  }

  .project-title {
    padding-bottom: 20px;
  }

  .project-description {
    font-size: 18px;
    color: rgb(155, 155, 155);
    line-height: 36px;
    white-space: pre-line;

    padding-bottom: 40px;
  }

  .move-project {
    &.squars-blue {
      background-color: rgb(0, 157, 255);
      padding: 16px 32px;
      border-radius: 8px;
    }

    &.remote-green {
      background-color: rgb(25, 163, 115);
      padding: 16px 32px;
      border-radius: 8px;
    }
  }
`;

const Projects = () => {
  return (
    <Element name="Projects">
      <ProjectsWrapper>
        <h2 className={Noto_Sans_KR_500.className}>
          현실 세계의 문제를 해결하기 위한 <br></br>여러 프로젝트를
          수행하였습니다
        </h2>
        <div className="project-panels-container">
          <article className="project-panel">
            <div className="contents-text">
              <p className={Roboto_500.className + " project-type squars-blue"}>
                WEB APPLICATION
              </p>

              <h3 className={Noto_Sans_KR_400.className + " project-title"}>
                SQUARS
              </h3>
              <p
                className={Noto_Sans_KR_300.className + " project-description"}
              >
                SQUARS는 WebAR의 모든 기능을 활용하고, 사용하기 쉽게 만들어주는
                웹 기반 어플리케이션입니다. 누구나 쉽게 웹 기반 AR을 만들고,
                공유할 수 있습니다. react, typescript, threejs를 활용하였습니다.
              </p>
              <a
                href="https://squars.io/"
                className="move-project squars-blue"
                target="_blank"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className="contents-image">
              <img src="./squars_main.png" alt="squars_main"></img>
            </div>
          </article>
          <article className="project-panel">
            <div className="contents-image">
              <img src="./remote_main.png" alt="squars_main"></img>
            </div>

            <div className="contents-text">
              <p
                className={Roboto_500.className + " project-type remote-green"}
              >
                WEB APPLICATION
              </p>

              <h3 className={Noto_Sans_KR_400.className + " project-title"}>
                VIRNECT REMOTE
              </h3>
              <p
                className={Noto_Sans_KR_300.className + " project-description"}
              >
                VIRNECT REMOTE는 실시간 영상과 AR로 원격에서 효율적인 지원, 감독
                할 수 있는 솔루션이며 PC, mobile, tablet 등 다양한 디바이스에서
                사용할 수 있습니다. vue, javascript, webrtc를 활용하였습니다.
              </p>

              <a
                href="https://www.virnect.com/products/remote"
                className="move-project remote-green"
                target="_blank"
              >
                프로젝트 보러가기
              </a>
            </div>
          </article>
        </div>
      </ProjectsWrapper>
    </Element>
  );
};

export default Projects;
