import styled from "@emotion/styled";
import React from "react";

interface IInputColumnProps {
    children: React.ReactNode;
  }

const InputColumn = ({children} : IInputColumnProps) => {
  const Column = styled("div")({
    width: "276px",
    height: "100px",
    backgroundColor: "red",
    margin: '8px 8px 8px 8px',
  });
  return <Column>{children}</Column>
};

export default InputColumn;