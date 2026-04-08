import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';

export const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 3,
          px: 4,
          mt: 'auto',
        }}
      >
        <Divider sx={{ borderColor: 'rgba(223, 225, 255, 0.27)', mb: 2 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Juan José Giraldo. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink component={RouterLink} to="/" color="inherit" underline="hover">
              Inicio
            </MuiLink>
            <MuiLink component={RouterLink} to="/articles" color="inherit" underline="hover">
              Acerca de
            </MuiLink>
            <MuiLink component={RouterLink} to="/contacto" color="inherit" underline="hover">
              Contacto
            </MuiLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};