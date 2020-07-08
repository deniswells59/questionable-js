import React from 'react';
import styled from 'styled-components';

import Wrapper from './partials/Wrapper';

const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const StyledType = styled.pre`
  margin-left: 6px;
`;

const StyledCode = styled.pre`
  background: black;
  color: orange;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
`;

const PropDetails = ({ propName, defaultProp, propType }) => (
  <Wrapper key={propName}>
    <li>
      <h4>{propName}</h4>
      <TypeWrapper>
        <p>Type:</p> <StyledType>{propType}</StyledType>
      </TypeWrapper>
      <div>
        <p>Default Value:</p>
        <StyledCode>{defaultProp}</StyledCode>
      </div>
    </li>
  </Wrapper>
);

export default PropDetails;
