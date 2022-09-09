import React from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
import InputColumn from "./components/InputColumn";
import { isMobile, isTablet } from "react-device-detect";
import Typography from "./components/Typography";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import PasswordAcceptanceCriteria from "./components/PasswordAcceptanceCriteria";
import CriteriaContainer from "./components/CrtieriaContainer";
import Banner from "./components/Banner";

const LoginPage = (): JSX.Element => {
  const Container = styled.div({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "grid",
    placeContent: "center",
  });
  const ThreePixelVerticalSpacer = styled("div")({
    height: "3px",
  });
  const isMobilePhone = isMobile && !isTablet;
  return (
    <Container>
      <Banner>
        <Typography text={"Registration"} color={"white"} />
      </Banner>
      <LoginCard isMobile={isMobilePhone}>
        <InputColumn isMobile={isMobilePhone}>
          <Typography text={"Email"} />
          <TextInput isMobile={isMobilePhone} shouldShowAsDots={false} />
        </InputColumn>
        <ThreePixelVerticalSpacer />
        <InputColumn isMobile={isMobilePhone}>
          <Typography text={"Password"} />
          <TextInput isMobile={isMobilePhone} shouldShowAsDots={true} />
          <CriteriaContainer>
            <PasswordAcceptanceCriteria
              description={"8+ characters"}
              hasPassed={true}
            />
            <PasswordAcceptanceCriteria
              description={"lowercase letter"}
              hasPassed={true}
            />
            <PasswordAcceptanceCriteria
              description={"uppercase letter"}
              hasPassed={false}
            />
            <PasswordAcceptanceCriteria
              description={"number"}
              hasPassed={false}
            />
            <PasswordAcceptanceCriteria
              description={"special character"}
              hasPassed={false}
            />
          </CriteriaContainer>
          <Button
            isMobile={isMobilePhone}
            onClick={() => {
              console.log("🎉🎉🎉🎉🎉");
            }}
            text={"Submit"}
          />
        </InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
