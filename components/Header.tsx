"use client";

import { Roboto_400 } from "@/app/fonts";

import style from "styled-components";

const HeaderWrapper = style.header`
  background-color: #fff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <span>YKMO</span>
      <a>Home</a>
      <a>About</a>
      <a>Skills</a>
      <a>Projects</a>
      <a>Blog</a>
      <a href="mailto:momoci99@gmail.com">Contact me</a>
    </HeaderWrapper>
  );
};

export default Header;
