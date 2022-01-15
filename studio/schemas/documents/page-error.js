import { FiAlertOctagon } from 'react-icons/fi';

export default {
  title: 'Error Page',
  name: 'errorPage',
  type: 'document',
  icon: FiAlertOctagon,
  fields: [
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'modules',
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
        title: 'Error Page',
      };
    },
  },
};
