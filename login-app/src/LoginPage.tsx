import React from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
import InputColumn from "./components/InputColumn";
import { isMobile } from "react-device-detect";
const LoginPage = (): JSX.Element => {
  const Container = styled.div({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  });
  console.log('isMobile', isMobile);
  return (
    <Container>
      <LoginCard isMobile={isMobile}>
        <InputColumn>Beep</InputColumn>
        <InputColumn>Boop</InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
