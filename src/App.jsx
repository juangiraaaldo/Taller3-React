import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './layout/components/Header';
import { Content } from './layout/components/Content';
import { Footer } from './layout/components/Footer';

function App() {

  return (
    <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content/>}/>
      </Routes>
      <Footer />
    </HashRouter>
    </>
  )
}

export default App
