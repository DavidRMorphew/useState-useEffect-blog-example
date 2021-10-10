import './App.css';
import PostsContainer from './containers/PostsContainer'
import PostsComponent from './components/PostsComponent'
import postsData from './data/posts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>      
        <PostsContainer posts={postsData.posts}/>
        <PostsComponent posts={postsData.posts}/>
    </div>
  );
}

export default App;
