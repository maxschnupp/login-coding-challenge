import styled from '@emotion/styled';
import React from 'react';

interface ICriteriaContainerProps {
    children : React.ReactNode;
}

const CriteriaContainer = ({children} : ICriteriaContainerProps) => {
    const StyledContainer = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '32px',
    })

    return <StyledContainer>{children}</StyledContainer>
}

export default CriteriaContainer;