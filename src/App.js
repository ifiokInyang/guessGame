import './App.css';
import Game from './pages/Game';
import { AppProvider } from "./AppContext";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <ToastContainer />
    <AppProvider>
      <div className="App">
          <Game />
      </div>
    </AppProvider>
    </>
  );
}

export default App;
