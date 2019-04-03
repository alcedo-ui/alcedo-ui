/**
 * @file ThSortIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ThSortIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sort, sortProp, sortAscIconCls, sortDescIconCls} = this.props;

        return (
            <div className={classNames('th-sort-icon-wrapper',
                sort && sort.prop === sortProp ? (sort.type > 0 ? ' asc' : ' desc') : '')}>
                <i className={`th-sort-icon ${sortAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`th-sort-icon ${sortDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
}

ThSortIcon.propTypes = {
    sort: PropTypes.object,
    sortProp: PropTypes.string,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string
};

ThSortIcon.defaultProps = {
    sortAscIconCls: 'fas fa-angle-up',
    sortDescIconCls: 'fas fa-angle-down'
};

export default ThSortIcon;
