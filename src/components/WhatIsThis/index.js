import React from 'react';
import PropTypes from 'prop-types';

import PropDetails from './PropDetails';

import Wrapper from './partials/Wrapper';
import Title from './partials/Title';
import Example from './Example';

import stringifyProp from '../../utils/stringifyProp';

const WhatIsThis = ({ subject, exampleProps, exampleChildren }) => {
  const getTypeFromProp = (defaultProp) =>
    Array.isArray(defaultProp) ? 'array' : typeof defaultProp;

  const renderPropDetails = ({ defaultProps }) =>
    Object.keys(defaultProps).map((prop) => (
      <PropDetails
        key={prop}
        propName={prop}
        defaultProp={stringifyProp(defaultProps[prop])}
        propType={getTypeFromProp(defaultProps[prop])}
      />
    ));

  return (
    <Wrapper>
      <Title>{subject.displayName}</Title>
      {renderPropDetails(subject)}
      <Example subject={subject} exampleChildren={exampleChildren} exampleProps={exampleProps} />
    </Wrapper>
  );
};

WhatIsThis.defaultProps = {
  subject: () => {},
};

WhatIsThis.propTypes = {
  subject: PropTypes.func.isRequired,
  exampleProps: PropTypes.object,
  exampleChildren: PropTypes.string,
};

WhatIsThis.displayName = 'WhatIsThis';

export default WhatIsThis;
