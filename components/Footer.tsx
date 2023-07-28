"use client";

// welcome page say hello
import React from "react";

import {
  Noto_Sans_KR_700,
  Noto_Sans_KR_300,
  Noto_Sans_KR_400,
} from "@/app/fonts";
import styled from "styled-components";

const FooterWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 60px 60px;

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

const Footer = () => {
  return (
    <FooterWrapper>
      <h1 className={Noto_Sans_KR_700.className}>
        감사합니다. 혹시 궁금하신 점이 있으시면 연락주세요.👋
      </h1>
    </FooterWrapper>
  );
};
export default Footer;
