import styled from "@emotion/styled";

import { isMobile, isTablet } from "react-device-detect";

const isMobilePhone = isMobile && !isTablet;

const TextInput = styled.input({
  width: isMobilePhone ? "220px" : "240px",
  height: "52px",
  border: "2px solid black",
  fontFamily: "'Arial MT', sans-serif",
  fontSize: "18px",
  paddingLeft: "16px",
  paddingRight: "16px",
  marginTop: "16px",
  marginBottom: "13px",
});

export default TextInput;
