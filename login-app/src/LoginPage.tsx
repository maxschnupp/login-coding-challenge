import React, { useState } from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
import InputColumn from "./components/InputColumn";
import Typography from "./components/Typography";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import PasswordAcceptanceCriteria from "./components/PasswordAcceptanceCriteria";
import CriteriaContainer from "./components/CrtieriaContainer";
import Banner from "./components/Banner";
import {debounce} from "lodash";

const Container = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeContent: "center",
});

const LoginPage = (): JSX.Element => {
  
  const ThreePixelVerticalSpacer = styled("div")({
    height: "3px",
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
  }

  const handleOnChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const debouncedPasswordUpdate = debounce((password: string) => setPassword(password), 10)
    debouncedPasswordUpdate(event.target.value);
}

  return (
    <Container>
      <Banner>
        <Typography text={"Registration"} color={"white"} />
      </Banner>
      <LoginCard>
        <InputColumn>
          <Typography text={"Email"} />
          <TextInput type={'email'} onChange={handleOnChangeEmail} value={email}/>
        </InputColumn>
        <ThreePixelVerticalSpacer />
        <InputColumn>
          <Typography text={"Password"} />
          <TextInput type={'password'} onChange={handleOnChangePassword} value={password}/>
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
            onClick={() => {
              console.log(`email: ${email} password: ${password} 🎉🎉🎉🎉🎉`);
            }}
            text={"Submit"}
          />
        </InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
