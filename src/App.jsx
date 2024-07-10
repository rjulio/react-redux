import './App.css';

import Average from './components/Average';
import Range from './components/Range';
import Sort from './components/Sort';
import Sum from './components/Sum';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="line">
        <Range />
      </div>
      <div className="line">
        <Average />
        <Sum />
        <Sort />
      </div>
    </div>
  );
}

export default App;
