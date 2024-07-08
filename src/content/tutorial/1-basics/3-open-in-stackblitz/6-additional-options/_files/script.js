import sdk from '@stackblitz/sdk';
import { sourceCode, highlightedCode } from './source-code';

// Setup
document.getElementById('code').innerHTML = await highlightedCode;

const btn = document.getElementById('btn');

// Opening the project
btn.addEventListener('click', () => {
  const projectConfig = {
    template: 'create-react-app',
    files: {
      'index.html': `<div id="root"></div>`,
      'index.tsx': `import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Demo from './Demo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Demo />
);`,
      'Demo.tsx': sourceCode,
    },
    dependencies: {
      react: '*',
      '@types/react': '*',
      '@mui/material': '*',
      'react-dom': '*',
    },
  };

  const openOptions = {}

  sdk.openProject(projectConfig, openOptions);
});
