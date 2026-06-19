export interface Work {
  slug: string;
  title: string;
  /** Filename in /public/images */
  image: string;
  /** 'portrait' | 'landscape' — used for gallery layout hints */
  orientation: 'portrait' | 'landscape';
  /** Short series / theme label shown under the title */
  series: string;
  /** A sentence or two of description for the lightbox / captions */
  description: string;
}

// The artworks shown on the site. To add a new piece, drop the image into
// /public/images and add an entry here. `featured` order on the home page is
// taken from the top of this list.
export const works: Work[] = [
  {
    slug: 'conversation',
    title: 'Conversation',
    image: '/images/RasaAshworth-Conversation.jpg',
    orientation: 'landscape',
    series: 'Still Life',
    description:
      'An abstract still life woven in warm earth tones, with quiet passages of green and blue threading through. Decorative woven borders frame the composition like a remembered interior.',
  },
  {
    slug: 'table',
    title: 'The Table',
    image: '/images/RasaAshworth-Table.jpg',
    orientation: 'landscape',
    series: 'Still Life',
    description:
      'Vessels and forms gathered across a table, with two figures rising softly beneath. A study in light, shadow and the gentle transitions between objects.',
  },
  {
    slug: 'cabinet',
    title: 'The Cabinet',
    image: '/images/RasaAshworth-Cabinet.jpg',
    orientation: 'portrait',
    series: 'Still Life',
    description:
      'Bottles, jars and small treasures arranged across the shelves of a cabinet. The muted palette and woven texture lend an air of stillness and memory.',
  },
  {
    slug: 'chairs',
    title: 'Two Chairs',
    image: '/images/RasaAshworth-Chairs.jpg',
    orientation: 'portrait',
    series: 'Still Life',
    description:
      'Two chairs stand together, their warp threads left to trail freely below — a meditation on presence, absence and the quiet companionship of everyday objects.',
  },
  {
    slug: 'sun-figure',
    title: 'Sun Figure',
    image: '/images/RasaAshworth-Bust1.jpg',
    orientation: 'portrait',
    series: 'Figures',
    description:
      'A totemic figure crowned with rays of sun, woven in ochre, terracotta and slate blue. The image hovers between portrait, idol and landscape.',
  },
  {
    slug: 'green-figure',
    title: 'Green Figure',
    image: '/images/RasaAshworth-Bust2.jpg',
    orientation: 'portrait',
    series: 'Figures',
    description:
      'A figure emerges from a verdant, crenellated ground above a band of patterned earth. Soft greens and umbers recall rural landscapes seen and half-remembered.',
  },
];

export const featured = works.slice(0, 3);
