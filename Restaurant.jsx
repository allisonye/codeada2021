import React from react
import './index.css'
import './index.js'

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

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Menu name={props.name} />);
    }
}

export default Restaurant