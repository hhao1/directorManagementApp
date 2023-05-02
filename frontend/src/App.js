import './App.css';
import Header from './components/Header'
import HierarchyDiagram from './pages/HierarchyDiagram'
import EmployeeDetail from './pages/EmployeeDetail'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element = {<HierarchyDiagram />} />
          <Route path='employee/:id' element= {<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
