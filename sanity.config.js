import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: '961explore',
  projectId: 'v3dmdzg4',
  dataset: 'production',

  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
