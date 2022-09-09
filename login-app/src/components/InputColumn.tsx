import styled from "@emotion/styled";
import React from "react";
import {isMobile, isTablet} from 'react-device-detect';

const isMobilePhone = isMobile && !isTablet;

const Column = styled("div")({
  width: isMobilePhone ? "256px" : "276px",
  // backgroundColor: "red"
  margin: '8px 8px 0px 8px',
});

interface IInputColumnProps {
    children: React.ReactNode;
  }

const InputColumn = ({children} : IInputColumnProps) => {
  return <Column>{children}</Column>
};

export default InputColumn;