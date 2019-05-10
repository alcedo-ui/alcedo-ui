/**
 * @file Paper component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Theme from '../Theme';

import Util from '../_vendors/Util';

class Paper extends Component {

    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
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

        const {className, style, theme, depth, nonRounded, isCircular, ...restProps} = this.props;

        return (
            <div {...restProps}
                 className={classNames('paper',
                     nonRounded ? 'nonRounded' : (isCircular ? 'circular' : ''), {
                         [`depth-${this.formatDepth(depth)}`]: depth,
                         [`theme-${theme}`]: theme,
                         [className]: className
                     })}
                 style={style}>
            </div>
        );

    }
}

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
     * Theme of the root element.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * This number represents the zDepth of the paper shadow.
     */
    depth: PropTypes.number,

    /**
     * If true,the paper container will have no border radius.
     */
    nonRounded: PropTypes.bool,

    /**
     * If true,the paper shape is circle.
     */
    isCircular: PropTypes.bool

};

Paper.defaultProps = {

    theme: Theme.DEFAULT,

    depth: 1,
    nonRounded: false,
    isCircular: false

};

export default Paper;
