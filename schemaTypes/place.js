export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'type',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food', value: 'food' },
          { title: 'Coffee', value: 'coffee' },
          { title: 'Fun Activity', value: 'fun' },
          { title: 'Nature', value: 'nature' },
          { title: 'Hike', value: 'hike' },
          { title: 'Waterfall', value: 'waterfall' },
          { title: 'Beach', value: 'beach' },
          { title: 'Mall', value: 'mall' },
          { title: 'Trend', value: 'trend' }
        ],
        layout: 'dropdown'
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Neighborhood, area, or Google Maps link'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Only approved entries will show on the site'
    },
    {
      name: 'aiGenerated',
      title: 'AI Generated',
      type: 'boolean',
      description: 'Was this added by AI?'
    }
  ]
}
