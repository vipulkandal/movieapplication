import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Trending, Movies, TVShows, Search } from "./containers"
import { Header, SimpleBottomNavigation } from './components';
import { Container } from '@mui/system';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="app">
          {/* <Container> */}
          <Switch>
            <Route path='/' exact component={Trending} />
            <Route path='/movies' component={Movies} />
            <Route path='/tvshows' component={TVShows} />
            <Route path='/search' component={Search} />
          </Switch>
          {/* </Container> */}
        </div>
      </Router>
      <SimpleBottomNavigation />
    </>

  );
}

export default App;
