import { FaRegClock as icon } from 'react-icons/fa';

export default {
  title: 'Hours',
  name: 'openHours',
  type: 'object',
  icon,
  fields: [
    {
      title: 'Days',
      name: 'days',
      type: 'string',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'days',
      subtitle: 'hours',
    },
  },
};
