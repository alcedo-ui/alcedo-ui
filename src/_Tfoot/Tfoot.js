/**
 * @file Tfoot component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Td from '../_Td';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

import Util from '../_vendors/Util';

class Tfoot extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handleClick = e => {
        const {data, disabled, onFootClick} = this.props;
        !disabled && onFootClick && onFootClick(data, e);
    };

    render() {

        const {
            className, columns, data, disabled,
            onCellClick
        } = this.props;

        return (
            <tfoot className={classNames({
                [className]: className,
                [data.rowClassName]: data.rowClassName
            })}
                   style={data.rowStyle}
                   disabled={disabled}
                   onClick={this.handleClick}>
                <tr>
                    {
                        columns && columns.map((column, colIndex) =>
                            <Td key={colIndex}
                                colIndex={colIndex}
                                data={data}
                                className={column.footerClassName}
                                style={column.footerStyle}
                                renderer={column.footerRenderer}
                                span={column.span}
                                disabled={disabled}
                                onCellClick={onCellClick}/>
                        )
                    }
                </tr>
            </tfoot>
        );

    }
}

Tfoot.propTypes = {

    className: PropTypes.string,

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
    disabled: PropTypes.bool,

    onFootClick: PropTypes.func,
    onCellClick: PropTypes.func

};

Tfoot.defaultProps = {
    disabled: false
};

export default Tfoot;
