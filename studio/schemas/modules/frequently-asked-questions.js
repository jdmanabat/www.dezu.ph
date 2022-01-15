import { FiInfo as icon } from 'react-icons/fi';

export default {
  title: 'Frequently Asked Questions',
  name: 'frequentlyAskedQuestions',
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
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [{ type: 'faq' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
