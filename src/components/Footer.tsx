import * as React from 'react';
import { Box, Link, Typography, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from '../assets/Logo.svg'

export const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        color: 'text.secondary',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        margin: '0 10vw',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid size={{xs:12, sm:6, md: 3}}>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <img src={Image} alt='fund-center-logo'/>
            </IconButton>
          </Grid>
          <Grid  size={{xs:6, sm:3, md: 1}}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              About us
            </Typography>
            <Link href="#" color="inherit" display="block">Our people & leaderhip</Link>
            <Link href="#" color="inherit" display="block">Our commitmnet</Link>
            <Link href="#" color="inherit" display="block">Coporate Social Responsibility</Link>
          </Grid>
          <Grid  size={{xs:6, sm:3, md: 1}}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Our Funds
            </Typography>
            <Link href="#" color="inherit" display="block">Our investment strategies</Link>
            <Link href="#" color="inherit" display="block">Our investment platforms</Link>
          </Grid>
          <Grid  size={{xs:6, sm:3, md: 1}}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Insights
            </Typography>
            <Link href="#" color="inherit" display="block"> Articles </Link>
            <Link href="#" color="inherit" display="block"> Blogs </Link>
            <Link href="#" color="inherit" display="block"> Videos </Link>
            <Link href="#" color="inherit" display="block"> Podcasts </Link>
          </Grid>
          <Grid  size={{xs:6, sm:3, md: 1}}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="inherit" display="block">Policies & statements</Link>
            <Link href="#" color="inherit" display="block">Investor resources</Link>
            <Link href="#" color="inherit" display="block">Reports & accounts</Link>
            <Link href="#" color="inherit" display="block">Glossary</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;