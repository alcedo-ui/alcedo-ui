/**
 * @file Td component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Td extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    stringContentRenderer = (data, template) => {

        if (!data) {
            return template;
        }

        if (/\$\{.+\}/.test(template)) { // handle replacement in template
            let result = template;
            for (let key in data) {
                result = result.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), data[key]);
            }
            return result;
        } else { // show prop value directly
            return data[template];
        }

    };

    handleRenderer = (cellRenderer, colIndex) => {

        const {rowIndex, data} = this.props;

        switch (typeof cellRenderer) {
            case 'string':
                return this.stringContentRenderer(data, cellRenderer);
            case 'function':
                return cellRenderer(data, rowIndex, colIndex);
            default:
                return cellRenderer;
        }

    };

    handleClick = (e, colIndex) => {
        const {data, rowIndex, disabled, onCellClick} = this.props;
        !disabled && onCellClick && onCellClick(data, rowIndex, colIndex, e);
    };

    toggleExpandHandler = (colIndex, col, e) => {
        const {data, isExpanded, onExpand, onCollapse} = this.props;

        e.stopPropagation();

        if (!col.collapseAble || !data[col.childrenNumKey]) {
            return;
        }

        if (isExpanded) {
            onCollapse && onCollapse(colIndex);
        } else {
            onExpand && onExpand(colIndex);
        }
    };

    render() {

        const {column, data, colIndex, isExpanded, expandedIconCls} = this.props,
            {col, span} = column;

        return (
            <td className={classNames({
                [col.cellClassName]: col.cellClassName,
                'expanded-children-column': col.collapseAble,
                'root': data.isRoot && col.collapseAble
            })}
                style={col.cellStyle}
                colSpan={span}
                onClick={e => this.handleClick(e, colIndex, col)}>

                {
                    col.collapseAble && data[col.childrenNumKey] > 0 ?
                        <i className={classNames('collapsed-icon', {
                            [expandedIconCls]: expandedIconCls,
                            'expanded-icon': isExpanded
                        })}
                           onClick={e => this.toggleExpandHandler(colIndex, col, e)}/>
                        :
                        null
                }

                {this.handleRenderer(col.cellRenderer, colIndex)}

            </td>
        );

    }
}

Td.propTypes = {

    rowIndex: PropTypes.number,
    column: PropTypes.object,
    data: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandedIconCls: PropTypes.string,
    className: PropTypes.string,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Td.defaultProps = {
    className: '',
    rowIndex: 0,
    expandedIconCls: 'fas fa-angle-right',
    columns: [],
    data: {},
    isChecked: false,
    disabled: false
};

export default Td;
