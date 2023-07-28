import Image from "next/image";
import Header from "@/components/Header";

import Main from "@/components/Main";
import Skills from "@/components/Skills";

import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";

import MyExperience from "@/components/MyExperience";

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
      <Projects></Projects>
      <AboutMe></AboutMe>
      <MyExperience></MyExperience>
    </div>
  );
}
