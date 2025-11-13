import './App.css';
import {Route, Routes} from 'react-router-dom';
import './assets/css/queens.css';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import AlumnLayout from './layouts/AlumnLayout';
import MyProfile from './features/zonacomun/MyProfile';
import Resources from './features/zonacomun/Resources';
import Curso from './pages/Curso';
import TeacherLayout from './layouts/TeacherLayout';
import Myclassrooms from './features/zonacomun/Myclassrooms';
import Register from './pages/Register';
import { AvisoLegal, PoliticaPrivacidad } from './pages/LegalText';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="alumno" element={<AlumnLayout />}>
          <Route index element={<MyProfile />} />
          <Route path="mis-clases" element={<Myclassrooms />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="profesor" element={<TeacherLayout />}>
          <Route index element={<MyProfile />} />
          <Route path="mis-clases" element={<Myclassrooms />} />
          <Route path="resources" element={<Resources />} />
        </Route>
        <Route path="cursos/:id" element={<Curso />} />
        <Route path="login" element={<Login />} />
        <Route path="register/:email" element={<Register />} />
        <Route path="politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="aviso-legal" element={<AvisoLegal />} />
      </Route>
      <Route path="*" element={<div><h3>404</h3> Not Found</div>} />
    </Routes>
    </div>
  );  
}

export default App;
