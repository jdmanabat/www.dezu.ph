import { MdFormatListBulleted as icon } from 'react-icons/md';

export default {
  title: 'List',
  name: 'list',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      title: 'Column 1',
      name: 'columnOne',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1).max(6),
    },
    {
      title: 'Column 2',
      name: 'columnTwo',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1).max(6),
    },
    {
      title: 'Colour Scheme',
      name: 'colourScheme',
      type: 'colourScheme',
      validation: (Rule) => Rule.required(),
    },
  ],
};
