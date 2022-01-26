import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa';

const getIcon = (icon) => {
  switch (icon) {
    case 'Facebook':
      return FaFacebookF;

    case 'Instagram':
      return FaInstagram;

    case 'Twitter':
      return FaTwitter;

    case 'YouTube':
      return FaYoutube;

    case 'LinkedIn':
      return FaLinkedinIn;

    default:
      return false;
  }
};

export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false,
  },
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'Twitter', value: 'Twitter' },
          { title: 'YouTube', value: 'YouTube' },
        ],
      },
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      url: 'url',
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url || '(url not set)',
        media: getIcon(icon),
      };
    },
  },
};
