import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AllMovies from './AllMovies'
import AddNewComponent from './AddNewComponent'
import { HomeLayout } from './HomeLayout';

const App = () => {

  return (
      <Routes>
          <Route element={<HomeLayout />}>
              <Route path="/" element={<AllMovies />} />
              <Route path="/add" element={<AddNewComponent />} />
          </Route>
      </Routes>)
};

export default App;
