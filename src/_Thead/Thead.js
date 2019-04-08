/**
 * @file Thead component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Th from '../_Th';
import Util from '../_vendors/Util';
import SortingType from '../_statics/SortingType';

class Thead extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style, columns, data,
            sorting, defaultSortingType, sortingAscIconCls, sortingDescIconCls,
            onSortChange
        } = this.props;

        return (
            <thead className={classNames({
                [className]: className
            })}
                   style={style}>
                <tr>
                    {
                        columns && columns.map((item, index) => item ?
                            <Th key={index}
                                className={item.headerClassName}
                                style={item.headerStyle}
                                renderer={item.headerRenderer}
                                colIndex={index}
                                data={data}
                                sorting={sorting}
                                defaultSortingType={item.defaultSortingType || defaultSortingType}
                                sortingAscIconCls={sortingAscIconCls}
                                sortingDescIconCls={sortingDescIconCls}
                                sortable={item.sortable}
                                sortingProp={item.sortingProp}
                                onSortChange={onSortChange}/>
                            :
                            null
                        )
                    }
                </tr>
            </thead>
        );

    }
}

Thead.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

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
         * If true, this column can be sorted.
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

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,

    onSortChange: PropTypes.func

};

Thead.defaultProps = {
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down'
};

export default Thead;
