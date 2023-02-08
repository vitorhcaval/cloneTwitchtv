import Home from './pages/Home';
import Navbar from './components/Navbar'

import { Container } from './styles/styles'

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
