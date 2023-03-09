import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Personagens from './Components/Pages/Personagens';
import Sobre from './Components/Pages/Sobre';

import Container from './Components/Layout/Container';
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import InfoPersonagens from './Components/Pages/InfoPersonagens';

function App() {
  return (
   <Router>
      <Navbar />
      <Container customClass='min-height'> 
        <Routes>         
          <Route path='/' element={<Home />} />
          <Route path='/personagens' element={<Personagens />} />
          <Route path='/personagens/:id' element={<InfoPersonagens />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
      </Container>  
      <Footer />
   </Router>
  );
}

export default App;
