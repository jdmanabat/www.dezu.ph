import { FiMenu as icon } from 'react-icons/fi';

export default {
  title: 'Footer Menu',
  name: 'footerMenu',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Column One Name',
      name: 'columnOneName',
      type: 'string',
    },
    {
      title: 'Column One Items',
      name: 'columnOneItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }],
    },
    {
      title: 'Column Two Name',
      name: 'columnTwoName',
      type: 'string',
    },
    {
      title: 'Column Two Items',
      name: 'columnTwoItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Menu',
      };
    },
  },
};
