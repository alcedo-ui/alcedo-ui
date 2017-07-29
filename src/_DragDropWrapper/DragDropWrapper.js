import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class DragDropWrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style} = this.props;

        return (
            <div className={(className ? ' ' + className : '')}
                 style={style}>
                {children}
            </div>
        );

    }
};

DragDropWrapper.propTypes = {

    /**
     * The CSS class name of the list button.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the list button.
     */
    style: PropTypes.object

};

DragDropWrapper.defaultProps = {

    className: '',
    style: null

};