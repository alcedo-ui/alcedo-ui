import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './TableRow.css';

export default class TableRow extends Component {

    constructor(props) {

        super(props);

        this.contentRenderer = this::this.contentRenderer;

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

    render() {

        const {rowIndex, columns, data, isChecked, onRowTouchTap, onCellTouchTap} = this.props;

        return (
            <tr className={'table-row' + (isChecked ? ' activated' : '')}
                onClick={() => {
                    onRowTouchTap && onRowTouchTap(data, rowIndex);
                }}>

                {
                    columns.map((col, colIndex) =>
                        <td key={colIndex}
                            className={col.cellClassName}
                            style={col.cellStyle}
                            onClick={() => {
                                onCellTouchTap && onCellTouchTap(data, rowIndex, colIndex);
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

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

};

TableRow.defaultProps = {
    rowIndex: 0,
    columns: [],
    data: {},
    isChecked: false
};