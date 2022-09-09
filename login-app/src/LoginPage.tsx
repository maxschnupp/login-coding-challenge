import React from "react";
import styled from "@emotion/styled";
import LoginCard from "./components/LoginCard";
const LoginPage = (): JSX.Element => {
  const Container = styled.div({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
  });
  return (
    <Container>
      <LoginCard>
        <p>HAHAHAHAHA</p>
      </LoginCard>
    </Container>
  );
};

export default LoginPage;
