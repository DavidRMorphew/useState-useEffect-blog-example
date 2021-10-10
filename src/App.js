import './App.css';
import QuotesContainer from './containers/QuotesContainer'
import QuotesComponent from './components/QuotesComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>
      <body>
        <QuotesContainer />
        <QuotesComponent />
      </body>
    </div>
  );
}

export default App;
