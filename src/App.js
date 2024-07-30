import './App.css';
import { Create } from './components/Create';
import { Home } from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Update } from './components/Update';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/components/Create" element={<Create />}></Route>
      <Route path="/components/Update/:id" element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
