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
        NORMAL: 'normal',
        CHECKBOX: 'checkbox',
        RADIO: 'radio'
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
            case Tbody.Mode.CHECKBOX:
                return value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case Tbody.Mode.RADIO:
                return value[idProp] === rowData[idProp];
        }

    }

    render() {

        const {
            columns, data, startIndex, idProp,
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

    isItemChecked: PropTypes.func,

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

};

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id',
    mode: Tbody.Mode.NORMAL
};