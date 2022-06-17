export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      shared: 'shared',
      category: 'category.title',
    },
    prepare({title, category, shared, media}: any) {
      return {
        title: title,
        subtitle: `${shared ? '🟢' : '🔴'} ${category ? category : 'No category'}`,
        media: media || '',
      }
    },
  },
  groups: [
    {name: 'details', title: 'Details', default: true},
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
      name: 'shared',
      title: 'Shared',
      type: 'boolean',
      initialValue: false,
      // options: {
      //   layout: 'checkbox',
      // },
    },
    {
      group: 'details',
      name: 'category',
      title: 'Category',
      type: 'reference',
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
}
