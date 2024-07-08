import { codeToHtml } from 'https://esm.run/shiki@1.6';

export const sourceCode = `import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}`;

export const highlightedCode = await codeToHtml(sourceCode, { lang: 'jsx', theme: 'github-dark' });