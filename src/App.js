import logo from './logo.svg';
import './App.css';
import portfolio from './components/portfolio/Folio MM 80.pdf'

function App() {
  return (
    <div className="App">
      <embed src={portfolio} id="portfolio"/>
    </div>
  );
}

export default App;
