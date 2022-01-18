import { FiFileText as icon } from 'react-icons/fi';

export default {
  title: 'Copy',
  name: 'copy',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Body',
      name: 'body',
      type: 'richText',
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'figure',
    },
    {
      title: 'Call to Action',
      name: 'ctas',
      type: 'ctas',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Copy',
      };
    },
  },
};
