import './App.css';
import PostsContainer from './containers/PostsContainer'
import PostsComponent from './components/PostsComponent'
import { Button, Row } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
      </header>
        <>      
        <Button>0 Likes</Button>{' '}
        <Button>5+ Likes</Button>{' '}
        <Button>10+ Likes</Button>
        </>
        <PostsContainer />
        <PostsComponent />
    </div>
  );
}

export default App;
