import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Trending, Movies, TVShows, Search } from "./containers"
import { Header, SimpleBottomNavigation } from './components';
import { Container } from '@mui/system';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="app">
          <Container>
            <Routes>
              <Route path='/' exact element={<Trending />} />
              <Route path='/trending' element={<Trending />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/series' element={<TVShows />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Container>
          <SimpleBottomNavigation />
        </div>
      </Router>
    </>

  );
}

export default App;
