import useProfile from '@/hooks/useProfile.js';
import ErrorMessage from '@/components/ErrorMessages/ErrorMessage.jsx';
import DefaultLayout from '@/components/Layouts/DefaultLayout.jsx';
import LoadingButton from '@/components/Buttons/LoadingButton.jsx';
import AlertSuccess from '@/components/Alerts/AlertSuccess.jsx';

const EditProfile = () => {
  const [profile, updateProfile] = useProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProfile(profile.data);
  };

  const handleNameChange = (e) => {
    profile.setData((prevState) => ({
      ...prevState,
      name: e.target.value
    }));
  };

  const handleEmailChange = (e) => {
    profile.setData((prevState) => ({
      ...prevState,
      email: e.target.value
    }));
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col mx-auto md:w-96 w-full'>
          <h1 className='heading'>Редагувати профіль</h1>

          {
            profile.message && <AlertSuccess message={profile.message} />
          }

          <div className='flex flex-col gap-2 mb-2'>
            <label
              htmlFor='name'
              className='required'
            >
              Ім&apos;я
            </label>
            <input
              required
              id='name'
              name='name'
              type='text'
              value={profile?.data?.name ?? ''}
              onChange={handleNameChange}
              className='form-input'
              autoComplete='name'
            />
            <ErrorMessage errors={profile.errors} field='name' />
          </div>

          <div className='flex flex-col gap-2 mb-2'>
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
              value={profile?.data?.email ?? ''}
              onChange={handleEmailChange}
              className='form-input'
              autoComplete='email'
            />
            <ErrorMessage errors={profile.errors} field='email' />
          </div>

          <div className='border-t h-[1px]'></div>

          <div className='flex flex-col gap-2 mb-4'>
            <LoadingButton
              isLoading={profile.isLoading}
              text='Оновити деталі профілю'
            />
          </div>

        </div>
      </form>
    </DefaultLayout>
  );
};

export default EditProfile;
