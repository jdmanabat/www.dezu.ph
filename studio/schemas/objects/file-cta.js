/* eslint-disable import/no-named-as-default-member, import/no-named-as-default */
import { IoDocumentAttachOutline as icon } from 'react-icons/io5';

import ConditionalFields from '../../components/conditional-field';

export default {
  name: 'fileCta',
  title: 'Link to file',
  type: 'object',
  icon,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'File',
      name: 'file',
      type: 'file',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Style as Button?',
      name: 'isButton',
      type: 'boolean',
    },
    {
      name: 'styles',
      type: 'styles',
      inputComponent: ConditionalFields,
      options: {
        condition: (_document, context) => context().isButton === true,
      },
    },
  ],
};
