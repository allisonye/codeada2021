import React from 'react';
import './index.css';
import Accordion from 'react-bootstrap/Accordion'

class Accordion extends React.Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Cafe a la Crumb</Accordion.Header>
    <Accordion.Body>
      Put form and quantity number here. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Fusion 48</Accordion.Header>
    <Accordion.Body>
    Put form and quantity number here. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </div>
    );
  }
}

export default Accordion;

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
  });
}*/