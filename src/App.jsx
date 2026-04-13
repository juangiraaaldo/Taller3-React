import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/components/Header';
import { Content } from './layout/components/Content';
import { Footer } from './layout/components/Footer';
import { Articles } from './articles/components/Articles';
import { Oferts } from './Ofert/components/Oferts';
import CssBaseLine from '@mui/material/CssBaseline';

function App() {

  return (
    <>
    <CssBaseLine />
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/ofert' element={<Oferts/>}/>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  )
}

export default App
