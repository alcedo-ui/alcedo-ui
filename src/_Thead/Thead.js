/**
 * @file Thead component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Th from '../_Th';
import Util from '../_vendors/Util';
import SortingType from '../_statics/SortingType';

class Thead extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style, columns, data,
            sorting, defaultSortingType, sortingAscIconCls, sortingDescIconCls,
            onSortChange
        } = this.props;

        return (
            <thead className={classNames({
                [className]: className
            })}
                   style={style}>
                <tr>
                    {
                        columns && columns.map((item, index) => item ?
                            <Th key={index}
                                className={item.headerClassName}
                                style={item.headerStyle}
                                renderer={item.headerRenderer}
                                colIndex={index}
                                data={data}
                                sorting={sorting}
                                defaultSortingType={item.defaultSortingType || defaultSortingType}
                                sortingAscIconCls={sortingAscIconCls}
                                sortingDescIconCls={sortingDescIconCls}
                                sortable={item.sortable}
                                sortingProp={item.sortingProp}
                                onSortChange={onSortChange}/>
                            :
                            null
                        )
                    }
                </tr>
            </thead>
        );

    }
}

Thead.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    columns: PropTypes.array,
    data: PropTypes.array,

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

    onSortChange: PropTypes.func

};

Thead.defaultProps = {
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down'
};

export default Thead;
