import { FiCheckSquare as icon } from 'react-icons/fi';

export default {
  title: 'Service',
  name: 'service',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Page',
      name: 'page',
      description: 'Page you’re linking to',
      type: 'reference',
      to: [{ type: 'homePage' }, { type: 'page' }],
    },
    {
      title: 'Image',
      name: 'figure',
      type: 'figure',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'richText',
    },
  ],
};
