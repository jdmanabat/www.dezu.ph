import { FiLayout as icon } from 'react-icons/fi';

export default {
  title: 'Page',
  name: 'navPage',
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
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'homePage' }, { type: 'blogPage' }],
    },
  ],
};
