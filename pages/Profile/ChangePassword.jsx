import { useState } from 'react';
import usePassword from '@/hooks/usePassword.js';
import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import CircularSpinner from '@/components/Loaders/CircularSpinner.jsx';
import AlertSuccess from '@/components/Alerts/AlertSuccess.jsx';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  const { updatePassword, isLoading, message, errors, setErrors } = usePassword();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updatePassword({
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: newPasswordConfirmation
    });

    resetInputs();
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
    removeError('current_password');
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    removeError('new_password');
  };

  const handleNewPasswordConfirmationChange = (e) => {
    setNewPasswordConfirmation(e.target.value);
  };

  const removeError = (field) => {
    setErrors((prevState) => {
      delete prevState[field];

      return prevState;
    });
  };

  const resetInputs = () => {
    setCurrentPassword('');
    setNewPassword('');
    setNewPasswordConfirmation('');
  };


  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mx-auto md:w-96 w-full'>

          <h1 className='heading'>Змінити пароль</h1>

          {
            message && <AlertSuccess message={message} />
          }

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='current_password'
              className='required'
            >
              Поточний пароль
            </label>
            <input
              id='current_password'
              name='current_password'
              type='password'
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              className='form-input'
              autoComplete='current-password'
            />
            <ErrorMessage errors={errors} field='current_password' />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='new_password'
              className='required'
            >
              Новий пароль
            </label>
            <input
              id='new_password'
              name='new_password'
              type='password'
              value={newPassword}
              onChange={handleNewPasswordChange}
              className='form-input'
              autoComplete='new-password'
            />
            <ErrorMessage errors={errors} field='new_password' />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='new_password_confirmation'
              className='required'
            >
              Підтвердження нового паролю
            </label>
            <input
              id='new_password_confirmation'
              name='new_password_confirmation'
              type='password'
              value={newPasswordConfirmation}
              onChange={handleNewPasswordConfirmationChange}
              className='form-input'
              autoComplete='new-password'
            />
          </div>

          <div className='border-t h-[1px] my-2'></div>

          <div className='flex flex-col gap-2 mb-4'>
            <button type='submit' className='btn btn-primary' disabled={isLoading}>
              {
                isLoading && <CircularSpinner />
              }
              <span>Змінити пароль</span>
            </button>
          </div>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default ChangePassword;
