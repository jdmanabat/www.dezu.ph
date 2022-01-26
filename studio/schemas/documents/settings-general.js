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
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Email address',
      name: 'email',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Address 1',
      name: 'addressOne',
      type: 'address',
    },
    {
      title: 'Address 2',
      name: 'addressTwo',
      type: 'address',
    },
    // {
    //   title: 'Hours',
    //   name: 'hours',
    //   type: 'array',
    //   of: [{ type: 'openHours' }],
    // },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'socialLink' }],
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
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
