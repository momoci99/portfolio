"use client";

import Image from "next/image";
import Header from "@/components/Header";

import Main from "@/components/Main";
import Skills from "@/components/Skills";

import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

import MyExperience from "@/components/MyExperience";
import Footer from "@/components/Footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 38px;
  }

  h3 {
    font-size: 28px;    
  }
`;

export default function Page() {
  return (
    <div
      className=""
      style={{
        width: "100vw",
      }}
    >
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main></Main>
      <Skills></Skills>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <MyExperience></MyExperience>
      <Footer></Footer>
    </div>
  );
}
