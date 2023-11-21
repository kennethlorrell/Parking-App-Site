const ErrorMessage = ({ errors, field }) => (
  <div className='text-red-600 mt-1' role='alert'>
    {
      errors?.[field]?.map((message, index) => {
        return (
          <div key={index}>{ message }</div>
        );
      })
    }
  </div>
);

export default ErrorMessage;
