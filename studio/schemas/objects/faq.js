import { FiInfo as icon } from 'react-icons/fi';

export default {
  title: 'FAQ',
  name: 'faq',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Question',
      name: 'question',
      type: 'string',
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'richText',
    },
  ],
};
