const tabUsedForTemplateLiteral = `   `;

const getTabByNestedLevel = (level) => {
  let tabs = '';

  for (let index = 0; index < level; index++) {
    tabs = `${tabs}${tabUsedForTemplateLiteral}`;
  }

  return tabs;
};

export default getTabByNestedLevel;
