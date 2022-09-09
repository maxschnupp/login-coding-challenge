import styled from "@emotion/styled";
import React from "react";
import {isMobile, isTablet} from "react-device-detect";

const isMobilePhone = isMobile && !isTablet;

const Card = styled("div")({
  border: "2px solid black",
  marginLeft: "16px",
  marginRight: "16px",
  paddingLeft: "8px",
  paddingRight: "8px",
  paddingTop: "24px",
  paddingBottom: "32px",
  display: "flex",
  flexDirection: isMobilePhone ? "column" : "row",
});
interface ILoginCardProps {
  children: React.ReactNode;
}

const LoginCard = ({ children }: ILoginCardProps) => {
  
  return <Card>{children}</Card>;
};

export default LoginCard
