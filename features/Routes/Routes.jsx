import {
  BrowserRouter,
  Routes as RouterRoutes,
  Route
} from 'react-router-dom';
import Home from '@/pages/Home.jsx';
import Login from '@/pages/Auth/Login.jsx';
import Register from '@/pages/Auth/Register.jsx';
import VehicleList from '@/pages/Vehicles/VehicleList.jsx';
import ActiveParkings from '@/pages/Parkings/ActiveParkings.jsx';
import RedirectUnauthenticated from '@/features/Routes/RedirectUnauthenticated.jsx';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route element={<RedirectUnauthenticated />}>
        <Route path='/vehicles' element={<VehicleList />} />
        <Route path='/parkings/active' element={<ActiveParkings />} />
      </Route>
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
