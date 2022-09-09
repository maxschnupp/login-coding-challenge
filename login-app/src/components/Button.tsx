import styled from "@emotion/styled";
import React  from "react";

interface IButtonProps {
    onClick: () => void;
    text: string;
}

const Button = ({onClick, text} : IButtonProps) => {
    const StyledButton = styled('button')({
        width: '276px',
        height: '52px',
        backgroundColor: 'black',
        fontFamily: "'Arial MT', sans-serif",
        fontSize: "18px",
        color: 'white',
    })
    return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button;