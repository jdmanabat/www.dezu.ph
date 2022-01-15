import { FiMenu as icon } from 'react-icons/fi';

export default {
  title: 'Menu',
  name: 'menu',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Nav Items',
      name: 'items',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }, { type: 'navDropdown' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu',
      };
    },
  },
};
