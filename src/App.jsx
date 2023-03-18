import './App.css';
import Home from './pages/Home';
import MoviesContextProvider from './context/MoviesContext';

function App() {
  return (
    <div className='app'>
      <MoviesContextProvider>
        <Home />
      </MoviesContextProvider>
    </div>
  );
}

export default App;
