/**
 * @file ScrollableTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollableTable extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getStyle = () => {

        const {style, scroll, overflowHidden, horizontalOverflowScroll} = this.props;

        if (overflowHidden) {
            return style;
        }

        return {
            ...style,
            overflowX: horizontalOverflowScroll ? 'scroll' : scroll.width ? 'auto' : null,
            overflowY: scroll.height || scroll.maxHeight ? 'scroll' : null
        };

    };

    render() {

        const {

            children, style, scroll,

            // not passing down these props
            overflowHidden,

            ...restProps

        } = this.props;

        return scroll ?
            <div {...restProps}
                 style={this.getStyle()}>
                {children}
            </div>
            :
            children;

    }
}

ScrollableTable.propTypes = {

    children: PropTypes.any,

    style: PropTypes.object,

    /**
     * scroll
     */
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

    overflowHidden: PropTypes.bool,
    horizontalOverflowScroll: PropTypes.bool

};

ScrollableTable.defaultProps = {
    overflowHidden: false,
    horizontalOverflowScroll: false
};

export default ScrollableTable;
