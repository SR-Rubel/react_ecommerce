
import './App.scss';
import Admin from './container/Admin'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import User from './container/User';
import './scss/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Admin /> */}
        <User />
      </Router>
    </div>
  );
}

export default App;
