export default {
  title: 'Styles',
  name: 'styles',
  type: 'object',
  fields: [
    {
      title: 'Button Style',
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'is-primary' },
          { title: 'Outline', value: 'is-outline' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Large Size',
      name: 'isLarge',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      title: 'Full Width',
      name: 'isBlock',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
};
