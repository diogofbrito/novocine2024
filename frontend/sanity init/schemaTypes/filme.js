export default {
  name: 'filme',
  title: 'Filme',
  type: 'document',

  fields: [
    {
      name: 'nome',
      title: 'Nome do Filme',
      description: 'Colocar sempre o nome em maíusculas',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'Carregar em "generate" para gerar o URL do filme',
      type: 'slug',
      options: {
        source: 'nome',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nomeENG',
      title: 'Nome do Filme (ENG)',
      description: 'Colocar sempre o nome em maíusculas',
      type: 'string',
    },
    {
      name: 'realizador',
      title: 'Nome do Realizador',
      description: 'Se for em dupla, colocar o "&" entre os nomes',
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
      title: 'Duração do filme',
      description: 'Em minutos',

      type: 'number',
      validation: (Rule) => Rule.min(1).max(500),
    },
    {
      name: 'vimeoVid',
      title: 'URL do Vídeo do Vimeo',
      type: 'string',
      description: 'Colocar a URL completa do vídeo no Vimeo (ex.: https://vimeo.com/123456789).',
      validation: (Rule) =>
        Rule.regex(/(?:vimeo\.com\/(?:.*\/)?)(\d+)/, {
          name: 'Vimeo URL',
          invert: false,
          message: 'Por favor, insira uma URL válida do Vimeo.',
        }).required(),

      options: {
        prepare: (value) => {
          const match = value.match(/(?:vimeo\.com\/(?:.*\/)?)(\d+)/)
          if (match) {
            return `https://player.vimeo.com/video/${match[1]}?autoplay=true`
          }
          return value
        },
      },
    },
    {
      name: 'stills',
      title: 'Stills dos filmes',
      description: 'Colocar até 6 imagens em formato ".webp", máximo 150 Kb cada.',
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
      type: 'entrevista',
    },
    {
      name: 'entrevistaENG',
      title: 'Corpo de Texto para o Filme (ENG)',
      type: 'entrevista',
    },

    {
      name: 'autorEntrevista',
      title: 'Autores do Texto',
      description: '(Ex: Texto de Daniel Pizsmiglio, ou, Entrevista com Maria...)',
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
      title: 'Notas',
      description:
        'Este campo serve para escrever pequenas notas (como agradecimentos da equipa NC, colocar imagens de logotipos institucionais, etc...)',
      type: 'extras',
    },
    {
      name: 'extrasENG',
      title: 'Notas (ENG)',
      type: 'extras',
    },
    {
      name: 'dataExibicao',
      title: 'Período de Exibição',
      type: 'object',
      fields: [
        {
          name: 'dataInicio',
          title: 'Data de Início',
          type: 'date',
          options: {dateFormat: 'YYYY-MM-DD'},
        },
        {
          name: 'dataFim',
          title: 'Data de Fim',
          type: 'date',
          options: {dateFormat: 'YYYY-MM-DD'},
        },
      ],
    },
  ],
}
