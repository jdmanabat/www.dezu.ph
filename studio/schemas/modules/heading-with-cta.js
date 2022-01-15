import { FiType as icon } from 'react-icons/fi';

export default {
  title: 'Heading with CTA',
  name: 'headingWithCta',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'array',
      of: [{ type: 'headingLine' }],
    },
    {
      title: 'Call to Action',
      name: 'ctas',
      type: 'ctas',
      validation: (Rule) => Rule.required().min(1).max(1),
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
        title: 'Heading with CTA',
      };
    },
  },
};