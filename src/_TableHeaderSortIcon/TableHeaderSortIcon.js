/**
 * @file TableHeaderSortIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class TableHeaderSortIcon extends Component {

    static propTypes = {
        sort: PropTypes.object,
        sortProp: PropTypes.string,
        sortAscIconCls: PropTypes.string,
        sortDescIconCls: PropTypes.string
    };
    static defaultProps = {
        sort: null,
        sortProp: null,
        sortAscIconCls: 'fa fa-angle-up',
        sortDescIconCls: 'fa fa-angle-down'
    };

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sort, sortProp, sortAscIconCls, sortDescIconCls} = this.props,
            className = (sort && sort.prop === sortProp ? (sort.type > 0 ? ' asc' : ' desc') : '');

        return (
            <div className={'table-header-sort-icon-wrapper' + className}>
                <i className={`table-header-sort-icon ${sortAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`table-header-sort-icon ${sortDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
};