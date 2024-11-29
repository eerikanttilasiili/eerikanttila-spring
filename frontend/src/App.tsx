import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AllMovies from './AllMovies'
import UploadNewComponent from './UploadNewComponent'
import { HomeLayout } from './HomeLayout';

const App = () => {

  return (
      <Routes>
          <Route element={<HomeLayout />}>
              <Route path="/" element={<AllMovies />} />
              <Route path="/add" element={<UploadNewComponent />} />
          </Route>
      </Routes>)
};

export default App;
