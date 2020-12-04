import logo from './logo.svg';
import './App.css';
import portfolio from './components/portfolio/Folio MM 80.pdf'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <embed src={portfolio} width="100%" height="2100px" z-index="1"/>
      </header>
    </div>
  );
}

export default App;
