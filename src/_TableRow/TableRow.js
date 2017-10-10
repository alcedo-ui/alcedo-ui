/**
 * @file TableRow component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TableRow extends Component {

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

        e.preventDefault();

        const {data, rowIndex, disabled, onRowTouchTap} = this.props;

        !disabled && onRowTouchTap && onRowTouchTap(data, rowIndex);

    }

    cellTouchTapHandler(e, colIndex) {

        e.preventDefault();

        const {data, rowIndex, disabled, onCellTouchTap} = this.props;

        !disabled && onCellTouchTap && onCellTouchTap(data, rowIndex, colIndex);

    }

    render() {

        const {columns, isChecked, disabled} = this.props;

        return (
            <tr className={'table-row' + (isChecked ? ' activated' : '')}
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
};

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