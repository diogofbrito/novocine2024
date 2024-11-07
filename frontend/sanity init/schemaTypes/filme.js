export default {
  name: 'filme',
  title: 'Filme',
  type: 'document',

  fields: [
    {
      name: 'nome',
      title: 'Nome do Filme em Maiúsculas',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nome',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') 
            .replace(/\s+/g, '-') /
            .replace(/[^\w\-]+/g, '') 
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nomeENG',
      title: 'Nome do Filme em Maiúsculas (ENG)',
      type: 'string',
    },
    {
      name: 'realizador',
      title: 'Nome do Realizador',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'minutos',
      title: 'Duração (Minutos)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(500),
    },
    {
      name: 'vimeoId',
      title: 'ID do Vídeo no Vimeo',
      type: 'string',
    },
    {
      name: 'stills',
      title: 'Imagens Stills (até 6 imagens, formato .webp, máximo 150 Kb)',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.max(6),
    },
    {
      name: 'sinopse',
      title: 'Sinopse',
      type: 'text',
      options: {formatting: true},
    },
    {
      name: 'sinopseENG',
      title: 'Sinopse (ENG)',
      type: 'text',
      options: {formatting: true},
    },
    {
      name: 'entrevista',
      title: 'Corpo de Texto para o Filme',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'entrevistaENG',
      title: 'Corpo de Texto para o Filme (ENG)',
      type: 'array',
      of: [{type: 'block'}],
    },

    {
      name: 'autorEntrevista',
      title: 'Autores do Texto (Ex: Daniel Pizsmiglio)',
      type: 'string',
    },
    {
      name: 'autorEntrevistaENG',
      title: 'Autores do Texto (ENG)',
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
            {name: 'tipo', title: 'Tipo de Crédito', type: 'string'},
            {name: 'tipo_ENG', title: 'Tipo de Crédito (ENG)', type: 'string'},
            {name: 'conteudo', title: 'Conteúdo do Crédito', type: 'text'},
          ],
        },
      ],
    },
    {
      name: 'extras',
      title: 'Extras (Agradecimentos, Logos)',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'extrasENG',
      title: 'Extras (ENG)',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataExibicao',
      title: 'Período de Exibição',
      type: 'object',
      fields: [
        {
          name: 'dataInicio',
          title: 'Data de Início',
          type: 'datetime',
          options: {dateFormat: 'YYYY-MM-DD'},
        },
        {
          name: 'dataFim',
          title: 'Data de Fim',
          type: 'datetime',
          options: {dateFormat: 'YYYY-MM-DD'},
        },
      ],
    },
  ],
}
