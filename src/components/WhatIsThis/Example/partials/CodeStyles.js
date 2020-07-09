import React from 'react';
import styled from 'styled-components';

import getTabByNestedLevel from '../../utils/getTabByNestedLevel';

export const PunctuationWrapper = styled.span`
  color: #ccccd0;
`;

export const HighlightPuncWrapper = styled.span`
  color: #f44747;
`;

export const ComponentNameWrapper = styled.span`
  color: #e5c07b;
`;

export const PropNameWrapper = styled.span`
  color: #d19a66;
`;

export const StringWrapper = styled.span`
  color: #c8ae9d;
`;

export const BooleanWrapper = styled.span`
  color: #56b6c2;
`;

export const BracketWrapper = ({ children }) => (
  <>
    <PunctuationWrapper>{`{`}</PunctuationWrapper>
    {children}
    <PunctuationWrapper>{`}`}</PunctuationWrapper>
  </>
);

export const QuoteWrapper = ({ children }) => (
  <>
    <StringWrapper>{`"`}</StringWrapper>
    {children}
    <StringWrapper>{`"`}</StringWrapper>
  </>
);

export const ComponentUI = ({ displayName, children }) => (
  <>
    <PunctuationWrapper>{`<`}</PunctuationWrapper>
    <ComponentNameWrapper>{displayName}</ComponentNameWrapper>
    {children}
    <PunctuationWrapper>{`\n/>`}</PunctuationWrapper>
  </>
);

export const PropUI = ({ propName }) => (
  <>
    <PropNameWrapper>
      {`\n`}
      {`${getTabByNestedLevel(1)}`}
      {propName}
      <HighlightPuncWrapper>{`=`}</HighlightPuncWrapper>
    </PropNameWrapper>
  </>
);
