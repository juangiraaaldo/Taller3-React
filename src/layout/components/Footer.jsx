import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'; 
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Footer = () => {
    return (
        <Box component="footer" sx={{ backgroundColor: '#212121', color: 'white', pt: 6, pb: 3, mt: 'auto' }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} sx={{ mb: 4 }}>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <ShoppingCartIcon />
                            <Typography variant="h6" fontWeight={700} fontFamily="monospace">
                                GamerZone
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="grey.500">
                            Tu tienda de videojuegos favorita.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
                            Navegación
                        </Typography>
                        {['Inicio', 'Artículos', 'Ofertas'].map((item) => (
                            <Box key={item} sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/" color="grey.500" underline="hover" sx={{'&:hover': {color: 'rgb(226, 43, 165)'}}}>
                                    {item}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
                            Soporte
                        </Typography>
                        {['FAQ', 'Contacto', 'Devoluciones'].map((item) => (
                            <Box key={item} sx={{ mb: 1 }}>
                                <Link component={RouterLink} to="/" color="grey.500" underline="hover" sx={{'&:hover': {color: 'rgb(226, 43, 165)'}}}>
                                    {item}
                                </Link>
                            </Box>
                        ))}
                    </Grid>

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
                            Recibe ofertas
                        </Typography>
                        <Typography variant="body2" color="grey.500">
                            Suscríbete para recibir las mejores ofertas directo a tu correo.
                        </Typography>
                    </Grid>

                </Grid>

                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.15)', pt: 3 }}>
                    <Typography variant="body2" color="grey.500" align="center">
                        © 2026 Juan José Giraldo All Right Reserved :|
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};