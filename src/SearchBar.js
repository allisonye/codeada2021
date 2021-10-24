import React from "react";
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
                <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}

export default SearchBar;