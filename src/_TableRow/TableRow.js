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

        this.contentRenderer = ::this.contentRenderer;
        this.rowTouchTapHandler = ::this.rowTouchTapHandler;
        this.cellTouchTapHandler = ::this.cellTouchTapHandler;

    }

    stringContentRenderer(data, template) {

        if (!data) {
            return template;
        }

        if (/\$\{.+\}/.test(template)) { // 配置的 renderer 中包含 ${...}，用数据替换
            let result = template;
            for (let key in data) {
                result = result.replace(new RegExp('\\$\\{' + key + '\\}', 'g'), data[key]);
            }
            return result;
        } else { // 直接显示字段
            return data[template];
        }

    }

    contentRenderer(renderer, colIndex) {

        const {rowIndex, data} = this.props;

        switch (typeof renderer) {
            case 'string':
                return this.stringContentRenderer(data, renderer);
            case 'function':
                return renderer(data, rowIndex, colIndex);
            default:
                return renderer;
        }

    }

    rowTouchTapHandler(e) {
        const {data, rowIndex, disabled, onRowTouchTap} = this.props;
        !disabled && onRowTouchTap && onRowTouchTap(data, rowIndex, e);
    }

    cellTouchTapHandler(e, colIndex) {
        const {data, rowIndex, disabled, onCellTouchTap} = this.props;
        !disabled && onCellTouchTap && onCellTouchTap(data, rowIndex, colIndex, e);
    }

    render() {

        const {data, columns, isChecked, disabled} = this.props,

            trClassName = classNames('table-row', {
                activated: isChecked,
                [data.rowClassName]: data.rowClassName
            });

        return (
            <tr className={trClassName}
                style={data.rowStyle}
                disabled={disabled}
                onTouchTap={this.rowTouchTapHandler}>

                {
                    columns.map((col, colIndex) =>
                        <td key={colIndex}
                            className={col.cellClassName}
                            style={col.cellStyle}
                            onTouchTap={e => {
                                this.cellTouchTapHandler(e, colIndex);
                            }}>
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

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

};

TableRow.defaultProps = {
    rowIndex: 0,
    columns: [],
    data: {},
    isChecked: false,
    disabled: false
};

export default TableRow;