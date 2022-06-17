export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
        storeOriginalFilename: false,
        metadata: [
          'blurhash',   // Default: included
          'lqip',       // Default: included
          'palette',    // Default: included
          // 'exif',       // Default: not included
          // 'location',   // Default: not included
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
}
