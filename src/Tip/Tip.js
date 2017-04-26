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

Tip.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The text value of tip.
     */
    text: 'tip'

};

Tip.defaultProps = {
    className: '',
    style: null
};