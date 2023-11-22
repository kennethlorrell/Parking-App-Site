const CancelButton = ({ isLoading, callback }) => (
  <button
    type='button'
    className='btn btn-secondary'
    disabled={isLoading}
    onClick={callback}
  >
    <span>Cancel</span>
  </button>
);

export default CancelButton;
