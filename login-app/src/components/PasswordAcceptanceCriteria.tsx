import styled from "@emotion/styled";
import Typography from "./Typography";

interface IPasswordAcceptanceCriteriaProps {
    description: string,
    hasPassed: boolean,
}

const CriteriaContainer = styled('div')({
    display: "flex",
    flexDirection: "row",
});
const FourPixelSpacer = styled('div')({
    width: '4px',
})

const PasswordAcceptanceCriteria = ({description, hasPassed} : IPasswordAcceptanceCriteriaProps) => {
    
    return(
        <CriteriaContainer>
            {hasPassed ? <Typography text={'✔︎'} color={'#009E2D'}/> : <Typography text={'✘'} color={'#9E0000'}/>}
            <FourPixelSpacer/>
            <Typography text={description}/>
        </CriteriaContainer>    
    )
}

export default PasswordAcceptanceCriteria;