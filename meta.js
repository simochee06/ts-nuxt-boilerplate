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
    },
    storybook: {
      type: 'confirm',
      message: 'Use Storybook?',
      default: true
    },
    nuxt_port: {
      type: 'string',
      message: 'Nuxt.js port',
      default: '4300'
    },
    storybook_port: {
      when: 'storybook',
      type: 'string',
      message: 'Storybook port',
      default: '43000'
    }
  },
  filters: {
    '.storybook/**/*': 'storybook'
  },
  skipInterpolation: '*.vue'
};
