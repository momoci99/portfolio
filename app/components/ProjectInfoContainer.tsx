"use client";

import styled from "styled-components";
import Chip from "@/app/components/Chip";

const Wrapper = styled.div<{
  cardBackgroundColor?: string;
}>`
  .title {
    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;

    font-size: ${(props) => props.theme.desktopFontSizes.lg};

    @media screen and (max-width: 376px) {
      font-size: ${(props) => props.theme.mobileFontSizes.xl};
    }

    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  .chip-container {
    display: flex;
    gap: 10px;
    padding: 20px 0px;
  }

  .image-container {
    width: 353px;
    height: 270px;
    background-color: ${(props) => props.cardBackgroundColor};
    border-radius: 18px;
    padding: 20px;

    > img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .show-more {
    padding-top: 20px;
    display: block;

    font-family: Noto Sans KR, Arial, Helvetica, sans-serif;
    font-size: ${(props) => props.theme.desktopFontSizes.xs};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`;

interface ProjectInfoContainerProps {
  title: string;
  cardImage: string;
  cardBackgroundColor: string;
  skills: Array<{
    name: string;
    color: string;
    backgroundColor: string;
  }>;
  projectLink: string;
}

const ProjectInfoContainer = (props: ProjectInfoContainerProps) => {
  const { title, cardImage, cardBackgroundColor, skills, projectLink } = props;

  return (
    <Wrapper cardBackgroundColor={cardBackgroundColor}>
      <p className="title">{title}</p>

      <div className="chip-container">
        {skills.map((skill) => (
          <Chip
            key={skill.name}
            size="default"
            name={skill.name}
            color={skill.color}
            $backgroundColor={skill.backgroundColor}
          />
        ))}
      </div>

      <div className="image-container">
        <img alt={title} src={cardImage}></img>
      </div>

      <a className="show-more" href={projectLink}>
        Show more
      </a>
    </Wrapper>
  );
};

export default ProjectInfoContainer;
