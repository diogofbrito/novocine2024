export default {
  name: 'extras',
  type: 'array',
  title: 'extras',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
      ],
    },
  ],
}
