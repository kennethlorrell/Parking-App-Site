const useNavList = (isAuthenticated) => {
  const navList = [
    {
      name: 'Home',
      href: '/'
    }
  ];

  if (isAuthenticated) {
    navList.push(...[
      {
        name: 'Profile',
        href: '/profile'
      },
      {
        name: 'Change password',
        href: '/profile/change-password'
      },
      {
        name: 'Vehicles',
        href: '/vehicles'
      },
      {
        name: 'Parkings',
        href: '/parkings/active'
      }
    ]);
  }

  return navList;
};

export default useNavList;
