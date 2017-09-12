import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../_TableHeader';

import './Thead.css';

export default class Thead extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style, columns, sort, hidden, onSort} = this.props;

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