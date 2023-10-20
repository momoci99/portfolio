"use client";

import styled from "styled-components";
import Chip from "@/app/components/Chip";
import theme from "@/style/theme";

const Wrapper = styled.article<{
  projectColor?: string;
}>`
  position: relative;
  max-width: 500px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;

  .image-container {
    height: 300px;
    > img {
      border-radius: 24px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .project-title {
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;

    font-size: ${(props) => props.theme.desktopFontSizes.lg};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.xl};
    }

    font-weight: ${(props) => props.theme.fontWeights.medium};

    padding-bottom: 20px;
  }

  .description {
    padding-top: 10px;
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.xs};
    color: ${(props) => props.theme.colors.grey700};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.sm};
    }

    font-weight: ${(props) => props.theme.fontWeights.medium};

    line-height: 25px;
  }

  .skill-container {
    display: flex;
    gap: 5px;

    padding-top: 15px;
    padding-bottom: 20px;
  }

  .read-more {
    padding-top: 20px;
    padding-bottom: 20px;

    display: block;
    text-align: center;

    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.xs};
    font-weight: ${(props) => props.theme.fontWeights.medium};

    width: 100%;
  }
`;

interface ProjectInfoCardProps {
  title: string;
  description: string;
  cardImage: string;
  projectColor: string;
  skills: Array<{
    name: string;
    color: string;
    backgroundColor?: string;
  }>;
  projectLink: string;
}

const ProjectInfoCard = (props: ProjectInfoCardProps) => {
  const { title, description, cardImage, projectColor, skills, projectLink } =
    props;

  return (
    <Wrapper projectColor={projectColor}>
      <section className="">
        <div className="image-container">
          <img src={cardImage} alt={title}></img>
        </div>

        <div className="skill-container">
          {skills.map((skill) => (
            <Chip
              key={skill.name}
              size="small"
              name={skill.name}
              color={theme.colors.grey700}
              $backgroundColor={skill.backgroundColor}
              borderColor={theme.colors.grey700}
            />
          ))}
        </div>

        <div className="content-container">
          <p className="project-title">{title}</p>

          <p className="description">{description}</p>
        </div>
      </section>
      <footer>
        <a className="read-more" href={projectLink} target="_blank">
          Read more
        </a>
      </footer>
    </Wrapper>
  );
};

export default ProjectInfoCard;
