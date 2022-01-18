import React from 'react';
import {
  MdOutlineCancel,
  MdWarningAmber,
  MdFormatColorText,
} from 'react-icons/md';

const cancelBulletRender = (props) => (
  <span>
    <MdOutlineCancel
      style={{
        color: 'red',
        fontSize: '15px',
        marginBottom: '-2px',
        marginRight: '8px',
      }}
    />
    {props.children}
  </span>
);

const warningBulletRender = (props) => (
  <span>
    <MdWarningAmber
      style={{
        color: 'red',
        fontSize: '15px',
        marginBottom: '-2px',
        marginRight: '8px',
      }}
    />
    {props.children}
  </span>
);

export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        {
          title: 'H2',
          value: 'h2',
        },
        {
          title: 'H3',
          value: 'h3',
        },
        {
          title: 'H4',
          value: 'h4',
        },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        annotations: [
          {
            name: 'color',
            title: 'Color',
            type: 'color',
            blockEditor: {
              icon: MdFormatColorText,
            },
          },
        ],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          {
            title: 'Cancel Bullet',
            value: 'cancelBullet',
            blockEditor: {
              icon: MdOutlineCancel,
              render: cancelBulletRender,
            },
          },
          {
            title: 'Warning Bullet',
            value: 'warningBullet',
            blockEditor: {
              icon: MdWarningAmber,
              render: warningBulletRender,
            },
          },
        ],
      },
    },
    {
      type: 'image',
    },
  ],
};
