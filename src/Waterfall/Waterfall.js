import React, {Component, Children, cloneElement} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';

import './Waterfall.css';

export default class Waterfall extends Component {

    constructor(props) {

        super(props);

        this.shouldRender = false;

        this.state = {
            dom: null
        };

        this.generateTempColumns = this::this.generateTempColumns;
        this.renderChildren = this::this.renderChildren;

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
            min = minItem.heightCount;

        for (let i = 1, len = columns.length; i < len; i++) {
            if (columns[i].heightCount < min) {
                minItem = columns[i];
                min = columns[i].heightCount;
            }
        }

        return minItem;

    }

    generateTempColumns(props = this.props) {

        const {column, children} = props,
            tempColumns = this.initTempColumns(column);

        let el, elHeight, item;

        Children.forEach(children, (child, index) => {

            el = findDOMNode(this.refs[`waterfallTempChild${index}`]);
            if (el) {
                elHeight = parseInt(getComputedStyle(el).height);
                if (elHeight) {
                    item = this.getMinHeightColumn(tempColumns);
                    item.heightCount += elHeight;
                    item.children.push(child);
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

    componentWillReceiveProps(nextProps) {
        this.shouldRender = true;
    }

    componentDidUpdate(nextProps) {
        if (this.shouldRender) {
            this.shouldRender = false;
            this.setState({
                dom: this.renderChildren(nextProps)
            });
        }
    }

    render() {

        const {children} = this.props,
            {dom} = this.state;

        return (
            <div className="waterfall">

                {dom}

                <div className="waterfall-hidden">
                    {
                        children.map((child, index) => {
                            return cloneElement(child, {
                                key: index,
                                ref: `waterfallTempChild${index}`
                            });
                        })
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
    column: PropTypes.number

};

Waterfall.defaultProps = {

    className: '',
    style: null,

    column: 3

};