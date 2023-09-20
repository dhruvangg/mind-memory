import './App.css'
import Game from './components/Game'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Game />
      <ToastContainer />
    </div>
  )
}

export default App
