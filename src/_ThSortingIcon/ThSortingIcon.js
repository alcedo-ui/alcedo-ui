/**
 * @file ThSortingIcon component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class ThSortingIcon extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style,
            sorting, sortingProp, sortingAscIconCls, sortingDescIconCls
        } = this.props;

        return (
            <div
                className={classNames('th-sorting-icon-wrapper',
                    sorting && sorting.type && sorting.prop === sortingProp ?
                        (sorting.type > 0 ? 'asc' : 'desc')
                        :
                        '', {
                        [className]: className
                    })}
                style={style}>
                <i className={`th-sorting-icon ${sortingAscIconCls} up`}
                   aria-hidden="true"></i>
                <i className={`th-sorting-icon ${sortingDescIconCls} down`}
                   aria-hidden="true"></i>
            </div>
        );

    }
}

ThSortingIcon.propTypes = {

    className: PropTypes.string,
    style: PropTypes.style,

    sorting: PropTypes.object,
    sortingProp: PropTypes.string,
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string

};

ThSortingIcon.defaultProps = {
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down'
};

export default ThSortingIcon;
