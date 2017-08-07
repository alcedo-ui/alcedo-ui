import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './DraggableListItemLayer.css';

export default class DraggableListItemLayer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div></div>
        );

    }
};

DraggableListItemLayer.propTypes = {

    /**
     * The CSS class name of the list button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the list button.
     */
    style: PropTypes.object

};

DraggableListItemLayer.defaultProps = {
    className: '',
    style: null
};