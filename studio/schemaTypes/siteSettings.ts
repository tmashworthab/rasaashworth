import {defineField, defineType} from 'sanity'

// The editable text for the rest of the site (home, about, contact).
// This is a single document - there is only ever one "Site settings".
export default defineType({
  name: 'siteSettings',
  title: 'Site text',
  type: 'document',
  groups: [
    {name: 'home', title: 'Home page'},
    {name: 'about', title: 'About page'},
    {name: 'contact', title: 'Contact'},
  ],
  fields: [
    // Home
    defineField({
      name: 'heroTagline',
      title: 'Home tagline',
      type: 'text',
      rows: 2,
      group: 'home',
      description: 'The large line under the name on the home page.',
    }),
    defineField({
      name: 'statementQuote',
      title: 'Home quote',
      type: 'text',
      rows: 3,
      group: 'home',
    }),
    // About
    defineField({
      name: 'aboutLead',
      title: 'About: opening line',
      type: 'text',
      rows: 2,
      group: 'about',
    }),
    defineField({
      name: 'aboutBody',
      title: 'About: biography',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: [], marks: {decorators: []}}],
      group: 'about',
      description: 'The main biography paragraphs.',
    }),
    // Contact
    defineField({name: 'contactEmail', title: 'Contact email', type: 'string', group: 'contact'}),
    defineField({name: 'studioLocation', title: 'Studio location', type: 'string', group: 'contact'}),
    defineField({name: 'btgUrl', title: 'British Tapestry Group link', type: 'url', group: 'contact'}),
  ],
  preview: {prepare: () => ({title: 'Site text'})},
})
