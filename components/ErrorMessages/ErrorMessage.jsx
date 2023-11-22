const ErrorMessage = ({ errors, field }) => {
  return errors?.[field]?.length && (
    <div className='alert alert-danger' role='alert'>
      {
        errors?.[field]?.map((message, index) => (
          <div key={index}>
            {message}
          </div>
        ))
      }
    </div>
  );
};

export default ErrorMessage;
