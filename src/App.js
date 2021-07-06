
import './App.scss';
import Admin from './container/Admin'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Admin />
      </Router>
    </div>
  );
}

export default App;
