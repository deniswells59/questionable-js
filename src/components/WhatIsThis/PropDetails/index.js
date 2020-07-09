import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  border-spacing: 0px;
`;

const StyledCell = styled.td`
  border-bottom: 1px solid #d8d8d8;
  padding: 16px;
`;

const StyledHeading = styled(StyledCell)`
  font-weight: 600;
`;

const getTypeFromProp = (defaultProp) =>
  Array.isArray(defaultProp) ? 'array' : typeof defaultProp;

const stringifyDefaultValue = (val) => JSON.stringify(val, null, 2);

const PropDetails = ({ defaultProps }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledHeading>Name</StyledHeading>
          <StyledHeading>Prop</StyledHeading>
          <StyledHeading>Default</StyledHeading>
        </tr>
      </thead>
      <tbody>
        {Object.keys(defaultProps).map((propName) => {
          const defaultProp = defaultProps[propName];

          const type = getTypeFromProp(defaultProp);
          const defaultValue = stringifyDefaultValue(defaultProp);

          return (
            <tr key={propName}>
              <StyledCell>
                <pre>{propName}</pre>
              </StyledCell>
              <StyledCell>
                <pre>{type}</pre>
              </StyledCell>
              <StyledCell>
                <pre>{defaultValue}</pre>
              </StyledCell>
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default PropDetails;

{
  /* <PropDetails
        key={prop}
        propName={prop}
        defaultProp={stringifyProp(defaultProps[prop])}
        propType={getTypeFromProp(defaultProps[prop])}
      /> */
}
