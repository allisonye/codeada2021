import React from 'react';
import './index.css';
import AccordionComponent from './Accordion.js';
class Restaurants extends React.Component {
    render() {
        return (
          <div>
            <AccordionComponent name="Cafe a la Crumb" item1="Lemon Bars" item2="Chocolate Chip Cookies" />
            <AccordionComponent name="Fusion 48" item1="Pho" item2="Soup" />
            <AccordionComponent name="Grains and Greens" item1="Tomato Soup" item2="Salad" />
            <AccordionComponent name="Grillworks" item1="Burgers" item2="Waffle Fries" />
            <AccordionComponent name="Inclusive Solutions" item1="Blueberry Muffins" item2="Avocado Slices" />
            <AccordionComponent name="Latitude" item1="Fajitas" item2="Taco Toppings" />
            <AccordionComponent name="Saporito" item1="Alfredo Pasta" item2="Breadsticks" />
            <AccordionComponent name="Saporito Pizza" item1="Hawaiin Pizza" item2="Three Cheese Pizza" />
          </div>
        );
    }
}

/*const Menu = (props) => {
    return (
        <div>
            <AccordionComponent name={props.name} />
            <div class="panel">
                <p>Example 1</p>
                <p>Example 2</p>
                <p>Example 3</p>
            </div>
        </div>
    );
}*/

/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel 
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel 
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });*/


export default Restaurants;
