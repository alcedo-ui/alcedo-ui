import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Paper.css';

export default class Paper extends Component {

    constructor(props) {
        super(props);
    }

    formatDepth(depth) {
        if (isNaN(depth)) {
            return 0;
        } else if (depth < 0) {
            return 1;
        } else if (depth > 7) {
            return 7;
        }
        return depth;
    }

    render() {

        const {children, className, style, depth, nonRounded, isCircular} = this.props;

        return (
            <div className={`paper depth-${this.formatDepth(depth)}
                    ${nonRounded ? 'nonRounded' : (isCircular ? 'circular' : '')} ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};

Paper.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This number represents the zDepth of the paper shadow.
     */
    depth: PropTypes.number,

    /**
     * If true,the paper container will have a border radius.
     */
    nonRounded: PropTypes.bool,

    /**
     * If true,the paper shape is circle.
     */
    isCircular: PropTypes.bool

};

Paper.defaultProps = {

    className: '',
    style: null,

    depth: 1,
    nonRounded: false,
    isCircular: false

};