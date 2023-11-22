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
import EditProfile from '@/pages/Profile/EditProfile.jsx';
import ChangePassword from '@/pages/Profile/ChangePassword.jsx';
import CreateVehicle from '@/pages/Vehicles/CreateVehicle.jsx';
import OrderParking from '@/pages/Parkings/OrderParking.jsx';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
      <Route element={<RedirectUnauthenticated />}>
        <Route path='/profile' element={<EditProfile />} />
        <Route path='/profile/change-password' element={<ChangePassword />} />
        <Route path='/vehicles' element={<VehicleList />} />
        <Route path='/vehicles/create' element={<CreateVehicle />} />
        <Route path='/vehicles/:id/edit' element={<CreateVehicle />} />
        <Route path='/parkings/active' element={<ActiveParkings />} />
        <Route path='/parkings/start' element={<OrderParking />} />
      </Route>
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
