import { Link, Outlet } from 'react-router-dom';
import { paths } from './shell/paths';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <img src="cinema-icon.png" className={styles.logo} alt="logo" />
        <ul>
          <li >
            <Link className={styles.link} to={paths.home}>Home</Link>
          </li>
          <li >
            <Link className={styles.link} to={paths.movies}>Movies</Link>
          </li>
          <li >
            <Link className={styles.link} to={paths.about}>About</Link>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
