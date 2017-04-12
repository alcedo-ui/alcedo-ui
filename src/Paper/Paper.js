import React, {Component, PropTypes} from 'react';

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

    className: PropTypes.string,
    style: PropTypes.object,

    depth: PropTypes.number,
    nonRounded: PropTypes.bool,
    isCircular: PropTypes.bool

};

Paper.defaultProps = {

    className: '',
    style: null,

    depth: 1,
    nonRounded: false,
    isCircular: false

};