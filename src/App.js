import logo from './logo.svg';
import './App.css';
import PendulumCircleContainer from './PendulumCircleContainer'

function App() {
  return (
    <div className="App">
        <PendulumCircleContainer n = {5} deg = {120}/>
    </div>
  );
}

export default App;
