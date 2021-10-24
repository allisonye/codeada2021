import React from "react";
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
                <div class="topnav">
                <a class="active" href="#home">ISR</a>
                <a href="#about">PAR</a>
                <a href="#contact">Ikenberry</a>
                <a href="#contact">FAR</a>
                <input type="text" placeholder="Search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}

export default SearchBar;