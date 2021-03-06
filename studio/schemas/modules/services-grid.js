import { BsThreeDots as icon } from 'react-icons/bs';

export default {
  title: 'Services Grid',
  name: 'servicesGrid',
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
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{ type: 'service' }],
      validation: (Rule) => Rule.required().min(2).max(6),
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'layout',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Colour Scheme',
      name: 'colourScheme',
      type: 'colourScheme',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'figure',
    },
  ],
};
