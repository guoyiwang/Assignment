import './App.scss';
import Navbar from './components/Navbar';
import Searchinput from './components/Searchinput';
import { BrowserRouter as Router} from 'react-router-dom'
import Categories from './components/Categories';
import Market from './components/Market';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Searchinput />
      <Categories />
      <Market />
      <Contact />
    </Router>
  );
}

export default App;
