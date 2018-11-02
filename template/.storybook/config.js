import { configure, addDecorator } from '@storybook/vue';
import { configureViewport } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';

// Add global styles
import 'reset.css';

// Add decorators
addDecorator(withKnobs);
configureViewport();

// Add stories
const req = require.context('../stories', true, /\.stor(y|ies)\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Run configure
configure(loadStories, module);
