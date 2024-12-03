import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CustomNav from './components/Nav';

function App() {
  return (
    <div>
      <CustomNav />
      <Outlet />
    </div>
  );
}

export default App;
