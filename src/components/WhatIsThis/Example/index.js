import React from 'react';

import stringifyProp from '../../../utils/stringifyProp';

const Example = ({ subject, exampleChildren, exampleProps }) => {
  const Subject = subject;

  const displayActiveProps = () => {
    // Reduces each React prop into one string
    // Uses `stringifyProp` to handle prop values
    return Object.keys(exampleProps).reduce((acc, propName) => {
      return `${acc}   ${propName}={${stringifyProp(exampleProps[propName])}}\n`;
    }, '');
  };

  return (
    <>
      <pre>
        <code>{`<${subject.displayName}\n` + `${displayActiveProps()}` + `/>`}</code>
      </pre>
      <Subject {...exampleProps}>{exampleChildren}</Subject>
    </>
  );
};

export default Example;
