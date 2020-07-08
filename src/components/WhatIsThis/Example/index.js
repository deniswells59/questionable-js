import React, { useState, useEffect } from 'react';

import stringifyPropValue from '../../../utils/stringifyProp';

const Example = ({ subject, exampleChildren, exampleProps }) => {
  const [props, setProps] = useState(exampleProps);
  const Subject = subject;

  const displayActiveProps = () => {
    // Reduces each React prop into one string
    // Uses `stringifyProp` to handle prop values

    const propsAsInputs = Object.keys(props).map((key) => {
      return (
        <>
          {`  ${key}=`}
          {stringifyPropValue({ propName: key, value: props[key], handler: onPropsChange })}
        </>
      );
    });

    return propsAsInputs[0];
    // return Object.keys(props).reduce((acc, propName) => {
    //   return `${acc}   ${propName}={${stringifyProp(props[propName])}}\n`;
    // }, '');
  };

  const onPropsChange = ({ target }) => {
    const { propname, objectkey } = target.dataset;
    const currentProp = props[propname];

    const newProp = {
      ...currentProp,
      [objectkey]: target.textContent,
    };

    console.log('newProp:', newProp);

    setProps({ [propname]: newProp });
  };

  useEffect(() => {
    console.log('CHANGED!', props);
  }, [props]);

  return (
    <>
      <pre>
        <code>
          {`<${subject.displayName}\n`} {displayActiveProps()} {`\n/>`}
        </code>
      </pre>
      <Subject {...props}>{exampleChildren}</Subject>
    </>
  );
};

export default Example;
