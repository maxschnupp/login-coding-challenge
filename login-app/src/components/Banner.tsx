import styled from "@emotion/styled";
import React from "react";
interface IBannerProps {
  children: React.ReactNode;
}
const Banner = ({ children }: IBannerProps) => {
  const StyledBanner = styled("div")({
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "black",
    paddingLeft: "16px",
    paddingTop:  "16px",
    paddingBottom: "16px",
  });
  return <StyledBanner>{children}</StyledBanner>;
};

export default Banner;
