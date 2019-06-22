import React, { Component } from 'react';

class WhatWillItBe extends Component {
  state = {
    chosenOne: null,
    possibilities: [],
  };

  defaultPossibilities = [
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

  async componentWillMount() {
    await this.setPossibilities();
    const randElIndex = this.getIndex();
    const randomEl = this.getElement(randElIndex);

    this.setState({ chosenOne: randomEl });
  }

  setPossibilities = () => {
    return new Promise(resolve => {
      const { defaultPossibilities } = this;
      const { optionsList, includeDefault } = this.props;

      const customOptions = includeDefault
        ? [...defaultPossibilities, ...optionsList]
        : optionsList;
      const possibilities = customOptions.length > 0 ? customOptions : defaultPossibilities;

      this.setState({ possibilities }, resolve);
    });
  };

  getIndex = () => {
    const { possibilities } = this.state;
    return Math.floor(Math.random() * possibilities.length);
  };

  getElement = index => {
    const { possibilities } = this.state;
    return possibilities[index];
  };

  render() {
    const { chosenOne } = this.state;
    const { styles, children } = this.props;

    const ChosenOne = chosenOne || 'div';

    return (
      <div>
        <ChosenOne style={styles}>{children}</ChosenOne>
      </div>
    );
  }
}

WhatWillItBe.defaultProps = {
  styles: {},
  optionsList: [],
  includeDefault: false,
};

export default WhatWillItBe;
