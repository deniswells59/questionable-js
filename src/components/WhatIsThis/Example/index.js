import React, { Fragment, useState } from 'react';

import ObjectProp from './partials/ObjectProp';
import ArrayProp from './partials/ArrayProp';
import SimpleProp from './partials/SimpleProp';

import { FullWrapper, ExampleWrapper, CodeWrapper } from './partials/Wrappers';
import { ComponentUI, PropUI, BracketWrapper } from './partials/CodeStyles';

import { bracketWrapper } from '../utils/contentWrappers';

const Example = ({ subject, exampleChildren, exampleProps }) => {
  const [propsUsedByExample, setPropsUsedByExample] = useState(exampleProps);

  // Rename so it looks like a React component
  const Subject = subject;

  const displayActiveProps = () => {
    // Maps through actively used props
    const propsAsInputs = Object.keys(propsUsedByExample).map((key) => {
      const propValue = propsUsedByExample[key];

      // Direct prop-types require different views and change handlers
      const getPropConfiguration = () => {
        if (Array.isArray(propValue)) {
          // console.log('ARRAY');
          return [ArrayProp, onArrayChange, BracketWrapper];
        } else if (typeof propValue === 'object') {
          // console.log('OBJECT');
          return [ObjectProp, onObjectChange, BracketWrapper];
        } else if (typeof propValue === 'boolean') {
          // console.log('BOOLEAN');
          return [SimpleProp, onBooleanChange, BracketWrapper];
        }
      };

      const [PropComponent, handler, ContentWrapper] = getPropConfiguration();

      return (
        <Fragment key={key}>
          <PropUI propName={key} />
          <ContentWrapper>
            <PropComponent propName={key} value={propValue} handler={handler} />
          </ContentWrapper>
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
    <FullWrapper>
      <ExampleWrapper>
        <Subject {...propsUsedByExample}>{exampleChildren}</Subject>
      </ExampleWrapper>

      <CodeWrapper>
        <pre>
          <code>
            <ComponentUI displayName={subject.displayName}>{displayActiveProps()}</ComponentUI>
          </code>
        </pre>
      </CodeWrapper>
    </FullWrapper>
  );
};

export default Example;
