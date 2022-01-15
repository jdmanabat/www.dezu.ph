import { FiMapPin as icon } from 'react-icons/fi';

export default {
  title: 'Google Map',
  name: 'googleMap',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Show Google Map',
      name: 'showMap',
      type: 'boolean',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Google Map',
      };
    },
  },
};
