export default {
  title: 'Layout',
  name: 'layout',
  type: 'string',
  options: {
    list: [
      { title: 'Small', value: 'small' },
      { title: 'Large', value: 'large' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
  validation: (Rule) => Rule.required(),
};
