import { FiInfo as icon } from 'react-icons/fi';

export default {
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
