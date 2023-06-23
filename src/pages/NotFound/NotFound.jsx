import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.NotFound}>
      <h1>Oops!</h1> <h3>There is nothing to see here. Check your URL</h3>
    </div>
  );
};

export default NotFound;
