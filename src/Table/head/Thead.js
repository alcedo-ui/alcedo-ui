import React, {Component, PropTypes} from 'react';

import TableHeader from './TableHeader';

export default class Thead extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {columns, sort, onSort} = this.props;

        return (
            <thead>
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

    columns: PropTypes.array,
    sort: PropTypes.object,

    onSort: PropTypes.func

};

Thead.defaultProps = {
    columns: [],
    sort: null
};