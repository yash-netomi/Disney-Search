import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route exact path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
