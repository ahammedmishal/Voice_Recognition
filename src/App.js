import './App.css';
import Movie from './Pages/Movie';
import Home from './Pages/Home';
import News from './Pages/News';

import {HashRouter as Router ,Switch,Route,Link} from 'react-router-dom';




function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
          <Route exact path ="/">
              <Home/>
          </Route>

          <Route path ="/movie"  exact component={Movie}>
              <Movie/>
          </Route>
          <Route  path ="/news" exact component={News}>
              <News/>
          </Route>
          </Switch>
        
      </Router>
    </div>
  );

  }

export default App;
