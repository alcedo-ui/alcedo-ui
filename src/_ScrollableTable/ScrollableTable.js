/**
 * @file ScrollableTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

class ScrollableTable extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();

        this.state = {
            wrapperEl: null
        };

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

    componentDidMount() {
        this.setState({
            wrapperEl: this.wrapper && this.wrapper.current
        });
    }

    render() {

        const {

                children, style, scroll,

                // not passing down these props
                overflowHidden, horizontalOverflowScroll,

                ...restProps

            } = this.props,
            {wrapperEl} = this.state;

        return scroll ?
            <div {...restProps}
                 ref={this.wrapper}
                 style={this.getStyle()}>
                {typeof children === 'function' ? children(wrapperEl) : children || null}
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
