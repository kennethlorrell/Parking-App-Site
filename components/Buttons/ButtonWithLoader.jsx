import CircularSpinner from '@/components/Loaders/CircularSpinner.jsx';

const ButtonWithLoader = ({ isLoading, text }) => {
  return (
    <button type='submit' className='btn btn-primary w-full' disabled={isLoading}>
      {
        isLoading && <CircularSpinner />
      }
      <span>{text}</span>
    </button>
  );
};

export default ButtonWithLoader;
