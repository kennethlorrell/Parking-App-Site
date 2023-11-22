import NavLinkStyled from '@/components/Navigation/NavLinkStyled.jsx';
import useAuth from '@/hooks/useAuth.js';
import useNavList from '@/hooks/useNavList.js';
import api from '@/utils/api.js';

const Navigation = () => {
  const { logout, isAuthenticated } = useAuth();
  const navList = useNavList(isAuthenticated);

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response?.status === 401) {
        logout(true);
      }

      return Promise.reject(err);
    }
  );

  return (
    <div className='container md:px-2 px-4 mx-auto'>
      <nav className='flex gap-4 justify-between'>
        <div className='flex gap-4 items-center'>
          <h2 className='text-xl font-bold'>
            <span className='inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded mr-1'>
            P
            </span>
            <span>
              Parking App
            </span>
          </h2>
          {
            navList.links.map(({ name, href }) => (
              <NavLinkStyled to={href} key={name}>
                {name}
              </NavLinkStyled>
            ))
          }
        </div>
        <div className='flex gap-4 items-center'>
          {
            navList.actions.map(({ name, href }) => (
              <NavLinkStyled to={href} key={name}>
                {name}
              </NavLinkStyled>
            ))
          }
          {
            isAuthenticated && (
              <button onClick={logout} type='button' className='text-blue-600'>
                Logout
              </button>
            )
          }
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
