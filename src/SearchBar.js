import React from "react";
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
<<<<<<< HEAD
                <input type="text" placeholder="Search">
                <button type="submit"><i class="fa fa-search"></i></button>
=======
                <input type="text" placeholder="Search.." />
>>>>>>> f879dacbac6a31d4b438e3986fdb080c0d550803
            </div>
        );
    }
}

export default SearchBar;