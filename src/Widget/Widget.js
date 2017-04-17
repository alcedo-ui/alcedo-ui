import React, {Component, PropTypes} from 'react';

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

    className: PropTypes.string,
    style: PropTypes.object,

    depth: PropTypes.number

};

Widget.defaultProps = {

    className: '',
    style: null,

    depth: 1

};