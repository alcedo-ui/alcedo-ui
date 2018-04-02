/**
 * @file TableHeaderSortIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import PureRender from '../_vendors/PureRender';

@PureRender
class TableHeaderSortIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sort, sortProp, sortAscIconCls, sortDescIconCls} = this.props,

            className = classNames('table-header-sort-icon-wrapper',
                sort && sort.prop === sortProp ? (sort.type > 0 ? ' asc' : ' desc') : '');

        return (
            <div className={className}>
                <i className={`table-header-sort-icon ${sortAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`table-header-sort-icon ${sortDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    TableHeaderSortIcon.propTypes = {
        sort: PropTypes.object,
        sortProp: PropTypes.string,
        sortAscIconCls: PropTypes.string,
        sortDescIconCls: PropTypes.string
    };

}

TableHeaderSortIcon.defaultProps = {
    sortAscIconCls: 'fas fa-angle-up',
    sortDescIconCls: 'fas fa-angle-down'
};

export default TableHeaderSortIcon;