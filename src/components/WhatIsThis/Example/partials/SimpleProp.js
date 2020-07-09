import React from 'react';

import CodeInput from './CodeInput';

import { StringWrapper, BooleanWrapper } from './CodeStyles';

const ArrayProp = ({ value, propName, handler }) => {
  const StyleWrapper = typeof value === 'boolean' ? BooleanWrapper : StringWrapper;

  return (
    <>
      <CodeInput contentEditable role="textbox" data-propname={propName} onBlur={handler}>
        <StyleWrapper>{value.toString()}</StyleWrapper>
      </CodeInput>
    </>
  );
};

export default ArrayProp;
