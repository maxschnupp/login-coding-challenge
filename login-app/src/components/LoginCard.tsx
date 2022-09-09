import styled from "@emotion/styled";
import React from "react";

interface ILoginCardProps {
  children: React.ReactNode;
  isMobile: boolean;
}

const LoginCard = ({ children, isMobile }: ILoginCardProps) => {
  const Card = styled("div")({
    border: "2px solid black",
    marginLeft: "16px",
    marginRight: "16px",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "24px",
    paddingBottom: "24px",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
  });
  return <Card>{children}</Card>;
};

export default LoginCard
