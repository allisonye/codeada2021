import React from 'react';
import './index.css';
import AccordionComponent from './Accordion.js';
class Restaurants extends React.Component {
    render() {
        return (
          <div>
            <AccordionComponent name="Cafe a la Crumb" item1="" item2="" />
            <AccordionComponent name="Fusion 48" item1="" item2="" />
            <AccordionComponent name="Grains and Greens" item1="" item2="" />
            <AccordionComponent name="Grillworks" item1="" item2="" />
            <AccordionComponent name="Inclusive Solutions" item1="" item2="" />
            <AccordionComponent name="Latitude" item1="" item2="" />
            <AccordionComponent name="Saporito" item1="" item2="" />
            <AccordionComponent name="Saporito Pizza" item1="" item2="" />
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
