import styled from "@emotion/styled";
import React from "react";

interface ILoginCardProps {
  children: React.ReactNode;
}

const LoginCard = ({ children }: ILoginCardProps) => {
  const Card = styled("div")({
    backgroundColor: "red",
    minWidth: "100px",
    minHeight: "200px",
  });
  return <Card>{children}</Card>;
};

export default LoginCard;
