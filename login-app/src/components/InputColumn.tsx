import styled from "@emotion/styled";
import React from "react";

interface IInputColumnProps {
    children: React.ReactNode;
    isMobile: boolean;
  }

const InputColumn = ({children, isMobile} : IInputColumnProps) => {
  const Column = styled("div")({
    width: isMobile ? "256px" : "276px",
    // backgroundColor: "red"
    margin: '8px 8px 0px 8px',
  });
  return <Column>{children}</Column>
};

export default InputColumn;