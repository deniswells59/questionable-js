import React from 'react';

import { PropInputWrapper } from './Wrappers';
import CodeInput from './CodeInput';

import getTabByNestedLevel from '../../utils/getTabByNestedLevel';

const ObjectProp = ({ value, propName, handler }) => {
  const prefix = '{\n';
  const suffix = `${getTabByNestedLevel(1)}}`;

  const objectInputs = Object.keys(value).map((objectKey) => {
    return (
      <PropInputWrapper key={objectKey}>
        {`${getTabByNestedLevel(2)}${objectKey}: `}
        <CodeInput
          contentEditable
          role="textbox"
          data-propname={propName}
          data-objectkey={objectKey}
          onBlur={handler}
        >
          {value[objectKey]}
        </CodeInput>
        {`,\n`}
      </PropInputWrapper>
    );
  });

  return (
    <>
      {prefix}
      {objectInputs}
      {suffix}
    </>
  );
};

export default ObjectProp;
