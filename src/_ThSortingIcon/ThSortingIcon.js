/**
 * @file ThSortingIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ThSortingIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {sorting, sortingProp, sortingAscIconCls, sortingDescIconCls} = this.props;

        return (
            <div className={classNames('th-sorting-icon-wrapper',
                sorting && sorting.prop === sortingProp ? (sorting.type > 0 ? ' asc' : ' desc') : '')}>
                <i className={`th-sorting-icon ${sortingAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`th-sorting-icon ${sortingDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
}

ThSortingIcon.propTypes = {
    sorting: PropTypes.object,
    sortingProp: PropTypes.string,
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string
};

ThSortingIcon.defaultProps = {
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down'
};

export default ThSortingIcon;
