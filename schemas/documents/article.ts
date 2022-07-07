export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      published: 'published',
      category: 'category.title',
      site: 'site.title',
    },
    prepare({title, category, published, media, site}: any) {
      return {
        title: title,
        subtitle: `
          ${published ? '🟢' : '🔴'}:
          ${category ? category : 'No category'},
          ${site ? site : 'No site'}
        `,
        media: media || '',
      };
    },
  },
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'body', title: 'Body'},
  ],
  fields: [
    {
      group: 'details',
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      group: 'details',
      name: 'published',
      title: 'published',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      group: 'details',
      name: 'site',
      title: 'Site',
      type: 'reference',
      to: {type: 'site'},
      options: {
        disableNew: true,
      },
    },
    {
      group: 'details',
      name: 'category',
      title: 'Category',
      type: 'reference',
      weak: true,
      to: {type: 'category'},
    },
    {
      group: 'details',
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
          // 'exif',       // Default: not included
          // 'location',   // Default: not included
        ],
      },
    },
    {
      group: 'body',
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
