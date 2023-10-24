import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import TestPage from './TestPage';
import ResultPage from './ResultPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="test" element={<TestPage />} />
      <Route path='result' element={<ResultPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
