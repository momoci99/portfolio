"use client";
import styled from "styled-components";

// import ProjectInfoContainer from "@/app/components/ProjectInfoContainer";
import ProjectInfoCard from "@/app/components/ProjectInfoCard";
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
    description:
      "3d 컨텐츠를 생성하고 모바일 기기로 증강할 수 있는 WebAR 플랫폼 입니다. UI 및 로직 구현, 공통 UI 컴포넌트 개발, 사내 SDK 기반 컨텐츠 증강용 웹 뷰어 개발을 담당하였습니다. 컨텐츠 저장 및 로딩 관련 최적화를 진행하였습니다.",
    cardImage: "/squars_main.jpg",
    projectColor: "rgb(0, 157, 255)",
    skills: [
      {
        name: "React",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
      {
        name: "TypeScript",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
      {
        name: "Zustand",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
    ],
    projectLink:
      "https://www.notion.so/Front-End-e527f8ff7c694ee6bf3940cfe58676ea?pvs=4#2b79357f5d2c4bf9a7c98eb4eb3e5786",
  },
  {
    title: "Remote",
    description:
      "WebRTC기반 화상회의 솔루션 입니다. UI 및 로직 구현, 통신 최적화 부분을 담당하였습니다. 타 플랫폼 개발자간 원활한 의사소통을 수행하여 솔루션 출시에 성공하였습니다. ",
    cardImage: "/remote_main.jpg",
    projectColor: "rgb(25, 163, 115)",
    skills: [
      {
        name: "Vue.js",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
      {
        name: "TypeScript",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
      {
        name: "JavaScript",
        color: "#323330",
        backgroundColor: theme.colors.white,
      },
    ],
    projectLink:
      "https://www.notion.so/Front-End-e527f8ff7c694ee6bf3940cfe58676ea?pvs=4#42fd39278b314f25ade18b3b627081b1",
  },
  {
    title: "CMIS",
    description:
      "SAP 기반 원자력 형상관리 시스템을 웹 기반으로 전환하는 프로젝트입니다.",
    cardImage: "/nse_main.jpg",
    projectColor: "rgb(211, 226, 235)",
    skills: [
      {
        name: "JavaScript",
        color: "#323330",
        backgroundColor: theme.colors.white,
      },
      {
        name: "ExtJS",
        color: theme.colors.white,
        backgroundColor: theme.colors.white,
      },
    ],
    projectLink:
      "https://www.notion.so/Front-End-e527f8ff7c694ee6bf3940cfe58676ea?pvs=4#498b0b8dc3c54e408c55d0afe019dc6f",
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
          <ProjectInfoCard
            key={project.title}
            title={project.title}
            description={project.description}
            cardImage={project.cardImage}
            projectColor={project.projectColor}
            skills={project.skills}
            projectLink={project.projectLink}
          ></ProjectInfoCard>
        ))}
      </section>
    </Wrapper>
  );
};

export default ProjectSection;
