/**
 * @file Tbody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Tr from '../_Tr';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';

class Tbody extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    isItemChecked = rowData => {

        const {selectMode, idProp, value} = this.props;

        if (!rowData || !value || selectMode === SelectMode.NORMAL) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value && value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
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
            <tbody>
                {
                    data && data.map((row, rowIndex) => row ?
                        <Tr key={idProp && idProp in row ? row[idProp] : rowIndex}
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

Tbody.propTypes = {

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * width of column
         */
        width: PropTypes.number,

        /**
         * minimum width of column
         */
        minWidth: PropTypes.number,

        /**
         * The class name of header.
         */
        headerClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headerStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        headerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of td.
         */
        cellClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        cellStyle: PropTypes.object,

        /**
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        cellRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footerClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footerStyle: PropTypes.object,

        /**
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (tableData, colIndex) {return colIndex;}
         */
        footerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sort field.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),

        /**
         * Column span callback
         * example: function (colIndex, rowIndex) {return colIndex === 0 ? 2 : null;}
         */
        span: PropTypes.func

    })).isRequired,

    data: PropTypes.array,
    value: PropTypes.any,
    startIndex: PropTypes.number,
    idProp: PropTypes.string,
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    disabled: PropTypes.bool,

    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Tbody.defaultProps = {
    selectMode: SelectMode.SINGLE_SELECT,
    startIndex: 0,
    idProp: 'id',
    disabled: false
};

export default Tbody;
