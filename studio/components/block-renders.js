/* eslint-disable react/prop-types */
import cx from 'classnames';
import * as React from 'react';

function Header1({ children }) {
  return (
    <h1
      style={{
        margin: '0',
        fontSize: '2rem',
        lineHeight: '1.5',
        fontWeight: 400,
      }}
    >
      {children}
    </h1>
  );
}

function Header2({ children }) {
  return (
    <h2
      style={{
        margin: '0',
        fontSize: '1.75rem',
        lineHeight: '1.375',
        fontWeight: 400,
      }}
    >
      {children}
    </h2>
  );
}

function Header3({ children }) {
  return (
    <h3
      style={{
        margin: '0',
        fontSize: '1.5rem',
        lineHeight: '1.25',
        fontWeight: 400,
      }}
    >
      {children}
    </h3>
  );
}

function Header4({ children }) {
  return (
    <h4
      style={{
        margin: '0',
        fontSize: '1.25rem',
        lineHeight: '1.25',
        fontWeight: 400,
      }}
    >
      {children}
    </h4>
  );
}

function Button({ isButton, styles, children }) {
  if (!isButton) return children;
  return (
    <span
      className={cx('btn', styles?.style, {
        'is-large': styles?.isLarge,
        'is-block': styles?.isBlock,
      })}
    >
      {children}
    </span>
  );
}

export { Button, Header1, Header2, Header3, Header4 };
