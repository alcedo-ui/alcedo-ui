/**
 * @file Table component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from '../_ComplicatedTableHeader';
import Content from '../_ComplicatedTableContent';
import Footer from '../_ComplicatedTableFooter';
import Pagination from '../_ComplicatedTablePagination';

import Theme from '../Theme';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

import Util from '../_vendors/Util';
import Calculation from '../_vendors/Calculation';

class Table extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {

            /**
             * sort construct
             *  {
             *	    prop: '', // col name
             *	    type: 1: 'asc' | -1: 'desc'
             *  }
             */
            sort: props.sort,

            pagination: {
                pageSize: Calculation.pageSize(props.defaultPageSize, props.pageSizes, 10),
                page: props.page
            },

            value: Calculation.getInitValue(props)

        };

    }

    render() {

        const {className, style, columns, data} = this.props,

            tableClassName = classNames('table', {
                [className]: className
            });

        return (
            <div className={tableClassName}
                 style={style}>

                {/* table header, display when select */}
                <Header/>

                {/* table area */}
                <Content columns={columns}
                         data={data}/>

                {/* table footer */}
                <Footer/>

                {/* table pagination */}
                <Pagination/>

            </div>
        );

    }
}

Table.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The theme of the table select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    /**
     * Default sort type of table.
     */
    defaultSortType: PropTypes.oneOf(Util.enumerateValue(SortType)),

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

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
         * (2) callback，example：function (colIndex) {return colIndex;}
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
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        footerRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sort field.
         */
        sortProp: PropTypes.string,

        defaultSortType: PropTypes.oneOf(Util.enumerateValue(SortType)),

        span: PropTypes.func

    })).isRequired,

    data: PropTypes.array,

    isPaginated: PropTypes.bool,
    page: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSizes: PropTypes.array

};

Table.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,

    defaultSortType: SortType.ASC,

    isPaginated: true,
    page: 0,
    defaultPageSize: 10,
    pageSizes: [5, 10, 15, 20]

};

export default Table;
