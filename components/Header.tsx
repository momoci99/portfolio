"use client";

import { Roboto_400, Roboto_700 } from "@/app/fonts";

import style from "styled-components";
import Image from "next/image";

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

const HeaderButton = ({ text }: { text: string }) => {
  const HeaderButtonWrapper = style.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    > a {
      padding-right: 5px;
    }


  `;

  return (
    <HeaderButtonWrapper>
      <a>{text}</a>
      <Image src="/arrow-down.svg" width={8} height={10} alt="arrow"></Image>
    </HeaderButtonWrapper>
  );
};

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
