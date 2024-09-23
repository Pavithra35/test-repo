import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Dashboard from './components/dashboard/Dashboard';
import AppLayout from './common/AppLayout';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="page2" element={<Page2 />}></Route>
            <Route path="page3" element={<Page3 />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
