import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'
import portfolio from './components/portfolio/Folio MM 80.pdf'
import p8 from './components/portfolio/P8.jpg'


function App() {
  

  return (
    <div className="App">
      <embed src={portfolio} id="portfolio"/>
    </div>
  );
}

export default App;
