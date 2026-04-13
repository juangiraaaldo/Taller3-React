import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const caracteristicas = [
  {
    titulo: 'Gestión desde móvil',
    descripcion: 'Administra tus productos desde cualquier dispositivo móvil en tiempo real.',
    img: `${import.meta.env.BASE_URL}/imgs/mobile.png`,
  },
  {
    titulo: 'Control de inventario',
    descripcion: 'Monitorea y gestiona tu stock con alertas automáticas de disponibilidad.',
    img: `${import.meta.env.BASE_URL}/imgs/ControlInvetario.png`,
  },
  {
    titulo: 'Análisis y reportes',
    descripcion: 'Visualiza estadísticas y métricas de tus ventas con gráficos detallados.',
    img: `${import.meta.env.BASE_URL}/imgs/AnalisisReport.png`,
  },
  {
    titulo: 'Catálogo de productos',
    descripcion: 'Organiza y exhibe tus productos de forma clara con búsqueda y categorización.',
    img: `${import.meta.env.BASE_URL}/imgs/catalogoProducts.png`,
  },
];


export const Content = () => {
  return (
    <>
      <Box sx={{ backgroundColor: '#d8d8d8' }}>
        {/* Banner */}
        <Box sx={{ position: 'relative', width: '100%', height: { xs: '200px', md: '350px' } }}>
          {/* Imagen */}
          <Box
            component="img"
            src='/Taller3React.github.io/imgs/Banner.png'
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Capa oscura */}
          <Box sx={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(20, 20, 20, 0.41)',
          }} />

          {/* Texto */}
          <Box sx={{
            position: 'absolute',
            bottom: 40, left: 40,
            color: 'white',
          }}>
            <Typography variant="overline" sx={{ letterSpacing: 3 }}>
              LANDING PAGE • TIENDA VIRTUAL
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
              Tu tienda de videojuegos
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 500 }}>
              Los mejores juegos, periféricos y accesorios gamer con el mejor precio del mercado.
            </Typography>
          </Box>

        </Box>


        {/* Sección Características */}
        <Box sx={{ px: 4, py: 6 }}>

          <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
            Características
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Funciones esenciales para gestionar tus productos de forma clara y rápida.
          </Typography>

          <Grid container spacing={3}sx={{ justifyContent: 'center'}}>
            {caracteristicas.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.titulo}>
                <Card sx={{     height: '100%', maxWidth: 345, mx: 'auto', boxShadow: '0px 40px 30px rgba(58, 53, 53, 0.5)', borderRadius: '20px'  }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item.img}
                    alt={item.titulo}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                      {item.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.descripcion}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </>
  );
};