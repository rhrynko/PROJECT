import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { paths } from './shell/paths';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li className='App-link'>
            <Link to={paths.home}>Home</Link>
          </li>
          <li className='App-link'>
            <Link to={paths.movies}>Movies</Link>
          </li>
          <li className='App-link'>
            <Link to={paths.about}>About</Link>
          </li>
        </ul>
      </header>
      <main className='App-main'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
