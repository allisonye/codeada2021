import React from "react";
import './index.css'

class Restaurant extends React.Component {
    render() {
        return (<Menu name={this.props.name} />);
    }
}

const Menu = (props) => {
    return (
        <div>
            <button class="accordion">{props.name}</button>
            <div class="panel">
                <p>Example 1</p>
                <p>Example 2</p>
                <p>Example 3</p>
            </div>
        </div>
    );
}

export default Restaurant;