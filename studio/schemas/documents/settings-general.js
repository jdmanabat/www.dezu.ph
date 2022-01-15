export default {
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  fields: [
    {
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website.',
      name: 'siteURL',
      type: 'url',
    },
    {
      title: 'Phone number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Email address',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'address',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'array',
      of: [{ type: 'openHours' }],
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      };
    },
  },
};
