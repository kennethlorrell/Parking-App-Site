import { useState } from 'react';
import GuestLayout from '@/components/Layouts/GuestLayout.jsx';
import { Link, useNavigate } from 'react-router-dom';
import api from '@/utils/api.js';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import Spinner from '@/components/Loaders/Spinner.jsx';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setErrors({});

    const formData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation
    };

    try {
      await api.post('/register', formData);

      navigate('/vehicles');
    } catch (err) {
      console.error(err);
      setErrors(err.response.data.errors);
    } finally {
      clearPasswordInputs();
      setIsLoading(false);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    removeError('name');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    removeError('email');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    removeError('password');
  };

  const handlePasswordConfirmationChange = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const clearPasswordInputs = () => {
    setPassword('')
    setPasswordConfirmation('')
  };

  const removeError = (field) => {
    setErrors((prevState) => {
      delete prevState[field];

      return prevState;
    });
  };

  return (
    <GuestLayout>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mx-auto md:w-96 w-full">

          <h1 className="heading">Register</h1>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="name"
              className="required"
            >
              Name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="form-input"
              autoComplete="name"
            />
            <ErrorMessage errors={errors} field='name' />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="email"
              className="required"
            >
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              autoComplete="email"
            />
            <ErrorMessage errors={errors} field='email' />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="password"
              className="required"
            >
              Password
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
              autoComplete="new-password"
            />
            <ErrorMessage errors={errors} field='password' />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password_confirmation"
              className="required"
            >
              Confirm Password
            </label>
            <input
              required
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              className="form-input"
              autoComplete="new-password"
            />
          </div>

          <div className="border-t h-[1px] my-6"></div>

          <div className="flex flex-col gap-2 mb-4">
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary rounded"
            >
              {
                isLoading && <Spinner />
              }
              <span>Register</span>
            </button>
          </div>

          <div className='mt-4'>
            <span>Already registered?</span>
            <Link
              to='/login'
              className='text-blue-600 ml-1'
            >
              Log In
            </Link>
          </div>
        </div>
      </form>
    </GuestLayout>
  );
};

export default Register;
