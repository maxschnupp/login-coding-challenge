import React from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
import InputColumn from "./components/InputColumn";
import { isMobile } from "react-device-detect";
import Typography from "./components/Typography";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
const LoginPage = (): JSX.Element => {
  const Container = styled.div({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  });
  console.log("isMobile", isMobile);
  return (
    <Container>
      <LoginCard isMobile={isMobile}>
        <InputColumn isMobile={isMobile}>
          <Typography text={"Email"} />
          <TextInput isMobile={isMobile} shouldShowAsDots={false}/>
        </InputColumn>
        <InputColumn isMobile={isMobile}>
          <Typography text={"Password"} />
          <TextInput isMobile={isMobile} shouldShowAsDots={true}/>
          <Button isMobile={isMobile} onClick={() => {}} text={'Submit'}/>
        </InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
