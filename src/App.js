import './App.css';
import PostsContainer from './containers/PostsContainer'
import PostsComponent from './components/PostsComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>
      <body>
        <PostsContainer />
        <PostsComponent />
      </body>
    </div>
  );
}

export default App;
