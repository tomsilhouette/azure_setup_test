import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Error404 from './pages/error/Error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Error404 />} /> */ All link enteries that are not registered lead to 404 page /*
    </Routes>
  );
}

export default App;
