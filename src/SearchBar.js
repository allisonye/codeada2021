import React from "react";
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
                <div class="topnav">
                <a class="active" href="#home">Home</a>
<<<<<<< HEAD
                <a href="#about">Breakfast</a>
                <a href="#contact">Lunch</a>
                <a href="#contact">Dinner</a>
=======
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
>>>>>>> 63f1f65ff7883bb1d7ee4c94986253b2d1dfcd8c
                <input type="text" placeholder="Search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}

export default SearchBar;