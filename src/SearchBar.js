import React from "react";
import './index.css';

class SearchBar extends React.Component {
    render() {
        return (
                <div class="topnav">
                <a class="active" href="#ISR">ISR</a>
                <a href="#PAR">PAR</a>
                <a href="#Ikenberry">Ikenberry</a>
                <a href="#FAR">FAR</a>
                <a href="#LAR">LAR</a>
                <input type="text" placeholder="Search" />
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
        );
    }
}

export default SearchBar;