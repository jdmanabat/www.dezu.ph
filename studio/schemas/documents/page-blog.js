import { FiFileText as icon } from 'react-icons/fi';

export default {
  title: 'Blog',
  name: 'blogPage',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Hero',
      name: 'hero',
      type: 'hero',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Blog Page',
      };
    },
  },
};
