import { NavLink } from 'react-router-dom';

const NavLinkStyled = ({ to, children }) => {
  return (
    <NavLink
      end
      to={to}
      className={`${({ isActive }) => isActive ? 'underline' : ''} text-blue-600`}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkStyled;
