/**
 * @file ScrollableTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Statics
import TableFragment from '../_statics/TableFragment';

// Vendors
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';
import Util from '../_vendors/Util';

class ScrollableTable extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.wrapper = createRef();

        this.state = {
            wrapperEl: null
        };

    }

    componentDidMount() {
        this.setState({
            wrapperEl: this.wrapper && this.wrapper.current
        });
    }

    getChildren = () => {

        const {children} = this.props,
            {wrapperEl} = this.state;

        return (typeof children === 'function' ? children(wrapperEl) : children) || null;

    };

    render() {

        const {

                className, style, scroll,

                // not passing down these props
                children: c, useDynamicRender, scrollHeight, rowHeight, scrollBuffer,

                ...restProps

            } = this.props,
            children = this.getChildren();

        return !isEmpty(scroll) ? (
                <div {...restProps}
                     ref={this.wrapper}
                     className={className}
                     style={style}>
                    {children}
                </div>
            )
            :
            children;

    }
}

ScrollableTable.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object,

    /**
     * scroll
     */
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

    fragment: PropTypes.oneOf(Util.enumerateValue(TableFragment)),

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number

};

ScrollableTable.defaultProps = {

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8

};

export default ScrollableTable;
