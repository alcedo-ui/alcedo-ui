import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Waterfall.css';

export default class Waterfall extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="waterfall"></div>
        );
    }

}

Waterfall.propTypes = {};

Waterfall.defaultProps = {};