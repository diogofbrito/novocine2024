export default {
  name: 'entrevista',
  type: 'array',
  title: 'entrevista',
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
        ]
    },
  ],
}
