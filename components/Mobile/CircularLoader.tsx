import React from "react";
import styled, { keyframes } from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CircularLoader = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid green;
  border-top-color: transparent;
  animation: ${spin} 0.8s linear infinite;
`;

const StyledCircularLoader = () => (
  <LoaderContainer>
    <CircularLoader />
  </LoaderContainer>
);

export default StyledCircularLoader;
