import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'Musings Blog',

  projectId: '52igmtvo',
  dataset: 'production',

  basePath: '/admin',
  apiVersion: '2023-04-25',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config;