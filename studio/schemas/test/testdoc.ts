export default {
  name: 'testdoc',
  title: 'Test Doc',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {type: 'reference', to: {type: 'category'}, readonly: true},
      ],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'code'
    }
  ],
}

// const schemaDocs = [author, article, category, imgSet]//.map(
// //   obj => (obj.liveEdit = false) && obj // <-- set liveEdit true/flase for all docs
// // )