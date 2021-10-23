import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant.js';

function App() {
  return (
    <div className="App">
      <Restaurant name="Cafe a la Crumb"/>
      <Restaurant name="Fusion 48"/>
      <Restaurant name="Grains and Greens"/>
      <Restaurant name="Grillworks"/>
      <Restaurant name="Inclusive Solutions"/>
      <Restaurant name="Saporito"/>
      <Restaurant name="Saporito Pizza"/>
    </div>
  );
}

export default App;
