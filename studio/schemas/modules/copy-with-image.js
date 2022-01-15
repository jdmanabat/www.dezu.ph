import { FiColumns as icon } from 'react-icons/fi';

export default {
  title: 'Copy with Image',
  name: 'copyWithImage',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Modules',
      name: 'modules',
      type: 'array',
      of: [{ type: 'figure' }, { type: 'copy' }, { type: 'contactInfo' }],
      validation: (Rule) => Rule.required().min(2).max(2),
    },
    {
      title: 'Colour Scheme',
      name: 'colourScheme',
      type: 'colourScheme',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Copy with Image',
      };
    },
  },
};
