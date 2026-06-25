import {defineField, defineType} from 'sanity'

// One gallery artwork. This is what your sister edits for each piece —
// its title, which series it belongs to, the description shown when you
// click it, the image, and where it appears in the running order.
export default defineType({
  name: 'work',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the piece (e.g. "Summer Garden").',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'string',
      description: 'The small label shown under the title.',
      options: {
        list: ['Still Life', 'Figures', 'Landscape', 'Seascapes'],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Shown in the enlarged view when someone clicks the piece.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'The framed photo of the tapestry.',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first in the gallery.',
    }),
  ],
  orderings: [
    {title: 'Display order', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'series', media: 'image'},
  },
})
