const ErrorHandler = (err) => {
  const error = 'Oops Hemos tenido un error!';
  // eslint-disable-next-line no-alert
  alert(`Error:
      Message: ${err || error}`);
};
export default ErrorHandler;
