import styled from "@emotion/styled";
import React from "react";

interface ITextInputProps {shouldShowAsDots: boolean};

const TextInput = ({shouldShowAsDots} : ITextInputProps): JSX.Element => {
  const StyledInput = styled("input")({
    width: "240px",
    height: "52px",
    border: "2px solid black",
    fontFamily: "'Arial MT', sans-serif",
    fontSize: "18px",
    paddingLeft: "16px",
    paddingRight: "16px",
    marginTop: "16px",
    marginBottom: "16px",
  });
  return <StyledInput type={shouldShowAsDots ? 'password' : 'text'} />;
};

export default TextInput;
