import Image from "next/image";
import Header from "@/components/Header";

import Main from "@/components/Main";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <div
      className=""
      style={{
        width: "100vw",
      }}
    >
      <Header />
      <Main></Main>
      <Skills></Skills>
    </div>
  );
}
