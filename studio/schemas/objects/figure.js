const crops = [
  { title: 'Original', value: 0 },
  { title: '1 : 1 (square)', value: 1 },
  { title: '5 : 7', value: 0.714_285_714_3 },
  { title: '4 : 6', value: 0.666_666_666_7 },
  { title: '16 : 9', value: 1.777_777_777_8 },
];

export default {
  title: 'Image',
  name: 'figure',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Display Size (aspect ratio)',
      name: 'customRatio',
      type: 'number',
      options: {
        isHighlighted: true,
        list: crops,
      },
      validation: (Rule) =>
        Rule.custom((field, context) =>
          'asset' in context.parent && field === undefined ? 'Required!' : true
        ),
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Important for SEO and accessibility.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      asset: 'asset',
      alt: 'alt',
      customRatio: 'customRatio',
    },
    prepare({ alt, customRatio, asset }) {
      const crop = crops.find((c) => c.value === customRatio);

      return {
        title: alt || '(alt text missing)',
        subtitle: crop.title,
        media: asset,
      };
    },
  },
};
