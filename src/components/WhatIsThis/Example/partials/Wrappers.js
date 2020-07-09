import styled from 'styled-components';

export const PropInputWrapper = styled.div`
  display: flex;
`;

const WithBorder = styled.div`
  border: 2px solid #6a6e72;
`;

export const FullWrapper = styled.div`
  border-radius: 2px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ExampleWrapper = styled(WithBorder)`
  padding: 16px;

  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  border-bottom: none;
`;

export const CodeWrapper = styled(WithBorder)`
  padding: 16px;
  background: #282c34;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
