import { FiChevronDown as icon } from 'react-icons/fi';

export default {
  title: 'Dropdown',
  name: 'navDropdown',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Text to Display',
    },
    {
      title: 'Dropdown Items',
      name: 'dropdownItems',
      type: 'array',
      of: [{ type: 'navPage' }, { type: 'navLink' }],
    },
  ],
};
