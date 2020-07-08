import React from 'react';
import styled from 'styled-components';
// Reduces the value of a prop into one string
// TODO: Make recursive, handle nested objects (i.e. tab spaces need to expand)

const ObjectPropInputWrapper = styled.div`
  display: flex;
`;

const CodeInput = styled.span`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  border: none;
`;
const stringifyPropValue = ({ propName, value, handler }) => {
  // Array
  if (Array.isArray(value)) {
    const stringifiedArray = value.reduce((acc, arrItem) => {
      return `${acc}      '${arrItem}'\n`;
    }, '[\n');

    return `${stringifiedArray}   ]`;

    // Object
  } else if (typeof value === 'object') {
    const beginning = '{\n';
    const end = `   }`;

    const objectInputs = Object.keys(value).map((objectKey) => {
      return (
        <ObjectPropInputWrapper key={objectKey}>
          {`      ${objectKey}: `}
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
        </ObjectPropInputWrapper>
      );
    });

    return (
      <>
        {beginning}
        {objectInputs}
        {end}
      </>
    );

    // const stringifiedObject = Object.keys(prop).reduce((acc, key) => {
    //   return `${acc}      ${key}: "${prop[key]}"\n`;
    // }, '{\n');

    // return `${stringifiedObject}   }`;

    // Default
  }
  // else {
  //   return value.toString();
  // }
};

export default stringifyPropValue;
