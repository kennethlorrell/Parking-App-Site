const AlertError = ({ errors, field }) => {
  return errors?.[field]?.length && (
    <div className='alert alert-danger' role='alert'>
      {
        errors?.[field]?.map((message, index) => {
          return (
            <>
              <div key={index}>{message}</div>
            </>
          );
        })
      }
    </div>
  );
};

export default AlertError;
