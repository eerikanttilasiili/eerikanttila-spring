import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AllFiles from './AllFiles'
import UploadNewComponent from './UploadNewComponent'
import { HomeLayout } from './HomeLayout';

const App = () => {

  return (
      <Routes>
          <Route element={<HomeLayout />}>
              <Route path="/" element={<AllFiles />} />
              <Route path="/add" element={<UploadNewComponent />} />
          </Route>
      </Routes>)
};

export default App;
