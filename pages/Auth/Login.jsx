import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import CircularSpinner from '@/components/Loaders/CircularSpinner.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '@/hooks/useAuth.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const {
    login,
    isLoading,
    errors,
    setErrors
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
      remember
    };

    await login(data);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    removeError('email');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    removeError('password');
  };

  const handleRememberToggle = () => setRemember((prevState) => !prevState);

  const removeError = (field) => {
    setErrors((prevState) => {
      delete prevState[field];

      return prevState;
    });
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mx-auto md:w-96 w-full'>

          <h1 className='heading'>Увійти</h1>

          <div className='flex flex-col mb-4'>
            <label
              htmlFor='email'
              className='required'
            >
              Email
            </label>
            <input
              required
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={handleEmailChange}
              className='form-input'
              autoComplete='email'
            />
            <ErrorMessage errors={errors} field='email' />
          </div>

          <div className='flex flex-col'>
            <label
              htmlFor='password'
              className='required'
            >
              Пароль
            </label>
            <input
              required
              id='password'
              name='password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
              className='form-input'
              autoComplete='new-password'
            />
            <ErrorMessage errors={errors} field='password' />
          </div>

          <div className='flex flex-col gap-2 mt-1'>
            <label className='flex gap-2 items-center hover:cursor-pointer' htmlFor='remember'>
              <input
                id='remember'
                name='remember'
                type='checkbox'
                className='w-4 h-4'
                checked={remember}
                onChange={handleRememberToggle}
              />
              <span className='select-none'>Запам'ятати мене</span>
            </label>
          </div>

          <div className='border-t h-[1px] my-2'></div>

          <div className='flex flex-col gap-2 mb-4'>
            <button
              type='submit'
              disabled={isLoading}
              className='btn btn-primary rounded'
            >
              {
                isLoading && <CircularSpinner />
              }
              <span>Увійти</span>
            </button>
          </div>

          <div>
            <span>Немає облікового запису?</span>
            <Link
              to='/register'
              className='text-blue-600 ml-1'
            >
              Створити аккаунт
            </Link>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default Login;
