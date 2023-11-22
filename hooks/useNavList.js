const useNavList = (isAuthenticated) => {
  const navList = {
    links: [
      {
        name: 'Home',
        href: '/'
      }
    ],
    actions: [
      {
        name: 'Login',
        href: '/login'
      },
      {
        name: 'Register',
        href: '/register'
      }
    ]
  };

  if (isAuthenticated) {
    navList.links.push(...[
      {
        name: 'Vehicles',
        href: '/vehicles'
      },
      {
        name: 'Parkings',
        href: '/parkings/active'
      }
    ]);
    navList.actions = [
      {
        name: 'Profile',
        href: '/profile'
      },
      {
        name: 'Change password',
        href: '/profile/change-password'
      }
    ];
  }

  return navList;
};

export default useNavList;
