import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100px;
`;

Wrapper.displayName = 'WhatIsThis.Wrapper';

export default Wrapper;
