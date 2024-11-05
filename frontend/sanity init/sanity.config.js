import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure' // Voltar para `structureTool`
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'novocine',

  projectId: '3b3ndxr9',
  dataset: 'novocine',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
