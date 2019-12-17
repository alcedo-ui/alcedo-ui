/**
 * @file Th component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ThSortIcon from '../_ThSortingIcon';

import HorizontalAlign from '../_statics/HorizontalAlign';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';

class Th extends Component {

    static Align = HorizontalAlign;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * handle th content render
     * @returns {*}
     */
    handleRender = () => {

        const {colIndex, data, scrollEl, renderer} = this.props;

        switch (typeof renderer) {
            case 'function':
                return renderer(data, colIndex, scrollEl);
            default:
                return renderer;
        }

    };

    /**
     * handle th click and trigger sorting callback
     */
    handleClick = () => {

        const {sortable, isClickSorting, onSortChange} = this.props;

        if (!sortable || !isClickSorting || !onSortChange) {
            return;
        }

        const {sorting, defaultSortingType, sortingProp} = this.props;
        let result = {};

        if (sorting && sorting.prop === sortingProp) {
            result.prop = sorting.prop;
            if (!sorting.type) {
                result.type = defaultSortingType;
            } else if (sorting.type === defaultSortingType) {
                result.type = -defaultSortingType;
            } else {
                result = null;
            }
        } else {
            result.prop = sortingProp;
            result.type = defaultSortingType;
        }

        onSortChange && onSortChange(result);

    };

    render() {

        const {
            className, style, renderer, align, rowSpan, colSpan, noWrap,
            sortable, sortingProp, sorting, sortingAscIconCls, sortingDescIconCls, isClickSorting
        } = this.props;

        return (
            <th className={classNames({
                [`align-${align}`]: align && align !== HorizontalAlign.LEFT,
                sortable: sortable,
                clickable: isClickSorting,
                sorting: sortable && sortingProp && sorting && sorting.prop && sorting.prop === sortingProp,
                'no-wrap': sortable || noWrap,
                [className]: className
            })}
                style={style}
                title={typeof renderer === 'string' ? renderer : null}
                rowSpan={rowSpan}
                colSpan={colSpan}
                onClick={this.handleClick}>

                <span className="th-column">

                    <span className={classNames('th-column-title', {
                        'no-wrap': noWrap
                    })}>
                        {this.handleRender()}
                    </span>

                    {
                        sortable ?
                            <ThSortIcon sorting={sorting}
                                        sortingProp={sortingProp}
                                        sortingAscIconCls={sortingAscIconCls}
                                        sortingDescIconCls={sortingDescIconCls}/>
                            :
                            null
                    }

                </span>

            </th>
        );

    }
}

Th.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    renderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),
    colIndex: PropTypes.number,
    data: PropTypes.array,
    noWrap: PropTypes.bool,
    rowSpan: PropTypes.number,
    colSpan: PropTypes.number,
    scrollEl: PropTypes.object,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,
    sortable: PropTypes.bool,
    sortingProp: PropTypes.string,
    isClickSorting: PropTypes.bool,

    onSortChange: PropTypes.func

};

Th.defaultProps = {

    colIndex: 0,

    noWrap: false,

    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',
    sortable: false,
    isClickSorting: true

};

export default Th;
