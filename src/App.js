import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'
import portfolio from './components/portfolio/Folio MM 80.pdf'



function App() {
  

  return (
    <div className="App">
      <Iframe url={portfolio} id="portfolio"/>
    </div>
  );
}

export default App;
