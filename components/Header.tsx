"use client";

import { Roboto_400, Roboto_700 } from "@/app/fonts";
import style from "styled-components";
import HeaderButton from "./HeaderButton";

const HeaderWrapper = style.header`
  background-color: rgb(17, 17, 17);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;


  padding: 0 20px;

  .gnb-group {
    display: flex;
    gap: 40px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <span className={Roboto_700.className + " logo"}>YKMO</span>

      <div className="gnb-group">
        <HeaderButton text="Home"></HeaderButton>
        <HeaderButton text="Skills"></HeaderButton>
        <HeaderButton text="Projects"></HeaderButton>
        <HeaderButton text="Blog"></HeaderButton>
      </div>
      <a href="mailto:momoci99@gmail.com">Contact me</a>
    </HeaderWrapper>
  );
};

export default Header;
