import React from 'react';

import CodeInput from './CodeInput';

const ArrayProp = ({ value, propName, handler }) => {
  return (
    <>
      <CodeInput contentEditable role="textbox" data-propname={propName} onBlur={handler}>
        {value.toString()}
      </CodeInput>
    </>
  );
};

export default ArrayProp;
