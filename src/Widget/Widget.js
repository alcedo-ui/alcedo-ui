import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from '../Paper';

import './Widget.css';

export default class Widget extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {children, className, style, depth} = this.props;

        return (
            <Paper className={`widget ${className}`}
                   style={style}
                   depth={depth}>
                {children}
            </Paper>
        );

    }
};

Widget.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This number represents the zDepth of the root element shadow.
     */
    depth: PropTypes.number

};

Widget.defaultProps = {

    className: '',
    style: null,

    depth: 1

};