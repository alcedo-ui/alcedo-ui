/**
 * @file TablePagination component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Pagination from '../Pagination';
import BriefPagination from '../BriefPagination';

import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortType from '../_statics/SortType';

import Util from '../_vendors/Util';

class TablePagination extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortType = SortType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getPaginationComponent = () => {
        const {useFullPagination} = this.props;
        return useFullPagination ? Pagination : BriefPagination;
    };

    getSelectedCount = () => {

        const {selectMode, value} = this.props;

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value.length;
            case SelectMode.SINGLE_SELECT:
                return value ? 1 : 0;
        }

        return 0;

    };

    handlePaginationChange = pagination => {

        if (!pagination) {
            return;
        }

        if (typeof pagination.pageSize === 'object') {
            pagination.pageSize = pagination.pageSize.value;
        }

        const {onChange} = this.props;
        onChange && onChange(pagination);

    };

    render() {

        const {
                className, style, data, pagination, pageSizes,
                paginationSelectedCountVisible, paginationPageSizeVisible, pageSizeRightIconCls,
                paginationPrevIconCls, paginationNextIconCls, paginationFirstIconCls, paginationLastIconCls,
                paginationCountRenderer
            } = this.props,
            PaginationComponent = this.getPaginationComponent();

        return (
            <div className={classNames('table-pagination', {
                [className]: className
            })}
                 style={style}>
                <PaginationComponent page={pagination.page}
                                     total={data.length}
                                     selectedCount={this.getSelectedCount()}
                                     pageSize={pagination.pageSize}
                                     pageSizes={pageSizes}
                                     selectedCountVisible={paginationSelectedCountVisible}
                                     pageSizeVisible={paginationPageSizeVisible}
                                     pageSizeRightIconCls={pageSizeRightIconCls}
                                     paginationPrevIconCls={paginationPrevIconCls}
                                     paginationNextIconCls={paginationNextIconCls}
                                     paginationFirstIconCls={paginationFirstIconCls}
                                     paginationLastIconCls={paginationLastIconCls}
                                     paginationCountRenderer={paginationCountRenderer}
                                     onChange={this.handlePaginationChange}/>
            </div>
        );

    }
}

TablePagination.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    data: PropTypes.array,
    value: PropTypes.any,

    pagination: PropTypes.shape({
        pageSize: PropTypes.number,
        page: PropTypes.number
    }),
    pageSizes: PropTypes.array,
    useFullPagination: PropTypes.bool,

    paginationSelectedCountVisible: PropTypes.bool,
    paginationPageSizeVisible: PropTypes.bool,
    pageSizeRightIconCls: PropTypes.bool,
    paginationPrevIconCls: PropTypes.bool,
    paginationNextIconCls: PropTypes.bool,
    paginationFirstIconCls: PropTypes.bool,
    paginationLastIconCls: PropTypes.bool,
    paginationCountRenderer: PropTypes.func,

    onChange: PropTypes.func

};

TablePagination.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,

    pagination: {
        pageSize: 10,
        page: 0
    },
    pageSizes: [5, 10, 15, 20],
    useFullPagination: false

};

export default TablePagination;
