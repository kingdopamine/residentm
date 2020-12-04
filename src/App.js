import logo from './logo.svg';
import './App.css';
import portfolio from './components/portfolio/Folio MM 80.pdf'

function App() {
  return (
    <div className="App">
      <object data={portfolio} type="application/pdf" id="portfolio">
        <embed src={portfolio} type="application/pdf" id="portfolio"/>
      </object>
    </div>
  );
}

export default App;
