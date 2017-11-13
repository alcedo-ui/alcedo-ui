/**
 * @file Tbody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

import Util from '../_vendors/Util';

export default class Tbody extends Component {

    static Mode = {
        NORMAL: Symbol('NORMAL'),
        MULTI_SELECT: Symbol('MULTI_SELECT'),
        SINGLE_SELECT: Symbol('SINGLE_SELECT')
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.isItemChecked = ::this.isItemChecked;

    }

    isItemChecked(rowData) {

        const {mode, idProp, value} = this.props;

        if (mode === Tbody.Mode.NORMAL || !rowData || !value) {
            return false;
        }

        switch (mode) {
            case Tbody.Mode.MULTI_SELECT:
                return value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case Tbody.Mode.SINGLE_SELECT:
                return value[idProp] === rowData[idProp];
        }

    }

    render() {

        const {
            columns, data, startIndex, idProp, disabled,
            onRowTouchTap, onCellTouchTap
        } = this.props;

        return (
            <tbody className="tbody">

                {
                    data.map((row, rowIndex) => {
                        return (
                            <TableRow key={idProp && idProp in row ? row[idProp] : rowIndex}
                                      rowIndex={startIndex + rowIndex}
                                      columns={columns}
                                      data={row}
                                      isChecked={this.isItemChecked(row)}
                                      disabled={disabled || row.disabled}
                                      onRowTouchTap={onRowTouchTap}
                                      onCellTouchTap={onCellTouchTap}/>
                        );
                    })
                }

            </tbody>
        );

    }
};

Tbody.propTypes = {

    columns: PropTypes.array,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    idProp: PropTypes.string,
    mode: PropTypes.oneOf(Util.enumerateValue(Tbody.Mode)),
    disabled: PropTypes.bool,

    isItemChecked: PropTypes.func,

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

};

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id',
    mode: Tbody.Mode.NORMAL,
    disabled: false
};