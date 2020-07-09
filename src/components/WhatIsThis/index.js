import React from 'react';
import PropTypes from 'prop-types';

import PropDetails from './PropDetails';

import Wrapper from './partials/Wrapper';
import Title from './partials/Title';
import Example from './Example';

const WhatIsThis = ({ subject, exampleProps, exampleChildren }) => {
  return (
    <Wrapper>
      <Title>{subject.displayName}</Title>
      <Example subject={subject} exampleChildren={exampleChildren} exampleProps={exampleProps} />
      <PropDetails defaultProps={subject.defaultProps} />
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
