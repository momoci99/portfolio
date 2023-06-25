"use client";
import Image from "next/image";

import style from "styled-components";

const HeaderButtonWrapper = style.button`
display: flex;
align-items: center;
justify-content: center;

> a {
  padding-right: 5px;
}

`;

const HeaderButton = ({ text }: { text: string }) => {
  return (
    <HeaderButtonWrapper>
      <a>{text}</a>
      <Image src="/arrow-down.svg" width={8} height={8} alt="arrow"></Image>
    </HeaderButtonWrapper>
  );
};
export default HeaderButton;
