import logo from './logo.svg';
import './App.css';
import Restaurants from './Restaurants.js';
import SearchBar from './SearchBar.js';
import OrderForm from './OrderForm.js';

function App() {
  return (
    <div className="App">
      <a href="https://ibb.co/2Z7dMpX"><img src="https://i.ibb.co/phvdKkC/isr-dining-image.png" alt="isr-dining-image" border="0" /></a>
      <h1 id="header">ISR Online Orders</h1>
      <p id="subhead">Order Unhealthy Dining Options Here!</p>
      <SearchBar />
      <br />
      <table className="table">
        <tr>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
          <th>Late Night</th>
        </tr>
        <tr>
          <th><Restaurants /></th>
          <th><Restaurants /></th>
          <th><Restaurants /></th>
          <th><Restaurants /></th>
        </tr>
      </table>
      <br />
      <OrderForm />
    </div>
  );
}

export default App;
