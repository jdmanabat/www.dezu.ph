import { FiLink2 as icon } from 'react-icons/fi';

export default {
  title: 'Link',
  name: 'navLink',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Display Text',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'enter an external URL',
    },
  ],
};
