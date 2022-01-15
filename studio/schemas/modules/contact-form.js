import { FiMail as icon } from 'react-icons/fi';

export default {
  title: 'Contact Form',
  name: 'contactForm',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Show Contact Info',
      description: 'If checked, show contact information beside the form',
      name: 'showContactInfo',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      showContactInfo: 'showContactInfo',
    },
    prepare({ showContactInfo }) {
      return {
        title: showContactInfo
          ? 'Form with Contact Information'
          : 'Form without Contact Information',
      };
    },
  },
};
