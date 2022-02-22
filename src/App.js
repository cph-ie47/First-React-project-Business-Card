import './App.css';
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Some from './components/Some'

function App() {
  return (
    <div className='col-8 offset-2 bg'> 
      <Info />
      <About />
      <Interests />
      <Some />
    </div>
  );
}

export default App;
