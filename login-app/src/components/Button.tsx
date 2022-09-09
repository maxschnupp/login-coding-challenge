import styled from "@emotion/styled";
import React from "react";
import { isMobile, isTablet } from "react-device-detect";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

const isMobilePhone = isMobile && !isTablet;

const StyledButton = styled("button")({
  width: isMobilePhone ? "256px" : "276px",
  height: "52px",
  backgroundColor: "black",
  fontFamily: "'Arial MT', sans-serif",
  fontSize: "18px",
  color: "white",
});

const Button = ({ onClick, text }: IButtonProps) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
