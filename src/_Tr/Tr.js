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

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {
            className, columnsWithSpan, rowIndex, data, isChecked, disabled, isExpanded, expandedIconCls,
            onCellClick
        } = this.props;

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
                    columnsWithSpan && columnsWithSpan.map((column, colIndex) =>
                        <Td key={colIndex}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            column={column}
                            data={data}
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
    columnsWithSpan: PropTypes.array,
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
