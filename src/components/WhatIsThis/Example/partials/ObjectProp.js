import React from 'react';

import { PropInputWrapper } from './Wrappers';
import CodeInput from './CodeInput';
import { PunctuationWrapper, StringWrapper, QuoteWrapper } from './CodeStyles';

import getTabByNestedLevel from '../../utils/getTabByNestedLevel';

const ObjectProp = ({ value, propName, handler }) => {
  const Prefix = () => <PunctuationWrapper>{`{\n`}</PunctuationWrapper>;
  const Suffix = () => <PunctuationWrapper>{`${getTabByNestedLevel(1)}}`}</PunctuationWrapper>;

  const ObjectKey = ({ name }) => (
    <>
      <StringWrapper>{`${getTabByNestedLevel(2)}${name}`}</StringWrapper>
      <PunctuationWrapper>{`: `}</PunctuationWrapper>
    </>
  );

  const objectInputs = Object.keys(value).map((objectKey) => {
    return (
      <PropInputWrapper key={objectKey}>
        <ObjectKey name={objectKey} />

        <QuoteWrapper>
          <CodeInput
            contentEditable
            role="textbox"
            data-propname={propName}
            data-objectkey={objectKey}
            onBlur={handler}
          >
            <StringWrapper>{value[objectKey]}</StringWrapper>
          </CodeInput>
        </QuoteWrapper>

        <PunctuationWrapper>{`,\n`}</PunctuationWrapper>
      </PropInputWrapper>
    );
  });

  return (
    <>
      <Prefix />
      {objectInputs}
      <Suffix />
    </>
  );
};

export default ObjectProp;
