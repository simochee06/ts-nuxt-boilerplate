import { storiesOf } from '@storybook/vue';
import Test from './index.vue';

storiesOf('Test',  module)
  .add('default', () => ({
    components: { Test },
    template: '<Test></Test>'
  }));
