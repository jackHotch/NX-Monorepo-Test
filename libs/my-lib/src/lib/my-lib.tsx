import styles from './my-lib.module.css';

export function MyLib() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib!</h1>
    </div>
  );
}

export default MyLib;
