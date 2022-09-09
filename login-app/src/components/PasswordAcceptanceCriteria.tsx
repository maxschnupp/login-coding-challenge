import styled from "@emotion/styled";
import React from "react";
import Typography from "./Typography";

interface IPasswordAcceptanceCriteriaProps {
    description: string,
    hasPassed: boolean,
}

const PasswordAcceptanceCriteria = ({description, hasPassed} : IPasswordAcceptanceCriteriaProps) => {
    const CriteriaContainer = styled('div')({
        display: "flex",
        flexDirection: "row",
    });
    const FourPixelSpacer = styled('div')({
        width: '4px',
    })
    return(
        <CriteriaContainer>
            {hasPassed ? <Typography text={'✔︎'} color={'#009E2D'}/> : <Typography text={'✘'} color={'#9E0000'}/>}
            <FourPixelSpacer/>
            <Typography text={description}/>
        </CriteriaContainer>    
    )
}

export default PasswordAcceptanceCriteria;