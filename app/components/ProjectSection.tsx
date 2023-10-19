"use client";
import styled from "styled-components";

import ProjectInfoContainer from "@/app/components/ProjectInfoContainer";
import theme from "@/style/theme";

const Wrapper = styled.main`
  .section-header {
    padding-top: 80px;
    font-size: ${(props) => props.theme.desktopFontSizes.title};
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-weight: ${(props) => props.theme.fontWeights.medium};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.title};
    }
  }

  .projects-container {
    padding: 60px 0px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

    flex-wrap: wrap;

    > div {
      padding-bottom: 20px;
    }
  }
`;

interface ProjectSectionProps {}

const projects = [
  {
    title: "SQUARS",
    subTitle: "Web AR Platform",
    cardImage: "/squars_main.png",
    cardBackgroundColor: "rgb(0, 157, 255)",
    skills: [
      {
        name: "React",
        color: theme.colors.white,
        backgroundColor: theme.colors.lightBlue,
      },
      {
        name: "TypeScript",
        color: theme.colors.white,
        backgroundColor: "#007acc",
      },
      {
        name: "Zustand",
        color: theme.colors.white,
        backgroundColor: "rgb(255, 174 ,0)",
      },
    ],
    projectLink: "https://squars.io/eu",
  },
  {
    title: "Remote",
    subTitle: "Web Conference Service",
    cardImage: "/remote_main.png",
    cardBackgroundColor: "rgb(25, 163, 115)",
    skills: [
      {
        name: "Vue.js",
        color: theme.colors.white,
        backgroundColor: "#41B883",
      },
      {
        name: "TypeScript",
        color: theme.colors.white,
        backgroundColor: "#007acc",
      },
      {
        name: "JavaScript",
        color: "#323330",
        backgroundColor: "#F0DB4F",
      },
    ],
    projectLink: "https://www.virnect.com/products/remote",
  },
  {
    title: "CMIS",
    subTitle: "Web Application",
    cardImage: "/nse_main.png",
    cardBackgroundColor: "rgb(211, 226, 235)",
    skills: [
      {
        name: "JavaScript",
        color: "#323330",
        backgroundColor: "#F0DB4F",
      },
      {
        name: "ExtJS",
        color: theme.colors.white,
        backgroundColor: theme.colors.black900,
      },
    ],
    projectLink: "https://www.nsetec.com/sub/silkroad/silkroad.html#/section-3",
  },
];

const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <Wrapper>
      <p className="section-header">
        참여한
        <br />
        프로젝트
      </p>
      <section className="projects-container">
        {projects.map((project) => (
          <ProjectInfoContainer
            key={project.title}
            title={project.title}
            subTitle={project.subTitle}
            cardImage={project.cardImage}
            cardBackgroundColor={project.cardBackgroundColor}
            skills={project.skills}
            projectLink={project.projectLink}
          ></ProjectInfoContainer>
        ))}
      </section>
    </Wrapper>
  );
};

export default ProjectSection;
