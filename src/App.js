import logo from './logo.svg';
import './App.css';
import QuotesContainer from './containers/QuotesContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>
      <body>
        <QuotesContainer />
      </body>
    </div>
  );
}

export default App;
