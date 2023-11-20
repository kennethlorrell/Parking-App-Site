import NavLinkStyled from '@/components/navigation/NavLinkStyled.jsx';

const Navigation = () => {
  return (
    <nav className="flex gap-4 justify-between">
      <div className="flex gap-4 items-center">
        <h2 className="text-xl font-bold">
          <span className="inline-flex items-center justify-center bg-blue-600 w-6 h-6 text-center text-white rounded mr-1">
            P
          </span>
          Parking App
        </h2>
        <NavLinkStyled to='/'>
          Home
        </NavLinkStyled>
      </div>
      <div className="flex gap-4 items-center">
        <NavLinkStyled to='/login'>
          Login
        </NavLinkStyled>
        <NavLinkStyled to='/register'>
          Register
        </NavLinkStyled>
      </div>
    </nav>
  );
};

export default Navigation;
