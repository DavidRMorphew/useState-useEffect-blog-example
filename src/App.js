import './App.css';
import PostsContainer from './containers/PostsContainer'
import PostsComponent from './components/PostsComponent'
import postsData from './data/posts'
console.log(postsData.posts)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>      
        <PostsContainer />
        <PostsComponent />
    </div>
  );
}

export default App;
