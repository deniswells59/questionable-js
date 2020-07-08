// Reduces the value of a prop into one string
// TODO: Make recursive, handle nested objects (i.e. tab spaces need to expand)

const stringifyPropValue = (prop) => {
  // Array
  if (Array.isArray(prop)) {
    const stringifiedArray = prop.reduce((acc, arrItem) => {
      return `${acc}      '${arrItem}'\n`;
    }, '[\n');

    return `${stringifiedArray}   ]`;

    // Object
  } else if (typeof prop === 'object') {
    const stringifiedObject = Object.keys(prop).reduce((acc, key) => {
      return `${acc}      ${key}: "${prop[key]}"\n`;
    }, '{\n');

    return `${stringifiedObject}   }`;

    // Default
  } else {
    return prop.toString();
  }
};

export default stringifyPropValue;
