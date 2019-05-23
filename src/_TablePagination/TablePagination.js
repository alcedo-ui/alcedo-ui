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
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class TablePagination extends Component {

    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            page: props.page,
            pageSize: props.pageSize
        };

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
        this.setState(pagination, () => {
            const {onPaginationChange} = this.props;
            onPaginationChange && onPaginationChange(pagination);
        });
    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            page: ComponentUtil.getDerivedState(props, state, 'page'),
            pageSize: ComponentUtil.getDerivedState(props, state, 'pageSize')
        };
    }

    render() {

        const {
                className, style, data, paginationSelectionVisible, paginationSelectionRenderer,
                paginationTotalVisible, paginationTotalRenderer,
                paginationPageSizeVisible, paginationPageSizesVisible,
                paginationPrevIconCls, paginationNextIconCls, paginationFirstIconCls, paginationLastIconCls,
                ...restProps
            } = this.props,
            PaginationComponent = this.getPaginationComponent();

        return (
            <div className={classNames('table-pagination', {
                [className]: className
            })}
                 style={style}>
                <PaginationComponent {...restProps}
                                     total={data && data.length || 0}
                                     selectedCount={this.getSelectedCount()}
                                     selectionVisible={paginationSelectionVisible}
                                     totalVisible={paginationTotalVisible}
                                     pageSizeVisible={paginationPageSizeVisible}
                                     pageSizesVisible={paginationPageSizesVisible}
                                     prevIconCls={paginationPrevIconCls}
                                     nextIconCls={paginationNextIconCls}
                                     firstIconCls={paginationFirstIconCls}
                                     lastIconCls={paginationLastIconCls}
                                     selectionRenderer={paginationSelectionRenderer}
                                     totalRenderer={paginationTotalRenderer}
                                     onPaginationChange={this.handlePaginationChange}/>
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

    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizes: PropTypes.array,
    useFullPagination: PropTypes.bool,

    pageSizeValueField: PropTypes.string,
    pageSizeDisplayField: PropTypes.string,

    paginationSelectionVisible: PropTypes.bool,
    paginationTotalVisible: PropTypes.bool,
    paginationPageSizeVisible: PropTypes.bool,
    paginationPageSizesVisible: PropTypes.bool,

    pageSizeRightIconCls: PropTypes.string,
    paginationPrevIconCls: PropTypes.string,
    paginationNextIconCls: PropTypes.string,
    paginationFirstIconCls: PropTypes.string,
    paginationLastIconCls: PropTypes.string,

    paginationSelectionRenderer: PropTypes.func,
    paginationTotalRenderer: PropTypes.func,
    onPaginationChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func

};

TablePagination.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,

    page: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    useFullPagination: false,

    pageSizeValueField: 'value',
    pageSizeDisplayField: 'text',

    paginationSelectionVisible: false,
    paginationTotalVisible: true,
    paginationPageSizeVisible: true,
    paginationPageSizesVisible: true,

    pageSizeRightIconCls: 'fas fa-angle-down',
    paginationPrevIconCls: 'fas fa-angle-left',
    paginationNextIconCls: 'fas fa-angle-right',
    paginationFirstIconCls: 'fas fa-angle-double-left',
    paginationLastIconCls: 'fas fa-angle-double-right'

};

export default TablePagination;
