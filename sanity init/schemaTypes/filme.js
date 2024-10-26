export default {
  name: 'filme',
  title: 'Filme',
  type: 'document',
  fields: [
    {
      name: 'nome',
      title: 'Nome do Filme',
      type: 'string',
    },
    {
      name: 'realizador',
      title: 'Nome do Realizador',
      type: 'string',
    },
    {
      name: 'pais',
      title: 'País do Realizador',
      type: 'string',
    },
    {
      name: 'ano',
      title: 'Ano do Filme',
      type: 'number',
    },
    {
      name: 'minutos',
      title: 'Minutos do Filme',
      type: 'number',
    },
    {
      name: 'vimeoId',
      title: 'ID do Vídeo do Vimeo',
      type: 'string',
    },
    {
      name: 'imagem',
      title: 'Imagem Placeholder (formato .webp, com máximo 150 Kb)',
      type: 'image',
    },
    {
      name: 'stills',
      title: 'Imagens Stills (até 6 imagens, formato .webp, com máximo 150 Kb)',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'sinopse',
      title: 'Sinopse',
      type: 'text',
      options: {
        formatting: true,
      },
    },
    {
      name: 'entrevista',
      title: 'Entrevista ao Realizador',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Negrito', value: 'bold'},
            {title: 'Itálico', value: 'italic'},
          ],
          lists: [],
          marks: {
            decorators: [
              {title: 'Negrito', value: 'bold'},
              {title: 'Itálico', value: 'italic'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
              {
                name: 'media',
                type: 'object',
                title: 'Mídia',
                fields: [
                  {
                    name: 'src',
                    type: 'url',
                    title: 'URL da Mídia',
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'autorEntrevista',
      title: 'Autor da Entrevista',
      type: 'string',
    },
    {
      name: 'creditos',
      title: 'Créditos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'tipo',
              title: 'Tipo de Crédito',
              type: 'string',
            },
            {
              name: 'conteudo',
              title: 'Conteúdo do Crédito',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'dataExibicao',
      title: 'Data de Exibição',
      type: 'object',
      fields: [
        {
          name: 'dataInicio',
          title: 'Data de Início da Exibição',
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD', // Formato da data
            timeFormat: false, // Desativa a seleção de hora
          },
        },
        {
          name: 'dataFim',
          title: 'Data de Fim da Exibição',
          type: 'datetime',
          options: {
            dateFormat: 'YYYY-MM-DD', // Formato da data
            timeFormat: false, // Desativa a seleção de hora
          },
        },
      ],
    },
  ],
}
