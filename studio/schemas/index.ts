// objects
import blockContent from './objects/blockContent'

const objects = [blockContent]

// documents
import category from './documents/category'
import article from './documents/article'
import site from './documents/site'

const documents = [
  article,
  category,
  site,
]

// tests
import testdoc from './test/testdoc'

const tests = [testdoc]


/* ------------------------------------------------------------ */
export const schemaTypes = [...objects, ...documents, ...tests]