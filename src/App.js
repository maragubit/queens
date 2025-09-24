import './App.css';
import {Route, Routes} from 'react-router-dom';
import './assets/css/queens.css';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import AlumnLayout from './features/alumno/AlumnLayout';
import MyProfile from './features/zonacomun/MyProfile';
import Resources from './features/zonacomun/Resources';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="alumno" element={<AlumnLayout />}>
          <Route index element={<MyProfile />} />
          <Route path="resources" element={<Resources />} />

        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
    </div>
  );  
}

export default App;
