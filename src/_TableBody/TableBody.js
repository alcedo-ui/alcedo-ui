/**
 * @file TableBody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

import SelectMode from '../_statics/SelectMode';

import Util from '../_vendors/Util';

class TableBody extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    isItemChecked = rowData => {

        const {selectMode, idProp, value} = this.props;

        if (!rowData || !value) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case SelectMode.SINGLE_SELECT:
                return value[idProp] === rowData[idProp];
        }

    };

    render() {

        const {
            columns, data, startIndex, idProp, disabled,
            onRowClick, onCellClick
        } = this.props;

        return (
            <tbody className="table-body">
                {
                    data && data.map((row, rowIndex) => row ?
                        <TableRow key={idProp && idProp in row ? row[idProp] : rowIndex}
                                  rowIndex={startIndex + rowIndex}
                                  columns={columns}
                                  data={row}
                                  isChecked={this.isItemChecked(row)}
                                  disabled={disabled || row.disabled}
                                  onRowClick={onRowClick}
                                  onCellClick={onCellClick}/>
                        :
                        null
                    )
                }
            </tbody>
        );

    }
}

TableBody.propTypes = {

    columns: PropTypes.array,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    idProp: PropTypes.string,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    disabled: PropTypes.bool,

    isItemChecked: PropTypes.func,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

TableBody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id',
    selectMode: SelectMode.SINGLE_SELECT,
    disabled: false
};

export default TableBody;