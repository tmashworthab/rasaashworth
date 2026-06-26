// One-time import of the current site content into Sanity.
// Run with:  SANITY_TOKEN=xxx node seed/seed.mjs
import {createClient} from '@sanity/client'
import {createReadStream} from 'node:fs'
import {randomUUID} from 'node:crypto'

const client = createClient({
  projectId: '45o2qwxq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const works = [
  {slug: 'summer-garden', title: 'Summer Garden', img: '03', series: 'Still Life', description: 'Tulips and wild blooms reach upward toward a woven sun, in a riot of red, ochre and green against a luminous ground.'},
  {slug: 'conversation', title: 'Conversation', img: '10', series: 'Still Life', description: 'An abstract still life in warm earth tones, with quiet passages of green and blue and decorative woven borders, like a remembered interior.'},
  {slug: 'harbour-at-sunset', title: 'Harbour at Sunset', img: '11', series: 'Seascapes', description: 'A jetty reaches into a blazing sunset over still water, a maritime scene in the spirit of the Bristol coast.'},
  {slug: 'nocturne', title: 'Nocturne', img: '01', series: 'Figures', description: 'A crowned figure emerges from a deep, dark ground, lit by pale arcs and small flares of red and gold.'},
  {slug: 'the-cabinet', title: 'The Cabinet', img: '05', series: 'Still Life', description: 'Bottles, jars and small treasures arranged across the shelves of a cabinet, in a muted palette full of stillness and memory.'},
  {slug: 'sun-figure', title: 'Sun Figure', img: '07', series: 'Figures', description: 'A totemic figure crowned with rays of sun, woven in ochre, terracotta and slate blue: part portrait, part idol.'},
  {slug: 'coronation', title: 'Coronation', img: '02', series: 'Figures', description: 'A regal figure draped in blue and grey beneath a small woven crown, set against a soft, light ground.'},
  {slug: 'vessels', title: 'Vessels', img: '08', series: 'Still Life', description: 'Pale vessels and soft circular forms drift across a quiet ground, woven in chalky blues and warm sand.'},
  {slug: 'hill-town', title: 'Hill Town', img: '09', series: 'Landscape', description: 'Rooftops gather along a ridge above bands of patterned earth, a remembered landscape of light and shadow.'},
  {slug: 'the-table', title: 'The Table', img: '04', series: 'Still Life', description: 'Vessels and forms gathered across a table, with two figures rising softly beneath, a study in light, shadow and gentle transitions.'},
  {slug: 'moonlight', title: 'Moonlight', img: '06', series: 'Seascapes', description: 'Moonlight scatters across dark water, with reeds and a lone bird at the water’s edge, woven in deep blues and black.'},
]

const block = (text) => ({
  _type: 'block',
  _key: randomUUID().slice(0, 8),
  style: 'normal',
  markDefs: [],
  children: [{_type: 'span', _key: randomUUID().slice(0, 8), text, marks: []}],
})

async function run() {
  for (let i = 0; i < works.length; i++) {
    const w = works[i]
    process.stdout.write(`Uploading ${w.img}.jpg … `)
    const asset = await client.assets.upload('image', createReadStream(`public/images/gallery/${w.img}.jpg`), {
      filename: `${w.slug}.jpg`,
    })
    await client.createOrReplace({
      _id: `work-${w.slug}`,
      _type: 'work',
      title: w.title,
      slug: {_type: 'slug', current: w.slug},
      series: w.series,
      description: w.description,
      order: i + 1,
      image: {_type: 'image', asset: {_type: 'reference', _ref: asset._id}},
    })
    console.log(`✓ ${w.title}`)
  }

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    heroTagline: 'Tapestries woven from light and shadow: still life, figures and the quiet landscapes of memory.',
    statementQuote: 'My work has been deeply inspired by rural landscapes, focusing on the interplay of light and shadow, the gentle transitions and subtler colours found in the natural world.',
    aboutLead: 'A Lithuanian tapestry artist working in the United Kingdom, weaving light, shadow and the subtle colours of the natural world.',
    aboutBody: [
      block('I began my journey into the world of tapestry during my studies at the Vilnius Academy of Arts. My work has been deeply inspired by rural landscapes, focusing on the interplay of light and shadow, the gentle transitions and subtler colours found in the natural world.'),
      block('More recently I have been exploring still life and street scenes as well as a range of maritime themes depicted in seascapes around Bristol.'),
    ],
    contactEmail: 'rasa.ashworth@live.co.uk',
    studioLocation: 'Bristol, United Kingdom',
    btgUrl: 'https://www.thebritishtapestrygroup.co.uk/showcase/rasa-ashworth/',
  })
  console.log('✓ Site text')
  console.log('\nDone - all content imported into Sanity.')
}

run().catch((e) => {
  console.error('Seed failed:', e.message)
  process.exit(1)
})
