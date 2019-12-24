/**
 * @file TablePagination component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Pagination from '../Pagination';
import BriefPagination from '../BriefPagination';

// Statics
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
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
                className, style, data, value, paginationSelectionVisible, paginationSelectionRenderer,
                paginationTotalVisible, paginationTotalRenderer,
                paginationPageVisible, paginationPageSizeVisible, paginationPageSizeRightIconCls,
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
                                     selectedCount={value && value.length || 0}
                                     selectionVisible={paginationSelectionVisible}
                                     totalVisible={paginationTotalVisible}
                                     pageVisible={paginationPageVisible}
                                     pageSizeVisible={paginationPageSizeVisible}
                                     pageSizeRightIconCls={paginationPageSizeRightIconCls}
                                     prevIconCls={paginationPrevIconCls}
                                     nextIconCls={paginationNextIconCls}
                                     firstIconCls={paginationFirstIconCls}
                                     lastIconCls={paginationLastIconCls}
                                     selectionRenderer={paginationSelectionRenderer}
                                     totalRenderer={paginationTotalRenderer}
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

    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizes: PropTypes.array,
    useFullPagination: PropTypes.bool,

    pageSizeValueField: PropTypes.string,
    pageSizeDisplayField: PropTypes.string,

    paginationSelectionVisible: PropTypes.bool,
    paginationTotalVisible: PropTypes.bool,
    paginationPageVisible: PropTypes.bool,
    paginationPageSizeVisible: PropTypes.bool,

    paginationPageSizeRightIconCls: PropTypes.string,
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
    paginationPageVisible: true,
    paginationPageSizeVisible: true,

    paginationPageSizeRightIconCls: 'fas fa-angle-down',
    paginationPrevIconCls: 'fas fa-angle-left',
    paginationNextIconCls: 'fas fa-angle-right',
    paginationFirstIconCls: 'fas fa-angle-double-left',
    paginationLastIconCls: 'fas fa-angle-double-right'

};

export default TablePagination;
