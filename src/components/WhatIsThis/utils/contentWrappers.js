import React from 'react';

export const bracketWrapper = (content) => (
  <>
    {`{`}
    {content}
    {`}`}
  </>
);

export const quoteWrapper = (content) => (
  <>
    {`"`}
    {content}
    {`"`}
  </>
);
