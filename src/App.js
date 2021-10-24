import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant.js';
import SearchBar from './SearchBar.js';
import OrderForm from './OrderForm.js';

function App() {
  return (
    <div className="App">
      <a href="https://ibb.co/2Z7dMpX"><img src="https://i.ibb.co/phvdKkC/isr-dining-image.png" alt="isr-dining-image" border="0" /></a>
      <h1 id="header">ISR Online Orders</h1>
      <p id="subhead">Order Unhealthy Dining Options Here!</p>
      <SearchBar />
      <div>
        <Restaurant name="Cafe a la Crumb"/>
        <Restaurant name="Fusion 48"/>
        <Restaurant name="Grains and Greens"/>
        <Restaurant name="Grillworks"/>
        <Restaurant name="Inclusive Solutions"/>
        <Restaurant name="Latitude"/>
        <Restaurant name="Saporito"/>
        <Restaurant name="Saporito Pizza"/>
      </div>
      <br />
      <OrderForm />
    </div>
  );
}

export default App;
