import React, { Fragment, useState, useEffect } from 'react';

import ObjectProp from './partials/ObjectProp';
import ArrayProp from './partials/ArrayProp';
import SimpleProp from './partials/SimpleProp';

import getTabByNestedLevel from '../utils/getTabByNestedLevel';
import { bracketWrapper, quoteWrapper } from '../utils/contentWrappers';

const Example = ({ subject, exampleChildren, exampleProps }) => {
  const [propsUsedByExample, setPropsUsedByExample] = useState(exampleProps);

  // Rename so it looks like a React component
  const Subject = subject;

  const displayActiveProps = () => {
    // Creates prefix of prop with proper tabs
    // Ex. `   propName=`
    const propStringPrefix = (key) => `\n${getTabByNestedLevel(1)}${key}=`;

    // Maps through actively used props
    const propsAsInputs = Object.keys(propsUsedByExample).map((key) => {
      const propValue = propsUsedByExample[key];

      // Direct prop-types require different views and change handlers
      const getPropConfiguration = () => {
        if (Array.isArray(propValue)) {
          // console.log('ARRAY');
          return [ArrayProp, onArrayChange, bracketWrapper];
        } else if (typeof propValue === 'object') {
          // console.log('OBJECT');
          return [ObjectProp, onObjectChange, bracketWrapper];
        } else if (typeof propValue === 'boolean') {
          // console.log('BOOLEAN');
          return [SimpleProp, onBooleanChange, bracketWrapper];
        }
      };

      const [PropComponent, handler, contentWrapper] = getPropConfiguration();

      return (
        <Fragment key={key}>
          {propStringPrefix(key)}
          {contentWrapper(<PropComponent propName={key} value={propValue} handler={handler} />)}
        </Fragment>
      );
    });

    return propsAsInputs;
  };

  const onObjectChange = ({ target }) => {
    const { propname, objectkey } = target.dataset;
    const currentProp = propsUsedByExample[propname];

    const newProp = {
      ...currentProp,
      [objectkey]: target.textContent,
    };

    setPropsUsedByExample({ ...propsUsedByExample, [propname]: newProp });
  };

  const onArrayChange = ({ target }) => {
    const { propname, index } = target.dataset;
    const currentProp = propsUsedByExample[propname];

    const newValue = target.textContent;
    const newArr = currentProp.slice(0);
    newArr[index] = newValue;

    setPropsUsedByExample({ ...propsUsedByExample, [propname]: newArr });
  };

  const onBooleanChange = ({ target }) => {
    const { propname } = target.dataset;
    const newValue = target.textContent;

    setPropsUsedByExample({
      ...propsUsedByExample,
      [propname]: newValue === 'true' ? true : false,
    });
  };

  return (
    <>
      <pre>
        <code>
          {`<${subject.displayName}`} {displayActiveProps()} {`\n/>`}
        </code>
      </pre>
      <Subject {...propsUsedByExample}>{exampleChildren}</Subject>
    </>
  );
};

export default Example;
