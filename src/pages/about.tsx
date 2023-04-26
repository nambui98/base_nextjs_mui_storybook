import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { Meta } from '@/layouts/Meta';
import Copyright from '@/templates/common/Copyright';
import Link from '@/templates/common/Link';
import ProTip from '@/templates/common/Protip';

export default function About() {
  return (
    <Container maxWidth="lg">
      <Meta title="Lorem ipsum" description="Lorem ipsum" />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
