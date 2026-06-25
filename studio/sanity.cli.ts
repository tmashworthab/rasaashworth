import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '45o2qwxq',
    dataset: 'production',
  },
  studioHost: 'rasaashworth',
})
