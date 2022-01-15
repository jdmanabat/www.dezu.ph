export default {
  title: 'Colour Scheme',
  name: 'colourScheme',
  type: 'string',
  options: {
    list: [
      { title: 'Light', value: 'light' },
      { title: 'Primary', value: 'primary' },
      { title: 'Secondary', value: 'secondary' },
      { title: 'Dark', value: 'dark' },
    ],
    layout: 'radio',
  },
  validation: (Rule) => Rule.required(),
};
