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
            className, style, columns, sort, sortAscIconCls, sortDescIconCls, hidden,
            onSort
        } = this.props;

        return (
            <thead className={classNames('thead', {
                hidden: hidden,
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
                                sortable={item.sortable}
                                sortProp={item.sortProp}
                                sort={sort}
                                sortAscIconCls={sortAscIconCls}
                                sortDescIconCls={sortDescIconCls}
                                hidden={hidden}
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
    sort: PropTypes.object,
    sortAscIconCls: PropTypes.string,
    sortDescIconCls: PropTypes.string,
    hidden: PropTypes.bool,

    onSort: PropTypes.func

};

Thead.defaultProps = {
    columns: [],
    hidden: false
};

export default Thead;
