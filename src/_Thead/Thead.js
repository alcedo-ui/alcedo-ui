/**
 * @file Thead component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Th from '../_Th';

class Thead extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            className, style, columns, data, sort, sortAscIconCls, sortDescIconCls,
            onSort
        } = this.props;

        return (
            <thead className={classNames('thead', {
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
                                sortable={item.sortable}
                                sortProp={item.sortProp}
                                sort={sort}
                                sortAscIconCls={sortAscIconCls}
                                sortDescIconCls={sortDescIconCls}
                                onSort={() => onSort && onSort(item)}/>
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
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,

    onSort: PropTypes.func

};

Thead.defaultProps = {
    sortAscIconCls: 'fas fa-angle-up',
    sortDescIconCls: 'fas fa-angle-down'
};

export default Thead;
