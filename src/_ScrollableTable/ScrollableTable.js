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

    render() {

        const {children, style, scroll, ...restProps} = this.props;

        return scroll ?
            <div {...restProps}
                 style={{
                     ...style,
                     overflowX: scroll.width ? 'scroll' : null,
                     overflowY: scroll.height || scroll.maxHeight ? 'scroll' : null
                 }}>
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
    })

};

export default ScrollableTable;
