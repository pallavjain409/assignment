import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className = "container">
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
