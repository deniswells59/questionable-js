import React from 'react';

import { PropInputWrapper } from './Wrappers';
import CodeInput from './CodeInput';
import { PunctuationWrapper, StringWrapper, QuoteWrapper } from './CodeStyles';

import getTabByNestedLevel from '../../utils/getTabByNestedLevel';

const ArrayProp = ({ value, propName, handler }) => {
  const Prefix = () => <PunctuationWrapper>{'[\n'}</PunctuationWrapper>;
  const Suffix = () => <PunctuationWrapper>{`${getTabByNestedLevel(1)}]`}</PunctuationWrapper>;

  const arrayInputs = value.map((arrayItemValue, index) => {
    return (
      <PropInputWrapper key={`${arrayItemValue}-${index}`}>
        <span>{`${getTabByNestedLevel(2)}`}</span>
        <QuoteWrapper>
          <CodeInput
            contentEditable
            role="textbox"
            data-index={index}
            data-propname={propName}
            onBlur={handler}
          >
            <StringWrapper>{arrayItemValue}</StringWrapper>
          </CodeInput>
        </QuoteWrapper>
        <PunctuationWrapper>{`,\n`}</PunctuationWrapper>
      </PropInputWrapper>
    );
  });

  return (
    <>
      <Prefix />
      {arrayInputs}
      <Suffix />
    </>
  );
};

export default ArrayProp;
