import styled from "styled-components";

const CommonButtonWrapper = styled.button<{ bgcolor: string; color: string }>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  padding: 16px 32px;
  border-radius: 8px;
`;

const CommonButton = ({
  children,
  color,
  bgcolor,
  onClick,
}: {
  children: React.ReactNode;
  color: string;
  bgcolor: string;
  onClick?: () => void;
}) => {
  return (
    <CommonButtonWrapper color={color} bgcolor={bgcolor} onClick={onClick}>
      {children}
    </CommonButtonWrapper>
  );
};

export default CommonButton;
