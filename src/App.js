import logo from './logo.svg';
import Counter from './components/Counter';

import './App.css';
import Todos from './components/Todos';
import CounterView from './features/counter/counterView';
import PostView from './features/post/PostView';
import Masakasa from './features/new/new';

function App() {
  return (
    <div className="App">
      <h1> react redux</h1>
      {/* <Counter/> */}
      {/* <Todos/> */}
      <CounterView/>
      <PostView/>
    </div>
  );
}

export default App;
