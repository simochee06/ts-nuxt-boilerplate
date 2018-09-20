module.exports = {
  prompts: {
    name: {
      type: 'string',
      message: 'Name'
    },
    description: {
      type: 'string',
      message: 'Description',
      default: 'A Nuxt.js project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    version: {
      type: 'string',
      message: 'Version',
      default: '1.0.0'
    },
    repository: {
      type: 'string',
      message: 'Repository'
    },
    license: {
      type: 'string',
      message: 'License',
      default: 'MIT'
    }
  }
};
