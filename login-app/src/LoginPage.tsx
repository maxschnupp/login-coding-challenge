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
        <InputColumn>
          <Typography text={"Email"} />
          <TextInput shouldShowAsDots={false}/>
        </InputColumn>
        <InputColumn>
          <Typography text={"Password"} />
          <TextInput shouldShowAsDots={true}/>
          <Button onClick={() => {}} text={'Submit'}/>
        </InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
