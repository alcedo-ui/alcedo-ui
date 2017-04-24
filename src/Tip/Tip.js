import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Tip.css';

export default class Tip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tip-container">
                {this.props.text}
            </div>
        );
    }
}