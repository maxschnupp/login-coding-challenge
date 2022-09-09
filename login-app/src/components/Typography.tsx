import styled from "@emotion/styled";
import React from "react";

interface ITypographyProps {
  text: string;
  color?: string;
}

const Typography = ({ text, color }: ITypographyProps): JSX.Element => {
  //TODO: find a nice font loader for arial MT with inline styles like GoogleFontLoader but that works with this font
  const StyledTypography = styled("div")({
    fontFamily: "'Arial MT', sans-serif",
    fontSize: "18px",
    color: color ?? "black",
  });
  return <StyledTypography>{text}</StyledTypography>;
};

export default Typography;
