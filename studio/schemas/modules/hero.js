import { FiStar } from 'react-icons/fi';

export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: FiStar,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'array',
      of: [{ type: 'headingLine' }],
    },
    {
      title: 'Calls to Action',
      name: 'ctas',
      type: 'ctas',
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'figure',
    },
    {
      title: 'Small hero',
      name: 'isSmall',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      backgroundImage: 'backgroundImage',
      content: 'content.0.children',
    },
    prepare({ backgroundImage, content }) {
      return {
        title: 'Hero',
        subtitle: content && content[0]?.text,
        media: backgroundImage,
      };
    },
  },
};
