import { FiList as icon } from 'react-icons/fi';

export default {
  title: 'Heading line',
  name: 'headingLine',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'string',
    },
    {
      title: 'Underlined?',
      name: 'isUnderlined',
      type: 'boolean',
    },
  ],
};
