const CancelButton = ({ isLoading, callback }) => (
  <button
    type='button'
    className='btn btn-secondary'
    disabled={isLoading}
    onClick={callback}
  >
    <span>Назад</span>
  </button>
);

export default CancelButton;
