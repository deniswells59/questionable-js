import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultPossibilities = [
  'h1',
  'p',
  'div',
  'aside',
  'footer',
  'blockquote',
  'del',
  'time',
  'mark',
  'button',
  'small',
  'q',
  'ins',
  'select',
  'datalist',
];

const WhatWillItBe = ({ options, excludeDefaultOptions, styles, children }) => {
  const [ChosenOne, setChosenOne] = useState('div');
  const [allPossibiliites, setAllPossibilities] = useState(defaultPossibilities);

  useEffect(() => {
    const defaultEls = excludeDefaultOptions ? [] : defaultPossibilities;

    setAllPossibilities([...defaultEls, ...options]);
  }, [options]);

  useEffect(() => {
    const randomElement = getElement();

    setChosenOne(randomElement);
  }, [allPossibiliites]);

  const getElement = () => {
    const randomIndex = Math.floor(Math.random() * allPossibiliites.length);

    return allPossibiliites[randomIndex];
  };

  return (
    <>
      <ChosenOne style={styles}>{children}</ChosenOne>
    </>
  );
};

WhatWillItBe.defaultProps = {
  styles: {},
  options: [],
  excludeDefaultOptions: false,
};

WhatWillItBe.propTypes = {
  styles: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.node),
  excludeDefaultOptions: PropTypes.bool,
};

WhatWillItBe.displayName = 'WhatWillItBe';

export default WhatWillItBe;
