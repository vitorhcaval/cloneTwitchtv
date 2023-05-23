import Home from './pages/Home';
import Navbar from './components/Navbar'
import CardAd from './components/CardAd';

import { Container } from './styles/styles'

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
      <CardAd />
    </Container>
  );
}

export default App;
