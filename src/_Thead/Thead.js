/**
 * @file Thead component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../_TableHeader';

export default class Thead extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style, columns, sort, sortAscIconCls, sortDescIconCls, hidden, onSort} = this.props;

        return (
            <thead className={'thead' + (hidden ? ' hidden' : '') + (className ? ' ' + className : '')}
                   style={style}>
                <tr>
                    {
                        columns.map((item, index) => {

                            const headerClassName = (item.sortable ? 'sortable ' : '')
                                + (sort && sort.prop === item.sortProp ? (sort.type > 0 ? ' asc' : ' desc') : '')
                                + (item.headerClassName ? ' ' + item.headerClassName : '');

                            return (
                                <TableHeader key={index}
                                             className={headerClassName}
                                             style={item.headerStyle}
                                             header={item.header}
                                             colIndex={index}
                                             sortable={item.sortable}
                                             sort={sort}
                                             sortAscIconCls={sortAscIconCls}
                                             sortDescIconCls={sortDescIconCls}
                                             hidden={hidden}
                                             onSort={() => {
                                                 onSort(item.sortProp);
                                             }}/>
                            );

                        })
                    }
                </tr>
            </thead>
        );

    }
};

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

    className: '',
    style: null,

    columns: [],
    sort: null,
    hidden: false

};