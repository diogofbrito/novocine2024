export default {
  name: 'dividerHr',
  type: 'object',
  title: 'dividerHr',
  fields: [
    {
      name: 'hr',
      type: 'string',
      title: 'Hr',
      hidden: true,
    },
  ],
  preview: {
    prepare() {
      return {title: 'Divider'}
    },
  },
}
