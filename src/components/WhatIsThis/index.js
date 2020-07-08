import React from 'react';
import PropTypes from 'prop-types';

import PropDetails from './PropDetails';

import Wrapper from './partials/Wrapper';
import Title from './partials/Title';

const WhatIsThis = ({ subject }) => {
  const getDefaultFromProp = (defaultProp) => {
    switch (typeof defaultProp) {
      case 'object':
        return JSON.stringify(defaultProp, null, 2);
      default:
        return defaultProp.toString();
    }
  };

  const getTypeFromProp = (defaultProp) =>
    Array.isArray(defaultProp) ? 'array' : typeof defaultProp;

  const renderPropDetails = ({ defaultProps }) =>
    Object.keys(defaultProps).map((prop) => (
      <PropDetails
        key={prop}
        propName={prop}
        defaultProp={getDefaultFromProp(defaultProps[prop])}
        propType={getTypeFromProp(defaultProps[prop])}
      />
    ));

  return (
    <Wrapper>
      <Title>{subject.displayName}</Title>
      {renderPropDetails(subject)}
    </Wrapper>
  );
};

WhatIsThis.defaultProps = {
  subject: () => {},
};

WhatIsThis.propTypes = {
  subject: PropTypes.func.isRequired,
};

WhatIsThis.displayName = 'WhatIsThis';

export default WhatIsThis;
