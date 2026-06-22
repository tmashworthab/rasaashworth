export interface Work {
  slug: string;
  title: string;
  /** Filename in /public/images */
  image: string;
  /** 'portrait' | 'landscape' | 'square' — used for gallery layout hints */
  orientation: 'portrait' | 'landscape' | 'square';
  /** Short series / theme label shown under the title */
  series: string;
  /** A sentence or two of description for the lightbox / captions */
  description: string;
}

// The artworks shown on the site — professionally framed and photographed.
// Images live in /public/images/gallery (the surrounding wall is trimmed away
// so each framed piece sits directly on the page). To add a new piece, drop
// its photo in that folder and add an entry here. Home-page "featured" order
// is taken from the top of this list.
export const works: Work[] = [
  {
    slug: 'summer-garden',
    title: 'Summer Garden',
    image: '/images/gallery/03.jpg',
    orientation: 'portrait',
    series: 'Still Life',
    description:
      'Tulips and wild blooms reach upward toward a woven sun, in a riot of red, ochre and green against a luminous ground.',
  },
  {
    slug: 'conversation',
    title: 'Conversation',
    image: '/images/gallery/10.jpg',
    orientation: 'landscape',
    series: 'Still Life',
    description:
      'An abstract still life in warm earth tones, with quiet passages of green and blue and decorative woven borders, like a remembered interior.',
  },
  {
    slug: 'harbour-at-sunset',
    title: 'Harbour at Sunset',
    image: '/images/gallery/11.jpg',
    orientation: 'landscape',
    series: 'Seascapes',
    description:
      'A jetty reaches into a blazing sunset over still water — a maritime scene in the spirit of the Bristol coast.',
  },
  {
    slug: 'nocturne',
    title: 'Nocturne',
    image: '/images/gallery/01.jpg',
    orientation: 'portrait',
    series: 'Figures',
    description:
      'A crowned figure emerges from a deep, dark ground, lit by pale arcs and small flares of red and gold.',
  },
  {
    slug: 'the-cabinet',
    title: 'The Cabinet',
    image: '/images/gallery/05.jpg',
    orientation: 'square',
    series: 'Still Life',
    description:
      'Bottles, jars and small treasures arranged across the shelves of a cabinet, in a muted palette full of stillness and memory.',
  },
  {
    slug: 'sun-figure',
    title: 'Sun Figure',
    image: '/images/gallery/07.jpg',
    orientation: 'portrait',
    series: 'Figures',
    description:
      'A totemic figure crowned with rays of sun, woven in ochre, terracotta and slate blue — part portrait, part idol.',
  },
  {
    slug: 'coronation',
    title: 'Coronation',
    image: '/images/gallery/02.jpg',
    orientation: 'portrait',
    series: 'Figures',
    description:
      'A regal figure draped in blue and grey beneath a small woven crown, set against a soft, light ground.',
  },
  {
    slug: 'vessels',
    title: 'Vessels',
    image: '/images/gallery/08.jpg',
    orientation: 'portrait',
    series: 'Still Life',
    description:
      'Pale vessels and soft circular forms drift across a quiet ground, woven in chalky blues and warm sand.',
  },
  {
    slug: 'hill-town',
    title: 'Hill Town',
    image: '/images/gallery/09.jpg',
    orientation: 'portrait',
    series: 'Landscape',
    description:
      'Rooftops gather along a ridge above bands of patterned earth — a remembered landscape of light and shadow.',
  },
  {
    slug: 'the-table',
    title: 'The Table',
    image: '/images/gallery/04.jpg',
    orientation: 'square',
    series: 'Still Life',
    description:
      'Vessels and forms gathered across a table, with two figures rising softly beneath — a study in light, shadow and gentle transitions.',
  },
  {
    slug: 'moonlight',
    title: 'Moonlight',
    image: '/images/gallery/06.jpg',
    orientation: 'portrait',
    series: 'Seascapes',
    description:
      'Moonlight scatters across dark water, with reeds and a lone bird at the water’s edge, woven in deep blues and black.',
  },
];

export const featured = works.slice(0, 3);
