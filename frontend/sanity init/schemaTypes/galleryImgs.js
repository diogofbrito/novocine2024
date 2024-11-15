export default {
  name: 'galleryImgs',
  type: 'object',
  title: 'Galeria de Imagens',
  fields: [
    {
      name: 'imagens',
      title: 'Imagens da Galeria',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda da Imagem',
              options: {isHighlighted: true}, 
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(10), 
    },
  ],
}
