/**
 * @file Waterfall component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Children, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

class Waterfall extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.shouldRender = false;
        this.renderTimeout = null;

        this.state = {
            dom: null
        };

        this.generateTempColumns = ::this.generateTempColumns;
        this.renderChildren = ::this.renderChildren;

    }

    initTempColumns(column) {

        if (!column || column.length < 1) {
            return;
        }

        const result = [];

        for (let i = 0; i < column; i++) {
            result.push({
                heightCount: 0,
                children: []
            });
        }

        return result;

    }

    getMinHeightColumn(columns) {

        if (!columns || columns.length < 1) {
            return;
        }

        let minItem = columns[0],
            index = 0,
            min = minItem.heightCount;

        for (let i = 1, len = columns.length; i < len; i++) {
            if (columns[i].heightCount < min) {
                minItem = columns[i];
                index = i;
                min = columns[i].heightCount;
            }
        }

        return {
            item: minItem,
            index,
            vslue: min
        };

    }

    generateTempColumns(props = this.props) {

        const {column, separator, children} = props,
            tempColumns = this.initTempColumns(column);

        Children.forEach(children, (child, index) => {

            const el = findDOMNode(this.refs[`waterfallTempChild${index}`]);
            if (el) {

                const elHeight = parseInt(getComputedStyle(el).height);
                if (!isNaN(elHeight)) {

                    const result = this.getMinHeightColumn(tempColumns);
                    if (result) {

                        const {item, index: columnNo} = result,
                            no = item.children.length;

                        item.heightCount += elHeight + (no === 0 ? 0 : separator);
                        item.children.push(cloneElement(child, {
                            key: `${columnNo}-${no}`,
                            style: {
                                ...child.props.style,
                                marginTop: no === 0 ? 0 : separator
                            }
                        }));

                    }
                }
            }

        });

        return tempColumns;

    }

    renderChildren(props = this.props) {

        const {column} = props,
            tempColumns = this.generateTempColumns(props),
            columnStyle = {
                width: `${100 / column}%`
            },
            result = [];

        for (let i = 0; i < column; i++) {
            result.push(
                <div key={i}
                     className="waterfall-column"
                     style={columnStyle}>
                    {tempColumns[i] && tempColumns[i].children}
                </div>
            );
        }

        return result;

    }

    componentDidMount() {
        this.setState({
            dom: this.renderChildren()
        });
    }

    componentWillReceiveProps() {
        this.shouldRender = true;
    }

    componentDidUpdate(prevProps) {

        if (this.shouldRender) {

            if (this.renderTimeout) {
                clearTimeout(this.renderTimeout);
            }

            this.renderTimeout = setTimeout(() => {
                this.setState({
                    dom: this.renderChildren(prevProps)
                }, () => {
                    this.shouldRender = false;
                });
            }, 0);

        }

    }

    render() {

        const {className, style, children} = this.props,
            {dom} = this.state,

            wrapperClassName = classNames('waterfall', {
                [className]: className
            });

        return (
            <div className={wrapperClassName}
                 style={style}>

                {dom}

                <div className="waterfall-hidden">
                    {
                        children.map((child, index) => cloneElement(child, {
                            key: index,
                            ref: `waterfallTempChild${index}`
                        }))
                    }
                </div>

            </div>
        );
    }

}

Waterfall.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Column count of waterfall.
     */
    column: PropTypes.number,

    /**
     * horizontal separator between items for calculation and display.
     */
    separator: PropTypes.number

};

Waterfall.defaultProps = {
    column: 3,
    separator: 10
};

export default Waterfall;