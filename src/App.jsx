import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/components/Header';
import { Content } from './layout/components/Content';
import { Footer } from './layout/components/Footer';
import { Articles } from './articles/components/Articles';
import { Oferts } from './Ofert/components/Oferts';
import { Favorites } from './favorites/components/Favorites';
import { Compras } from './compra/components/Compras';
import { MiCuenta } from './cuenta/components/MiCuenta';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

function App() {
  const [favoritos, setFavoritos] = useState(0);
  const [carrito, setCarrito] = useState(0);

  return (
    <>
      <CssBaseline />
      
      <HashRouter>
        {/* Deja fijo Footer */}
        <Box sx={{ 
          backgroundColor: '#d8d8d8',
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh'
        }}>
          
          <Header favoritos={favoritos} carrito={carrito} />

          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path='/' element={<Content />} />

              <Route path='/articles' element={<Articles
                setFavoritos={setFavoritos}
                setCarrito={setCarrito} />} />
                
              <Route path='/ofert' element={<Oferts />} />

              <Route path='/favorites' element={<Favorites />} />
              
              <Route path='/compra' element={<Compras />} />

              <Route path='/cuenta' element={<MiCuenta />} />
            </Routes>
          </Box>

          <Footer />
          
        </Box>
      </HashRouter>
    </>
  )
}

export default App;