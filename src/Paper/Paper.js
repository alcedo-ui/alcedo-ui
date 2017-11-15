/**
 * @file Paper component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';

import Util from '../_vendors/Util';

export default class Paper extends Component {

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

        const {children, className, style, theme, depth, nonRounded, isCircular, ...rest} = this.props,

            paperClassName = (depth ? ` depth-${this.formatDepth(depth)}` : '') + (theme ? ` theme-${theme}` : '')
                + (nonRounded ? ' nonRounded' : (isCircular ? ' circular' : '')) + (className ? ' ' + className : '');

        return (
            <div {...rest}
                 className={'paper' + paperClassName}
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

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    depth: 1,
    nonRounded: false,
    isCircular: false

};