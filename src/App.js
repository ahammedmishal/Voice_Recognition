import './App.css';
import Movie from './Pages/Movie';
import Home from './Pages/Home';
import News from './Pages/News';

import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';




function App() {

  return (
    <div className="App">
      <Router>
      
          <Route exact path ="/">
              <Home/>
          </Route>

          <Route  path ="/movie">
              <Movie/>
          </Route>
          <Route  path ="/news">
              <News/>
          </Route>
        
      </Router>
    </div>
  );

  }

export default App;
