"use client";

// welcome page say hello
import React from "react";

import {
  Noto_Sans_KR_700,
  Noto_Sans_KR_300,
  Noto_Sans_KR_400,
} from "@/app/fonts";
import styled from "styled-components";

import { Element } from "react-scroll";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 20px 60px;

  border-radius: 20px;

  h1 {
    font-size: 48px;
  }

  p {
    padding-top: 20px;
    font-size: 18px;
  }

  height: 800px;
  text-align: center;
  background-color: #61b2fb;
`;

const Main = () => {
  return (
    <Element name="Home">
      <MainWrapper>
        <h1 className={Noto_Sans_KR_700.className}>
          안녕하세요 👋 프론트엔드 개발자 <br></br> 🧑🏻‍💻 모영권 입니다.
        </h1>

        <p className={Noto_Sans_KR_300.className}>
          저는 웹 프론트엔드 개발을 좋아하며, 웹 어플리케이션 개발에 대한
          열정으로 일하고 있습니다. <br></br> 혹시 저에 대해 궁금하시면 ⬇️
          스크롤을 내려 확인해주세요.
        </p>
      </MainWrapper>
    </Element>
  );
};
export default Main;
