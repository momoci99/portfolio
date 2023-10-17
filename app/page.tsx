"use client";

import styled from "styled-components";

import StyledComponentsRegistry from "../lib/registry";
import type { Metadata } from "next";
import theme from "@/style/theme";
import GlobalStyle from "@/style/GlobalStyle";
import { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.pageBackground};
  width: 100%;

  .inner-wrapper {
    width: 80%;
    height: 100%;

    @media screen and (max-width: 376px) {
      padding: 0px 20px;
      width: 376px;
    }
  }
`;

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper className="page">
          <div className="inner-wrapper">asdf</div>
        </Wrapper>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
