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

const WhatWillItBe = ({ optionsList, includeDefault, styles, children }) => {
  const [chosenOne, setChosenOne] = useState('');
  const [allPossibiliites, setAllPossibilities] = useState(defaultPossibilities);

  useEffect(() => {
    setAllPossibilities([includeDefault ?? [...defaultPossibilities], ...optionsList]);
  }, [optionsList]);

  useEffect(() => {
    const randomElement = getElement();

    setChosenOne(randomElement);
  }, [allPossibiliites]);

  // async componentWillMount() {
  //   await this.setPossibilities();
  //   const randElIndex = this.getIndex();
  //   const randomEl = this.getElement(randElIndex);

  //   this.setState({ chosenOne: randomEl });
  // }

  const getElement = () => {
    const randomIndex = Math.floor(Math.random() * allPossibiliites.length);

    return allPossibiliites[randomIndex];
  };

  const ChosenOne = chosenOne || 'div';

  return (
    <div>
      <ChosenOne style={styles}>
        {children}
        <p>YO</p>
      </ChosenOne>
    </div>
  );
};

WhatWillItBe.defaultProps = {
  styles: {},
  optionsList: [],
  includeDefault: false,
};

WhatWillItBe.propTypes = {
  styles: PropTypes.object,
  optionsList: PropTypes.arrayOf(PropTypes.node),
  includeDefault: PropTypes.bool,
};

WhatWillItBe.displayName = 'WhatWillItBe';

export default WhatWillItBe;
