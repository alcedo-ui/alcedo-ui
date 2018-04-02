/**
 * @file Widget component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import Paper from '../Paper';

import PureRender from '../_vendors/PureRender';

@PureRender
class Widget extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style, depth} = this.props,

            widgetClassName = classNames('widget', {
                [className]: className
            });

        return (
            <Paper className={widgetClassName}
                   style={style}
                   depth={depth}>
                {children}
            </Paper>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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

}

Widget.defaultProps = {
    depth: 1
};

export default Widget;