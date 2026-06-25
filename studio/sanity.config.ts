import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// The editing app ("Studio") your sister logs into. Project id comes from
// the SANITY_STUDIO_PROJECT_ID env var (set after the project is created).
export default defineConfig({
  name: 'rasa',
  title: 'Rasa Ashworth — Website',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '45o2qwxq',
  dataset: 'production',
  plugins: [
    // Pin "Site text" as a single editable document at the top of the list.
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site text')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('work').title('Artworks'),
          ]),
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
