import styled from "@emotion/styled";
import React from "react";
import { isMobile, isTablet } from "react-device-detect";

interface IButtonProps {
  onClick: () => void;
  text: string;
  disabled: boolean;
}

const isMobilePhone = isMobile && !isTablet;

const StyledButton = styled.button({
  width: isMobilePhone ? "256px" : "276px",
  height: "52px",
  backgroundColor: "black",
  ":disabled" : {
    opacity: '50%',
  },
  fontFamily: "'Arial MT', sans-serif",
  fontSize: "18px",
  color: "white",
});

const Button = ({ onClick, text, disabled }: IButtonProps) => {
  return <StyledButton onClick={onClick} disabled={disabled}>{text}</StyledButton>;
};

export default Button;
