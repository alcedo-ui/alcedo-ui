/**
 * @file TableHeaderSortIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TableHeaderSortIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sort, sortAscIconCls, sortDescIconCls} = this.props;

        return (
            <div className={'table-header-sort-icon-wrapper' + (sort ? (sort.type > 0 ? ' asc' : ' desc') : '')}>
                <i className={`table-header-sort-icon ${sortAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`table-header-sort-icon ${sortDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
};

TableHeaderSortIcon.propTypes = {
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string
};

TableHeaderSortIcon.defaultProps = {
    sort: null,
    sortAscIconCls: 'fa fa-angle-up',
    sortDescIconCls: 'fa fa-angle-down'
};