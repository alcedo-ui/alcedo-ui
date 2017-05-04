import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../_TableHeader';

export default class Thead extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {className, style, columns, sort, onSort} = this.props;

        return (
            <thead className={className}
                   style={style}>
                <tr>
                    {
                        columns.map((item, index) => {
                            return (
                                <TableHeader key={index}
                                             className={`${item.sortable ? 'sortable' : ''}
                                                ${sort && sort.prop === item.sortProp ? (sort.type > 0 ? 'asc' : 'desc') : ''}
                                                ${item.headerClassName ? item.headerClassName : ''}`}
                                             style={item.headerStyle}
                                             header={item.header}
                                             colIndex={index}
                                             sortable={item.sortable}
                                             sort={sort}
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

    onSort: PropTypes.func

};

Thead.defaultProps = {

    className: '',
    style: null,

    columns: [],
    sort: null

};