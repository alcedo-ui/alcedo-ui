/**
 * @file Tbody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableRow from '../_TableRow';

import SelectMode from '../_statics/SelectMode';

import PureRender from '../_vendors/PureRender';
import Util from '../_vendors/Util';

@PureRender
class Tbody extends Component {

    static SelectMode = SelectMode;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.isItemChecked = ::this.isItemChecked;

    }

    isItemChecked(rowData) {

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

    }

    render() {

        const {
            columns, data, startIndex, idProp, disabled,
            onRowTouchTap, onCellTouchTap
        } = this.props;

        return (
            <tbody className="tbody">
                {
                    data.map((row, rowIndex) => row ?
                        <TableRow key={idProp && idProp in row ? row[idProp] : rowIndex}
                                  rowIndex={startIndex + rowIndex}
                                  columns={columns}
                                  data={row}
                                  isChecked={this.isItemChecked(row)}
                                  disabled={disabled || row.disabled}
                                  onRowTouchTap={onRowTouchTap}
                                  onCellTouchTap={onCellTouchTap}/>
                        :
                        null
                    )
                }
            </tbody>
        );

    }
};

process.env.NODE_ENV !== 'production' && (Tbody.propTypes = {

    columns: PropTypes.array,
    data: PropTypes.array,
    startIndex: PropTypes.number,
    idProp: PropTypes.string,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    disabled: PropTypes.bool,

    isItemChecked: PropTypes.func,

    onRowTouchTap: PropTypes.func,
    onCellTouchTap: PropTypes.func

});

Tbody.defaultProps = {
    data: [],
    columns: [],
    startIndex: 0,
    idProp: 'id',
    selectMode: SelectMode.SINGLE_SELECT,
    disabled: false
};

export default Tbody;