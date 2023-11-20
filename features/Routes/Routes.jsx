import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Login from '@/pages/Auth/Login.jsx';
import Register from '@/pages/Auth/Register.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
