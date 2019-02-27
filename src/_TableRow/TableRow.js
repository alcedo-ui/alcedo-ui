/**
 * @file TableRow component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TableRow extends Component {

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

    calSpan = (col, colIndex) => {
        return col.span && typeof col.span === 'function' ?
            col.span(this.props.rowIndex, colIndex)
            :
            null;
    };

    calColumns = () => {

        const {columns} = this.props,
            result = [];
        let spanFlag = 0;

        for (let i = 0, len = columns.length; i < len; i++) {

            if (spanFlag > 1) {
                spanFlag--;
                continue;
            }

            const col = columns[i],
                span = this.calSpan(columns[i], i);

            if (span && span > 1) {
                spanFlag = span;
            }

            result.push({
                col,
                span
            });

        }

        return result;

    };

    contentRenderer = (renderer, colIndex) => {

        const {rowIndex, data} = this.props;

        switch (typeof renderer) {
            case 'string':
                return this.stringContentRenderer(data, renderer);
            case 'function':
                return renderer(data, rowIndex, colIndex);
            default:
                return renderer;
        }

    };

    rowClickHandler = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    cellClickHandler = (e, colIndex, col) => {
        const {data, rowIndex, disabled, isExpanded, onCellClick, onExpand, onCollapse} = this.props;
        !disabled && onCellClick && onCellClick(data, rowIndex, colIndex, e);
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

        const {data, isChecked, disabled, isExpanded, expandedIconCls} = this.props,

            columns = this.calColumns(),

            trClassName = classNames('table-row', {
                activated: isChecked,
                [data.rowClassName]: data.rowClassName
            });

        return (
            <tr className={trClassName}
                style={data.rowStyle}
                disabled={disabled}
                onClick={this.rowClickHandler}>
                {
                    columns && columns.map(({col, span}, colIndex) =>
                        <td key={colIndex}
                            className={classNames('table-data', {
                                [col.cellClassName]: col.cellClassName
                            })}
                            style={col.cellStyle}
                            colSpan={span}
                            onClick={e => this.cellClickHandler(e, colIndex, col)}>
                            {col.collapseAble && data[col.childrenNumKey] > 0 &&
                            <i className={classNames('collapsed-icon', {
                                [expandedIconCls]: expandedIconCls,
                                ['expanded-icon']: isExpanded
                            })}/>}
                            {this.contentRenderer(col.renderer, colIndex)}
                        </td>
                    )
                }
            </tr>
        );

    }
}

TableRow.propTypes = {

    rowIndex: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandedIconCls: PropTypes.string,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

TableRow.defaultProps = {
    rowIndex: 0,
    expandedIconCls: 'fas fa-angle-right',
    columns: [],
    data: {},
    isChecked: false,
    disabled: false
};

export default TableRow;
