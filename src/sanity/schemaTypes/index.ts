import { type SchemaTypeDefinition } from 'sanity'
import { Blog } from '../schemaTypes/blog'
import { author } from '../author'
import product from '../product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blog,author,product],
}
