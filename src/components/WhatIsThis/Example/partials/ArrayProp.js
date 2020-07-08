import React from 'react';

import { PropInputWrapper } from './Wrappers';
import CodeInput from './CodeInput';

import getTabByNestedLevel from '../../utils/getTabByNestedLevel';

const ArrayProp = ({ value, propName, handler }) => {
  const prefix = '[\n';
  const suffix = `${getTabByNestedLevel(1)}]`;

  const arrayInputs = value.map((arrayItemValue, index) => {
    return (
      <PropInputWrapper key={`${arrayItemValue}-${index}`}>
        <span>{`${getTabByNestedLevel(2)}`}</span>
        <CodeInput
          contentEditable
          role="textbox"
          data-index={index}
          data-propname={propName}
          onBlur={handler}
        >
          {arrayItemValue}
        </CodeInput>
        {`,\n`}
      </PropInputWrapper>
    );
  });

  return (
    <>
      {prefix}
      {arrayInputs}
      {suffix}
    </>
  );
};

export default ArrayProp;
