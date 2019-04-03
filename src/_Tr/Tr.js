/**
 * @file Tr component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Td from '../_Td';

class Tr extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

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

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {
                className, rowIndex, data, isChecked, disabled, isExpanded, expandedIconCls,
                onCellClick
            } = this.props,
            columns = this.calColumns();

        return (
            <tr className={classNames({
                [className]: className,
                activated: isChecked,
                [data.rowClassName]: data.rowClassName
            })}
                style={data.rowStyle}
                disabled={disabled}
                onClick={this.handleClick}>
                {
                    columns && columns.map((column, colIndex) =>
                        <Td key={colIndex}
                            column={column}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            isExpanded={isExpanded}
                            disabled={disabled}
                            expandedIconCls={expandedIconCls}
                            onCellClick={onCellClick}/>
                    )
                }
            </tr>
        );

    }
}

Tr.propTypes = {

    rowIndex: PropTypes.number,
    columns: PropTypes.array,
    data: PropTypes.object,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandedIconCls: PropTypes.string,
    className: PropTypes.string,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Tr.defaultProps = {
    className: '',
    rowIndex: 0,
    expandedIconCls: 'fas fa-angle-right',
    columns: [],
    data: {},
    isChecked: false,
    disabled: false
};

export default Tr;
