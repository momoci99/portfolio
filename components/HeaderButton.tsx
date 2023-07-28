"use client";
import Image from "next/image";

import style from "styled-components";
import { Link } from "react-scroll";

const HeaderButtonWrapper = style.button`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding-right: 5px;
  }
`;

const HeaderButton = ({
  text,
  to,
  scrollOffset,
}: {
  text: string;
  to: string;
  scrollOffset?: number;
}) => {
  return (
    <HeaderButtonWrapper>
      <Link to={to} offset={scrollOffset} smooth>
        <span>{text}</span>
      </Link>
      <Image src="/arrow-down.svg" width={8} height={8} alt="arrow"></Image>
    </HeaderButtonWrapper>
  );
};
export default HeaderButton;
