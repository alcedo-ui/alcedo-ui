import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TagField.css';

export default class TagField extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className={`text-field ${className}`}
                 style={style}>

            </div>
        );

    }
};

TagField.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object

};

TagField.defaultProps = {

    className: '',
    style: null

};