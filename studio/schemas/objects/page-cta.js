/* eslint-disable import/no-named-as-default-member, import/no-named-as-default */
import { IoLinkOutline as icon } from 'react-icons/io5';

import ConditionalFields from '../../components/conditional-field';

export default {
  name: 'pageCta',
  title: 'Link to page',
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
      name: 'linkSection',
      title: 'Specific section (eg. #contact-form)',
      type: 'string',
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'homePage' }, { type: 'page' }],
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
