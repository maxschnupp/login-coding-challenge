import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
import InputColumn from "./components/InputColumn";
import Typography from "./components/Typography";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import PasswordAcceptanceCriteria from "./components/PasswordAcceptanceCriteria";
import CriteriaContainer from "./components/CrtieriaContainer";
import Banner from "./components/Banner";
import { debounce } from "lodash";
import {
  AcceptanceCriteriaState,
  AcceptanceCriteriaType,
} from "./domain/passwords/types";
import { allStatesSatisfied, getIsSatisfied, updateAcceptanceCriteriaStates } from "./domain/passwords/acceptanceStates";

const Container = styled.div({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeContent: "center",
});

const INITIAL_CRITERIA_STATES: AcceptanceCriteriaState[] = [
  { criteriaType: AcceptanceCriteriaType.EIGHT_PLUS_CHARS, isSatisfied: false },
  {
    criteriaType: AcceptanceCriteriaType.CONTAINS_LOWERCASE,
    isSatisfied: false,
  },
  {
    criteriaType: AcceptanceCriteriaType.CONTAINS_UPPERCASE,
    isSatisfied: false,
  },
  {
    criteriaType: AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER,
    isSatisfied: false,
  },
  { criteriaType: AcceptanceCriteriaType.CONTAINS_NUMBER, isSatisfied: false },
];

const LoginPage = (): JSX.Element => {
  const ThreePixelVerticalSpacer = styled("div")({
    height: "3px",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCriteriaStates, setPasswordCriteriaStates] = useState(
    INITIAL_CRITERIA_STATES
  );

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const debouncedPasswordUpdate = debounce(
      (password: string) => setPassword(password),
      10
    );
    debouncedPasswordUpdate(event.target.value);
  };

  useEffect(() => {
    try {
      const newPasswordCriteriaStates = updateAcceptanceCriteriaStates(passwordCriteriaStates, password);
      setPasswordCriteriaStates(newPasswordCriteriaStates);
    } catch (e) {
      console.error(e);
    }
  }, [password]);

  return (
    <Container>
      <Banner>
        <Typography text={"Registration"} color={"white"} />
      </Banner>
      <LoginCard>
        <InputColumn>
          <Typography text={"Email"} />
          <TextInput
            aria-label="email-input"
            type={"email"}
            onChange={handleOnChangeEmail}
            value={email}
          />
        </InputColumn>
        <ThreePixelVerticalSpacer />
        <InputColumn>
          <Typography text={"Password"} />
          <TextInput
            aria-label="password-input"
            type={"password"}
            onChange={handleOnChangePassword}
            value={password}
          />
          <CriteriaContainer>
            <PasswordAcceptanceCriteria
              description={"8+ characters"}
              hasPassed={getIsSatisfied(
                passwordCriteriaStates,
                AcceptanceCriteriaType.EIGHT_PLUS_CHARS
              )}
            />
            <PasswordAcceptanceCriteria
              description={"lowercase letter"}
              hasPassed={getIsSatisfied(
                passwordCriteriaStates,
                AcceptanceCriteriaType.CONTAINS_LOWERCASE
              )}
            />
            <PasswordAcceptanceCriteria
              description={"uppercase letter"}
              hasPassed={getIsSatisfied(
                passwordCriteriaStates,
                AcceptanceCriteriaType.CONTAINS_UPPERCASE
              )}
            />
            <PasswordAcceptanceCriteria
              description={"number"}
              hasPassed={getIsSatisfied(
                passwordCriteriaStates,
                AcceptanceCriteriaType.CONTAINS_NUMBER
              )}
            />
            <PasswordAcceptanceCriteria
              description={"special character"}
              hasPassed={getIsSatisfied(
                passwordCriteriaStates,
                AcceptanceCriteriaType.CONTAINS_SPECIAL_CHARACTER
              )}
            />
          </CriteriaContainer>
          <Button
            aria-label="submit-button"
            onClick={() => {
              console.log(`email: ${email} password: ${password} 🎉🎉🎉🎉🎉`);
            }}
            disabled={!allStatesSatisfied(passwordCriteriaStates)}
            text={"Submit"}
          />
        </InputColumn>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
