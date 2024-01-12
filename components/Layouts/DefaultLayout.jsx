import Navigation from '@/components/Navigation/Navigation.jsx';
import Snack from '@/components/Snack/Snack.jsx';

const DefaultLayout = ({ children }) => {
  return (
    <div className='app'>
      <header className='py-6 bg-gray-100 shadow'>
        <Navigation />
      </header>
      <Snack />
      <div className='container md:px-2 px-4 pt-8 md:pt-16 mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
