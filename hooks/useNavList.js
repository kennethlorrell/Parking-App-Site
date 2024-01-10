const useNavList = (isAuthenticated) => {
  const navList = {
    links: [
      {
        name: 'Головна',
        href: '/'
      }
    ],
    actions: [
      {
        name: 'Увійти',
        href: '/login'
      },
      {
        name: 'Реєстрація',
        href: '/register'
      }
    ]
  };

  if (isAuthenticated) {
    navList.links.push(...[
      {
        name: 'Транспортні засоби',
        href: '/vehicles'
      },
      {
        name: 'Активні паркування',
        href: '/parkings/active'
      },
      {
        name: 'Історія паркувань',
        href: '/parkings/history'
      }
    ]);
    navList.actions = [
      {
        name: 'Мій профіль',
        href: '/profile'
      },
      {
        name: 'Змінити пароль',
        href: '/profile/change-password'
      }
    ];
  }

  return navList;
};

export default useNavList;
