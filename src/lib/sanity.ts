import {createClient, type SanityClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Reads content from Sanity when configured. If the env vars are absent
// (e.g. before the CMS is connected), `isConfigured` is false and the site
// falls back to the built-in content in src/data/works.ts — so the build
// never breaks.
const projectId = import.meta.env.SANITY_PROJECT_ID || '45o2qwxq'
const dataset = import.meta.env.SANITY_DATASET || 'production'

export const isConfigured = Boolean(projectId)

export const sanity: SanityClient | null = isConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

const builder = sanity ? imageUrlBuilder(sanity) : null

/** Build a CDN URL for a Sanity image reference. */
export function urlFor(source: any) {
  return builder ? builder.image(source) : null
}
