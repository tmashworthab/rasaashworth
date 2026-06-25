import {sanity, urlFor} from './sanity'
import {works as fallbackWorks} from '../data/works'

export interface WorkView {
  slug: string
  title: string
  series: string
  description: string
  image: string
}

const WORKS_QUERY = `*[_type=="work"]|order(order asc){
  "slug": slug.current, title, series, description, image
}`

// Reads the gallery from Sanity; falls back to the built-in data if Sanity
// is empty or unreachable, so the site always renders.
export async function getWorks(): Promise<WorkView[]> {
  if (sanity) {
    try {
      const docs = await sanity.fetch(WORKS_QUERY)
      if (Array.isArray(docs) && docs.length) {
        return docs.map((d: any) => ({
          slug: d.slug ?? '',
          title: d.title ?? '',
          series: d.series ?? '',
          description: d.description ?? '',
          image: d.image ? urlFor(d.image)!.width(1200).fit('max').auto('format').url() : '',
        }))
      }
    } catch {
      /* fall through */
    }
  }
  return fallbackWorks.map((w) => ({
    slug: w.slug,
    title: w.title,
    series: w.series,
    description: w.description,
    image: w.image,
  }))
}

export async function getFeatured(): Promise<WorkView[]> {
  return (await getWorks()).slice(0, 3)
}

export interface Settings {
  heroTagline: string
  statementQuote: string
  aboutLead: string
  aboutBody: string[]
  contactEmail: string
  studioLocation: string
  btgUrl: string
}

const DEFAULTS: Settings = {
  heroTagline:
    'Tapestries woven from light and shadow: still life, figures and the quiet landscapes of memory.',
  statementQuote:
    'My work has been deeply inspired by rural landscapes, focusing on the interplay of light and shadow, the gentle transitions and subtler colours found in the natural world.',
  aboutLead:
    'A Lithuanian tapestry artist working in the United Kingdom, weaving light, shadow and the subtle colours of the natural world.',
  aboutBody: [
    'I began my journey into the world of tapestry during my studies at the Vilnius Academy of Arts. My work has been deeply inspired by rural landscapes, focusing on the interplay of light and shadow, the gentle transitions and subtler colours found in the natural world.',
    'More recently I have been exploring still life and street scenes as well as a range of maritime themes depicted in seascapes around Bristol.',
  ],
  contactEmail: 'rasa.ashworth@live.co.uk',
  studioLocation: 'Bristol, United Kingdom',
  btgUrl: 'https://www.thebritishtapestrygroup.co.uk/showcase/rasa-ashworth/',
}

const SETTINGS_QUERY = `*[_id=="siteSettings"][0]{
  heroTagline, statementQuote, aboutLead, aboutBody,
  contactEmail, studioLocation, btgUrl
}`

export async function getSettings(): Promise<Settings> {
  if (sanity) {
    try {
      const s = await sanity.fetch(SETTINGS_QUERY)
      if (s) {
        const paras = Array.isArray(s.aboutBody)
          ? s.aboutBody
              .map((b: any) => (b.children ?? []).map((c: any) => c.text).join(''))
              .filter((t: string) => t.trim().length)
          : []
        return {
          heroTagline: s.heroTagline || DEFAULTS.heroTagline,
          statementQuote: s.statementQuote || DEFAULTS.statementQuote,
          aboutLead: s.aboutLead || DEFAULTS.aboutLead,
          aboutBody: paras.length ? paras : DEFAULTS.aboutBody,
          contactEmail: s.contactEmail || DEFAULTS.contactEmail,
          studioLocation: s.studioLocation || DEFAULTS.studioLocation,
          btgUrl: s.btgUrl || DEFAULTS.btgUrl,
        }
      }
    } catch {
      /* fall through */
    }
  }
  return DEFAULTS
}
